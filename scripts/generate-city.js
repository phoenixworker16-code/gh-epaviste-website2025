const fs = require('fs');
const path = require('path');
const { fetchLocalData } = require('./fetch-local-data');

async function generateCity(cityName, departmentCode) {
  console.log(`Préparation de la génération pour ${cityName} (${departmentCode})...`);
  
  // 1. Ensure target directory exists
  const outDir = path.join(__dirname, '../data/cities_new');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  const safeCityName = cityName.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  const localDataPath = path.join(__dirname, '../data/local-data', `${safeCityName}.json`);
  if (!fs.existsSync(localDataPath)) {
    console.error(`\n❌ ERREUR : Aucun fichier de données locales trouvé pour ${cityName}.`);
    console.error(`   Veuillez d'abord exécuter : node scripts/fetch-local-data.js "${cityName}" ${departmentCode}`);
    process.exit(1);
  }

  const localData = JSON.parse(fs.readFileSync(localDataPath, 'utf8'));

  if (localData.validated !== true) {
    console.error(`\n❌ ERREUR : Le JSON de ${cityName} n'a pas été validé.`);
    console.error(`   Ouvrez data/local-data/${safeCityName}.json et changez "validated": false en "validated": true.`);
    console.error(`   AUCUNE GÉNÉRATION IA N'A ÉTÉ EFFECTUÉE.`);
    process.exit(1);
  }
  
  const outFile = path.join(outDir, `${safeCityName}.ts`);

  console.log(`✅ Données locales validées. Appel du LLM pour rédaction...`);
  
  // 3. Stub for LLM Generation (in a real scenario, we pass localData to LLM API here)
  // For Phase 1, we just write a placeholder that shows the data structure
  const template = `// Fichier généré pour ${cityName} (${departmentCode})
// Données réelles injectées :
// - Quartiers : ${(localData.quartiers || []).join(', ')}
// - Rues : ${(localData.rues || []).join(', ')}
// - Gares/Stations : ${(localData.gares || []).concat(localData.stations_metro || []).join(', ')}
// - Hôpitaux : ${(localData.hopitaux || []).join(', ')}
// - Communes limitrophes : ${(localData.communes_limitrophes || []).join(', ')}

import { PageData } from '@/data/types';

export const ${safeCityName.replace(/-([a-z])/g, g => g[1].toUpperCase())}Data: PageData = {
  // TODO: Remplacer par la structure générée par l'IA
};
`;

  fs.writeFileSync(outFile, template, 'utf8');
  console.log(`✅ Fichier généré : ${outFile}`);
  console.log(`RAPPEL : Le fichier a été créé dans data/cities_new/, data/cities/ est INTACT.`);
}

if (require.main === module) {
  const city = process.argv[2];
  const dept = process.argv[3];
  if (!city || !dept) {
    console.error('Usage: node generate-city.js <ville> <departement>');
    process.exit(1);
  }
  generateCity(city, dept).catch(console.error);
}

module.exports = { generateCity };
