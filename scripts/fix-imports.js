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
      if (file.endsWith('page.tsx')) results.push(file);
    }
  });
  return results;
}

const pages = walk('app');
let fixed = 0;
pages.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  if (content.includes('<BreadcrumbJsonLd') && !content.includes('import BreadcrumbJsonLd from')) {
    console.log('Missing import in:', file);
    // Insert after the first import statement or at the top
    const importStr = 'import BreadcrumbJsonLd from "@/components/breadcrumb-jsonld";\n';
    if (content.includes('import ')) {
      content = content.replace(/(import .*?\n)/, '$1' + importStr);
    } else {
      content = importStr + content;
    }
    fs.writeFileSync(file, content);
    fixed++;
  }
});
console.log('Fixed', fixed, 'files.');
