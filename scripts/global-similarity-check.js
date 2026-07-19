#!/usr/bin/env node
/**
 * global-similarity-check.js
 * 
 * Analyse de similarité GLOBALE sur l'ensemble des 130 communes générées.
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
// Jaccard Similarity Engine (identique à similarity-reporter.js)
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
    if (['Cta', 'FaqLocal', 'DocsPreparation', 'VehicleTypes'].includes(block.type)) {
      continue;
    }
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

// =========================================================================
// Block-level aggregation (identique à similarity-block-reporter.js)
// =========================================================================

const THRESHOLD_WARN = 65;
const THRESHOLD_FAIL = 80;
const ALL_BLOCK_TYPES = ['Hero', 'Introduction', 'LocalCoverage', 'VhuCompliance', 'FaqLocal', 'Cta'];

function aggregateByBlock(pairs) {
  const blockStats = {};
  for (const type of ALL_BLOCK_TYPES) {
    blockStats[type] = { similarities: [], warning: 0, fail: 0, pass: 0 };
  }

  for (const pair of pairs) {
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

  const blocks = {};
  for (const type of ALL_BLOCK_TYPES) {
    const stats = blockStats[type];
    const similarities = stats.similarities;
    const count = similarities.length;
    blocks[type] = {
      pairsAnalyzed: count,
      average: count > 0 ? Number((similarities.reduce((a, b) => a + b, 0) / count).toFixed(1)) : 0,
      max: count > 0 ? Math.max(...similarities) : 0,
      min: count > 0 ? Math.min(...similarities) : 0,
      pass: stats.pass,
      warning: stats.warning,
      fail: stats.fail
    };
  }

  return blocks;
}

// =========================================================================
// Main
// =========================================================================

async function main() {
  console.log('=== 🔬 Analyse de Similarité Globale ===\n');

  // 1. Charger toutes les communes de villes.json
  console.log('Chargement du catalogue des communes...');
  const allCommunes = JSON.parse(fs.readFileSync(VILLES_JSON, 'utf-8'));
  console.log(`  ${allCommunes.length} communes dans villes.json\n`);

  // 2. Lister les fichiers .ts existants dans data/cities
  const tsFiles = fs.readdirSync(CITIES_DIR).filter(f => f.endsWith('.ts'));
  const existingSlugs = new Set(tsFiles.map(f => f.replace('.ts', '')));
  console.log(`  ${tsFiles.length} fichiers .ts dans data/cities/\n`);

  // 3. Filtrer les communes qui ont un fichier généré
  const communesToAnalyze = allCommunes.filter(c => existingSlugs.has(c.slug));
  console.log(`  ${communesToAnalyze.length} communes à analyser\n`);

  if (communesToAnalyze.length < 2) {
    console.error('❌ Au moins 2 communes sont nécessaires pour l\'analyse de similarité.');
    process.exit(1);
  }

  // 4. Reconstruire les pages en mémoire via buildPageData()
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

  // 5. Calculer la similarité Jaccard pour toutes les paires
  console.log('Calcul des similarités Jaccard...');
  const totalPairs = (generatedPages.length * (generatedPages.length - 1)) / 2;
  console.log(`  ${generatedPages.length} pages → ${totalPairs} paires à analyser\n`);

  const startTime = Date.now();
  const pairs = [];
  let globalStatus = 'PASS';
  let failCount = 0;
  let warnCount = 0;

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

      pairs.push({
        pageA: a.slug,
        pageB: b.slug,
        similarity: sim,
        breakdown: buildBreakdown(
          generatedPages.find(p => p.slug === a.slug),
          generatedPages.find(p => p.slug === b.slug)
        ),
        status
      });
    }

    // Progression
    if ((i + 1) % 20 === 0 || i === sets.length - 1) {
      const progress = ((i + 1) / sets.length * 100).toFixed(0);
      console.log(`  Progression: ${i + 1}/${sets.length} pages (${progress}%)`);
    }
  }

  const duration = ((Date.now() - startTime) / 1000).toFixed(2);
  console.log(`\n  Analyse terminée en ${duration}s\n`);

  // 6. Statistiques globales
  const similarities = pairs.map(p => p.similarity);
  const maxSim = Math.max(...similarities);
  const minSim = Math.min(...similarities);
  const avgSim = similarities.reduce((a, b) => a + b, 0) / similarities.length;

  // Trier les paires par similarité décroissante
  const sortedPairs = [...pairs].sort((a, b) => b.similarity - a.similarity);

  // 7. Agrégation par bloc
  const blocks = aggregateByBlock(pairs);

  // 8. Rapport JSON
  const report = {
    status: globalStatus,
    thresholds: { warning: THRESHOLD_WARN, fail: THRESHOLD_FAIL },
    analysisDate: new Date().toISOString(),
    totalPages: generatedPages.length,
    totalPairs: pairs.length,
    durationSeconds: Number(duration),
    statistics: {
      maxSimilarity: maxSim,
      minSimilarity: minSim,
      averageSimilarity: Number(avgSim.toFixed(1)),
      pass: pairs.length - failCount - warnCount,
      warning: warnCount,
      fail: failCount
    },
    blocks,
    topWorstPairs: sortedPairs.slice(0, 20).map(p => ({
      pageA: p.pageA,
      pageB: p.pageB,
      similarity: p.similarity,
      status: p.status,
      breakdown: p.breakdown
    })),
    pairs
  };

  const reportPath = path.join(REPORTS_DIR, 'global-similarity-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf-8');
  console.log(`✅ Rapport JSON : ${reportPath}\n`);

  // 9. Rapport Markdown synthétique
  const mdLines = [];
  mdLines.push('# Rapport de Similarité Globale');
  mdLines.push('');
  mdLines.push('## Synthèse');
  mdLines.push('');
  mdLines.push(`| Métrique | Valeur |`);
  mdLines.push(`|---|---|`);
  mdLines.push(`| Statut | **${globalStatus}** |`);
  mdLines.push(`| Pages analysées | ${generatedPages.length} |`);
  mdLines.push(`| Paires comparées | ${totalPairs} |`);
  mdLines.push(`| Similarité max | **${maxSim.toFixed(1)}%** |`);
  mdLines.push(`| Similarité min | ${minSim.toFixed(1)}% |`);
  mdLines.push(`| Similarité moyenne | ${avgSim.toFixed(1)}% |`);
  mdLines.push(`| Seuil WARNING | ${THRESHOLD_WARN}% |`);
  mdLines.push(`| Seuil FAIL | ${THRESHOLD_FAIL}% |`);
  mdLines.push(`| ✅ PASS | ${pairs.length - failCount - warnCount} |`);
  mdLines.push(`| ⚠️ WARNING | ${warnCount} |`);
  mdLines.push(`| ❌ FAIL | ${failCount} |`);
  mdLines.push(`| Temps d'analyse | ${duration}s |`);
  mdLines.push('');

  // Vérification des critères
  mdLines.push('## Vérification des critères de validation');
  mdLines.push('');
  mdLines.push(`- **Similarité max < ${THRESHOLD_WARN}%** : ${maxSim < THRESHOLD_WARN ? '✅ OUI' : '❌ NON'} (${maxSim.toFixed(1)}%)`);
  mdLines.push(`- **Aucun FAIL** : ${failCount === 0 ? '✅ OUI' : '❌ NON'} (${failCount} FAIL)`);
  mdLines.push(`- **Aucun WARNING** : ${warnCount === 0 ? '✅ OUI' : '❌ NON'} (${warnCount} WARNING)`);
  mdLines.push('');

  // Détail par bloc
  mdLines.push('## Détail par bloc');
  mdLines.push('');
  mdLines.push('| Bloc | Paires | Moyenne | Max | Min | PASS | WARNING | FAIL |');
  mdLines.push('|---|---|---|---|---|---|---|---|');
  for (const [type, stats] of Object.entries(blocks)) {
    mdLines.push(`| ${type} | ${stats.pairsAnalyzed} | ${stats.average}% | ${stats.max}% | ${stats.min}% | ${stats.pass} | ${stats.warning} | ${stats.fail} |`);
  }
  mdLines.push('');

  // Top 10 paires les plus similaires
  mdLines.push('## Top 10 paires les plus similaires');
  mdLines.push('');
  mdLines.push('| Rang | Paire | Similarité | Statut |');
  mdLines.push('|---|---|---|---|');
  sortedPairs.slice(0, 10).forEach((p, idx) => {
    const statusIcon = p.status === 'FAIL' ? '❌' : p.status === 'WARNING' ? '⚠️' : '✅';
    mdLines.push(`| ${idx + 1} | ${p.pageA} ↔ ${p.pageB} | ${p.similarity}% | ${statusIcon} ${p.status} |`);
  });
  mdLines.push('');

  // Paires en échec / avertissement
  const failingPairs = pairs.filter(p => p.status !== 'PASS');
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
  // Créer des buckets
  const buckets = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  mdLines.push('| Plage | Nombre de paires |');
  mdLines.push('|---|---|');
  for (let b = 0; b < buckets.length - 1; b++) {
    const low = buckets[b];
    const high = buckets[b + 1];
    const count = pairs.filter(p => p.similarity >= low && p.similarity < high).length;
    if (count > 0) {
      const bar = '█'.repeat(Math.round(count / Math.max(...Object.values(
        Object.fromEntries(buckets.slice(0, -1).map((v, i) => [v, pairs.filter(p => p.similarity >= v && p.similarity < buckets[i + 1]).length]))
      )) * 30));
      mdLines.push(`| ${low}% - ${high}% | ${count} ${bar} |`);
    }
  }
  mdLines.push(`| 100% | ${pairs.filter(p => p.similarity === 100).length} |`);
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

  // 10. Affichage console
  console.log('=== 📊 RÉSULTATS ===');
  console.log('');
  console.log(`  Statut : ${globalStatus === 'PASS' ? '✅ PASS' : globalStatus === 'WARNING' ? '⚠️ WARNING' : '❌ FAIL'}`);
  console.log(`  Pages analysées : ${generatedPages.length}`);
  console.log(`  Paires comparées : ${totalPairs}`);
  console.log(`  Similarité max : ${maxSim.toFixed(1)}%`);
  console.log(`  Similarité moyenne : ${avgSim.toFixed(1)}%`);
  console.log(`  PASS : ${pairs.length - failCount - warnCount}`);
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