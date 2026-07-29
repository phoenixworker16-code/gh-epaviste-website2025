/**
 * Détermine le profil d'une commune en fonction de ses attributs et des données locales.
 */
function determineProfile(commune, localData) {
  const { depNumber, slug } = commune;
  
  if (depNumber === '75') return 'hyper-centre';
  
  const grandesVilles = [
    'versailles', 'cergy', 'melun', 'meaux', 'nanterre', 
    'saint-denis', 'creteil', 'argenteuil', 'boulogne-billancourt',
    'massy', 'vitry-sur-seine', 'ivry-sur-seine'
  ];
  if (grandesVilles.includes(slug)) return 'grande-ville';
  
  // Banlieue dense : Petite couronne
  if (['92', '93', '94'].includes(depNumber)) return 'banlieue-dense';
  
  // Heuristique basée sur la densité des rues pour la grande couronne (77, 78, 91, 95)
  // localData.rues.length est un excellent proxy pour la taille et la densité de la commune.
  const ruesCount = localData && Array.isArray(localData.rues) ? localData.rues.length : 0;
  
  if (ruesCount >= 150) return 'residentielle';
  if (ruesCount >= 50) return 'periurbaine';
  return 'rurale';
}

module.exports = {
  determineProfile
};
