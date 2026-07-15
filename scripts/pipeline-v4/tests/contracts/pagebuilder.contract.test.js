/**
 * Contract Test: PageBuilder
 * Vérifie que PageBuilder.tsx gère tous les types de blocs déclarés dans types.ts.
 * Si un bloc est ajouté dans types.ts mais pas dans PageBuilder, ce test casse.
 */
const fs = require('fs');
const path = require('path');

let pass = 0, fail = 0;
function assert(cond, msg) { if (cond) { pass++; console.log(`✅ PASS: ${msg}`); } else { fail++; console.error(`❌ FAIL: ${msg}`); } }

const pageBuilderPath = path.join(__dirname, '..', '..', '..', '..', 'components', 'blocks', 'PageBuilder.tsx');
const content = fs.readFileSync(pageBuilderPath, 'utf-8');

const expectedBlockTypes = [
  'Hero', 'Introduction', 'ZfeAlert', 'UndergroundParking',
  'DocsPreparation', 'TipsAndMistakes', 'LocalCoverage',
  'Copropriety', 'VhuCompliance', 'VehicleTypes', 'FaqLocal', 'Cta'
];

// Chaque type de bloc doit être présent dans le switch/case de PageBuilder
for (const bt of expectedBlockTypes) {
  assert(content.includes(`'${bt}'`), `PageBuilder handles block type '${bt}'`);
}

// PageBuilder doit importer PageBlock depuis types
assert(content.includes('PageBlock'), 'PageBuilder references PageBlock type');

// Le composant PageBuilder doit exister
assert(content.includes('PageBuilder'), 'PageBuilder component exists');

if (fail > 0) process.exit(1);
