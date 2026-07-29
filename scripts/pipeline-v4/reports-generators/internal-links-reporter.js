const fs = require('fs');
const path = require('path');
const logger = require('../logger');

function runInternalLinksReport(generatedPages, reportsDir) {
  logger.info('Running Internal Links Report...');
  let markdown = '# Internal Links Report\n\n';
  let status = 'PASS';

  // Dans un cas réel, ces listes seraient chargées depuis une source de vérité.
  // Ici on simule une vérification contre le lot courant.
  const allSlugs = new Set(generatedPages.map(p => p.slug));
  const inlinks = new Map();
  generatedPages.forEach(p => inlinks.set(p.slug, 0));

  for (const page of generatedPages) {
    const outlinks = [...page.relatedCitiesSlugs, ...page.relatedServicesSlugs];
    markdown += `## ${page.slug}\n`;
    markdown += `- Outbound Links: ${outlinks.length}\n`;

    if (outlinks.length < 4) {
      markdown += `  - ⚠️ WARNING: Less than 4 internal links (found ${outlinks.length})\n`;
      // AI_RULES.md asks for 4 internal links minimum
      if (status !== 'FAIL') status = 'WARNING';
    }

    outlinks.forEach(link => {
      // Les liens qui commencent par "enlevement-epave-" pointent souvent vers des villes/départements
      // On va juste logguer les liens générés.
      markdown += `  - 🔗 ${link}\n`;
      // Update inlinks if the target is in the current batch
      const targetSlug = link.replace('enlevement-epave-', '');
      if (inlinks.has(targetSlug)) {
        inlinks.set(targetSlug, inlinks.get(targetSlug) + 1);
      }
    });
    markdown += '\n';
  }

  markdown += '## Orphan Pages (in current batch)\n';
  const orphans = [];
  for (const [slug, count] of inlinks.entries()) {
    if (count === 0) orphans.push(slug);
  }

  if (orphans.length > 0) {
    markdown += `Found ${orphans.length} pages in the current batch with 0 internal links from other pages in the batch. (Note: They might be linked from the global menu or footer).\n`;
    orphans.forEach(o => markdown += `- ${o}\n`);
  } else {
    markdown += 'No orphan pages detected in this batch cross-linking.\n';
  }

  const reportPath = path.join(reportsDir, 'internal-links-report.md');
  fs.writeFileSync(reportPath, markdown, 'utf-8');
  
  if (status === 'PASS') logger.pass('Internal Links Report generated (PASS).');
  else logger.warn('Internal Links Report generated with WARNINGS.');
}

module.exports = { runInternalLinksReport };
