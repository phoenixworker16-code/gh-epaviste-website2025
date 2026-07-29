#!/usr/bin/env node
/**
 * SEO Auditor v1.0.0 — GH Épaviste
 *
 * Analyse le HTML rendu pour valider les règles SEO.
 * Responsabilité unique : Ne démarre pas le serveur, ne modifie aucun fichier.
 * Exécute une requête HTTP GET avec un timeout de 10s.
 */

const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const VERSION = '1.0.0';
const TIMEOUT_MS = 10000;

// Chargement du fichier de règles externe
const rulesPath = path.join(__dirname, 'seo-rules.json');
let RULES;
try {
  if (!fs.existsSync(rulesPath)) throw new Error(`Fichier introuvable.`);
  RULES = JSON.parse(fs.readFileSync(rulesPath, 'utf8'));
  validateRules(RULES);
} catch (e) {
  console.error(`❌ ERREUR : seo-rules.json invalide.`);
  console.error(`Détail : ${e.message}`);
  console.error(`Audit interrompu.`);
  process.exit(1);
}

let score = 100;
let hasError = false;
let checks = [];
let summary = { passed: 0, failed: 0, skipped: 0, info: 0, warning: 0, error: 0 };

function validateRules(rules) {
  const expectedKeys = {
    structure: ['h1_count', 'h2_count', 'h3_count', 'main_tag'],
    headMeta: ['title_presence', 'meta_desc_presence', 'meta_desc_length', 'canonical_presence', 'canonical_empty', 'canonical_format', 'robots_presence', 'robots_noindex'],
    content: ['word_count_min', 'word_count_max', 'empty_content', 'lorem_ipsum', 'todo_detected'],
    links: ['empty_href', 'hash_href', 'js_href', 'internal_links'],
    images: ['img_missing_alt', 'img_empty_alt'],
    components: ['table_count', 'list_count', 'faq_count', 'cta_count'],
    jsonLd: ['json_ld_presence', 'json_ld_parse', 'json_ld_localbusiness', 'json_ld_organization', 'json_ld_faqpage', 'json_ld_breadcrumb']
  };

  if (!rules.rulesVersion) throw new Error("Propriété 'rulesVersion' manquante.");
  if (!rules.penalties) throw new Error("Section 'penalties' manquante.");

  for (const section in expectedKeys) {
    if (!rules[section]) throw new Error(`Section '${section}' manquante.`);
    for (const rule of expectedKeys[section]) {
      if (!rules[section][rule]) {
        throw new Error(`Règle '${section}.${rule}' manquante.`);
      }
      if (typeof rules[section][rule].enabled !== 'boolean') {
        throw new Error(`Propriété 'enabled' manquante ou invalide pour '${section}.${rule}'.`);
      }
    }
  }
}

function checkRule(rule, category, observedValue, isPassCondition, expectedStr, messageFail, messagePass) {
  if (!rule.enabled) {
    summary.skipped++;
    checks.push({
      id: rule.id,
      category: category,
      severity: 'INFO',
      status: 'SKIPPED',
      observed: '-',
      expected: expectedStr.toString(),
      message: 'Règle désactivée.'
    });
    return;
  }

  const status = isPassCondition ? 'PASS' : 'FAIL';
  const severity = status === 'PASS' ? 'INFO' : rule.severity;
  const message = status === 'PASS' ? messagePass : messageFail;

  checks.push({
    id: rule.id,
    category: category,
    severity: severity,
    status: status,
    observed: observedValue.toString(),
    expected: expectedStr.toString(),
    message: message
  });

  if (status === 'FAIL') {
    summary.failed++;
    if (severity === 'ERROR') {
      score -= RULES.penalties.ERROR;
      hasError = true;
      summary.error++;
    } else if (severity === 'WARNING') {
      score -= RULES.penalties.WARNING;
      summary.warning++;
    } else if (severity === 'INFO') {
      summary.info++;
    }
  } else {
    summary.passed++;
  }
}

