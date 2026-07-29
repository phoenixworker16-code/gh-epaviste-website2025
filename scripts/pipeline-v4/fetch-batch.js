const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');
const logger = require('./logger');

// Utilisation de paths.js
const { root, paths: configPaths } = require('./config/paths');

const VILLES_JSON = path.join(root, 'data', 'villes.json');
const OUT_DIR = path.join(root, 'data', 'local-data');
const BATCH_FILE = path.join(root, 'config', 'batches', 'phase4-1.json');
const FETCH_SCRIPT = path.join(root, 'scripts', 'fetch-local-data.js');
const REPORT_FILE = path.join(configPaths.reports, 'fetch-report.json');

// Overpass supporte mal la concurrence → 1 seule commune à la fois
const CONCURRENCY = 1;
const MAX_RETRIES = 2;
const TIMEOUT_MS = 180000; // 3 minutes (5 sources * ~30s chacune)

// Crée le dossier s'il n'existe pas
if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
}

function spawnPromise(command, args, timeoutMs) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, { stdio: ['ignore', 'pipe', 'pipe'] });
    
    let stderrData = '';
    
    if (child.stderr) {
      child.stderr.on('data', (data) => {
        stderrData += data.toString();
      });
    }

    let timeoutId = setTimeout(() => {
      child.kill('SIGKILL');
      reject(new Error('TIMEOUT'));
    }, timeoutMs);

    child.on('close', (code) => {
      clearTimeout(timeoutId);
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`Exit code ${code}. Stderr: ${stderrData.slice(0, 500)}`));
      }
    });
    
    child.on('error', (err) => {
      clearTimeout(timeoutId);
      reject(err);
    });
  });
}

async function processCommune(commune, retryCount = 0) {
  const { ville, depNumber, slug } = commune;
  const outFile = path.join(OUT_DIR, `${slug}.json`);
  const start = Date.now();

  try {
    logger.info(`Fetching data for ${ville} (${depNumber}) [attempt ${retryCount + 1}]...`);
    await spawnPromise('node', [FETCH_SCRIPT, slug], TIMEOUT_MS);

    // Vérifier si le fichier a bien été créé
    if (!fs.existsSync(outFile)) {
      throw new Error("JSON file not generated");
    }

    const data = JSON.parse(fs.readFileSync(outFile, 'utf-8'));
    
    // Vérifier la nouvelle structure de validation
    if (!data.validation || data.validation.status !== 'SUCCESS') {
      throw new Error('Validation structure missing or not SUCCESS');
    }

    const durationSec = ((Date.now() - start) / 1000).toFixed(1);
    const quality = data.validation.quality || 'UNKNOWN';
    logger.pass(`${ville} → ${quality} in ${durationSec}s`);
    
    return { slug, status: 'SUCCESS', quality, duration: Number(durationSec) }; 

  } catch (error) {
    if (retryCount < MAX_RETRIES) {
      logger.warn(`Retry ${retryCount + 1}/${MAX_RETRIES} for ${ville}: ${error.message}`);
      return processCommune(commune, retryCount + 1);
    } else {
      const durationSec = ((Date.now() - start) / 1000).toFixed(1);
      logger.error(`FAILED ${ville} after ${MAX_RETRIES} retries: ${error.message}`);
      return { slug, status: 'ERROR', error: error.message, duration: Number(durationSec) };
    }
  }
}

async function run() {
  const startTime = Date.now();
  
  if (!fs.existsSync(BATCH_FILE)) {
    logger.error(`Batch file not found: ${BATCH_FILE}`);
    process.exit(1);
  }

  const batchSlugs = JSON.parse(fs.readFileSync(BATCH_FILE, 'utf-8'));
  const allCommunes = JSON.parse(fs.readFileSync(VILLES_JSON, 'utf-8'));
  
  const batch = allCommunes.filter(c => batchSlugs.includes(c.slug));
  
  logger.info(`Starting batch fetch for ${batch.length} communes (concurrency: ${CONCURRENCY})...`);

  const results = [];
  let successCount = 0;
  let failedCount = 0;
  let skippedCount = 0;

  // Serial processing (concurrency = 1 for Overpass)
  for (const commune of batch) {
    const outFile = path.join(OUT_DIR, `${commune.slug}.json`);
    
    // Check if already valid (cache permanent)
    if (fs.existsSync(outFile)) {
      try {
        const data = JSON.parse(fs.readFileSync(outFile, 'utf-8'));
        if (data.validation && data.validation.status === 'SUCCESS') {
          skippedCount++;
          const quality = data.validation.quality || '?';
          logger.info(`[SKIP] ${commune.ville} (${quality})`);
          results.push({ slug: commune.slug, status: 'SKIPPED', quality, duration: 0 });
          continue;
        }
      } catch(e) {}
    }
    
    const res = await processCommune(commune);
    results.push(res);
    if (res.status === 'SUCCESS') successCount++;
    else if (res.status === 'ERROR') failedCount++;
  }

  const durationSec = ((Date.now() - startTime) / 1000).toFixed(1);
  
  logger.info(`\nBatch finished in ${durationSec}s.`);
  logger.info(`  Success: ${successCount} | Failed: ${failedCount} | Skipped: ${skippedCount}`);

  const report = {
    batch: "phase4-1",
    pipelineVersion: "4.2",
    concurrency: CONCURRENCY,
    retries: MAX_RETRIES,
    timeout: TIMEOUT_MS,
    processed: batch.length,
    success: successCount,
    failed: failedCount,
    skipped: skippedCount,
    duration: `${durationSec}s`,
    startedAt: new Date(startTime).toISOString(),
    finishedAt: new Date().toISOString(),
    communes: results
  };

  if (!fs.existsSync(configPaths.reports)) {
    fs.mkdirSync(configPaths.reports, { recursive: true });
  }

  fs.writeFileSync(REPORT_FILE, JSON.stringify(report, null, 2), 'utf-8');
  logger.pass(`Report → ${REPORT_FILE}`);

  if (failedCount > 0) {
    logger.error(`${failedCount} commune(s) failed. Exiting with code 1.`);
    process.exit(1);
  }
}

run().catch(err => {
  logger.error(`Critical error: ${err.message}`);
  process.exit(1);
});
