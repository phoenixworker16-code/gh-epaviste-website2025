/**
 * Integration Test: Batch
 * Vérifie que la génération par lots fonctionne correctement.
 * 20 communes × 3 runs → résultats identiques.
 */
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { buildPageData } = require('../../data-builder');
const { generateTypeScript } = require('../../code-generator');

let pass = 0, fail = 0;
function assert(cond, msg) { if (cond) { pass++; console.log(`✅ PASS: ${msg}`); } else { fail++; console.error(`❌ FAIL: ${msg}`); } }

const villes = JSON.parse(fs.readFileSync(path.join(__dirname, '..', '..', '..', '..', 'data', 'villes.json'), 'utf-8'));
const batch = villes.slice(0, 20);

function generateBatchHash(communes) {
  const hasher = crypto.createHash('sha256');
  for (const commune of communes) {
    const page = buildPageData(commune);
    const code = generateTypeScript(page);
    hasher.update(code);
  }
  return hasher.digest('hex');
}

// Run 1
const hash1 = generateBatchHash(batch);

// Run 2
const hash2 = generateBatchHash(batch);

// Run 3
const hash3 = generateBatchHash(batch);

assert(hash1 === hash2, 'Batch run 1 == run 2');
assert(hash2 === hash3, 'Batch run 2 == run 3');
assert(hash1 === hash3, 'Batch run 1 == run 3');

console.log(`Batch hash (20 communes): ${hash1}`);

if (fail > 0) process.exit(1);
