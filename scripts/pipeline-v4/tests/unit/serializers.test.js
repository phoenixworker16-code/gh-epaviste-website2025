const { serializeBlock } = require('../../serializers');

let pass = 0, fail = 0;
function assert(cond, msg) { if (cond) { pass++; console.log(`✅ PASS: ${msg}`); } else { fail++; console.error(`❌ FAIL: ${msg}`); } }
function assertThrows(fn, msg) { try { fn(); fail++; console.error(`❌ FAIL: ${msg} (did not throw)`); } catch(e) { pass++; console.log(`✅ PASS: ${msg}`); } }

// Hero
const hero = serializeBlock({ type: 'Hero', title: 'Test', subtitle: 'Sub', badge: 'B' });
assert(hero.includes("type: 'Hero'"), 'Hero type serialized');
assert(hero.includes("title: 'Test'"), 'Hero title serialized');
assert(hero.includes("badge: 'B'"), 'Hero badge serialized');

// Introduction
const intro = serializeBlock({ type: 'Introduction', title: 'Intro', content: 'Some long content here for testing purposes which must be at least long enough.' });
assert(intro.includes("type: 'Introduction'"), 'Introduction serialized');

// LocalCoverage with zones
const coverage = serializeBlock({
  type: 'LocalCoverage', title: 'Zones', intro: 'Our coverage zone.',
  zones: [{ name: 'Centre', delay: '24h', specificities: 'Easy access' }]
});
assert(coverage.includes("type: 'LocalCoverage'"), 'LocalCoverage serialized');
assert(coverage.includes('Centre'), 'zone name present');

// FaqLocal with questions
const faq = serializeBlock({
  type: 'FaqLocal', title: 'FAQ',
  questions: [{ q: 'Question?', a: 'Answer.' }]
});
assert(faq.includes("type: 'FaqLocal'"), 'FaqLocal serialized');
assert(faq.includes('Question?'), 'question present');

// Cta
const cta = serializeBlock({ type: 'Cta', title: 'CTA', subtitle: 'Go now' });
assert(cta.includes("type: 'Cta'"), 'Cta serialized');

// DocsPreparation
const docs = serializeBlock({ type: 'DocsPreparation', title: 'Docs', intro: 'Prepare your docs.', specialCase: 'If lost...' });
assert(docs.includes("type: 'DocsPreparation'"), 'DocsPreparation serialized');

// VhuCompliance
const vhu = serializeBlock({ type: 'VhuCompliance', title: 'VHU', content: 'Compliance info that is long enough to pass the serializer test for VHU compliance block.' });
assert(vhu.includes("type: 'VhuCompliance'"), 'VhuCompliance serialized');

// Unknown block type throws
assertThrows(() => serializeBlock({ type: 'FakeBlock' }), 'unknown block throws');

// Missing type throws
assertThrows(() => serializeBlock({}), 'missing type throws');

// Null block throws
assertThrows(() => serializeBlock(null), 'null block throws');

// Determinism: same block twice produces identical output
const hero2 = serializeBlock({ type: 'Hero', title: 'Test', subtitle: 'Sub', badge: 'B' });
assert(hero === hero2, 'deterministic serialization');

// Apostrophes escaped
const heroApostrophe = serializeBlock({ type: 'Hero', title: "L'épaviste", subtitle: "C'est gratuit", badge: 'B' });
assert(heroApostrophe.includes("\\'"), 'apostrophes escaped in serialized output');

if (fail > 0) process.exit(1);
