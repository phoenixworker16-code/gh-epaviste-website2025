/**
 * Stress Test — 1000 générations en mémoire.
 * Vérifie : pas de crash, pas de fuite mémoire, pas de ralentissement exponentiel.
 */
const fs = require('fs');
const path = require('path');
const { buildPageData } = require('./data-builder');
const { generateTypeScript } = require('./code-generator');

const villes = JSON.parse(fs.readFileSync(path.join(__dirname, '..', '..', 'data', 'villes.json'), 'utf-8'));
const ITERATIONS = 1000;

console.log(`🔥 Stress Test: ${ITERATIONS} générations en mémoire...\n`);

const memStart = process.memoryUsage().heapUsed;
const timeStart = Date.now();

let generated = 0;
const checkpoints = [100, 250, 500, 750, 1000];

for (let i = 0; i < ITERATIONS; i++) {
  const commune = villes[i % villes.length];
  const page = buildPageData(commune);
  const code = generateTypeScript(page);
  // Keep code in memory briefly to simulate real usage, then discard
  if (code.length < 10) throw new Error('Generated code too short');
  generated++;

  if (checkpoints.includes(generated)) {
    const mem = ((process.memoryUsage().heapUsed - memStart) / 1024 / 1024).toFixed(2);
    const elapsed = Date.now() - timeStart;
    console.log(`  [${generated}/${ITERATIONS}] — ${elapsed} ms elapsed, +${mem} MB RAM`);
  }
}

const totalTime = Date.now() - timeStart;
const memEnd = process.memoryUsage().heapUsed;
const memDelta = ((memEnd - memStart) / 1024 / 1024).toFixed(2);

console.log(`\n${'═'.repeat(50)}`);
console.log(`📊 Stress Test Results`);
console.log(`${'═'.repeat(50)}`);
console.log(`  Iterations ......... ${ITERATIONS}`);
console.log(`  Total time ......... ${totalTime} ms`);
console.log(`  Avg per commune .... ${(totalTime / ITERATIONS).toFixed(2)} ms`);
console.log(`  RAM delta .......... ${memDelta} MB`);
console.log(`  Status ............. ${memDelta < 100 ? '✅ PASS' : '⚠️  HIGH MEMORY'}`);
console.log(`${'═'.repeat(50)}\n`);
