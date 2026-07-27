#!/usr/bin/env node
/**
 * global-similarity-check.js
 * 
 * Analyse de similarité GLOBALE sur l'ensemble des communes générées.
 * 
 * Objectif : valider que le générateur éditorial (variants.js) et le pipeline
 * produisent un contenu suffisamment diversifié pour TOUTES les communes,
 * avant le déploiement à grande échelle (1 262 communes).
 * 
 * Utilise le même moteur de similarité Jaccard que le pipeline V4.
 * 
 * Usage : node scripts/global-similarity-check.js
 * 
 * Rapport généré : reports/global-similarity-report.json
 *                  reports/global-similarity-summary.md
 */

const fs = require('fs');
const path = require('path');
const { buildPageData } = require('./pipeline-v4/data-builder');

const PROJECT_ROOT = path.join(__dirname, '..');
const VILLES_JSON = path.join(PROJECT_ROOT, 'data', 'villes.json');
const CITIES_DIR = path.join(PROJECT_ROOT, 'data', 'cities');
const REPORTS_DIR = path.join(PROJECT_ROOT, 'reports');

// =========================================================================
// Jaccard Similarity Engine
// =========================================================================

function jaccardSimilarity(setA, setB) {
  const intersection = new Set([...setA].filter(x => setB.has(x)));
  const union = new Set([...setA, ...setB]);
  if (union.size === 0) return 0;
  return intersection.size / union.size;
}

