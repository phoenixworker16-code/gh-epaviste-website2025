/*
  Fixeur de variable `cityName` pour toutes les pages communes.
  Ce script parcourt chaque fichier `data/cities/*.ts`, extrait la valeur du champ `name`
  (ex. "Alfortville") et remplace toutes les occurrences de `cityName` par cette valeur.
  Il réécrit les fichiers sur place.
*/

const fs = require('fs');
const path = require('path');

const CITY_DATA_DIR = path.resolve(__dirname, '..', 'data', 'cities');

function getCityFiles() {
  return fs.readdirSync(CITY_DATA_DIR).filter(f => f.endsWith('.ts'));
}

function replaceCityName(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  // Find the name field: name: 'Alfortville', (allow double quotes)
  const nameMatch = content.match(/name\s*[:=]\s*['"]([^'\"]+)['"]/);
  if (!nameMatch) {
    console.warn('⚠️  No name found in', filePath);
    return;
  }
  const cityName = nameMatch[1];
  const newContent = content.replace(/cityName/g, cityName);
  if (newContent !== content) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log('✅ Updated', path.basename(filePath));
  }
}

function main() {
  console.log('🔧 Fixing cityName placeholders…');
  const files = getCityFiles();
  files.forEach(f => replaceCityName(path.join(CITY_DATA_DIR, f)));
  console.log('✅ All done.');
}

main();
