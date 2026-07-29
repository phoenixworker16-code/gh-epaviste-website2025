/**
 * Validateur Métier (Business Validator)
 * Vérifie uniquement les règles métier (cohérence des données), PAS le SEO.
 * S'exécute après la validation de schéma Zod.
 * 
 * Adapté au vrai format PageData du projet (blocks-based).
 */

function validateBusinessRules(pageData, communeInfo) {
  const errors = [];
  const warnings = [];

  // 1. Cohérence du slug avec les informations du catalogue villes.json
  if (communeInfo && pageData.slug !== communeInfo.slug) {
    errors.push(`Business Error: Le slug dans PageData ('${pageData.slug}') ne correspond pas au catalogue ('${communeInfo.slug}').`);
  }

  // 2. Présence du bloc Hero (obligatoire métier)
  const heroBlock = pageData.blocks.find(b => b.type === 'Hero');
  if (!heroBlock) {
    errors.push(`Business Error: Le bloc Hero est absent. C'est obligatoire pour la conversion.`);
  }

  // 3. Présence du bloc CTA (obligatoire métier — pas de page sans conversion)
  const ctaBlock = pageData.blocks.find(b => b.type === 'Cta');
  if (!ctaBlock) {
    errors.push(`Business Error: Le bloc CTA est absent. Chaque page doit comporter un appel à l'action.`);
  }

  // 4. Le numéro de téléphone doit être présent dans le site (global check)
  // Note: Le téléphone est global au site (+33753120793), pas dans PageData.
  // On vérifie quand même qu'il n'y a pas de faux numéros dans le contenu.
  const allContent = JSON.stringify(pageData).toLowerCase();
  if (allContent.includes('01 23 45 67 89') || allContent.includes('+33 1 23 45 67 89')) {
    errors.push(`Business Error: Faux numéro de téléphone détecté dans le contenu. Remplacer par le vrai numéro.`);
  }

  // 5. Le slug ne doit pas contenir de caractères non-URL
  if (!/^[a-z0-9-]+$/.test(pageData.slug)) {
    errors.push(`Business Error: Le slug '${pageData.slug}' contient des caractères invalides (attendu: a-z, 0-9, -).`);
  }

  // 6. Pas de blocs vides (un bloc Introduction sans contenu réel)
  for (const block of pageData.blocks) {
    if (block.type === 'Introduction' && (!block.content || block.content.trim().length < 50)) {
      warnings.push(`Business Warning: Le bloc Introduction a un contenu très court pour '${pageData.slug}'.`);
    }
  }

  // 7. entityType cohérent
  if (pageData.entityType !== 'City' && pageData.entityType !== 'Department') {
    errors.push(`Business Error: entityType '${pageData.entityType}' invalide.`);
  }

  return {
    success: errors.length === 0,
    errors,
    warnings
  };
}

module.exports = {
  validateBusinessRules
};
