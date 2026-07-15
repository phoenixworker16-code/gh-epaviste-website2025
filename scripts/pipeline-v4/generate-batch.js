/**
 * generate-batch.js
 * Générateur par lot générique.
 * Usage: node scripts/pipeline-v4/generate-batch.js --batch=phase4-1
 */
const fs = require('fs');
const path = require('path');
const { buildPageData } = require('./data-builder');
const { validateSchema } = require('./schema');
const { validateBusinessRules } = require('./business-validator');
const { auditLegal } = require('./legal-validator');
const { generateTypeScript } = require('./code-generator');
const logger = require('./logger');

const args = process.argv.slice(2);
const batchArg = args.find(a => a.startsWith('--batch='));

if (!batchArg) {
  logger.error('Usage: node generate-batch.js --batch=<nom-du-batch>');
  process.exit(1);
}

const batchName = batchArg.split('=')[1];
const batchPath = path.join(__dirname, '..', '..', 'config', 'batches', `${batchName}.json`);

if (!fs.existsSync(batchPath)) {
  logger.error(`Batch file not found: ${batchPath}`);
  process.exit(1);
}

const batchSlugs = JSON.parse(fs.readFileSync(batchPath, 'utf-8'));
const allCommunes = JSON.parse(fs.readFileSync(path.join(__dirname, '..', '..', 'data', 'villes.json'), 'utf-8'));

const communesToProcess = allCommunes.filter(c => batchSlugs.includes(c.slug));

if (communesToProcess.length !== batchSlugs.length) {
  logger.warn(`Attention: certaines communes du lot n'ont pas été trouvées dans villes.json.`);
}

logger.info(`Démarrage du batch: ${batchName} (${communesToProcess.length} communes)`);

const generatedPages = [];
const startTime = Date.now();
let generationFailed = false;

for (const commune of communesToProcess) {
  try {
    const pageData = buildPageData(commune);
    
    // Validation
    const schemaCheck = validateSchema(pageData);
    if (!schemaCheck.success) throw new Error('Schema validation failed');

    const businessCheck = validateBusinessRules(pageData, commune);
    if (!businessCheck.success) throw new Error('Business validation failed: ' + businessCheck.errors.join(' | '));

    const legalCheck = auditLegal(pageData);
    if (!legalCheck.success) throw new Error('Legal audit failed: ' + legalCheck.errors.join(' | '));

    // Génération et sauvegarde
    const tsCode = generateTypeScript(pageData);
    const tsPath = path.join(__dirname, '..', '..', 'data', 'cities', `${commune.slug}.ts`);
    fs.writeFileSync(tsPath, tsCode, 'utf-8');

    generatedPages.push(pageData);
    logger.pass(`[${commune.slug}] Généré avec succès.`);
  } catch (error) {
    generationFailed = true;
    logger.error(`[${commune.slug}] Erreur: ${error.message}`);
  }
}

const duration = ((Date.now() - startTime) / 1000).toFixed(2);
logger.info(`Batch ${batchName} terminé en ${duration} s. Pages générées: ${generatedPages.length}/${communesToProcess.length}`);

// Après la génération, lancer les reporters de masse
const { runSimilarityReport } = require('./reports-generators/similarity-reporter');
const { runCoverageReport } = require('./reports-generators/coverage-reporter');
const { runMetadataReport } = require('./reports-generators/metadata-reporter');
const { runInternalLinksReport } = require('./reports-generators/internal-links-reporter');
const { runSitemapReport } = require('./reports-generators/sitemap-reporter');
const { runSummaryReport } = require('./reports-generators/summary-reporter');

logger.info('\n--- Lancement des rapports de masse ---');

const reportsDir = path.join(__dirname, '..', '..', 'reports');
if (!fs.existsSync(reportsDir)) {
  fs.mkdirSync(reportsDir, { recursive: true });
}

const similarityReport = runSimilarityReport(generatedPages, reportsDir);
runCoverageReport(generatedPages, reportsDir);
runMetadataReport(generatedPages, reportsDir);
runInternalLinksReport(generatedPages, reportsDir);
runSitemapReport(generatedPages, reportsDir);
runSummaryReport(batchName, generatedPages, duration, reportsDir);

logger.info('✅ Pipeline de batch et reporting terminé.');

if (generationFailed || similarityReport.status === 'FAIL') {
  logger.error('Batch FAILED: generation or critical similarity checks failed.');
  process.exit(1);
}
