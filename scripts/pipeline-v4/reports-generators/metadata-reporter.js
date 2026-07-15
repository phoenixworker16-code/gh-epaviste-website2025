const fs = require('fs');
const path = require('path');
const logger = require('../logger');

function runMetadataReport(generatedPages, reportsDir) {
  logger.info('Running Metadata Uniqueness Report...');
  const report = {
    status: 'PASS',
    duplicates: []
  };

  const titles = new Map();
  const descriptions = new Map();
  const h1s = new Map();
  const slugs = new Map();

  for (const page of generatedPages) {
    const title = page.metaTitle.toLowerCase();
    const desc = page.metaDescription.toLowerCase();
    const hero = page.blocks.find(b => b.type === 'Hero');
    const h1 = hero ? hero.title.toLowerCase() : '';
    const slug = page.slug;

    // Check title
    if (titles.has(title)) {
      report.duplicates.push({ field: 'Title', value: title, pages: [titles.get(title), slug] });
      report.status = 'FAIL';
    } else titles.set(title, slug);

    // Check description
    if (descriptions.has(desc)) {
      report.duplicates.push({ field: 'Description', value: desc, pages: [descriptions.get(desc), slug] });
      report.status = 'FAIL';
    } else descriptions.set(desc, slug);

    // Check H1
    if (h1 && h1s.has(h1)) {
      report.duplicates.push({ field: 'H1', value: h1, pages: [h1s.get(h1), slug] });
      report.status = 'FAIL';
    } else if (h1) h1s.set(h1, slug);

    // Check slug
    if (slugs.has(slug)) {
      report.duplicates.push({ field: 'Slug/Canonical', value: slug, pages: [slugs.get(slug), slug] });
      report.status = 'FAIL';
    } else slugs.set(slug, slug);
  }

  const reportPath = path.join(reportsDir, 'metadata-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf-8');

  if (report.status === 'FAIL') {
    logger.error('Metadata Report: Duplicates found!');
  } else {
    logger.pass('Metadata Report: All metadata unique.');
  }
}

module.exports = { runMetadataReport };
