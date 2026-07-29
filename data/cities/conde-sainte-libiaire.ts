import { PageData } from '../types'

export const condeSainteLibiaireData: PageData = {
  slug: 'conde-sainte-libiaire',
  entityType: 'City',
  metaTitle: 'Épaviste Condé-Sainte-Libiaire (77450) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Condé-Sainte-Libiaire (77450). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Débarras d\'épave automobile à Condé-Sainte-Libiaire (77450) par épaviste à Condé-Sainte-Libiaire',
      subtitle: 'À Condé-Sainte-Libiaire (77450) : solution complète d\'enlèvement d\'épave gratuite pour les habitants de Condé-Sainte-Libiaire.',
      badge: 'Condé-Sainte-Libiaire (77450)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Condé-Sainte-Libiaire',
      content: 'Un véhicule abandonné sur votre terrain à Condé-Sainte-Libiaire vous gêne au quotidien ? À Condé-Sainte-Libiaire, une épave oubliée dans un pré peut être retirée sans que vous ayez à bouger. À Condé-Sainte-Libiaire, nous venons jusqu\'à votre propriété rurale sans frais supplémentaires. Un échange préalable permet de prévoir le matériel approprié et le créneau de passage. Le rendez-vous à Condé-Sainte-Libiaire est organisé pour minimiser les déplacements superflus.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Condé-Sainte-Libiaire soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le véhicule confié est dirigé vers un partenaire technique habilité par les autorités compétentes. Le traitement est effectué dans le respect des obligations environnementales en vigueur. Les intervenants se coordonnent pour assurer la continuité du traitement réglementaire.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Condé-Sainte-Libiaire',
      intro: 'Notre maillage territorial permet une couverture complète de Condé-Sainte-Libiaire pour les enlèvements. L\'équipe dépêchée à Condé-Sainte-Libiaire connaît à l\'avance les conditions d\'accès au véhicule. La zone 77450 fait partie de notre secteur d\'intervention prioritaire. Nous organisons des passages réguliers dans cette partie de Condé-Sainte-Libiaire. Au-delà du territoire de Condé-Sainte-Libiaire, les secteurs périphériques sont également couverts.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Condé-Sainte-Libiaire',
      questions: [
        { q: 'L\'intervention à Condé-Sainte-Libiaire est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Condé-Sainte-Libiaire sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Condé-Sainte-Libiaire',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