function countWords($, element) {
  const cloned = $(element).clone();
  cloned.find('script, style, noscript, header, nav, footer, [type="application/ld+json"]').remove();
  const text = cloned.text().replace(/\s+/g, ' ').trim();
  if (!text) return 0;
  return text.split(' ').length;
}

// -------------------------------------------------------------
// ANALYSES SPÉCIFIQUES
// -------------------------------------------------------------

function checkHead($, url) {
  const category = 'HEAD_META';
  const R = RULES.headMeta;
  
  // Title
  const title = $('head > title').text();
  checkRule(R.title_presence, category, title ? '1' : '0', !!title, '1', 'La balise <title> est absente ou vide.', 'La balise <title> est présente.');
  
  // Meta Description
  const metaDesc = $('head > meta[name="description"]').attr('content');
  const hasDesc = !!(metaDesc && metaDesc.trim() !== '');
  checkRule(R.meta_desc_presence, category, hasDesc ? 'Présente' : 'Absente', hasDesc, 'Texte', 'La meta description est absente ou vide.', 'Meta description présente.');
  
  if (hasDesc && R.meta_desc_length.enabled) {
    const len = metaDesc.length;
    const okLen = len >= R.meta_desc_length.min && len <= R.meta_desc_length.max;
    checkRule(R.meta_desc_length, category, len, okLen, `${R.meta_desc_length.min}-${R.meta_desc_length.max}`, 'La longueur de la meta description est sous-optimale.', 'La meta description a une bonne longueur.');
  }

  // Canonical
  const canonical = $('head > link[rel="canonical"]').attr('href');
  checkRule(R.canonical_presence, category, canonical ? 'Présente' : 'Absente', !!canonical, 'Présente', 'La balise canonical est manquante.', 'Balise canonical présente.');
  
  if (canonical) {
    const isEmpty = canonical.trim() === '';
    checkRule(R.canonical_empty, category, isEmpty ? 'Vide' : 'Non vide', !isEmpty, 'URL valide', 'La balise canonical est vide.', 'Balise canonical non vide.');
    
    if (!isEmpty) {
      const isFormatOk = canonical.startsWith('http') || canonical.startsWith('/');
      checkRule(R.canonical_format, category, canonical, isFormatOk, 'URL valide', 'Format de la balise canonical suspect.', 'Balise canonical correctement formatée.');
    }
  }

  // Robots
  const robots = $('head > meta[name="robots"]').attr('content');
  checkRule(R.robots_presence, category, robots || 'Absente', !!robots, 'index,follow', 'Balise meta robots absente.', 'Balise meta robots présente.');
  if (robots) {
    const r = robots.toLowerCase();
    const isNoIndex = r.includes('noindex') || r.includes('nofollow');
    checkRule(R.robots_noindex, category, r, !isNoIndex, 'index,follow', "La page bloque l'indexation (noindex/nofollow).", 'La page ne bloque pas l\'indexation.');
  }
}

function checkStructure($) {
  const category = 'STRUCTURE';
  const R = RULES.structure;

  const h1 = $('h1').length;
  checkRule(R.h1_count, category, h1, h1 === R.h1_count.value, R.h1_count.value, 'Un et un seul H1 est autorisé.', 'Un seul H1 détecté.');

  const h2 = $('h2').length;
  checkRule(R.h2_count, category, h2, h2 >= R.h2_count.min, `>= ${R.h2_count.min}`, 'Pas assez de H2.', 'Nombre de H2 conforme.');

  const h3 = $('h3').length;
  checkRule(R.h3_count, category, h3, h3 >= R.h3_count.min, `>= ${R.h3_count.min}`, 'Pas assez de H3.', 'Nombre de H3 conforme.');
}

