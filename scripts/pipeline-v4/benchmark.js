/**
 * Benchmark — Mesure les performances du pipeline par étape.
 * Teste avec 10, 50, 100, 200 communes.
 */
const fs = require('fs');
const path = require('path');
const { buildPageData } = require('./data-builder');
const { validateSchema } = require('./schema');
const { validateBusinessRules } = require('./business-validator');
const { auditLegal } = require('./legal-validator');
const { generateTypeScript } = require('./code-generator');

const villes = JSON.parse(fs.readFileSync(path.join(__dirname, '..', '..', 'data', 'villes.json'), 'utf-8'));

function bench(label, fn) {
  const start = process.hrtime.bigint();
  fn();
  const end = process.hrtime.bigint();
  return Number(end - start) / 1e6; // ms
}

function runBatch(size) {
  const batch = [];
  // Cycle through available communes if size > villes.length
  for (let i = 0; i < size; i++) {
    batch.push(villes[i % villes.length]);
  }

  const memBefore = process.memoryUsage().heapUsed;

  let buildMs = 0, schemaMs = 0, businessMs = 0, legalMs = 0, genMs = 0;

  for (const commune of batch) {
    let page;
    buildMs += bench('build', () => { page = buildPageData(commune); });
    schemaMs += bench('schema', () => { validateSchema(page); });
    businessMs += bench('business', () => { validateBusinessRules(page, commune); });
    legalMs += bench('legal', () => { auditLegal(page); });
    genMs += bench('gen', () => { generateTypeScript(page); });
  }

  const memAfter = process.memoryUsage().heapUsed;
  const memDelta = ((memAfter - memBefore) / 1024 / 1024).toFixed(2);

  console.log(`\n${'═'.repeat(50)}`);
  console.log(`📊 Benchmark: ${size} communes`);
  console.log(`${'═'.repeat(50)}`);
  console.log(`  Build PageData ... ${buildMs.toFixed(1)} ms`);
  console.log(`  Schema ........... ${schemaMs.toFixed(1)} ms`);
  console.log(`  Business ......... ${businessMs.toFixed(1)} ms`);
  console.log(`  Legal ............ ${legalMs.toFixed(1)} ms`);
  console.log(`  Generator ........ ${genMs.toFixed(1)} ms`);
  console.log(`  TOTAL ............ ${(buildMs + schemaMs + businessMs + legalMs + genMs).toFixed(1)} ms`);
  console.log(`  RAM delta ........ ${memDelta} MB`);
}

console.log('🚀 Starting Benchmark...');
runBatch(10);
runBatch(50);
runBatch(100);
runBatch(200);
console.log('\n✅ Benchmark complete.');
