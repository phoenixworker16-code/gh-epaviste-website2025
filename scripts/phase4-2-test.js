const fs = require('fs');
const path = require('path');
const { root, paths: configPaths } = require('./pipeline-v4/config/paths');
const { buildPageData } = require('./pipeline-v4/data-builder');
const { validateSchema } = require('./pipeline-v4/schema');
const { validateBusinessRules } = require('./pipeline-v4/business-validator');
const { auditLegal } = require('./pipeline-v4/legal-validator');
const { getEditorialTextFromObject, getEditorialHash, calculateSimilarity } = require('./detect-duplicates');
const logger = require('./pipeline-v4/logger');

const BATCH_FILE = path.join(root, 'config', 'batches', 'phase4-1.json');
const VILLES_JSON = path.join(root, 'data', 'villes.json');

function countFaqs(pageData) {
  const faqBlock = pageData.blocks.find(b => b.type === 'FaqLocal');
  return faqBlock && faqBlock.questions ? faqBlock.questions.length : 0;
}

function countLocalCoverageZones(pageData) {
  const covBlock = pageData.blocks.find(b => b.type === 'LocalCoverage');
  return covBlock && covBlock.zones ? covBlock.zones.length : 0;
}

async function runTest() {
  const batchSlugs = JSON.parse(fs.readFileSync(BATCH_FILE, 'utf-8'));
  const allCommunes = JSON.parse(fs.readFileSync(VILLES_JSON, 'utf-8'));
  const batch = allCommunes.filter(c => batchSlugs.includes(c.slug));

  const pages = [];
  const hashes = new Set();
  const profileDistribution = {};
  
  let allPass = true;

  logger.info(`Génération de ${batch.length} communes pour la Phase 4.2...`);

  for (const commune of batch) {
    const pageData = buildPageData(commune);
    
    // 1. Validations existantes
    const schemaRes = validateSchema(pageData);
    if (!schemaRes.success) { logger.error(`${commune.ville}: Schema Error`); allPass = false; }
    
    const busRes = validateBusinessRules(pageData, commune);
    if (!busRes.success) { logger.error(`${commune.ville}: Business Error`); allPass = false; }
    
    const legalRes = auditLegal(pageData);
    if (!legalRes.success) { logger.error(`${commune.ville}: Legal Error`); allPass = false; }
    
    pages.push(pageData);

    // 2. Hash Editoriale
    const hash = getEditorialHash(pageData);
    if (hashes.has(hash)) {
      logger.error(`[FAIL] Empreinte éditoriale dupliquée détectée: ${hash} pour ${commune.ville}`);
      allPass = false;
    }
    hashes.add(hash);
    
    // 3. Distribution des profils
    const profile = pageData._profile || 'unknown';
    profileDistribution[profile] = (profileDistribution[profile] || 0) + 1;
  }

  // Enregistrer le rapport de profils
  if (!fs.existsSync(configPaths.reports)) {
    fs.mkdirSync(configPaths.reports, { recursive: true });
  }
  const distFile = path.join(configPaths.reports, 'profile-distribution.json');
  fs.writeFileSync(distFile, JSON.stringify(profileDistribution, null, 2));
  logger.pass(`Distribution des profils sauvegardée dans ${distFile}`);
  console.log(profileDistribution);

  // 4. Calcul Jaccard (toutes les paires)
  logger.info('Calcul de similarité Jaccard entre toutes les paires...');
  let totalPairs = 0;
  let pairsUnder65 = 0;
  let maxSimilarity = 0;
  
  for (let i = 0; i < pages.length; i++) {
    const text1 = getEditorialTextFromObject(pages[i]);
    for (let j = i + 1; j < pages.length; j++) {
      const text2 = getEditorialTextFromObject(pages[j]);
      const sim = calculateSimilarity(text1, text2) * 100;
      
      totalPairs++;
      if (sim < 65) pairsUnder65++;
      if (sim > maxSimilarity) maxSimilarity = sim;
      
      if (sim > 80) {
        logger.error(`[FAIL] Similarité > 80% détectée entre ${pages[i].slug} et ${pages[j].slug} (${sim.toFixed(1)}%)`);
        allPass = false;
      }
    }
  }
  
  const pctUnder65 = (pairsUnder65 / totalPairs) * 100;
  logger.info(`Statistiques de similarité: Max = ${maxSimilarity.toFixed(1)}%, <65% = ${pctUnder65.toFixed(1)}% des paires`);
  
  if (pctUnder65 < 90) {
    logger.error(`[FAIL] Seulement ${pctUnder65.toFixed(1)}% des paires sont sous 65% (objectif: 90%)`);
    allPass = false;
  }

  // 5. Variance (longueur, H2/sections, FAQ)
  let totalWords = 0;
  let faqsCounts = [];
  let zonesCounts = [];
  
  for (const page of pages) {
    totalWords += getEditorialTextFromObject(page).split(' ').length;
    faqsCounts.push(countFaqs(page));
    zonesCounts.push(countLocalCoverageZones(page));
  }
  
  const avgWords = Math.round(totalWords / pages.length);
  const minFaq = Math.min(...faqsCounts);
  const maxFaq = Math.max(...faqsCounts);
  const minZones = Math.min(...zonesCounts);
  const maxZones = Math.max(...zonesCounts);
  
  logger.info(`Longueur moyenne (éditorial brut): ${avgWords} mots`);
  logger.info(`Variance FAQs: de ${minFaq} à ${maxFaq} questions`);
  logger.info(`Variance Zones Couverture: de ${minZones} à ${maxZones} zones`);

  if (allPass) {
    logger.pass(`[SUCCÈS] Tous les critères de la Phase 4.2 sont respectés !`);
  } else {
    logger.error(`[ÉCHEC] Des critères de la Phase 4.2 n'ont pas été atteints.`);
    process.exit(1);
  }
}

runTest();