function checkContent($, wordCount) {
  const category = 'CONTENT';
  const R = RULES.content;

  checkRule(R.word_count_min, category, wordCount, wordCount >= R.word_count_min.min, `>= ${R.word_count_min.min}`, 'Le contenu est trop court.', 'Volume éditorial suffisant.');
  checkRule(R.word_count_max, category, wordCount, wordCount <= R.word_count_max.max, `<= ${R.word_count_max.max}`, 'Le contenu est très long (risque de dilution SEO).', 'Volume éditorial optimal.');

  checkRule(R.empty_content, category, wordCount, wordCount > 0, '> 0', 'La balise <main> semble vide.', 'Le contenu n\'est pas vide.');

  const textBody = $('body').text().toLowerCase();
  
  const hasLorem = textBody.includes('lorem ipsum');
  checkRule(R.lorem_ipsum, category, hasLorem ? 'Présent' : 'Absent', !hasLorem, 'Absent', 'Texte de remplissage détecté.', 'Aucun lorem ipsum.');

  const hasTodo = textBody.includes('todo');
  checkRule(R.todo_detected, category, hasTodo ? 'Présent' : 'Absent', !hasTodo, 'Absent', 'Commentaires ou tags TODO détectés dans le texte.', 'Aucun TODO détecté.');
}

function checkLinks($) {
  const category = 'LINKS';
  const R = RULES.links;
  
  const links = $('a');
  let internalCount = 0;
  let hasEmpty = false, hasHash = false, hasJs = false;

  links.each((i, el) => {
    const href = $(el).attr('href');
    if (!href || href.trim() === '') hasEmpty = true;
    else if (href === '#') hasHash = true;
    else if (href.toLowerCase().startsWith('javascript:')) hasJs = true;
    else if (href.startsWith('/') || href.startsWith('http://localhost') || href.includes('epaviste')) internalCount++;
  });

  checkRule(R.empty_href, category, hasEmpty ? 'Vide' : 'Non vide', !hasEmpty, 'URL', 'Un lien <a> n\'a pas d\'attribut href valide.', 'Aucun href vide.');
  checkRule(R.hash_href, category, hasHash ? '#' : 'Valide', !hasHash, 'URL', 'Un lien <a> pointe vers "#" (mauvaise pratique SEO).', 'Aucun lien vers #.');
  checkRule(R.js_href, category, hasJs ? 'javascript:' : 'Valide', !hasJs, 'URL', 'Un lien <a> utilise javascript:', 'Aucun lien javascript:');
  
  checkRule(R.internal_links, category, internalCount, internalCount >= R.internal_links.min, `>= ${R.internal_links.min}`, 'Maillage interne insuffisant.', 'Maillage interne suffisant.');
}

function checkImages($) {
  const category = 'IMAGES';
  const R = RULES.images;
  
  const images = $('img');
  let missingAlt = 0;
  let emptyAlt = 0;

  images.each((i, el) => {
    const alt = $(el).attr('alt');
    if (alt === undefined) missingAlt++;
    else if (alt.trim() === '') emptyAlt++;
  });

  checkRule(R.img_missing_alt, category, missingAlt, missingAlt === 0, '0', "Des images n'ont pas d'attribut alt.", 'Toutes les images ont un attribut alt.');
  checkRule(R.img_empty_alt, category, emptyAlt, emptyAlt === 0, '0', 'Des images ont un attribut alt vide.', 'Aucun alt vide détecté.');
}

function checkComponents($) {
  const category = 'COMPONENTS';
  const R = RULES.components;

  const tables = $('table').length;
  checkRule(R.table_count, category, tables, tables >= R.table_count.min, `>= ${R.table_count.min}`, 'Aucun tableau détecté.', 'Tableau présent.');

  const lists = $('ul, ol').length;
  checkRule(R.list_count, category, lists, lists >= R.list_count.min, `>= ${R.list_count.min}`, 'Aucune liste détectée.', 'Liste présente.');

  const questions = $('details, [itemscope][itemtype*="FAQPage"]').length;
  checkRule(R.faq_count, category, questions, questions >= R.faq_count.min, `>= ${R.faq_count.min}`, 'Pas assez de blocs FAQ structurels (details ou JSON-LD microdata).', 'Blocs FAQ détectés structurellement.');

  const ctas = $('a[href^="tel:"], a[href^="mailto:"], button, [role="button"]').length;
  checkRule(R.cta_count, category, ctas, ctas >= R.cta_count.min, `>= ${R.cta_count.min}`, 'Aucun Call-To-Action (tel, mailto, button) détecté.', 'Call-To-Action détecté structurellement.');
}

