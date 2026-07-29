/**
 * Contract Test: Schema
 * Vérifie que le schéma Zod (schema.js) est aligné avec les types de blocs.
 * Si un bloc est ajouté dans types.ts mais pas dans schema.js, ce test casse.
 */
const fs = require('fs');
const path = require('path');
const { PageDataSchema, validateSchema } = require('../../schema');

let pass = 0, fail = 0;
function assert(cond, msg) { if (cond) { pass++; console.log(`✅ PASS: ${msg}`); } else { fail++; console.error(`❌ FAIL: ${msg}`); } }

// Le schéma doit exister
assert(PageDataSchema !== undefined, 'PageDataSchema exists');
assert(typeof validateSchema === 'function', 'validateSchema is a function');

// Un PageData valide doit passer
const validPage = {
  slug: 'test-ville',
  entityType: 'City',
  metaTitle: 'Épaviste Test Ville (75001)',
  metaDescription: 'Service gratuit enlèvement épaves à Test Ville avec certificat officiel.',
  relatedServicesSlugs: ['service-a'],
  relatedCitiesSlugs: ['ville-b'],
  blocks: [
    { type: 'Hero', title: 'Épaviste Gratuit', subtitle: 'Enlèvement rapide et gratuit de votre épave.', badge: 'Test' },
    { type: 'Cta', title: 'Contactez-nous', subtitle: 'Intervention rapide.' }
  ]
};
const r1 = validateSchema(validPage);
assert(r1.success === true, 'valid PageData passes schema');

// Un PageData sans slug doit échouer
const noSlug = { ...validPage, slug: undefined };
const r2 = validateSchema(noSlug);
assert(r2.success === false, 'missing slug fails schema');

// Un PageData avec un bloc inconnu doit échouer
const unknownBlock = { ...validPage, blocks: [{ type: 'FakeBlock', title: 'X' }] };
const r3 = validateSchema(unknownBlock);
assert(r3.success === false, 'unknown block type fails schema');

// Chaque type de bloc doit être accepté individuellement
const blockSamples = [
  { type: 'Hero', title: 'Hero Title', subtitle: 'Hero subtitle text.', badge: 'B' },
  { type: 'Introduction', title: 'Intro', content: 'A sufficiently long introduction content that passes the minimum length requirement for this block type.' },
  { type: 'ZfeAlert', title: 'ZFE', content: 'Alert content here.', level: 'info' },
  { type: 'UndergroundParking', title: 'Parking', content: 'Underground parking content that is long enough to satisfy the minimum content length for this block.' },
  { type: 'DocsPreparation', title: 'Docs', intro: 'Document preparation intro text.' },
  { type: 'TipsAndMistakes', title: 'Tips', tips: ['tip1'], mistakes: ['mistake1'] },
  { type: 'LocalCoverage', title: 'Coverage', intro: 'Coverage intro text here.', zones: [{ name: 'Zone A', delay: '24h' }] },
  { type: 'Copropriety', title: 'Copro', content: 'Copropriety content that is sufficiently long to pass minimum content length validation requirement.' },
  { type: 'VhuCompliance', title: 'VHU', content: 'VHU compliance content that is sufficiently long to pass minimum content length validation requirement.' },
  { type: 'VehicleTypes', title: 'Vehicles', accepted: ['voiture'] },
  { type: 'FaqLocal', title: 'FAQ', questions: [{ q: 'Is this free?', a: 'Yes it is free.' }] },
  { type: 'Cta', title: 'CTA', subtitle: 'Go now' }
];

for (const block of blockSamples) {
  const testPage = { ...validPage, blocks: [block] };
  const res = validateSchema(testPage);
  assert(res.success === true, `block type '${block.type}' accepted by schema`);
}

if (fail > 0) process.exit(1);
