const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { normalizeHtml } = require('./normalizer');
const { extractStructure, compareStructure } = require('./compare');

const PROJECT_ROOT = path.join(__dirname, '..', '..', '..');
const SNAPSHOTS_DIR = path.join(PROJECT_ROOT, 'snapshots', 'v1.0');
const REPORTS_DIR = path.join(PROJECT_ROOT, 'reports');

function hashHtml(html) {
  return crypto.createHash('sha256').update(normalizeHtml(html)).digest('hex');
}

/**
 * Compare le HTML courant avec le snapshot existant.
 */
function checkSnapshot(slug, currentHtml) {
  const normalizedHtml = normalizeHtml(currentHtml);
  const currentHash = hashHtml(currentHtml);
  const currentStruct = extractStructure(normalizedHtml);

  const snapshotPath = path.join(SNAPSHOTS_DIR, `${slug}.json`);

  // A snapshot is a reviewed baseline: validation must never create one.
  if (!fs.existsSync(snapshotPath)) {
    return { slug, status: 'FAIL', hashStatus: 'absent', diffs: ['Snapshot absent'] };
  }

  // 2. Comparaison
  const snapshot = JSON.parse(fs.readFileSync(snapshotPath, 'utf-8'));

  if (snapshot.normalizedHtmlHash === currentHash) {
    return { slug, status: 'PASS', hashStatus: 'identique', diffs: [] };
  }

  // Les hashes diffèrent, on compare la structure
  const { status, diffs } = compareStructure(snapshot.structure, currentStruct);

  return { slug, status, hashStatus: 'différent', diffs };
}

function generateReports(results) {
  if (!fs.existsSync(REPORTS_DIR)) {
    fs.mkdirSync(REPORTS_DIR, { recursive: true });
  }

  let passCount = 0;
  let warnCount = 0;
  let failCount = 0;

  for (const res of results) {
    if (res.status === 'PASS') passCount++;
    else if (res.status === 'WARNING') warnCount++;
    else failCount++;
  }

  // 1. JSON Report
  const jsonReport = {
    summary: {
      PASS: passCount,
      WARNING: warnCount,
      FAIL: failCount
    },
    details: results
  };
  fs.writeFileSync(path.join(REPORTS_DIR, 'snapshot-report.json'), JSON.stringify(jsonReport, null, 2), 'utf-8');

  // 2. Markdown Report
  let md = `# Snapshot Compare\n\n`;
  md += `- **PASS :** ${passCount}\n`;
  md += `- **WARNING :** ${warnCount}\n`;
  md += `- **FAIL :** ${failCount}\n\n`;
  
  md += `## Détail\n\n`;
  for (const res of results) {
    md += `### Page : ${res.slug}\n`;
    md += `- **Hash :** ${res.hashStatus}\n`;
    if (res.diffs.length > 0) {
      md += `- **Différence :** ${res.diffs.join(', ')}\n`;
    }
    md += `- **Résultat :** ${res.status}\n\n`;
  }

  fs.writeFileSync(path.join(REPORTS_DIR, 'snapshot-report.md'), md, 'utf-8');
}

module.exports = {
  checkSnapshot,
  generateReports
};