function checkJsonLd($) {
  const category = 'JSON_LD';
  const R = RULES.jsonLd;
  
  const scripts = $('script[type="application/ld+json"]');
  checkRule(R.json_ld_presence, category, scripts.length, scripts.length > 0, '> 0', 'Aucun script JSON-LD détecté.', 'Script JSON-LD présent.');
  if (scripts.length === 0) return;

  let schemas = [];
  let parseError = false;
  scripts.each((i, el) => {
    try {
      const data = JSON.parse($(el).html());
      if (Array.isArray(data)) {
        data.forEach(d => schemas.push(d['@type']));
      } else {
        if (data['@graph']) data['@graph'].forEach(d => schemas.push(d['@type']));
        else schemas.push(data['@type']);
      }
    } catch (e) {
      parseError = true;
    }
  });

  checkRule(R.json_ld_parse, category, parseError ? 'Erreur' : 'Valide', !parseError, 'JSON valide', 'Un script JSON-LD est malformé.', 'JSON-LD correctement parsé.');

  checkRule(R.json_ld_localbusiness, category, schemas.includes('LocalBusiness') ? 'Présent' : 'Absent', schemas.includes('LocalBusiness'), 'Présent', 'Schéma JSON-LD LocalBusiness manquant.', 'Schéma JSON-LD LocalBusiness présent.');
  checkRule(R.json_ld_organization, category, schemas.includes('Organization') ? 'Présent' : 'Absent', schemas.includes('Organization'), 'Présent', 'Schéma JSON-LD Organization manquant.', 'Schéma JSON-LD Organization présent.');
  checkRule(R.json_ld_faqpage, category, schemas.includes('FAQPage') ? 'Présent' : 'Absent', schemas.includes('FAQPage'), 'Présent', 'Schéma JSON-LD FAQPage manquant.', 'Schéma JSON-LD FAQPage présent.');
  checkRule(R.json_ld_breadcrumb, category, schemas.includes('BreadcrumbList') ? 'Présent' : 'Absent', schemas.includes('BreadcrumbList'), 'Présent', 'Schéma JSON-LD BreadcrumbList manquant.', 'Schéma JSON-LD BreadcrumbList présent.');
}

// -------------------------------------------------------------
// RAPPORTS
// -------------------------------------------------------------

function generateReports(targetUrl, executionTimeMs) {
  score = Math.max(0, score);
  const date = new Date().toISOString();
  
  const reportDir = path.join(process.cwd(), 'reports');
  if (!fs.existsSync(reportDir)) fs.mkdirSync(reportDir, { recursive: true });

  const verdict = hasError ? 'FAIL' : 'PASS';

  // --- REPORT JSON ---
  const jsonReport = {
    auditorVersion: VERSION,
    rulesVersion: RULES.rulesVersion,
    timestamp: date,
    url: targetUrl,
    durationMs: executionTimeMs,
    score: score,
    verdict: verdict,
    summary: summary,
    checks: checks
  };
  fs.writeFileSync(path.join(reportDir, 'seo-report.json'), JSON.stringify(jsonReport, null, 2));

  // --- REPORT MARKDOWN ---
  let md = `# SEO Audit Report\n\n`;
  md += `## Informations\n`;
  md += `- **Version Auditor :** ${VERSION}\n`;
  md += `- **Version Règles :** ${RULES.rulesVersion}\n`;
  md += `- **Date :** ${date}\n`;
  md += `- **URL auditée :** ${targetUrl}\n`;
  md += `- **Temps d'analyse :** ${executionTimeMs} ms\n\n`;
  md += `## Résultat Global\n`;
  md += `- **Score SEO :** ${score}/100\n`;
  md += `- **Verdict :** ${verdict}\n\n`;
  md += `## Résumé\n`;
  md += `- Passed: ${summary.passed}\n`;
  md += `- Failed: ${summary.failed}\n`;
  md += `- Skipped: ${summary.skipped}\n\n`;
  
  const violations = checks.filter(c => c.status === 'FAIL');
  if (violations.length === 0) {
    md += `Aucune violation détectée. La page est parfaitement optimisée.\n`;
  } else {
    md += `## Détail des violations\n\n`;
    md += `| ID | Catégorie | Gravité | Statut | Valeur observée | Valeur attendue | Message |\n`;
    md += `|---|---|---|---|---|---|---|\n`;
    violations.forEach(v => {
      const obs = v.observed.toString().replace(/\|/g, '-');
      const exp = v.expected.toString().replace(/\|/g, '-');
      const m = v.message.replace(/\|/g, '-');
      md += `| ${v.id} | ${v.category} | ${v.severity} | ${v.status} | ${obs} | ${exp} | ${m} |\n`;
    });
  }

  md += `\n---\n*Rapport généré automatiquement par SEO Auditor.*\n`;
  fs.writeFileSync(path.join(reportDir, 'seo-report.md'), md);
  
  return { verdict, score };
}

