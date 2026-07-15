const fs = require('fs');
const path = require('path');
const logger = require('../logger');

// Jaccard similarity = (A ∩ B) / (A ∪ B)
function jaccardSimilarity(setA, setB) {
  const intersection = new Set([...setA].filter(x => setB.has(x)));
  const union = new Set([...setA, ...setB]);
  if (union.size === 0) return 0;
  return intersection.size / union.size;
}

function extractUniqueWords(pageData) {
  const words = [];
  for (const block of pageData.blocks) {
    // Ignorer les blocs génériques non discriminants pour la similarité
    if (['Cta', 'FaqLocal', 'DocsPreparation', 'VehicleTypes'].includes(block.type)) {
      continue;
    }
    
    // Concaténer le texte des propriétés du bloc
    const textVals = Object.values(block).filter(v => typeof v === 'string').join(' ');
    
    // Nettoyer, minuscule, retirer la ponctuation
    const cleaned = textVals.toLowerCase().replace(/[.,!?;:()]/g, ' ').replace(/\s+/g, ' ');
    words.push(...cleaned.split(' ').filter(w => w.length > 3));
  }
  return new Set(words);
}

function extractWordsFromBlock(block) {
  const text = Object.values(block)
    .filter(value => typeof value === 'string')
    .join(' ')
    .toLowerCase()
    .replace(/[.,!?;:()]/g, ' ')
    .replace(/\s+/g, ' ');

  return new Set(text.split(' ').filter(word => word.length > 3));
}

function countIntersection(setA, setB) {
  let count = 0;
  for (const word of setA) {
    if (setB.has(word)) count++;
  }
  return count;
}

function buildBreakdown(pageA, pageB) {
  const blockTypes = ['Hero', 'Introduction', 'LocalCoverage', 'VhuCompliance'];
  const breakdown = blockTypes.map(type => {
    const blockA = pageA.blocks.find(block => block.type === type);
    const blockB = pageB.blocks.find(block => block.type === type);
    const wordsA = blockA ? extractWordsFromBlock(blockA) : new Set();
    const wordsB = blockB ? extractWordsFromBlock(blockB) : new Set();
    const sharedTokens = countIntersection(wordsA, wordsB);

    return {
      block: type,
      similarity: Number((jaccardSimilarity(wordsA, wordsB) * 100).toFixed(1)),
      sharedTokens
    };
  });

  const totalSharedTokens = breakdown.reduce((total, item) => total + item.sharedTokens, 0);
  return breakdown.map(item => ({
    ...item,
    contribution: totalSharedTokens === 0
      ? 0
      : Number(((item.sharedTokens / totalSharedTokens) * 100).toFixed(1))
  }));
}

function runSimilarityReport(generatedPages, reportsDir) {
  logger.info('Running Similarity Report...');
  const THRESHOLD_WARN = 65;
  const THRESHOLD_FAIL = 80;

  const report = {
    status: 'PASS',
    thresholds: { warning: THRESHOLD_WARN, fail: THRESHOLD_FAIL },
    pairs: []
  };

  let globalStatus = 'PASS';
  const sets = generatedPages.map(p => ({ slug: p.slug, words: extractUniqueWords(p) }));

  for (let i = 0; i < sets.length; i++) {
    for (let j = i + 1; j < sets.length; j++) {
      const a = sets[i];
      const b = sets[j];
      const sim = (jaccardSimilarity(a.words, b.words) * 100).toFixed(1);
      
      let status = 'PASS';
      if (sim >= THRESHOLD_FAIL) {
        status = 'FAIL';
        globalStatus = 'FAIL';
        logger.error(`SIMILARITY FAIL: ${a.slug} ↔ ${b.slug} : ${sim}%`);
      } else if (sim >= THRESHOLD_WARN) {
        status = 'WARNING';
        if (globalStatus !== 'FAIL') globalStatus = 'WARNING';
        logger.warn(`SIMILARITY WARNING: ${a.slug} ↔ ${b.slug} : ${sim}%`);
      }

      report.pairs.push({
        pageA: a.slug,
        pageB: b.slug,
        similarity: Number(sim),
        breakdown: buildBreakdown(generatedPages[i], generatedPages[j]),
        status
      });
    }
  }

  report.status = globalStatus;
  
  const reportPath = path.join(reportsDir, 'similarity-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf-8');
  
  if (globalStatus === 'PASS') {
    logger.pass('Similarity Report: All pairs passed.');
  }

  return report;
}

module.exports = { runSimilarityReport };
