import { PageData } from '../types'

export const roinvilliersData: PageData = {
  slug: 'roinvilliers',
  entityType: 'City',
  metaTitle: 'Épaviste Roinvilliers (91150) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Roinvilliers (91150). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
  relatedServicesSlugs: [
    'enlevement-epave-parking-souterrain',
    'enlevement-voiture-en-panne',
    'enlevement-voiture-sans-carte-grise'
  ],
  relatedCitiesSlugs: [
    'enlevement-epave-essonne'
  ],
  blocks: [
    {
      type: 'Hero',
      title: 'Service professionnel d\'enlèvement VHU à Roinvilliers (91150) dans tout Roinvilliers',
      subtitle: 'Pour tout Roinvilliers (91150) : enlèvement gratuit et professionnel de votre véhicule hors d\'usage.',
      badge: 'Roinvilliers (91150)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Roinvilliers',
      content: 'À Roinvilliers, même les épaves situées sur des terrains difficiles sont prises en charge. Notre équipe est habituée aux accès ruraux à Roinvilliers et intervient dans les meilleures conditions. Profitez d\'un débarras d\'épave professionnel et écologique, avec une prise en charge complète du remorquage au recyclage. Les précisions apportées en amont aident à préparer le matériel et l\'équipe adaptés. Notre équipe connaît les spécificités des zones rurales autour de Roinvilliers pour une intervention adaptée.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Roinvilliers soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Essonne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'La prestation comprend l\'orientation du véhicule vers un interlocuteur compétent pour les étapes à venir. Les différentes opérations sont soumises au respect des règles applicables à la filière. Les partenaires se répartissent les opérations selon leur domaine d\'expertise respectif.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Roinvilliers',
      intro: 'Le service d\'enlèvement gratuit couvre l\'intégralité de la commune de Roinvilliers. À Roinvilliers, nous veillons à ce que tous les aspects logistiques soient anticipés. Notre équipe couvre le secteur postal 91150 avec une logistique dédiée. Les habitants de Roinvilliers peuvent compter sur notre présence régulière dans ce code postal. Les voies d\'accès et les secteurs autour de Roinvilliers font partie de notre circuit.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Roinvilliers',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Roinvilliers est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Roinvilliers sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Roinvilliers',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
