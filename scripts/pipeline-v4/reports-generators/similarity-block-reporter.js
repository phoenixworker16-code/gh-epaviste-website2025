/**
 * similarity-block-reporter.js
 * Agrège les résultats de similarité par bloc (Hero, Introduction, LocalCoverage, VhuCompliance, FAQ, CTA).
 * Permet d'identifier immédiatement quel bloc cause une régression.
 *
 * Génère reports/similarity-by-block.json
 */

const fs = require('fs');
const path = require('path');
const logger = require('../logger');

const THRESHOLD_WARN = 65;
const THRESHOLD_FAIL = 80;

const ALL_BLOCK_TYPES = ['Hero', 'Introduction', 'LocalCoverage', 'VhuCompliance', 'FaqLocal', 'Cta'];

function runSimilarityBlockReport(generatedPages, reportsDir, similarityReport) {
  logger.info('Running Similarity By Block Report...');

  const blockStats = {};

  for (const type of ALL_BLOCK_TYPES) {
    blockStats[type] = {
      similarities: [],
      warning: 0,
      fail: 0,
      pass: 0
    };
  }

  for (const pair of similarityReport.pairs) {
    for (const breakdown of pair.breakdown) {
      const type = breakdown.block;
      if (!blockStats[type]) continue;
      blockStats[type].similarities.push(breakdown.similarity);
      if (breakdown.similarity >= THRESHOLD_FAIL) {
        blockStats[type].fail++;
      } else if (breakdown.similarity >= THRESHOLD_WARN) {
        blockStats[type].warning++;
      } else {
        blockStats[type].pass++;
      }
    }
  }

  const report = {
    status: similarityReport.status,
    thresholds: { warning: THRESHOLD_WARN, fail: THRESHOLD_FAIL },
    totalPairs: similarityReport.pairs.length,
    blocks: {}
  };

  for (const type of ALL_BLOCK_TYPES) {
    const stats = blockStats[type];
    const similarities = stats.similarities;
    const count = similarities.length;

    let maxVal = 0;
    let minVal = 0;
    if (count > 0) {
      maxVal = similarities[0];
      minVal = similarities[0];
      for (let i = 1; i < count; i++) {
        if (similarities[i] > maxVal) maxVal = similarities[i];
        if (similarities[i] < minVal) minVal = similarities[i];
      }
    }

    report.blocks[type] = {
      pairsAnalyzed: count,
      average: count > 0 ? Number((similarities.reduce((a, b) => a + b, 0) / count).toFixed(1)) : 0,
      max: maxVal,
      min: minVal,
      pass: stats.pass,
      warning: stats.warning,
      fail: stats.fail
    };
  }

  // Status global
  const anyFail = Object.values(report.blocks).some(b => b.fail > 0);
  const anyWarn = Object.values(report.blocks).some(b => b.warning > 0);
  report.status = anyFail ? 'FAIL' : (anyWarn ? 'WARNING' : 'PASS');

  const reportPath = path.join(reportsDir, 'similarity-by-block.json');
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf-8');

  if (report.status === 'PASS') {
    logger.pass('Similarity By Block Report: All blocks passed.');
  } else {
    const failing = Object.entries(report.blocks)
      .filter(([, b]) => b.fail > 0 || b.warning > 0)
      .map(([t, b]) => `${t}: ${b.fail} FAIL / ${b.warning} WARNING`);
    logger.warn(`Similarity By Block Report: ${failing.join(' | ')}`);
  }

  return report;
}

module.exports = { runSimilarityBlockReport };
