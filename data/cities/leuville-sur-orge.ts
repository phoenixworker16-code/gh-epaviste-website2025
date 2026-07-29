import { PageData } from '../types'

export const leuvilleSurOrgeData: PageData = {
  slug: 'leuville-sur-orge',
  entityType: 'City',
  metaTitle: 'Épaviste Leuville-sur-Orge (91310) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Leuville-sur-Orge (91310). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
  relatedServicesSlugs: [
    'enlevement-epave-parking-souterrain',
    'enlevement-voiture-en-panne',
    'enlevement-voiture-sans-carte-grise'
  ],
  relatedCitiesSlugs: [
    'essonne'
  ],
  blocks: [
    {
      type: 'Hero',
      title: 'Faire enlever son VHU à Leuville-sur-Orge par un professionnel dans le 91310 de Leuville-sur-Orge',
      subtitle: 'Service gratuit d\'épaviste à Leuville-sur-Orge (91310). Votre véhicule hors d\'usage retiré à Leuville-sur-Orge.',
      badge: 'Leuville-sur-Orge (91310)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Leuville-sur-Orge',
      content: 'Dans la campagne autour de Leuville-sur-Orge, débarrassez-vous gratuitement de votre épave. Les zones rurales autour de Leuville-sur-Orge sont intégralement couvertes par notre service. Nous intervenons à Leuville-sur-Orge pour un enlèvement gratuit, même dans les lieux difficilement accessibles. Le programme d\'intervention est défini avec le propriétaire pour une prise en charge optimale. Les modalités de l\'intervention à Leuville-sur-Orge sont conçues pour les propriétés rurales.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Leuville-sur-Orge, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Essonne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le véhicule est orienté vers un opérateur de la filière autorisée dès la fin de l\'enlèvement. Les étapes ultérieures sont réalisées par les professionnels compétents, conformément au cadre applicable. Le propriétaire est tenu informé des différentes étapes par les intervenants successifs.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Leuville-sur-Orge',
      intro: 'Notre maillage territorial permet une couverture complète de Leuville-sur-Orge pour les enlèvements. Avant de se déplacer à Leuville-sur-Orge, l\'équipe vérifie les accès et prépare le matériel adapté. Pour le secteur 91310, nos équipes interviennent régulièrement et connaissent parfaitement les accès et particularités de Leuville-sur-Orge. Au-delà du territoire de Leuville-sur-Orge, les secteurs périphériques sont également couverts.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Leuville-sur-Orge',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Leuville-sur-Orge est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Leuville-sur-Orge sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Leuville-sur-Orge',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
