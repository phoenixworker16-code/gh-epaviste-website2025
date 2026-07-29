/**
 * Integration Test: Pipeline
 * Vérifie que la chaîne generate --dry-run fonctionne de bout en bout.
 */
const { execSync } = require('child_process');
const path = require('path');

let pass = 0, fail = 0;
function assert(cond, msg) { if (cond) { pass++; console.log(`✅ PASS: ${msg}`); } else { fail++; console.error(`❌ FAIL: ${msg}`); } }

const ROOT = path.join(__dirname, '..', '..', '..', '..');

// 1. generate --dry-run doit passer
try {
  const out = execSync('node scripts/pipeline-v4/generate.js --dry-run', { cwd: ROOT, encoding: 'utf-8' });
  assert(out.includes('[PASS]'), 'generate --dry-run produces PASS logs');
  assert(!out.includes('[ERROR]'), 'generate --dry-run has no ERROR');
  assert(out.includes('Summary'), 'generate --dry-run shows summary');
} catch (e) {
  fail++;
  console.error('❌ FAIL: generate --dry-run crashed:', e.message);
}

// 2. compatibility doit passer
try {
  const out = execSync('node scripts/pipeline-v4/compatibility-report.js', { cwd: ROOT, encoding: 'utf-8' });
  assert(out.includes('SUCCESS') || out.includes('passed'), 'compatibility check passes');
} catch (e) {
  fail++;
  console.error('❌ FAIL: compatibility check crashed:', e.message);
}

if (fail > 0) process.exit(1);
