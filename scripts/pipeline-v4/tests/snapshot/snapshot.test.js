const { normalizeHtml } = require('../../snapshot/normalizer');
const { extractStructure, compareStructure } = require('../../snapshot/compare');
const crypto = require('crypto');

function hashHtml(html) {
  return crypto.createHash('sha256').update(normalizeHtml(html)).digest('hex');
}

function testCompare(oldHtml, newHtml, expectedStatus) {
  const oldNorm = normalizeHtml(oldHtml);
  const newNorm = normalizeHtml(newHtml);
  const oldHash = hashHtml(oldHtml);
  const newHash = hashHtml(newHtml);

  if (oldHash === newHash) {
    if (expectedStatus === 'PASS') {
      console.log('✅ PASS: Hashes are identical as expected.');
    } else {
      console.error(`❌ FAIL: Expected ${expectedStatus} but hashes were identical.`);
      process.exitCode = 1;
    }
    return;
  }

  const oldStruct = extractStructure(oldNorm);
  const newStruct = extractStructure(newNorm);
  
  const { status, diffs } = compareStructure(oldStruct, newStruct);
  
  if (status === expectedStatus) {
    console.log(`✅ PASS: Expected ${expectedStatus}, got ${status}. Diffs: ${diffs.join(', ')}`);
  } else {
    console.error(`❌ FAIL: Expected ${expectedStatus}, got ${status}. Diffs: ${diffs.join(', ')}`);
    process.exitCode = 1;
  }
}

const baseHtml = `
<html>
<head><title>Test</title><link rel="canonical" href="..."></head>
<body>
  <main id="__next" data-reactroot="">
    <h1>Main Title</h1>
    <h2>Section 1</h2>
    <section>
      <p>Content</p>
    </section>
  </main>
</body>
</html>
`;

console.log("--- Test: Même HTML ---");
testCompare(baseHtml, baseHtml, 'PASS');

console.log("--- Test: Même DOM avec espaces différents ---");
const spaceHtml = baseHtml.replace('<p>Content</p>', '  <p>  Content  </p>  \\n  <!-- comment -->');
testCompare(baseHtml, spaceHtml, 'PASS');

console.log("--- Test: Même DOM avec ids React différents ---");
const reactHtml = baseHtml.replace('id="__next"', 'id="__next" data-reactid="1234" nonce="xyz"');
testCompare(baseHtml, reactHtml, 'PASS');

console.log("--- Test: Ajout d'un H3 ---");
const addH3Html = baseHtml.replace('</section>', '<h3>Subtitle</h3></section>');
testCompare(baseHtml, addH3Html, 'WARNING');

console.log("--- Test: Suppression du H1 ---");
const noH1Html = baseHtml.replace('<h1>Main Title</h1>', '');
testCompare(baseHtml, noH1Html, 'FAIL');

console.log("--- Test: Suppression du main ---");
const noMainHtml = baseHtml.replace('<main id="__next" data-reactroot="">', '<div>').replace('</main>', '</div>');
testCompare(baseHtml, noMainHtml, 'FAIL');

console.log("--- Test: Ajout d'une FAQ ---");
const addFaqHtml = baseHtml.replace('</section>', '</section><details><summary>Q</summary><p>A</p></details>');
testCompare(baseHtml, addFaqHtml, 'WARNING');
