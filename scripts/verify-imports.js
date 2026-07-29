const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('.tsx') || file.endsWith('.ts')) results.push(file);
    }
  });
  return results;
}

const files = walk('app').concat(walk('components'));
let issues = 0;

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const usesComponent = content.includes('<BreadcrumbJsonLd');
  const hasImport = content.includes("import BreadcrumbJsonLd from");
  
  if (usesComponent && !hasImport) {
    console.log('MISSING IMPORT:', file);
    issues++;
  }
  if (hasImport && !usesComponent) {
    console.log('UNUSED IMPORT:', file);
  }
});

if (issues === 0) {
  console.log('OK: All files using <BreadcrumbJsonLd> have a matching import.');
} else {
  console.log('FAIL:', issues, 'file(s) missing import.');
}