function extractUniqueWords(pageData) {
  const words = [];
  for (const block of pageData.blocks) {
    if (['Cta', 'FaqLocal', 'DocsPreparation', 'VehicleTypes'].includes(block.type)) continue;
    const textVals = Object.values(block).filter(v => typeof v === 'string').join(' ');
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

const THRESHOLD_WARN = 65;
const THRESHOLD_FAIL = 80;
const ALL_BLOCK_TYPES = ['Hero', 'Introduction', 'LocalCoverage', 'VhuCompliance', 'FaqLocal', 'Cta'];

// =========================================================================
// Main
// =========================================================================

async function main() {
  console.log('=== 🔬 Analyse de Similarité Globale ===\n');

  console.log('Chargement du catalogue des communes...');
  const allCommunes = JSON.parse(fs.readFileSync(VILLES_JSON, 'utf-8'));
  console.log(`  ${allCommunes.length} communes dans villes.json\n`);

  const tsFiles = fs.readdirSync(CITIES_DIR).filter(f => f.endsWith('.ts'));
  const existingSlugs = new Set(tsFiles.map(f => f.replace('.ts', '')));
  console.log(`  ${tsFiles.length} fichiers .ts dans data/cities/\n`);

  const communesToAnalyze = allCommunes.filter(c => existingSlugs.has(c.slug));
  console.log(`  ${communesToAnalyze.length} communes à analyser\n`);

  if (communesToAnalyze.length < 2) {
    console.error('❌ Au moins 2 communes sont nécessaires pour l\'analyse de similarité.');
    process.exit(1);
  }

  console.log('Reconstruction des pages en mémoire...');
  const generatedPages = [];
  let buildErrors = 0;

  for (const commune of communesToAnalyze) {
    try {
      const pageData = buildPageData(commune);
      generatedPages.push(pageData);
    } catch (err) {
      console.error(`  ❌ Erreur buildPageData pour ${commune.slug}: ${err.message}`);
      buildErrors++;
    }
  }

  console.log(`  ${generatedPages.length} pages reconstruites avec succès`);
  if (buildErrors > 0) console.log(`  ${buildErrors} erreurs ignorées\n`);

  if (generatedPages.length < 2) {
    console.error('❌ Pas assez de pages valides pour l\'analyse.');
    process.exit(1);
  }

  console.log('Calcul des similarités Jaccard (Streaming / Batch)...');
  const totalPairs = (generatedPages.length * (generatedPages.length - 1)) / 2;
  console.log(`  ${generatedPages.length} pages → ${totalPairs} paires à analyser\n`);

  const startTime = Date.now();
  
  // Streaming statistics
  let globalStatus = 'PASS';
  let failCount = 0;
  let warnCount = 0;
  let maxSim = 0;
  let minSim = 100;
  let sumSim = 0;
  let totalPairsAnalyzed = 0;

  const blockStats = {};
  for (const type of ALL_BLOCK_TYPES) {
    blockStats[type] = { count: 0, sum: 0, max: 0, min: 100, pass: 0, warning: 0, fail: 0 };
  }

  const buckets = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  const bucketCounts = new Array(buckets.length).fill(0);

  const topWorstPairs = []; // Keep top 20
  const failingPairs = []; // Keep all warnings and fails

  const sets = generatedPages.map(p => ({ slug: p.slug, words: extractUniqueWords(p) }));

  for (let i = 0; i < sets.length; i++) {
    for (let j = i + 1; j < sets.length; j++) {
      const a = sets[i];
      const b = sets[j];
      const sim = Number((jaccardSimilarity(a.words, b.words) * 100).toFixed(1));

      let status = 'PASS';
      if (sim >= THRESHOLD_FAIL) {
        status = 'FAIL';
        failCount++;
        globalStatus = 'FAIL';
      } else if (sim >= THRESHOLD_WARN) {
        status = 'WARNING';
        warnCount++;
        if (globalStatus !== 'FAIL') globalStatus = 'WARNING';
      }

      totalPairsAnalyzed++;
      sumSim += sim;
      if (sim > maxSim) maxSim = sim;
      if (sim < minSim) minSim = sim;

      let breakdown = null;
      if (status !== 'PASS' || topWorstPairs.length < 20 || sim > topWorstPairs[topWorstPairs.length - 1].similarity) {
          breakdown = buildBreakdown(generatedPages[i], generatedPages[j]);
      } else {
          // Just compute blocks stats without keeping the breakdown object in memory to save time
          breakdown = buildBreakdown(generatedPages[i], generatedPages[j]);
      }

      for (const block of breakdown) {
         const bs = blockStats[block.block];
         if (bs) {
            bs.count++;
            bs.sum += block.similarity;
            if (block.similarity > bs.max) bs.max = block.similarity;
            if (block.similarity < bs.min) bs.min = block.similarity;
            if (block.similarity >= THRESHOLD_FAIL) bs.fail++;
            else if (block.similarity >= THRESHOLD_WARN) bs.warning++;
            else bs.pass++;
         }
      }

      for (let bIndex = 0; bIndex < buckets.length - 1; bIndex++) {
        if (sim >= buckets[bIndex] && sim < buckets[bIndex + 1]) {
           bucketCounts[bIndex]++;
           break;
        }
      }
      if (sim === 100) bucketCounts[buckets.length - 1]++;

      const pairResult = { pageA: a.slug, pageB: b.slug, similarity: sim, status, breakdown };

      topWorstPairs.push(pairResult);
      topWorstPairs.sort((x, y) => y.similarity - x.similarity);
      if (topWorstPairs.length > 20) topWorstPairs.pop();

      if (status !== 'PASS') {
         failingPairs.push(pairResult);
      }
    }

    if ((i + 1) % 50 === 0 || i === sets.length - 1) {
      const progress = ((i + 1) / sets.length * 100).toFixed(0);
      console.log(`  Progression: ${i + 1}/${sets.length} pages (${progress}%)`);
    }
  }

  const duration = ((Date.now() - startTime) / 1000).toFixed(2);
  console.log(`\n  Analyse terminée en ${duration}s\n`);

  const avgSim = totalPairsAnalyzed > 0 ? sumSim / totalPairsAnalyzed : 0;

  const aggregatedBlocks = {};
  for (const [type, bs] of Object.entries(blockStats)) {
     aggregatedBlocks[type] = {
       pairsAnalyzed: bs.count,
       average: bs.count > 0 ? Number((bs.sum / bs.count).toFixed(1)) : 0,
       max: bs.max,
       min: bs.min === 100 ? 0 : bs.min,
       pass: bs.pass,
       warning: bs.warning,
       fail: bs.fail
     };
  }

  const report = {
    status: globalStatus,
    thresholds: { warning: THRESHOLD_WARN, fail: THRESHOLD_FAIL },
    analysisDate: new Date().toISOString(),
    totalPages: generatedPages.length,
    totalPairs: totalPairsAnalyzed,
    durationSeconds: Number(duration),
    statistics: {
      maxSimilarity: maxSim,
      minSimilarity: minSim === 100 ? 0 : minSim,
      averageSimilarity: Number(avgSim.toFixed(1)),
      pass: totalPairsAnalyzed - failCount - warnCount,
      warning: warnCount,
      fail: failCount
    },
    blocks: aggregatedBlocks,
    topWorstPairs
  };

  if (!fs.existsSync(REPORTS_DIR)) fs.mkdirSync(REPORTS_DIR, { recursive: true });
  const reportPath = path.join(REPORTS_DIR, 'global-similarity-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf-8');
  console.log(`✅ Rapport JSON : ${reportPath}\n`);

  const mdLines = [];
  mdLines.push('# Rapport de Similarité Globale');
  mdLines.push('');
  mdLines.push('## Synthèse');
  mdLines.push('');
  mdLines.push(`| Métrique | Valeur |`);
  mdLines.push(`|---|---|`);
  mdLines.push(`| Statut | **${globalStatus}** |`);
  mdLines.push(`| Pages analysées | ${generatedPages.length} |`);
  mdLines.push(`| Paires comparées | ${totalPairsAnalyzed} |`);
  mdLines.push(`| Similarité max | **${maxSim.toFixed(1)}%** |`);
  mdLines.push(`| Similarité min | ${(minSim===100?0:minSim).toFixed(1)}% |`);
  mdLines.push(`| Similarité moyenne | ${avgSim.toFixed(1)}% |`);
  mdLines.push(`| Seuil WARNING | ${THRESHOLD_WARN}% |`);
  mdLines.push(`| Seuil FAIL | ${THRESHOLD_FAIL}% |`);
  mdLines.push(`| ✅ PASS | ${totalPairsAnalyzed - failCount - warnCount} |`);
  mdLines.push(`| ⚠️ WARNING | ${warnCount} |`);
  mdLines.push(`| ❌ FAIL | ${failCount} |`);
  mdLines.push(`| Temps d'analyse | ${duration}s |`);
  mdLines.push('');

  mdLines.push('## Vérification des critères de validation');
  mdLines.push('');
  mdLines.push(`- **Similarité max < ${THRESHOLD_WARN}%** : ${maxSim < THRESHOLD_WARN ? '✅ OUI' : '❌ NON'} (${maxSim.toFixed(1)}%)`);
  mdLines.push(`- **Aucun FAIL** : ${failCount === 0 ? '✅ OUI' : '❌ NON'} (${failCount} FAIL)`);
  mdLines.push(`- **Aucun WARNING** : ${warnCount === 0 ? '✅ OUI' : '❌ NON'} (${warnCount} WARNING)`);
  mdLines.push('');

  mdLines.push('## Détail par bloc');
  mdLines.push('');
  mdLines.push('| Bloc | Paires | Moyenne | Max | Min | PASS | WARNING | FAIL |');
  mdLines.push('|---|---|---|---|---|---|---|---|');
  for (const [type, stats] of Object.entries(aggregatedBlocks)) {
    mdLines.push(`| ${type} | ${stats.pairsAnalyzed} | ${stats.average}% | ${stats.max}% | ${stats.min}% | ${stats.pass} | ${stats.warning} | ${stats.fail} |`);
  }
  mdLines.push('');

  mdLines.push('## Top 20 paires les plus similaires');
  mdLines.push('');
  mdLines.push('| Rang | Paire | Similarité | Statut |');
  mdLines.push('|---|---|---|---|');
  topWorstPairs.forEach((p, idx) => {
    const statusIcon = p.status === 'FAIL' ? '❌' : p.status === 'WARNING' ? '⚠️' : '✅';
    mdLines.push(`| ${idx + 1} | ${p.pageA} ↔ ${p.pageB} | ${p.similarity}% | ${statusIcon} ${p.status} |`);
  });
  mdLines.push('');

  if (failingPairs.length > 0) {
    mdLines.push('## Paires en échec ou avertissement');
    mdLines.push('');
    mdLines.push('| Paire | Similarité | Statut | Blocs problématiques |');
    mdLines.push('|---|---|---|---|');
    failingPairs.forEach(p => {
      const problemBlocks = p.breakdown
        .filter(b => b.similarity >= THRESHOLD_WARN)
        .map(b => `${b.block} (${b.similarity}%)`)
        .join(', ');
      mdLines.push(`| ${p.pageA} ↔ ${p.pageB} | ${p.similarity}% | ${p.status} | ${problemBlocks} |`);
    });
    mdLines.push('');
  }

  mdLines.push('## Distribution des similarités');
  mdLines.push('');
  mdLines.push('| Plage | Nombre de paires |');
  mdLines.push('|---|---|');
  const maxBucket = Math.max(...bucketCounts);
  for (let b = 0; b < buckets.length - 1; b++) {
    const count = bucketCounts[b];
    if (count > 0) {
      const barLength = maxBucket > 0 ? Math.round((count / maxBucket) * 30) : 0;
      const bar = '█'.repeat(barLength);
      mdLines.push(`| ${buckets[b]}% - ${buckets[b+1]}% | ${count} ${bar} |`);
    }
  }
  const fullMatch = bucketCounts[buckets.length - 1];
  if (fullMatch > 0) {
    mdLines.push(`| 100% | ${fullMatch} |`);
  }
  mdLines.push('');

  mdLines.push('## Conclusion');
  mdLines.push('');
  if (globalStatus === 'PASS') {
    mdLines.push('✅ **Le générateur éditorial produit un contenu suffisamment diversifié pour l\'ensemble des communes.**');
    mdLines.push('');
    mdLines.push('Le pipeline est prêt pour le déploiement à grande échelle (1 262 communes).');
    mdLines.push('Aucune paire ne dépasse le seuil d\'avertissement de 65%.');
  } else if (globalStatus === 'WARNING') {
    mdLines.push('⚠️ **Quelques paires dépassent le seuil d\'avertissement mais aucune n\'est en échec.**');
    mdLines.push('');
    mdLines.push('Une revue des blocs concernés est recommandée avant le déploiement à grande échelle.');
  } else {
    mdLines.push('❌ **Des paires en échec ont été détectées.**');
    mdLines.push('');
    mdLines.push('Le générateur éditorial nécessite des ajustements avant le déploiement à grande échelle.');
  }
  mdLines.push('');
  mdLines.push('---');
  mdLines.push(`*Rapport généré automatiquement le ${new Date().toLocaleDateString('fr-FR')} à ${new Date().toLocaleTimeString('fr-FR')}*`);

  const mdPath = path.join(REPORTS_DIR, 'global-similarity-summary.md');
  fs.writeFileSync(mdPath, mdLines.join('\n'), 'utf-8');
  console.log(`✅ Rapport Markdown : ${mdPath}\n`);

  console.log('=== 📊 RÉSULTATS ===');
  console.log('');
  console.log(`  Statut : ${globalStatus === 'PASS' ? '✅ PASS' : globalStatus === 'WARNING' ? '⚠️ WARNING' : '❌ FAIL'}`);
  console.log(`  Pages analysées : ${generatedPages.length}`);
  console.log(`  Paires comparées : ${totalPairsAnalyzed}`);
  console.log(`  Similarité max : ${maxSim.toFixed(1)}%`);
  console.log(`  Similarité moyenne : ${avgSim.toFixed(1)}%`);
  console.log(`  PASS : ${totalPairsAnalyzed - failCount - warnCount}`);
  console.log(`  WARNING : ${warnCount}`);
  console.log(`  FAIL : ${failCount}`);
  console.log(`  Temps : ${duration}s`);
  console.log('');

  if (globalStatus === 'PASS') {
    console.log('✅ CONCLUSION : Le générateur éditorial est prêt pour le déploiement à grande échelle.');
  } else if (globalStatus === 'WARNING') {
    console.log('⚠️ CONCLUSION : Quelques avertissements, à revoir avant déploiement massif.');
  } else {
    console.log('❌ CONCLUSION : Des échecs détectés, le générateur nécessite des ajustements.');
  }
}

main().catch(err => {
  console.error('Erreur fatale:', err);
  process.exit(1);
});