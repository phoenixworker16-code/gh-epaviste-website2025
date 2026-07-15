const crypto = require('crypto');
const { generateTypeScript } = require('../../code-generator');

function assertThrows(fn, testName) {
  try {
    fn();
    console.error(`❌ FAIL: ${testName} - expected to throw`);
    process.exitCode = 1;
  } catch (e) {
    console.log(`✅ PASS: ${testName} (threw: ${e.message})`);
  }
}

function assertEqual(actual, expected, testName) {
  if (actual === expected) {
    console.log(`✅ PASS: ${testName}`);
  } else {
    console.error(`❌ FAIL: ${testName}\nExpected:\n${expected}\nActual:\n${actual}`);
    process.exitCode = 1;
  }
}

function hashString(str) {
  return crypto.createHash('sha256').update(str).digest('hex');
}

console.log("--- Running Generator Tests ---");

// Test 1: Validation défensive
assertThrows(() => generateTypeScript(), 'pageData undefined');
assertThrows(() => generateTypeScript({}), 'slug invalid');
assertThrows(() => generateTypeScript({ slug: 'test' }), 'blocks undefined');
assertThrows(() => generateTypeScript({ slug: 'test', blocks: 'not-an-array' }), 'blocks not an array');
assertThrows(() => generateTypeScript({ slug: 'test', blocks: [] }), 'blocks empty');

// Test 2: Bloc inconnu ou malformé
assertThrows(() => generateTypeScript({ slug: 'test', blocks: [{ type: 'UnknownBlock' }] }), 'Unknown block type');
assertThrows(() => generateTypeScript({ slug: 'test', blocks: [{}] }), 'Missing block type');

// Test 3: Formatting complexe (apostrophes, emojis, HTML, tableaux vides)
const complexData = {
  slug: 'test-ville',
  entityType: 'City',
  metaTitle: 'L\'épaviste de l\'année 🚀',
  metaDescription: '<p>Intervention 100% "gratuite" et éco-responsable.</p>',
  relatedServicesSlugs: [],
  relatedCitiesSlugs: ['paris'],
  blocks: [
    {
      type: 'Introduction',
      title: 'L\'introduction avec un \' !',
      content: 'Du texte avec des "guillemets" et des emojis 🚙.'
    }
  ]
};

const code1 = generateTypeScript(complexData);
const code2 = generateTypeScript(complexData);

// Test 4: Déterminisme
assertEqual(hashString(code1), hashString(code2), 'Déterminisme - Deux exécutions successives produisent un hash identique');

// Test 5: Vérification du contenu formatté
const expectedCodeFragment = `  metaTitle: 'L\\'épaviste de l\\'année 🚀',`;
if (code1.includes(expectedCodeFragment)) {
  console.log(`✅ PASS: Échappement des apostrophes et emojis`);
} else {
  console.error(`❌ FAIL: Échappement des apostrophes - Contenu généré incorrect`);
  process.exitCode = 1;
}

if (code1.includes(`  relatedServicesSlugs: []`)) {
  console.log(`✅ PASS: Formatage de tableau vide`);
} else {
  console.error(`❌ FAIL: Formatage de tableau vide incorrect`);
  process.exitCode = 1;
}

console.log("\nTests finished.");
