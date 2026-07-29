const fs = require('fs');
const path = require('path');
const { root } = require('./config/paths');
const profilesConfig = require('./config/profiles.json');
const { determineProfile } = require('./profiles');
const variants = require('./variants');

function getDepartmentSlug(depNumber) {
  const map = {
    '75': 'paris',
    '77': 'seine-et-marne',
    '78': 'yvelines',
    '91': 'essonne',
    '92': 'hauts-de-seine',
    '93': 'seine-saint-denis',
    '94': 'val-de-marne',
    '95': 'val-d-oise'
  };
  return map[depNumber] || depNumber;
}

function buildPageData(commune) {
  const { ville, slug, zipCode, depNumber } = commune;
  
  const localDataPath = path.join(root, 'data', 'local-data', `${slug}.json`);
  let localData = null;
  if (fs.existsSync(localDataPath)) {
    try {
      localData = JSON.parse(fs.readFileSync(localDataPath, 'utf8'));
    } catch(e) {}
  }
  
  const profileName = determineProfile(commune, localData);
  const profileConfig = profilesConfig[profileName] || profilesConfig['grande-ville'];
  
  const blocks = [];
  
  for (const section of profileConfig.sections) {
    let blockData = null;
    switch(section) {
      case 'Hero': blockData = variants.generateHero(profileName, commune, localData); break;
      case 'Introduction': blockData = variants.generateIntroduction(profileName, commune, localData); break;
      case 'LocalCoverage': blockData = variants.generateLocalCoverage(profileName, commune, localData); break;
      case 'DocsPreparation': blockData = variants.generateDocsPreparation(profileName, commune, localData); break;
      case 'VhuCompliance': blockData = variants.generateVhuCompliance(profileName, commune, localData); break;
      case 'FaqLocal': blockData = variants.generateFaqLocal(profileName, commune, localData); break;
      case 'Cta': blockData = variants.generateCta(profileName, commune, localData); break;
    }
    if (blockData) blocks.push(blockData);
  }

  return {
    slug: slug,
    entityType: 'City',
    metaTitle: `Épaviste ${ville} (${zipCode}) | Enlèvement Épave Gratuit 24h`,
    metaDescription: `Service gratuit d'enlèvement d'épaves à ${ville} (${zipCode}). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.`,
    relatedServicesSlugs: [
      'enlevement-epave-parking-souterrain',
      'enlevement-voiture-en-panne',
      'enlevement-voiture-sans-carte-grise'
    ],
    relatedCitiesSlugs: [
      `enlevement-epave-${getDepartmentSlug(depNumber)}`
    ],
    blocks: blocks,
    // Injecter le profil pour les rapports
    _profile: profileName
  };
}

module.exports = { buildPageData };
