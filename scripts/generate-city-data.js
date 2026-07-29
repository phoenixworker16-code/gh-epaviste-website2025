// scripts/generate-city-data.js
// ------------------------------------------------------------
// Génère les fichiers de données pour chaque commune majeure.
// Chaque fichier est créé sous `data/cities/<slug>.ts` avec une
// structure de base contenant les sections requises (hero, intro, …).
// Le script utilise la liste `MAJOR_CITY_SLUGS` provenant de
// `data/major-cities.ts`.
// ------------------------------------------------------------
const fs = require('fs');
const path = require('path');

// Chargement de la liste des slugs majeurs
const { MAJOR_CITY_SLUGS } = require('../data/major-cities.ts');

// Répertoire cible où seront créés les fichiers de chaque ville
const outputDir = path.resolve(__dirname, '..', 'data', 'cities');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Fonction utilitaire pour transformer le slug en titre
function toTitle(slug) {
  return slug
    .split('-')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

// Modèle de contenu minimal. Chaque ville pourra être enrichie ultérieurement.
function generateContent(slug) {
  const cityName = toTitle(slug);
  const now = new Date().toISOString();
  return `/**
 * Données générées automatiquement pour la ville ${cityName}
 * Généré le ${now}
 */
export const cityData = {
  slug: '${slug}',
  name: '${cityName}',
  // Hero
  hero: {
    title: '${cityName} – Débarrassage d’épaves et enlèvement gratuit',
    subtitle: 'Service professionnel, rapide et conforme à la réglementation',
    backgroundImage: '/images/${slug}/hero.jpg',
  },
  // Introduction spécifique
  introduction: 'Bienvenue à ${cityName}. Nous intervenons dans toute la commune pour l’enlèvement d’épaves, le désamiantage et la dépollution.',
  // Présentation locale (exemple de situation)
  localContext: 'Dans ${cityName}, les rues étroites et les zones résidentielles demandent une grande vigilance. Notre équipe connaît les meilleures solutions.',
  // Documents obligatoires
  documents: [
    { title: 'Attestation de destruction', url: '/documents/${slug}/attestation.pdf' },
    { title: 'Certificat de traitement', url: '/documents/${slug}/certificat.pdf' },
  ],
  // Délais d’intervention
  timing: {
    standard: '48 h à 72 h',
    urgent: '24 h',
  },
  // Types de véhicules pris en charge
  vehicleTypes: ['Voiture', 'Camion', 'Bateau', '2 roues', 'Véhicules hors d’usage'],
  // Conseils pratiques
  tips: [
    'Déposez l’épave sur le domaine public uniquement avec autorisation.',
    'Préparez les documents d’identité avant l’intervention.',
  ],
  // FAQ locale (exemple générique, à enrichir)
  faq: [
    {
      question: 'Comment se déroule la collecte d’une épave à ' + cityName + ' ?',
      answer: 'Nous prenons rendez‑vous, récupérons l’épave, puis nous la transportons vers un centre habilité.',
    },
  ],
  // CTA
  cta: {
    text: 'Demander un devis gratuit',
    url: '/contact?city=' + slug,
  },
  // Maillage interne (exemple de lien vers la page blog locale)
  internalLinks: [
    { title: 'Guide du propriétaire à ' + cityName, href: '/blog/guide-' + slug },
  ],
  // Métadonnées SEO
  seo: {
    title: cityName + ' – Débarrassage d’épaves',
    description: 'Service d’enlèvement d’épaves à ' + cityName + '. Rapide, gratuit, conforme aux normes.',
    keywords: cityName + ', enlèvement épave, dépollution, VHU',
  },
  // JSON‑LD (schéma LocalBusiness simplifié)
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'GH Épaviste – ' + cityName,
    url: 'https://gh-epaviste.fr/' + slug,
    address: { addressLocality: '${cityName}', addressCountry: 'FR' },
    contactPoint: [{ telephone: '+33 1 23 45 67 89', contactType: 'customer service' }],
  },
};
`;
}

// Boucle sur chaque slug et création du fichier s’il n’existe pas déjà
for (const slug of MAJOR_CITY_SLUGS) {
  const targetPath = path.join(outputDir, `${slug}.ts`);
  if (fs.existsSync(targetPath)) {
    console.log(`⚙️  Le fichier existe déjà : ${slug}.ts – passage.`);
    continue;
  }
  const content = generateContent(slug);
  fs.writeFileSync(targetPath, content, 'utf8');
  console.log(`✅  Fichier créé : ${slug}.ts`);
}

console.log('🚀  Génération terminée.');
