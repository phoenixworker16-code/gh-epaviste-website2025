// scripts/insert-constants.js
/**
 * Insert `const cityName` and `const slug` after the header comment in each city data file.
 * This ensures the constants are defined before the `cityData` object uses them.
 */
const fs = require('fs');
const path = require('path');
const glob = require('glob');

const cityFiles = glob.sync(path.resolve(__dirname, '../data/cities/*.ts'));

cityFiles.forEach((filePath) => {
  let content = fs.readFileSync(filePath, 'utf-8');
  // Skip if already contains const definitions
  if (/\bconst\s+cityName\b/.test(content) && /\bconst\s+slug\b/.test(content)) {
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
  // Find the end of the initial comment block (*/) and insert after it
  const commentEndIdx = content.indexOf('*/');
  if (commentEndIdx === -1) {
    console.warn(`Pas de commentaire trouvé dans ${filePath}`);
    return;
  }
  const insertion = `*/\nconst cityName = '${cityName}';\nconst slug = '${slug}';\n\n`;
  const newContent = content.slice(0, commentEndIdx) + insertion + content.slice(commentEndIdx + 2);
  fs.writeFileSync(filePath, newContent, 'utf-8');
  console.log(`Ajouté constants : ${filePath}`);
});

console.log('Insertion terminée.');
