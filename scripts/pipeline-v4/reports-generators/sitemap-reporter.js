const fs = require('fs');
const path = require('path');
const logger = require('../logger');

function runSitemapReport(generatedPages, reportsDir) {
  logger.info('Running Sitemap Report...');
  const report = {
    status: 'PASS',
    urls: [],
    errors: []
  };

  const domain = 'https://gh-epaviste.fr';
  const seenUrls = new Set();

  for (const page of generatedPages) {
    // Dans l'App Router Next.js du projet, l'URL est /epaviste/[slug]
    const url = `${domain}/epaviste/${page.slug}`;
    const canonical = `${domain}/epaviste/${page.slug}`;

    if (seenUrls.has(url)) {
      report.errors.push(`Duplicate URL detected: ${url}`);
      report.status = 'FAIL';
    } else {
      seenUrls.add(url);
    }

    report.urls.push({
      loc: url,
      canonical: canonical,
      valid: url === canonical
    });

    if (url !== canonical) {
      report.errors.push(`Canonical mismatch on ${url}`);
      report.status = 'FAIL';
    }
  }

  const reportPath = path.join(reportsDir, 'sitemap-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf-8');

  if (report.status === 'PASS') {
    logger.pass('Sitemap Report: All URLs valid and unique.');
  } else {
    logger.error('Sitemap Report: Errors detected (duplicates or canonical mismatch).');
  }
}

module.exports = { runSitemapReport };
