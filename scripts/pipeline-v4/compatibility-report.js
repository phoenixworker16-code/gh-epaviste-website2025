const fs = require('fs');
const path = require('path');
const config = require('./config/paths');
const { hashFile } = require('./utils/hash');

const checks = [];
let passedCount = 0;
let warningCount = 0;
let errorCount = 0;
let globalStatus = 'PASS';

function addCheck(id, category, severity, status, message, expected, observed) {
  checks.push({
    id,
    category,
    severity,
    status,
    message,
    expected,
    observed
  });

  if (status === 'PASS') {
    passedCount++;
  } else if (status === 'WARNING') {
    warningCount++;
  } else if (status === 'ERROR') {
    errorCount++;
    if (globalStatus !== 'ERROR') {
      globalStatus = 'ERROR';
    }
  }
}

function runChecks() {
  const hashes = {};

  // C01: Verify types.ts
  try {
    if (fs.existsSync(config.paths.types)) {
      const stat = fs.statSync(config.paths.types);
      if (stat.size === 0) {
        addCheck('C01', 'Schema', 'ERROR', 'ERROR', 'types.ts is empty', 'non-empty file', 'empty file');
      } else {
        hashes['types.ts'] = hashFile(config.paths.types);
        addCheck('C01', 'Schema', 'ERROR', 'PASS', 'types.ts exists and is not empty', 'valid file', 'valid file');
      }
    } else {
      addCheck('C01', 'Schema', 'ERROR', 'ERROR', 'types.ts is missing', 'existing file', 'missing file');
    }
  } catch (e) {
    addCheck('C01', 'Schema', 'ERROR', 'ERROR', `Error accessing types.ts: ${e.message}`, 'readable file', 'error');
  }

  // C02: Verify pageDataSchema.ts
  try {
    if (fs.existsSync(config.paths.schema)) {
      const stat = fs.statSync(config.paths.schema);
      if (stat.size === 0) {
        addCheck('C02', 'Schema', 'ERROR', 'ERROR', 'pageDataSchema.ts is empty', 'non-empty file', 'empty file');
      } else {
        hashes['pageDataSchema.ts'] = hashFile(config.paths.schema);
        addCheck('C02', 'Schema', 'ERROR', 'PASS', 'pageDataSchema.ts exists and is not empty', 'valid file', 'valid file');
      }
    } else {
      addCheck('C02', 'Schema', 'ERROR', 'ERROR', 'pageDataSchema.ts is missing', 'existing file', 'missing file');
    }
  } catch (e) {
    addCheck('C02', 'Schema', 'ERROR', 'ERROR', `Error accessing pageDataSchema.ts: ${e.message}`, 'readable file', 'error');
  }

  // C03: Verify legal-blacklist.json
  try {
    if (fs.existsSync(config.paths.legalRules)) {
      const content = fs.readFileSync(config.paths.legalRules, 'utf-8');
      if (content.trim() === '') {
        addCheck('C03', 'Rules', 'ERROR', 'ERROR', 'legal-blacklist.json is empty', 'valid JSON', 'empty file');
      } else {
        try {
          JSON.parse(content);
          hashes['legal-blacklist.json'] = hashFile(config.paths.legalRules);
          addCheck('C03', 'Rules', 'ERROR', 'PASS', 'legal-blacklist.json is valid JSON', 'valid JSON', 'valid JSON');
        } catch (jsonErr) {
          addCheck('C03', 'Rules', 'ERROR', 'ERROR', 'legal-blacklist.json contains invalid JSON', 'valid JSON', 'corrupted JSON');
        }
      }
    } else {
      addCheck('C03', 'Rules', 'WARNING', 'WARNING', 'legal-blacklist.json is missing', 'existing file', 'missing file');
    }
  } catch (e) {
    addCheck('C03', 'Rules', 'ERROR', 'ERROR', `Error accessing legal-blacklist.json: ${e.message}`, 'readable file', 'error');
  }

  // C04: Verify seo-rules.json
  try {
    if (fs.existsSync(config.paths.seoRules)) {
      const content = fs.readFileSync(config.paths.seoRules, 'utf-8');
      if (content.trim() === '') {
        addCheck('C04', 'Rules', 'ERROR', 'ERROR', 'seo-rules.json is empty', 'valid JSON', 'empty file');
      } else {
        try {
          JSON.parse(content);
          hashes['seo-rules.json'] = hashFile(config.paths.seoRules);
          addCheck('C04', 'Rules', 'ERROR', 'PASS', 'seo-rules.json is valid JSON', 'valid JSON', 'valid JSON');
        } catch (jsonErr) {
          addCheck('C04', 'Rules', 'ERROR', 'ERROR', 'seo-rules.json contains invalid JSON', 'valid JSON', 'corrupted JSON');
        }
      }
    } else {
      addCheck('C04', 'Rules', 'WARNING', 'WARNING', 'seo-rules.json is missing', 'existing file', 'missing file');
    }
  } catch (e) {
    addCheck('C04', 'Rules', 'ERROR', 'ERROR', `Error accessing seo-rules.json: ${e.message}`, 'readable file', 'error');
  }

  // C05: Verify versions.json
  try {
    if (fs.existsSync(config.paths.versions)) {
      const content = fs.readFileSync(config.paths.versions, 'utf-8');
      if (content.trim() === '') {
        addCheck('C05', 'Config', 'ERROR', 'ERROR', 'versions.json is empty', 'valid JSON', 'empty file');
      } else {
        try {
          const versions = JSON.parse(content);
          if (!versions.pipeline) {
             addCheck('C05', 'Config', 'ERROR', 'ERROR', 'versions.json is missing pipeline version', 'pipeline version present', 'missing property');
          } else {
            hashes['versions.json'] = hashFile(config.paths.versions);
            addCheck('C05', 'Config', 'ERROR', 'PASS', 'versions.json is valid', 'valid config', 'valid config');
          }
        } catch (jsonErr) {
          addCheck('C05', 'Config', 'ERROR', 'ERROR', 'versions.json contains invalid JSON', 'valid JSON', 'corrupted JSON');
        }
      }
    } else {
      addCheck('C05', 'Config', 'ERROR', 'ERROR', 'versions.json is missing', 'existing file', 'missing file');
    }
  } catch (e) {
    addCheck('C05', 'Config', 'ERROR', 'ERROR', `Error accessing versions.json: ${e.message}`, 'readable file', 'error');
  }

  return hashes;
}

