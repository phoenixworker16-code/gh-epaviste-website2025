const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const TESTS_DIR = __dirname;
const PROJECT_ROOT = path.join(__dirname, '..', '..', '..');

function findTests(dir) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(findTests(filePath));
    } else if (file.endsWith('.test.js') && file !== 'runner.js') {
      results.push(filePath);
    }
  }
  return results;
}

const testFiles = findTests(TESTS_DIR);

if (testFiles.length === 0) {
  console.log('No tests found.');
  process.exit(0);
}

let totalTests = testFiles.length;
let passed = 0;
let failed = 0;
const start = Date.now();
const results = [];

console.log('\n🚀 Starting Test Runner...\n');

for (const file of testFiles) {
  // Use relative path from root to keep output clean
  const componentName = path.relative(TESTS_DIR, file).replace(/\\/g, '/').replace('.test.js', '');
  try {
    execSync(`node "${file}"`, { cwd: PROJECT_ROOT, stdio: 'pipe' });
    console.log(`✅ PASS: ${componentName}`);
    results.push({ component: componentName, status: 'PASS' });
    passed++;
  } catch (error) {
    console.log(`❌ FAIL: ${componentName}`);
    if (error.stdout) console.error(error.stdout.toString());
    if (error.stderr) console.error(error.stderr.toString());
    results.push({ component: componentName, status: 'FAIL' });
    failed++;
  }
}

const duration = ((Date.now() - start) / 1000).toFixed(2);

console.log(`\n${'═'.repeat(40)}`);
console.log('📊 Test Summary');
console.log(`${'═'.repeat(40)}`);
console.log(`Components tested: ${totalTests}`);
console.log(`Passed: ${passed}`);
console.log(`Failed: ${failed}`);
console.log(`Duration: ${duration} s`);
console.log(`${'═'.repeat(40)}\n`);

for (const res of results) {
  const comp = res.component;
  const padding = ' '.repeat(Math.max(1, 30 - comp.length));
  console.log(`${comp}${padding}${res.status}`);
}
console.log('');

if (failed > 0) {
  process.exit(1);
}
