// scripts/insert-constants-correct.js
/**
 * Insert `const cityName` and `const slug` after the header comment block
 * for each city file, ensuring they appear before the exported `cityData`.
 * Idempotent – skips files that already contain both constants.
 */
const fs = require('fs');
const path = require('path');
const glob = require('glob');

const cityFiles = glob.sync(path.resolve(__dirname, '../data/cities/*.ts'));

cityFiles.forEach((filePath) => {
  let content = fs.readFileSync(filePath, 'utf-8');
  // Skip if constants already present
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
  // Find the closing of the initial comment block (*/)
  const commentCloseIdx = content.indexOf('*/');
  if (commentCloseIdx === -1) {
    console.warn(`Pas de commentaire trouvé dans ${filePath}`);
    return;
  }
  const insertion = `*/\nconst cityName = '${cityName}';\nconst slug = '${slug}';\n\n`;
  const newContent = content.slice(0, commentCloseIdx) + insertion + content.slice(commentCloseIdx + 2);
  fs.writeFileSync(filePath, newContent, 'utf-8');
  console.log(`Ajouté : ${filePath}`);
});

console.log('Insertion terminée.');
