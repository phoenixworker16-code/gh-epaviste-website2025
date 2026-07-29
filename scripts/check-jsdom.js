const path = require('path');
const pkg = require(path.join(process.cwd(), 'node_modules', 'jsdom', 'package.json'));
console.log('types:', pkg.types);
console.log('typings:', pkg.typings);
console.log('main:', pkg.main);
console.log('version:', pkg.version);

// Check for index.d.ts at root of jsdom
const fs = require('fs');
const jsdomRoot = path.join(process.cwd(), 'node_modules', 'jsdom');
const candidates = ['index.d.ts', 'jsdom.d.ts', 'lib/jsdom.d.ts'];
candidates.forEach(c => {
  const p = path.join(jsdomRoot, c);
  console.log(c + ':', fs.existsSync(p) ? 'EXISTS' : 'NOT FOUND');
});

// Check exports field
if (pkg.exports) {
  console.log('exports:', JSON.stringify(pkg.exports, null, 2));
} else {
  console.log('exports: undefined');
}
