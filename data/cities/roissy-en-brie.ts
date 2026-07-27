import { PageData } from '../types'

export const roissyEnBrieData: PageData = {
  slug: 'roissy-en-brie',
  entityType: 'City',
  metaTitle: 'Épaviste Roissy-en-Brie (77680) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Roissy-en-Brie (77680). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
  relatedServicesSlugs: [
    'enlevement-epave-parking-souterrain',
    'enlevement-voiture-en-panne',
    'enlevement-voiture-sans-carte-grise'
  ],
  relatedCitiesSlugs: [
    'enlevement-epave-seine-et-marne'
  ],
  blocks: [
    {
      type: 'Hero',
      title: 'Débarras véhicule hors d\'usage Roissy-en-Brie (77680) - Épaviste Roissy-en-Brie',
      subtitle: 'Pour tout Roissy-en-Brie (77680) : enlèvement gratuit et professionnel de votre véhicule hors d\'usage.',
      badge: 'Roissy-en-Brie (77680)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Roissy-en-Brie',
      content: 'Nous venons à Roissy-en-Brie avec du matériel adapté aux accès ruraux pour l\'enlèvement gratuit. Les chemins ruraux de Roissy-en-Brie ne sont pas un obstacle pour nos équipes équipées. À Roissy-en-Brie, même dans les secteurs isolés, notre équipe se déplace gratuitement. Les détails pratiques sont échangés en amont pour assurer le bon déroulement du retrait. Notre équipe connaît les spécificités des zones rurales autour de Roissy-en-Brie pour une intervention adaptée.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Roissy-en-Brie, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'La prestation comprend l\'orientation du véhicule vers un interlocuteur compétent pour les étapes à venir. Le respect des textes en vigueur est garanti par l\'intervention de professionnels habilités. Les opérateurs compétents interviennent à tour de rôle pour couvrir l\'ensemble du processus.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Roissy-en-Brie',
      intro: 'Nous intervenons à Roissy-en-Brie dans tous les secteurs, y compris dans les zones à accès difficile. Avant de se déplacer à Roissy-en-Brie, l\'équipe vérifie les accès et prépare le matériel adapté. Notre équipe couvre le secteur postal 77680 avec une logistique dédiée. Les habitants de Roissy-en-Brie peuvent compter sur notre présence régulière dans ce code postal. Au-delà des limites de Roissy-en-Brie, notre service continue dans les secteurs alentour.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Roissy-en-Brie',
      questions: [
        { q: 'L\'intervention à Roissy-en-Brie est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Roissy-en-Brie sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Roissy-en-Brie',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
