const { validateBusinessRules } = require('../../business-validator');

let pass = 0, fail = 0;
function assert(cond, msg) { if (cond) { pass++; console.log(`✅ PASS: ${msg}`); } else { fail++; console.error(`❌ FAIL: ${msg}`); } }

const validPage = {
  slug: 'paris',
  entityType: 'City',
  metaTitle: 'Épaviste Paris (75001)',
  metaDescription: 'Service gratuit enlèvement épaves Paris.',
  relatedServicesSlugs: [],
  relatedCitiesSlugs: [],
  blocks: [
    { type: 'Hero', title: 'Épaviste Gratuit à Paris', subtitle: 'Enlèvement gratuit et professionnel.', badge: 'Paris' },
    { type: 'Introduction', title: 'Votre épaviste', content: 'Un contenu suffisamment long pour passer la validation métier du bloc Introduction qui exige 50 caractères minimum.' },
    { type: 'Cta', title: 'Contactez-nous', subtitle: 'Intervention rapide et gratuite.' }
  ]
};
const commune = { slug: 'paris', ville: 'Paris', zipCode: '75001' };

// Valid case
const r1 = validateBusinessRules(validPage, commune);
assert(r1.success === true, 'valid page passes');
assert(r1.errors.length === 0, 'no errors on valid page');

// Missing Hero
const noHero = { ...validPage, blocks: [{ type: 'Cta', title: 'CTA', subtitle: 'Call to action.' }] };
const r2 = validateBusinessRules(noHero, commune);
assert(r2.success === false, 'missing Hero fails');

// Missing CTA
const noCta = { ...validPage, blocks: [{ type: 'Hero', title: 'Hero', subtitle: 'Subtitle here ok.', badge: 'B' }] };
const r3 = validateBusinessRules(noCta, commune);
assert(r3.success === false, 'missing CTA fails');

// Slug mismatch
const r4 = validateBusinessRules(validPage, { slug: 'nanterre' });
assert(r4.success === false, 'slug mismatch fails');

// Invalid entityType
const badEntity = { ...validPage, entityType: 'Unknown' };
const r5 = validateBusinessRules(badEntity, commune);
assert(r5.success === false, 'invalid entityType fails');

// Invalid slug characters
const badSlug = { ...validPage, slug: 'Paris_75!' };
const r6 = validateBusinessRules(badSlug, { slug: 'Paris_75!' });
assert(r6.success === false, 'invalid slug characters fails');

// Fake phone number
const fakeTel = { ...validPage, blocks: [
  { type: 'Hero', title: 'Épaviste', subtitle: 'Appelez 01 23 45 67 89', badge: 'B' },
  { type: 'Cta', title: 'CTA', subtitle: 'Go' }
] };
const r7 = validateBusinessRules(fakeTel, commune);
assert(r7.success === false, 'fake phone number detected');

// Short introduction warning
const shortIntro = {
  ...validPage,
  blocks: [
    { type: 'Hero', title: 'Épaviste', subtitle: 'Enlèvement gratuit.', badge: 'B' },
    { type: 'Introduction', title: 'Intro', content: 'Court.' },
    { type: 'Cta', title: 'CTA', subtitle: 'Go' }
  ]
};
const r8 = validateBusinessRules(shortIntro, commune);
assert(r8.warnings.length > 0, 'short intro produces warning');

if (fail > 0) process.exit(1);
