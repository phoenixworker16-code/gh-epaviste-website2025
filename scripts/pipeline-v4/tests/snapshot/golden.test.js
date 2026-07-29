/**
 * Golden Test — Déterminisme byte-for-byte
 * Génère le fichier TS pour Paris et le compare au golden file.
 * Si le moindre caractère change : FAIL.
 * Teste aussi l'idempotence : deux générations successives = même hash SHA-256.
 */
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { buildPageData } = require('../../data-builder');
const { generateTypeScript } = require('../../code-generator');

let pass = 0, fail = 0;
function assert(cond, msg) { if (cond) { pass++; console.log(`✅ PASS: ${msg}`); } else { fail++; console.error(`❌ FAIL: ${msg}`); } }

const villes = JSON.parse(fs.readFileSync(path.join(__dirname, '..', '..', '..', '..', 'data', 'villes.json'), 'utf-8'));
const parisCommune = villes.find(c => c.slug === 'paris');

// 1. Golden comparison byte-for-byte
const goldenPath = path.join(__dirname, '..', 'golden', 'paris.ts');
const goldenContent = fs.readFileSync(goldenPath, 'utf-8');

const page = buildPageData(parisCommune);
const generated = generateTypeScript(page);

assert(generated === goldenContent, 'Golden: generated matches golden file byte-for-byte');

// 2. Idempotence: generate twice, same result
const page2 = buildPageData(parisCommune);
const generated2 = generateTypeScript(page2);

const hash1 = crypto.createHash('sha256').update(generated).digest('hex');
const hash2 = crypto.createHash('sha256').update(generated2).digest('hex');

assert(hash1 === hash2, 'Idempotence: two generations produce identical SHA-256');

// 3. Test with another commune
const acheres = villes.find(c => c.slug === 'acheres-la-foret');
if (acheres) {
  const pageA1 = buildPageData(acheres);
  const codeA1 = generateTypeScript(pageA1);
  const pageA2 = buildPageData(acheres);
  const codeA2 = generateTypeScript(pageA2);
  assert(codeA1 === codeA2, 'Idempotence: Achères-la-Forêt two runs identical');
}

if (fail > 0) process.exit(1);
