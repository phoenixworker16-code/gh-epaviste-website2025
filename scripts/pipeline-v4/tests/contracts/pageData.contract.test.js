/**
 * Contract Test: PageData
 * Vérifie que la structure de PageData dans types.ts n'a pas changé.
 * Si quelqu'un modifie les champs obligatoires, ce test casse.
 */
const fs = require('fs');
const path = require('path');

let pass = 0, fail = 0;
function assert(cond, msg) { if (cond) { pass++; console.log(`✅ PASS: ${msg}`); } else { fail++; console.error(`❌ FAIL: ${msg}`); } }

const typesPath = path.join(__dirname, '..', '..', '..', '..', 'data', 'types.ts');
const content = fs.readFileSync(typesPath, 'utf-8');

// Vérifier que les types de blocs attendus existent
const expectedBlockTypes = [
  'Hero', 'Introduction', 'ZfeAlert', 'UndergroundParking',
  'DocsPreparation', 'TipsAndMistakes', 'LocalCoverage',
  'Copropriety', 'VhuCompliance', 'VehicleTypes', 'FaqLocal', 'Cta'
];

for (const bt of expectedBlockTypes) {
  assert(content.includes(`'${bt}'`), `BlockType contains '${bt}'`);
}

// Vérifier que PageData existe et a les champs attendus
assert(content.includes('export interface PageData'), 'PageData interface exists');
assert(content.includes('slug:'), 'PageData has slug');
assert(content.includes('metaTitle:'), 'PageData has metaTitle');
assert(content.includes('metaDescription:'), 'PageData has metaDescription');
assert(content.includes('entityType:'), 'PageData has entityType');
assert(content.includes('blocks:'), 'PageData has blocks');
assert(content.includes('relatedServicesSlugs'), 'PageData has relatedServicesSlugs');
assert(content.includes('relatedCitiesSlugs'), 'PageData has relatedCitiesSlugs');

// Vérifier que BaseBlock existe
assert(content.includes('export interface BaseBlock'), 'BaseBlock interface exists');
assert(content.includes('type: BlockType'), 'BaseBlock has type field');

// Vérifier les interfaces de chaque bloc
assert(content.includes('export interface HeroBlock'), 'HeroBlock interface exists');
assert(content.includes('export interface IntroductionBlock'), 'IntroductionBlock exists');
assert(content.includes('export interface FaqLocalBlock'), 'FaqLocalBlock exists');
assert(content.includes('export interface CtaBlock'), 'CtaBlock exists');

if (fail > 0) process.exit(1);
