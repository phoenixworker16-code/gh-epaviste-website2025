const fs = require('fs');
const path = require('path');
const logger = require('../logger');

function runCoverageReport(generatedPages, reportsDir) {
  logger.info('Running Coverage Report...');
  const report = [];

  for (const page of generatedPages) {
    let wordCount = 0;
    let h2Count = 0;
    let h3Count = 0;
    let listCount = 0;
    let tableCount = 0; // Not natively in blocks yet, but can exist in custom content
    let ctaCount = 0;
    let faqCount = 0;

    h2Count = page.blocks.length; // Chaque bloc a un titre H2 en général
    
    for (const block of page.blocks) {
      if (block.type === 'Cta') ctaCount++;
      if (block.type === 'FaqLocal') {
        faqCount += block.questions.length;
        h3Count += block.questions.length;
        wordCount += block.questions.map(q => `${q.q} ${q.a}`).join(' ').split(/\s+/).length;
      }
      if (block.type === 'LocalCoverage') {
        h3Count += block.zones.length;
        tableCount += 1; // Often rendered as table/grid
        wordCount += block.intro.split(/\s+/).length;
        wordCount += block.zones.map(z => `${z.name} ${z.delay} ${z.specificities||''}`).join(' ').split(/\s+/).length;
      }
      if (block.type === 'TipsAndMistakes') {
        listCount += 2;
        wordCount += block.tips.join(' ').split(/\s+/).length;
        wordCount += block.mistakes.join(' ').split(/\s+/).length;
      }
      if (block.type === 'VehicleTypes') {
        listCount += 1;
        wordCount += block.accepted.join(' ').split(/\s+/).length;
      }
      if (block.content) {
        wordCount += block.content.split(/\s+/).length;
      }
      if (block.subtitle) {
        wordCount += block.subtitle.split(/\s+/).length;
      }
    }

    report.push({
      commune: page.slug,
      entityType: page.entityType,
      nbBlocks: page.blocks.length,
      nbMots: wordCount,
      nbH2: h2Count,
      nbH3: h3Count,
      nbFaq: faqCount,
      nbListes: listCount,
      nbTableaux: tableCount,
      nbCta: ctaCount,
      internalLinks: page.relatedCitiesSlugs.length + page.relatedServicesSlugs.length
    });
  }

  const reportPath = path.join(reportsDir, 'coverage-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf-8');
  logger.pass('Coverage Report generated.');
}

module.exports = { runCoverageReport };
