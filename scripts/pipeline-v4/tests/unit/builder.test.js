const { buildPageData } = require('../../data-builder');

let pass = 0, fail = 0;
function assert(cond, msg) { if (cond) { pass++; console.log(`✅ PASS: ${msg}`); } else { fail++; console.error(`❌ FAIL: ${msg}`); } }

const commune = { ville: 'Paris', slug: 'paris', zipCode: '75001', departement: 'Paris', depNumber: '75' };
const page = buildPageData(commune);

assert(page.slug === 'paris', 'slug is correct');
assert(page.entityType === 'City', 'entityType is City');
assert(page.metaTitle.includes('Paris'), 'metaTitle contains ville');
assert(page.metaTitle.includes('75001'), 'metaTitle contains zipCode');
assert(page.metaDescription.includes('Paris'), 'metaDescription contains ville');
assert(Array.isArray(page.blocks), 'blocks is an array');
assert(page.blocks.length >= 5, 'at least 5 blocks');
assert(page.blocks[0].type === 'Hero', 'first block is Hero');
assert(page.blocks[page.blocks.length - 1].type === 'Cta', 'last block is Cta');
assert(Array.isArray(page.relatedServicesSlugs), 'relatedServicesSlugs is array');
assert(page.relatedCitiesSlugs[0] === 'enlevement-epave-paris', 'relatedCitiesSlugs maps department');

// Test with accented commune
const commune2 = { ville: 'Achères-la-Forêt', slug: 'acheres-la-foret', zipCode: '77760', departement: 'Seine-et-Marne', depNumber: '77' };
const page2 = buildPageData(commune2);
assert(page2.slug === 'acheres-la-foret', 'accented commune slug ok');
assert(page2.metaTitle.includes('Achères-la-Forêt'), 'accented ville in metaTitle');
assert(page2.relatedCitiesSlugs[0] === 'enlevement-epave-seine-et-marne', 'dep 77 maps to seine-et-marne');

if (fail > 0) process.exit(1);
