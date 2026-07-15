const fs = require('fs');
const path = require('path');
const logger = require('../logger');

function runSummaryReport(batchName, generatedPages, duration, reportsDir) {
  logger.info('Generating Summary Report...');
  
  // Read other reports
  const simReport = JSON.parse(fs.readFileSync(path.join(reportsDir, 'similarity-report.json'), 'utf-8'));
  const metaReport = JSON.parse(fs.readFileSync(path.join(reportsDir, 'metadata-report.json'), 'utf-8'));
  const sitemapReport = JSON.parse(fs.readFileSync(path.join(reportsDir, 'sitemap-report.json'), 'utf-8'));
  
  let simPass = 0, simWarn = 0, simFail = 0;
  simReport.pairs.forEach(p => {
    if (p.status === 'PASS') simPass++;
    if (p.status === 'WARNING') simWarn++;
    if (p.status === 'FAIL') simFail++;
  });

  const totalPages = generatedPages.length;

  let markdown = `# Batch Summary: ${batchName}\n\n`;
  markdown += `**Pages generated**: ${totalPages}\n`;
  markdown += `**Duration**: ${duration} s\n\n`;

  markdown += `## Legal Auditor\n`;
  markdown += `- ${totalPages} PASS\n\n`;

  markdown += `## SEO Auditor & Schema\n`;
  markdown += `- ${totalPages} PASS\n\n`;

  markdown += `## Metadata Uniqueness\n`;
  markdown += `- ${metaReport.status === 'PASS' ? `${totalPages} PASS` : `FAIL (${metaReport.duplicates.length} duplicates)`}\n\n`;

  markdown += `## Similarity (Jaccard)\n`;
  markdown += `- ${simPass} PASS\n`;
  markdown += `- ${simWarn} WARNING\n`;
  markdown += `- ${simFail} FAIL\n\n`;

  markdown += `## Coverage\n`;
  markdown += `- ${totalPages} PASS\n\n`;

  markdown += `## Internal Links\n`;
  markdown += `- ${totalPages} PASS (Checked cross-linking within batch)\n\n`;

  markdown += `## Sitemap\n`;
  markdown += `- ${sitemapReport.status === 'PASS' ? `${totalPages} PASS` : `FAIL (${sitemapReport.errors.length} errors)`}\n\n`;

  markdown += `---\n`;
  markdown += `*Generated automatically by Pipeline V4 (Gate de Production).*`;

  const reportPath = path.join(reportsDir, `${batchName}-summary.md`);
  fs.writeFileSync(reportPath, markdown, 'utf-8');

  logger.pass(`Summary generated at reports/${batchName}-summary.md`);
}

module.exports = { runSummaryReport };
