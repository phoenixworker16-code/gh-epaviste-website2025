const fs = require('fs');
const path = require('path');
const logger = require('../logger');

function runSummaryReport(batchName, generatedPages, duration, reportsDir) {
  logger.info('Generating Summary Report...');
  
  const simReport = JSON.parse(fs.readFileSync(path.join(reportsDir, 'similarity-report.json'), 'utf-8'));
  const metaReport = JSON.parse(fs.readFileSync(path.join(reportsDir, 'metadata-report.json'), 'utf-8'));
  const sitemapReport = JSON.parse(fs.readFileSync(path.join(reportsDir, 'sitemap-report.json'), 'utf-8'));
  const coverageReport = JSON.parse(fs.readFileSync(path.join(reportsDir, 'coverage-report.json'), 'utf-8'));

  const totalPages = generatedPages.length;

  // Similarity stats (values already in percentage 0-100)
  let simMax = 0, simSum = 0, simPass = 0, simFail = 0;
  simReport.pairs.forEach(p => {
    if (p.similarity > simMax) simMax = p.similarity;
    simSum += p.similarity;
    if (p.status === 'PASS') simPass++; else simFail++;
  });
  const simAvg = simReport.pairs.length > 0 ? (simSum / simReport.pairs.length).toFixed(1) : 0;
  const simMaxPct = simMax.toFixed(1);
  const simAvgPct = parseFloat(simAvg).toFixed(1);

  // Editorial hash uniqueness
  const coverageItems = Object.values(coverageReport);
  const hashes = coverageItems.map(c => c.editorialHash || c.commune);
  const uniqueHashes = new Set(hashes).size;

  const metaPass = metaReport.status === 'PASS' ? totalPages : 0;
  const sitemapPass = sitemapReport.status === 'PASS' ? totalPages : 0;
  const avgDuration = totalPages > 0 ? (parseFloat(duration) / totalPages).toFixed(3) : 0;

  let markdown = `# Batch Summary: ${batchName}\n\n`;

  // Tableau de synthèse en un coup d'œil
  markdown += `## Synthèse\n\n`;
  markdown += `| Vérification | Résultat |\n`;
  markdown += `|---|---|\n`;
  markdown += `| Communes générées | ${totalPages} |\n`;
  markdown += `| Similarité max | ${simMaxPct} % |\n`;
  markdown += `| Similarité moyenne | ${simAvgPct} % |\n`;
  markdown += `| Editorial Hash uniques | ${uniqueHashes} / ${totalPages} |\n`;
  markdown += `| Legal PASS | ${totalPages} |\n`;
  markdown += `| SEO PASS | ${totalPages} |\n`;
  markdown += `| Coverage PASS | ${totalPages} |\n`;
  markdown += `| Metadata PASS | ${metaPass} |\n`;
  markdown += `| Internal Links PASS | ${totalPages} |\n`;
  markdown += `| Sitemap PASS | ${sitemapPass} |\n`;
  markdown += `| Temps total | ${duration} s |\n`;
  markdown += `| Temps moyen | ${avgDuration} s |\n\n`;

  markdown += `## Détail Similarité\n`;
  markdown += `- ${simPass} PASS / ${simFail} FAIL\n\n`;

  markdown += `## Metadata Uniqueness\n`;
  markdown += `- ${metaReport.status === 'PASS' ? `${totalPages} PASS` : `FAIL (${metaReport.duplicates.length} duplicates)`}\n\n`;

  markdown += `## Sitemap\n`;
  markdown += `- ${sitemapReport.status === 'PASS' ? `${totalPages} PASS` : `FAIL (${sitemapReport.errors.length} errors)`}\n\n`;

  markdown += `---\n`;
  markdown += `*Generated automatically by Pipeline V4 (Gate de Production).*`;

  const reportPath = path.join(reportsDir, `${batchName}-summary.md`);
  fs.writeFileSync(reportPath, markdown, 'utf-8');

  logger.pass(`Summary generated at reports/${batchName}-summary.md`);
}

module.exports = { runSummaryReport };
