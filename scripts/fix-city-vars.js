// scripts/fix-city-vars.js
/**
 * Script to add `cityName` and `slug` constants at the start of each city file.
 * Constants are added as plain `const` (no export) because they are only used within the file.
 * The script checks for existing definitions before inserting to avoid duplicates.
 */
const fs = require('fs');
const path = require('path');
const glob = require('glob');

const cityFiles = glob.sync(path.resolve(__dirname, '../data/cities/*.ts'));

cityFiles.forEach((filePath) => {
  const content = fs.readFileSync(filePath, 'utf-8');
  // If const cityName and const slug already exist, skip.
  const hasCityName = /\bconst\s+cityName\b/.test(content);
  const hasSlug = /\bconst\s+slug\b/.test(content);
  if (hasCityName && hasSlug) {
    console.log(`Déjà présent : ${filePath}`);
    return;
  }
  const slugMatch = content.match(/slug:\s*['\"]([^'\"]+)['\"]/);
  const nameMatch = content.match(/name:\s*['\"]([^'\"]+)['\"]/);
  const slug = slugMatch ? slugMatch[1] : null;
  const cityName = nameMatch ? nameMatch[1] : null;
  if (!slug || !cityName) {
    console.warn(`Impossible d'extraire slug ou name dans ${filePath}`);
    return;
  }
  const header = `const cityName = '${cityName}';\nconst slug = '${slug}';\n\n`;
  const newContent = header + content;
  fs.writeFileSync(filePath, newContent, 'utf-8');
  console.log(`Ajouté : ${filePath}`);
});

console.log('Traitement terminé.');