function generateReport() {
  console.log("Generating Compatibility Report...\n");
  const hashes = runChecks();

  const report = {
    version: "1.0",
    timestamp: new Date().toISOString(),
    status: globalStatus,
    summary: {
      passed: passedCount,
      warning: warningCount,
      error: errorCount
    },
    checks: checks,
    hashes: hashes
  };

  // Ensure reports directory exists
  if (!fs.existsSync(config.paths.reports)) {
    fs.mkdirSync(config.paths.reports, { recursive: true });
  }

  const jsonReportPath = path.join(config.paths.reports, 'compatibility-report.json');
  fs.writeFileSync(jsonReportPath, JSON.stringify(report, null, 2));

  // Generate Markdown report
  let mdReport = `# Rapport de Compatibilité (Pipeline V4)\n\n`;
  mdReport += `**Date :** ${report.timestamp}\n`;
  mdReport += `**Statut Global :** ${report.status}\n\n`;
  mdReport += `## Résumé\n`;
  mdReport += `- ✅ **Succès :** ${report.summary.passed}\n`;
  mdReport += `- ⚠️ **Avertissements :** ${report.summary.warning}\n`;
  mdReport += `- ❌ **Erreurs :** ${report.summary.error}\n\n`;

  mdReport += `## Détails des vérifications\n\n`;
  mdReport += `| ID | Catégorie | Sévérité | Statut | Message | Observé |\n`;
  mdReport += `|----|-----------|----------|--------|---------|---------|\n`;
  
  for (const check of report.checks) {
    let statusIcon = '✅';
    if (check.status === 'WARNING') statusIcon = '⚠️';
    if (check.status === 'ERROR') statusIcon = '❌';
    mdReport += `| ${check.id} | ${check.category} | ${check.severity} | ${statusIcon} ${check.status} | ${check.message} | ${check.observed} |\n`;
  }

  mdReport += `\n## Hashes (SHA-256)\n\n`;
  for (const [filename, hash] of Object.entries(report.hashes)) {
    mdReport += `- **${filename}** : \`${hash}\`\n`;
  }

  const mdReportPath = path.join(config.paths.reports, 'compatibility-report.md');
  fs.writeFileSync(mdReportPath, mdReport);

  console.log(`JSON Report generated at: ${jsonReportPath}`);
  console.log(`Markdown Report generated at: ${mdReportPath}`);

  if (globalStatus === 'ERROR') {
    console.error("\n[FAILED] Compatibility checks failed with ERRORs. Pipeline execution should be halted.");
    process.exit(1);
  } else if (globalStatus === 'WARNING') {
    console.warn("\n[WARNING] Compatibility checks passed with warnings. Pipeline can proceed but check warnings.");
    process.exit(0);
  } else {
    console.log("\n[SUCCESS] All compatibility checks passed.");
    process.exit(0);
  }
}

generateReport();
