import { PageData } from '../types'

export const bourdonneData: PageData = {
  slug: 'bourdonne',
  entityType: 'City',
  metaTitle: 'Épaviste Bourdonné (78113) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Bourdonné (78113). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
  relatedServicesSlugs: [
    'enlevement-epave-parking-souterrain',
    'enlevement-voiture-en-panne',
    'enlevement-voiture-sans-carte-grise'
  ],
  relatedCitiesSlugs: [
    'enlevement-epave-yvelines'
  ],
  blocks: [
    {
      type: 'Hero',
      title: 'Solution enlèvement d\'épave sans frais à Bourdonné (78113) pour Bourdonné',
      subtitle: 'Enlèvement épave Bourdonné (78113) : service gratuit pour votre VHU dans tout le secteur de Bourdonné.',
      badge: 'Bourdonné (78113)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Bourdonné',
      content: 'Dans le secteur rural de Bourdonné, nous nous déplaçons gratuitement pour enlever votre épave. À la campagne, à Bourdonné, une épave qui rouille sur un terrain est fréquente mais pas une fatalité. Nous intervenons à Bourdonné sur les terrains les plus difficiles d\'accès. Le passage est planifié selon les indications reçues sur l\'emplacement exact du véhicule. Notre équipe connaît les spécificités des zones rurales autour de Bourdonné pour une intervention adaptée.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Bourdonné soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Yvelines sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Après enlèvement, la prise en charge est transmise à un opérateur spécialisé dans la filière automobile. Les exigences légales sont satisfaites par l\'intervention de partenaires compétents dans la filière. Les étapes sont enchaînées de manière organisée pour un parcours cohérent du véhicule.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Bourdonné',
      intro: 'Que vous habitiez le centre ou la périphérie de Bourdonné, nous venons retirer votre véhicule. Pour un retrait à Bourdonné, notre équipe se tient prête à intervenir au créneau convenu. Les habitants du 78113 à Bourdonné bénéficient d\'un passage régulier de nos équipes et d\'une prise en charge adaptée à ce secteur. Au-delà du territoire de Bourdonné, les secteurs périphériques sont également couverts.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Bourdonné',
      questions: [
        { q: 'L\'intervention à Bourdonné est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Bourdonné sont entièrement gratuits.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Bourdonné',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
