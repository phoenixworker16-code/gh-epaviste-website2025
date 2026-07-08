/**
 * Données générées automatiquement pour la ville Villetaneuse
 * Généré le 2026-07-08T11:45:28.538Z
 */

const cityName = 'Villetaneuse';
const slug = 'villetaneuse';
export const cityData = {
  slug: 'villetaneuse',
  name: 'Villetaneuse',
  // Hero
  hero: {
    title: 'Villetaneuse – Débarrassage d’épaves et enlèvement gratuit',
    subtitle: 'Service professionnel, rapide et conforme à la réglementation',
    backgroundImage: '/images/villetaneuse/hero.jpg',
  },
  // Introduction spécifique
  introduction: 'Bienvenue à Villetaneuse. Nous intervenons dans toute la commune pour l’enlèvement d’épaves, le désamiantage et la dépollution.',
  // Présentation locale (exemple de situation)
  localContext: 'Dans Villetaneuse, les rues étroites et les zones résidentielles demandent une grande vigilance. Notre équipe connaît les meilleures solutions.',
  // Documents obligatoires
  documents: [
    { title: 'Attestation de destruction', url: '/documents/villetaneuse/attestation.pdf' },
    { title: 'Certificat de traitement', url: '/documents/villetaneuse/certificat.pdf' },
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
    address: { addressLocality: 'Villetaneuse', addressCountry: 'FR' },
    contactPoint: [{ telephone: '+33 1 23 45 67 89', contactType: 'customer service' }],
  },
};
