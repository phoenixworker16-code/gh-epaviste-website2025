const { auditLegal } = require('../../legal-validator');

let pass = 0, fail = 0;
function assert(cond, msg) { if (cond) { pass++; console.log(`✅ PASS: ${msg}`); } else { fail++; console.error(`❌ FAIL: ${msg}`); } }

const cleanPage = {
  slug: 'paris',
  entityType: 'City',
  metaTitle: 'Épaviste Paris',
  metaDescription: 'Service gratuit enlèvement épaves Paris.',
  relatedServicesSlugs: [],
  relatedCitiesSlugs: [],
  blocks: [
    { type: 'Hero', title: 'Épaviste Gratuit à Paris', subtitle: 'Enlèvement gratuit.', badge: 'Paris' },
    { type: 'Cta', title: 'Contactez-nous', subtitle: 'Intervention rapide.' }
  ]
};

// Clean page should pass
const r1 = auditLegal(cleanPage);
assert(r1.success === true, 'clean page passes legal audit');
assert(r1.errors.length === 0, 'no legal errors on clean page');

// Return type
assert(typeof r1.success === 'boolean', 'success is boolean');
assert(Array.isArray(r1.errors), 'errors is array');

if (fail > 0) process.exit(1);