// -------------------------------------------------------------
// MAIN
// -------------------------------------------------------------

async function main() {
  const targetUrl = process.argv[2];
  if (!targetUrl) {
    console.error('Usage: node scripts/seo-auditor.js <url>');
    process.exit(1);
  }

  console.log(`\n🔍 SEO Auditor v${VERSION} — Analyse de ${targetUrl}...`);
  const startTime = Date.now();

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), TIMEOUT_MS);
    
    const res = await fetch(targetUrl, { signal: controller.signal });
    clearTimeout(timeoutId);
    
    if (!res.ok) {
      console.error(`❌ ERREUR HTTP : ${res.status} ${res.statusText}`);
      process.exit(1);
    }
    
    const html = await res.text();
    const $ = cheerio.load(html);

    const mainEl = $('main');
    const wordCount = mainEl.length ? countWords($, mainEl) : countWords($, $('body'));
    
    checkRule(RULES.structure.main_tag, 'STRUCTURE', mainEl.length ? 'Présente' : 'Absente', mainEl.length > 0, 'Présente', 'La balise <main> est absente du HTML.', 'Balise <main> trouvée.');

    checkHead($, targetUrl);
    checkStructure($);
    checkContent($, wordCount);
    checkLinks($);
    checkImages($);
    checkComponents($);
    checkJsonLd($);

    const executionTime = Date.now() - startTime;
    const { verdict, score: finalScore } = generateReports(targetUrl, executionTime);

    console.log(`\n📊 Résultats de l'audit :`);
    console.log(`- Mots analysés : ${wordCount}`);
    console.log(`- Règles évaluées : ${summary.passed + summary.failed} (${summary.passed} PASS, ${summary.failed} FAIL, ${summary.skipped} SKIPPED)`);
    console.log(`- Score SEO : ${finalScore}/100`);
    console.log(`- Temps : ${executionTime}ms`);
    console.log(`- Rapport MD : reports/seo-report.md`);
    console.log(`- Rapport JSON : reports/seo-report.json`);
    console.log(`\n==================================================`);
    
    if (hasError) {
      console.log(`❌ SEO AUDIT FAILED\n`);
      process.exit(1);
    } else {
      console.log(`✅ SEO AUDIT PASSED\n`);
      process.exit(0);
    }

  } catch (err) {
    if (err.name === 'AbortError') {
      console.error(`❌ TIMEOUT : Le serveur n'a pas répondu dans les ${TIMEOUT_MS/1000}s.`);
    } else {
      console.error(`❌ ERREUR DE CONNEXION : Impossible de joindre ${targetUrl}`);
      console.error(err.message);
    }
    process.exit(1);
  }
}

main();
