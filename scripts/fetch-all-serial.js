const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const communes = [
  // Already done: paris, chelles, levallois-perret
  ['Fontainebleau', '77'],
  ['Meaux', '77'],
  ['Melun', '77'],
  ['Poissy', '78'],
  ['Versailles', '78'],
  ['Massy', '91'],
  ['Antony', '92'],
  ['Boulogne-Billancourt', '92'],
  ['Courbevoie', '92'],
  ['Issy-les-Moulineaux', '92'],
  ['Nanterre', '92'],
  ['Drancy', '93'],
  ['Saint-Denis', '93'],
  ['Créteil', '94'],
  ['Ivry-sur-Seine', '94'],
  ['Vitry-sur-Seine', '94'],
  ['Argenteuil', '95'],
  ['Cergy', '95']
];

const script = path.join(__dirname, 'fetch-local-data.js');

for (const [ville, dep] of communes) {
  const slug = ville.toLowerCase().replace(/[^a-z0-9àâäéèêëïîôùûüÿçœæ]+/g, '-').replace(/^-|-$/g, '');
  const outFile = path.join(__dirname, '..', 'data', 'local-data', `${slug}.json`);
  
  // Skip if already exists with validation
  if (fs.existsSync(outFile)) {
    try {
      const data = JSON.parse(fs.readFileSync(outFile, 'utf-8'));
      if (data.validation && data.validation.status === 'SUCCESS') {
        console.log(`[SKIP] ${ville} already collected.`);
        continue;
      }
    } catch(e) {}
  }
  
  console.log(`\n>>> Collecting ${ville} (${dep})...`);
  try {
    execSync(`node "${script}" "${ville}" "${dep}"`, {
      timeout: 300000, // 5 minutes max per commune
      stdio: 'inherit'
    });
    console.log(`<<< ${ville} OK`);
  } catch(err) {
    console.error(`<<< ${ville} FAILED: ${err.message}`);
  }
}

console.log('\n=== All communes processed ===');
