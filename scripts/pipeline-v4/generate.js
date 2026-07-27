const fs = require('fs');
const path = require('path');
const logger = require('./logger');
const { buildPageData } = require('./data-builder');
const { validateSchema } = require('./schema');
const { validateBusinessRules } = require('./business-validator');
const { auditLegal } = require('./legal-validator');
const { generateTypeScript } = require('./code-generator');

const args = process.argv.slice(2);
const isDryRun = args.includes('--dry-run');

const PROJECT_ROOT = path.join(__dirname, '..', '..');
const VILLES_JSON = path.join(PROJECT_ROOT, 'data', 'villes.json');
const CITIES_DIR = path.join(PROJECT_ROOT, 'data', 'cities');
const VERSIONS_PATH = path.join(__dirname, 'config', 'versions.json');

function saveReport(success, fail, results) {
  if (isDryRun) return;
  const versions = JSON.parse(fs.readFileSync(VERSIONS_PATH, 'utf-8'));
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
  const reportsDir = path.join(PROJECT_ROOT, 'reports', 'history', timestamp);
  fs.mkdirSync(reportsDir, { recursive: true });
  fs.writeFileSync(path.join(reportsDir, 'generation.json'), JSON.stringify({
    generated: success, failed: fail, timestamp: new Date().toISOString(), results
  }, null, 2));
  versions.generatedAt = new Date().toISOString();
  fs.writeFileSync(VERSIONS_PATH, JSON.stringify(versions, null, 2) + '\n');
}

function processCommune(commune) {
  const { slug, ville } = commune;
  const outPath = path.join(CITIES_DIR, `${slug}.ts`);

  try {
    logger.info(`Building PageData for ${ville}...`);
    const pageData = buildPageData(commune);

    const schemaRes = validateSchema(pageData);
    if (!schemaRes.success) throw new Error(`Schema error: ${schemaRes.error.issues[0].message}`);
    logger.pass(`Schema validation`);

    const busRes = validateBusinessRules(pageData, commune);
    if (!busRes.success) throw new Error(`Business error: ${busRes.errors[0]}`);
    logger.pass(`Business validation`);

    const legalRes = auditLegal(pageData);
    if (!legalRes.success) throw new Error(`Legal error: ${legalRes.errors[0]}`);
    logger.pass(`Legal validation`);

    const code = generateTypeScript(pageData);
    logger.pass(`Code generation`);

    if (!isDryRun) {
      fs.writeFileSync(outPath, code, 'utf-8');
      logger.pass(`File written (${slug}.ts)`);
    } else {
      logger.pass(`File written [DRY-RUN MEMORY ONLY]`);
    }
    return { status: 'OK' };
  } catch (e) {
    logger.error(`[${ville}] ${e.message}`);
    return { status: 'FAIL', error: e.message };
  }
}

async function generate() {
  logger.info(`Loading catalogue... ${isDryRun ? '(DRY-RUN)' : ''}`);
  const communes = JSON.parse(fs.readFileSync(VILLES_JSON, 'utf-8'));
  
  const batch = communes;

  let successCount = 0, failCount = 0;
  const results = [];

  for (const commune of batch) {
    logger.info(`--- Processing ${commune.ville} ---`);
    const res = processCommune(commune);
    results.push({ slug: commune.slug, ...res });
    if (res.status === 'OK') successCount++;
    else failCount++;
  }

  logger.info(`Summary: ${successCount} PASSED, ${failCount} FAILED.`);
  saveReport(successCount, failCount, results);

  if (failCount > 0) process.exit(1);
}

generate();
