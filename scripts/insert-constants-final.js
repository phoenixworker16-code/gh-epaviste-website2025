// scripts/insert-constants-final.js
/**
 * Insert `const cityName` and `const slug` after the closing comment block.
 * This script is idempotent – it skips files that already contain both constants.
 */
const fs = require('fs');
const path = require('path');
const glob = require('glob');

const cityFiles = glob.sync(path.resolve(__dirname, '../data/cities/*.ts'));

cityFiles.forEach((filePath) => {
  let content = fs.readFileSync(filePath, 'utf-8');
  // Skip if both constants already exist
  if (/\bconst\s+cityName\b/.test(content) && /\bconst\s+slug\b/.test(content)) {
    console.log(`Already present: ${filePath}`);
    return;
  }
  const slugMatch = content.match(/slug:\s*['"]([^'\"]+)['"]/);
  const nameMatch = content.match(/name:\s*['"]([^'\"]+)['"]/);
  const slug = slugMatch ? slugMatch[1] : null;
  const cityName = nameMatch ? nameMatch[1] : null;
  if (!slug || !cityName) {
    console.warn(`Cannot extract slug or name in ${filePath}`);
    return;
  }
  const commentEndIdx = content.indexOf('*/');
  if (commentEndIdx === -1) {
    console.warn(`No closing comment block found in ${filePath}`);
    return;
  }
  const before = content.slice(0, commentEndIdx + 2); // include */
  const after = content.slice(commentEndIdx + 2);
  const insertion = `\nconst cityName = '${cityName}';\nconst slug = '${slug}';\n`;
  const newContent = before + insertion + after;
  fs.writeFileSync(filePath, newContent, 'utf-8');
  console.log(`Inserted constants into: ${filePath}`);
});

console.log('Insertion completed.');
