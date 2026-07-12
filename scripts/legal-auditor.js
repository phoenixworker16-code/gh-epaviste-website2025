#!/usr/bin/env node
/**
 * Legal Auditor v2 — GH Épaviste
 *
 * Architecture : 3 passes ordonnées
 *   Passe 0 : Normalisation (minuscules, accents, espaces)
 *   Passe 1 : Masquage des expressions autorisées (allowlist > rules, toujours)
 *   Passe 2 : Détection des règles interdites sur le texte masqué
 *
 * Niveaux :
 *   INFO    → rapport uniquement
 *   WARNING → rapport uniquement
 *   ERROR   → STOP + exit code 1
 *
 * Usage :
 *   node scripts/legal-auditor.js <fichier_ou_dossier>
 */

const fs = require('fs');
const path = require('path');

// --- Chargement de la configuration ---
const configPath = path.join(__dirname, 'legal-blacklist.json');
if (!fs.existsSync(configPath)) {
  console.error('❌ ERREUR FATALE : legal-blacklist.json introuvable.');
  process.exit(1);
}
const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
const { allowlist, rules } = config;

// --- Passe 0 : Normalisation ---
function normalize(text) {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

// --- Passe 1 : Masquage des expressions autorisées ---
// Remplace chaque occurrence allowlistée par un placeholder neutre
// pour qu'elle ne déclenche jamais une règle en Passe 2.
function maskAllowlist(normalizedText) {
  let masked = normalizedText;
  let allowlistMatches = 0;

  // Trier par longueur décroissante pour masquer les expressions les plus longues d'abord
  const sorted = [...allowlist].sort((a, b) => b.length - a.length);

  for (const expr of sorted) {
    const normalizedExpr = normalize(expr);
    // Créer une regex qui accepte n'importe quel espacement (\s+) entre les mots
    const regexSource = normalizedExpr.split(' ').map(word => word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('\\s+');
    const regex = new RegExp(regexSource, 'g');
    
    masked = masked.replace(regex, (match) => {
      allowlistMatches++;
      return '░'.repeat(match.length);
    });
  }

  return { masked, allowlistMatches };
}

// --- Passe 2 : Détection des règles ---
function detectViolations(maskedText, originalLines) {
  const violations = [];

  for (const rule of rules) {
    let regex;
    if (rule.regex) {
      regex = new RegExp(rule.pattern, 'g');
    } else {
      // Échapper les caractères spéciaux pour une recherche littérale
      const escaped = rule.pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      regex = new RegExp(escaped, 'g');
    }

    let match;
    while ((match = regex.exec(maskedText)) !== null) {
      // Trouver le numéro de ligne correspondant dans le texte original
      const charsBefore = maskedText.substring(0, match.index);
      const newlinesBefore = (charsBefore.match(/\n/g) || []).length;
      const lineNumber = newlinesBefore + 1;

      // Récupérer l'extrait de la ligne originale
      const lineContent = originalLines[lineNumber - 1] || '';

      violations.push({
        rule: rule.id,
        category: rule.category,
        level: rule.level,
        line: lineNumber,
        extract: lineContent.trim().substring(0, 100),
        reason: rule.reason
      });
    }
  }

  return violations;
}

// --- Scan d'un fichier ---
function auditFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const originalLines = content.split('\n');
  const normalizedContent = normalize(content);

  // Passe 1 : masquage allowlist
  const { masked, allowlistMatches } = maskAllowlist(normalizedContent);

  // Passe 2 : détection des violations
  const violations = detectViolations(masked, originalLines);

  return { violations, allowlistMatches };
}

// --- Collecte des fichiers ---
function collectFiles(target) {
  const stat = fs.statSync(target);
  if (stat.isFile()) return [target];
  if (stat.isDirectory()) {
    return fs.readdirSync(target)
      .filter(f => f.endsWith('.ts') || f.endsWith('.tsx') || f.endsWith('.md'))
      .map(f => path.join(target, f))
      .filter(f => !f.includes('legal-blacklist.json'));
  }
  return [];
}

// --- Score de conformité ---
function computeScore(violations) {
  let score = 100;
  for (const v of violations) {
    if (v.level === 'ERROR') score -= 20;
    else if (v.level === 'WARNING') score -= 5;
    // INFO : -0
  }
  return Math.max(0, score);
}

// --- Génération du rapport Markdown ---
function generateMarkdownReport(results, reportDir) {
  if (!fs.existsSync(reportDir)) fs.mkdirSync(reportDir, { recursive: true });

  const now = new Date().toISOString();
  let totalInfo = 0, totalWarning = 0, totalError = 0, totalAllowlist = 0;
  let allViolations = [];

  let md = `# Legal Audit Report\n\nDate : ${now}\n\n`;

  for (const [file, data] of Object.entries(results)) {
    const basename = path.basename(file);
    const counts = { INFO: 0, WARNING: 0, ERROR: 0 };
    for (const v of data.violations) counts[v.level]++;

    totalInfo += counts.INFO;
    totalWarning += counts.WARNING;
    totalError += counts.ERROR;
    totalAllowlist += data.allowlistMatches;
    allViolations = allViolations.concat(data.violations);

    const score = computeScore(data.violations);
    const verdict = counts.ERROR > 0 ? '❌ FAIL' : '✅ PASS';

    md += `## ${basename} — ${verdict} (${score}/100)\n\n`;
    md += `Expressions autorisées détectées : **${data.allowlistMatches}**\n\n`;

    if (data.violations.length === 0) {
      md += `Aucune violation.\n\n`;
    } else {
      // Grouper par catégorie
      const byCategory = {};
      for (const v of data.violations) {
        if (!byCategory[v.category]) byCategory[v.category] = [];
        byCategory[v.category].push(v);
      }

      for (const [cat, violations] of Object.entries(byCategory)) {
        md += `### ${cat}\n\n`;
        md += `| Règle | Niveau | Ligne | Extrait | Raison |\n`;
        md += `|-------|--------|-------|---------|--------|\n`;
        for (const v of violations) {
          const safeExtract = v.extract.replace(/\|/g, '\\|').substring(0, 80);
          md += `| ${v.rule} | ${v.level} | ${v.line} | ${safeExtract} | ${v.reason} |\n`;
        }
        md += `\n`;
      }
    }

    md += `---\n\n`;
  }

  // Résumé global
  const globalScore = computeScore(allViolations);
  const globalVerdict = totalError > 0 ? 'FAIL ❌' : 'PASS ✅';

  md += `## Résumé global\n\n`;
  md += `- **Score** : ${globalScore}/100\n`;
  md += `- **Verdict** : ${globalVerdict}\n`;
  md += `- Expressions autorisées détectées : **${totalAllowlist}**\n`;
  md += `- INFO : **${totalInfo}**\n`;
  md += `- WARNING : **${totalWarning}**\n`;
  md += `- ERROR : **${totalError}**\n`;

  fs.writeFileSync(path.join(reportDir, 'legal-report.md'), md, 'utf8');

  return { globalScore, totalInfo, totalWarning, totalError, totalAllowlist };
}

// --- Génération du rapport JSON ---
function generateJsonReport(results, reportDir, summary) {
  const report = {
    timestamp: new Date().toISOString(),
    score: summary.globalScore,
    verdict: summary.totalError > 0 ? 'FAIL' : 'PASS',
    summary: {
      info: summary.totalInfo,
      warning: summary.totalWarning,
      error: summary.totalError,
      allowlistMatches: summary.totalAllowlist
    },
    files: []
  };

  for (const [file, data] of Object.entries(results)) {
    report.files.push({
      file: path.basename(file),
      allowlistMatches: data.allowlistMatches,
      score: computeScore(data.violations),
      violations: data.violations
    });
  }

  fs.writeFileSync(path.join(reportDir, 'legal-report.json'), JSON.stringify(report, null, 2), 'utf8');
}

// --- Main ---
function main() {
  const target = process.argv[2];

  if (!target) {
    console.error('Usage : node scripts/legal-auditor.js <fichier_ou_dossier>');
    process.exit(1);
  }

  const resolvedTarget = path.resolve(target);

  if (!fs.existsSync(resolvedTarget)) {
    console.error(`❌ ERREUR : "${target}" introuvable.`);
    process.exit(1);
  }

  // Exclure si le target direct est le blacklist
  if (resolvedTarget.includes('legal-blacklist.json')) {
    console.log(`\n🔍 Legal Auditor v2.1 — Analyse ignorée pour legal-blacklist.json.\n`);
    process.exit(0);
  }

  const files = collectFiles(resolvedTarget);

  if (files.length === 0) {
    console.error(`❌ ERREUR : Aucun fichier .ts/.tsx/.md trouvé dans "${target}".`);
    process.exit(1);
  }

  console.log(`\n🔍 Legal Auditor v2 — Analyse de ${files.length} fichier(s)...\n`);

  const results = {};
  let hasErrors = false;

  for (const file of files) {
    const { violations, allowlistMatches } = auditFile(file);
    results[file] = { violations, allowlistMatches };

    const basename = path.basename(file);
    const errorCount = violations.filter(v => v.level === 'ERROR').length;
    const warnCount = violations.filter(v => v.level === 'WARNING').length;

    if (errorCount > 0) {
      hasErrors = true;
      console.log(`  ❌ ${basename} — ${errorCount} ERROR, ${warnCount} WARNING (allowlist: ${allowlistMatches})`);
      for (const v of violations.filter(v => v.level === 'ERROR')) {
        console.log(`     → [${v.rule}] L${v.line}: ${v.reason}`);
      }
    } else if (warnCount > 0) {
      console.log(`  ⚠️  ${basename} — ${warnCount} WARNING (allowlist: ${allowlistMatches})`);
    } else {
      console.log(`  ✅ ${basename} — conforme (allowlist: ${allowlistMatches})`);
    }
  }

  // Rapports
  const reportDir = path.join(process.cwd(), 'reports');
  const summary = generateMarkdownReport(results, reportDir);
  generateJsonReport(results, reportDir, summary);

  console.log(`\n📄 Rapports générés :`);
  console.log(`   → reports/legal-report.md`);
  console.log(`   → reports/legal-report.json`);
  console.log(`\n${'='.repeat(50)}`);
  console.log(`\n   Score : ${summary.globalScore}/100`);

  if (hasErrors) {
    console.log(`   ❌ LEGAL AUDIT FAILED (${summary.totalError} ERROR)\n`);
    process.exit(1);
  } else {
    console.log(`   ✅ LEGAL AUDIT PASSED\n`);
    process.exit(0);
  }
}

main();
