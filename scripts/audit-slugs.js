const fs = require('fs');
const path = require('path');

const citiesDir = path.join('data', 'cities');
const files = fs.readdirSync(citiesDir);
let issues = 0;
let uniqueWrongSlugs = new Set();

files.forEach(file => {
  const filePath = path.join(citiesDir, file);
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Extract relatedCitiesSlugs
  const match = content.match(/relatedCitiesSlugs:\s*\[([\s\S]*?)\]/);
  if (match) {
    const slugs = match[1].match(/'([^']+)'|"([^"]+)"/g);
    if (slugs) {
      slugs.forEach(s => {
        const cleanSlug = s.replace(/['"]/g, '');
        if (cleanSlug.startsWith('enlevement-epave-')) {
          issues++;
          uniqueWrongSlugs.add(cleanSlug);
        }
      });
    }
  }
});

console.log('Found', issues, 'issues in city files.');
console.log('Wrong slugs:', Array.from(uniqueWrongSlugs));
