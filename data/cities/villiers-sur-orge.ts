import { PageData } from '../types'

export const villiersSurOrgeData: PageData = {
  slug: 'villiers-sur-orge',
  entityType: 'City',
  metaTitle: 'Épaviste Villiers-sur-Orge (91700) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Villiers-sur-Orge (91700). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Enlèvement gratuit de carcasse à Villiers-sur-Orge (91700) - Service Villiers-sur-Orge',
      subtitle: 'Retrait de VHU à Villiers-sur-Orge (91700) : un service gratuit et rapide pour tout Villiers-sur-Orge et ses environs.',
      badge: 'Villiers-sur-Orge (91700)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Villiers-sur-Orge',
      content: 'Dans la campagne autour de Villiers-sur-Orge, débarrassez-vous gratuitement de votre épave. À la campagne, à Villiers-sur-Orge, une épave qui rouille sur un terrain est fréquente mais pas une fatalité. Notre équipe à Villiers-sur-Orge connaît les spécificités des propriétés rurales et agricoles. La demande permet d\'identifier les informations nécessaires avant le déplacement. Le rendez-vous à Villiers-sur-Orge est organisé pour minimiser les déplacements superflus.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Villiers-sur-Orge, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Essonne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le dispositif inclut un acheminement vers un professionnel disposant des habilitations requises. Les obligations déclaratives sont remplies par les opérateurs compétents de la filière. Le partenaire compétent prend ensuite le relais pour les étapes qui relèvent de sa responsabilité.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Villiers-sur-Orge',
      intro: 'À Villiers-sur-Orge, nous pouvons retirer votre véhicule hors d\'usage en tout point du territoire. Avant l\'enlèvement à Villiers-sur-Orge, les informations pratiques sont échangées avec le propriétaire. Les habitants du 91700 à Villiers-sur-Orge bénéficient d\'un passage régulier de nos équipes et d\'une prise en charge adaptée à ce secteur. Au-delà des limites de Villiers-sur-Orge, notre service continue dans les secteurs alentour.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Villiers-sur-Orge',
      questions: [
        { q: 'L\'intervention à Villiers-sur-Orge est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Villiers-sur-Orge sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Villiers-sur-Orge',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
