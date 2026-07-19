/**
 * validate-batch.js
 * Valide un batch avant génération.
 * Usage: node scripts/pipeline-v4/validate-batch.js --batch=phase4-2-batch1
 *
 * Toutes les contraintes sont lues depuis le champ "meta" du fichier batch.
 * Aucune règle codée en dur (ni total, ni quota par département).
 *
 * Vérifie :
 *   1. Format du fichier (meta + slugs requis)
 *   2. Cohérence interne de meta (batchId, version, createdBy, expectedTotal)
 *   3. Aucun slug dupliqué dans le batch
 *   4. Tous les slugs existent dans villes.json
 *   5. Aucun slug ambigu dans villes.json (une seule entrée par slug)
 *   6. Total des slugs = expectedTotal
 *   7. requiredDepartments : tous présents (>= 1 commune)
 *   8. Affichage informatif de la répartition réelle (sans imposer de quotas)
 */
const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const batchArg = args.find(a => a.startsWith('--batch='));

if (!batchArg) {
  console.error('Usage: node validate-batch.js --batch=<nom-du-batch>');
  process.exit(1);
}

const batchName = batchArg.split('=')[1];
const batchPath = path.join(__dirname, '..', '..', 'config', 'batches', `${batchName}.json`);

if (!fs.existsSync(batchPath)) {
  console.error(`❌ Batch file not found: ${batchPath}`);
  process.exit(1);
}

const batchFile = JSON.parse(fs.readFileSync(batchPath, 'utf-8'));

// Rejet de l'ancien format (tableau simple)
if (Array.isArray(batchFile)) {
  console.error('❌ Format obsolète : ce batch est un tableau simple sans "meta".');
  console.error('   Convertissez-le au format { meta: {...}, slugs: [...] }');
  process.exit(1);
}

const { meta, slugs: batchSlugs } = batchFile;
const errors = [];

// --- En-tête ---
console.log(`\n=== Validation du batch : ${meta?.batchId || batchName} ===`);
console.log(`    version    : ${meta?.version    || 'non définie'}`);
console.log(`    createdBy  : ${meta?.createdBy  || 'non défini'}`);
console.log(`    name       : ${meta?.name       || ''}`);
console.log(`    description: ${meta?.description || ''}`);

// 1. Présence des champs obligatoires
if (!meta) {
  console.error('❌ Champ "meta" manquant.');
  process.exit(1);
}
if (!Array.isArray(batchSlugs)) {
  console.error('❌ Champ "slugs" manquant ou invalide.');
  process.exit(1);
}
if (!meta.batchId) {
  errors.push('meta.batchId manquant');
}
if (!meta.version) {
  errors.push('meta.version manquant — attendu ex: "4.2"');
}
if (!meta.createdBy) {
  errors.push('meta.createdBy manquant — attendu "manual" ou "pipeline"');
}
if (meta.expectedTotal === undefined) {
  errors.push('meta.expectedTotal manquant');
}

// 2. Chargement de villes.json + détection des slugs ambigus
const allCommunes = JSON.parse(
  fs.readFileSync(path.join(__dirname, '..', '..', 'data', 'villes.json'), 'utf-8')
);

// Détecter les slugs en double dans villes.json
const slugOccurrences = {};
for (const commune of allCommunes) {
  slugOccurrences[commune.slug] = (slugOccurrences[commune.slug] || 0) + 1;
}
const ambiguousSlugs = Object.entries(slugOccurrences)
  .filter(([, count]) => count > 1)
  .map(([slug, count]) => `${slug} (×${count})`);

if (ambiguousSlugs.length > 0) {
  errors.push(`Slugs ambigus dans villes.json (doublons) : ${ambiguousSlugs.join(', ')}`);
}

const slugSet = new Set(allCommunes.map(c => c.slug));
const slugToCommune = Object.fromEntries(allCommunes.map(c => [c.slug, c]));

// 3. Doublons dans le batch
const seen = new Set();
const duplicates = [];
for (const slug of batchSlugs) {
  if (seen.has(slug)) duplicates.push(slug);
  seen.add(slug);
}
if (duplicates.length > 0) {
  errors.push(`Doublons dans le batch : ${duplicates.join(', ')}`);
}

// 4. Slugs inexistants dans villes.json
const missing = batchSlugs.filter(slug => !slugSet.has(slug));
if (missing.length > 0) {
  errors.push(`Slugs absents de villes.json : ${missing.join(', ')}`);
}

// 5. Total
if (meta.expectedTotal !== undefined && batchSlugs.length !== meta.expectedTotal) {
  errors.push(`Total incorrect : ${batchSlugs.length} communes (attendu : ${meta.expectedTotal})`);
}

// 6. Répartition réelle par département
const depCount = {};
for (const slug of batchSlugs) {
  const commune = slugToCommune[slug];
  if (!commune) continue;
  depCount[commune.depNumber] = (depCount[commune.depNumber] || 0) + 1;
}

// 7. Départements requis présents (>= 1 commune)
console.log('\n--- Départements requis ---');
if (Array.isArray(meta.requiredDepartments)) {
  for (const dep of meta.requiredDepartments) {
    const count = depCount[dep] || 0;
    const status = count > 0 ? '✅' : '❌';
    console.log(`  ${status} ${dep} : ${count} commune(s)`);
    if (count === 0) {
      errors.push(`Département requis "${dep}" absent du batch`);
    }
  }
} else {
  errors.push('meta.requiredDepartments manquant — requis pour vérifier la couverture');
}

// 8. Répartition informative (sans imposer de quotas)
console.log('\n--- Répartition réelle (informatif) ---');
const allDeps = Object.keys(depCount).sort();
for (const dep of allDeps) {
  console.log(`  ${dep} : ${depCount[dep]} commune(s)`);
}

console.log(`\nTOTAL : ${batchSlugs.length} communes (attendu : ${meta.expectedTotal ?? 'non défini'})`);

// --- Résultat final ---
if (errors.length > 0) {
  console.error('\n❌ VALIDATION ÉCHOUÉE :');
  for (const err of errors) console.error(`  - ${err}`);
  process.exit(1);
}

console.log('\n✅ VALIDATION RÉUSSIE — batch prêt à être généré.');