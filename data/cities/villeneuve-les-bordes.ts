import { PageData } from '../types'

export const villeneuveLesBordesData: PageData = {
  slug: 'villeneuve-les-bordes',
  entityType: 'City',
  metaTitle: 'Épaviste Villeneuve-les-Bordes (77154) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Villeneuve-les-Bordes (77154). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Épaviste professionnel à Villeneuve-les-Bordes (77154) pour votre VHU à Villeneuve-les-Bordes',
      subtitle: 'À Villeneuve-les-Bordes (77154), nous organisons l\'enlèvement gratuit de votre épave partout dans Villeneuve-les-Bordes.',
      badge: 'Villeneuve-les-Bordes (77154)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Villeneuve-les-Bordes',
      content: 'Votre terrain à Villeneuve-les-Bordes retrouvera son aspect d\'origine après l\'enlèvement de cette épave. Votre propriété à Villeneuve-les-Bordes est accessible à nos dépanneuses pour un enlèvement gratuit. Nous intervenons à Villeneuve-les-Bordes pour un enlèvement gratuit, même dans les lieux difficilement accessibles. Les détails pratiques sont échangés en amont pour assurer le bon déroulement du retrait. Notre connaissance des zones rurales garantit une intervention efficace à Villeneuve-les-Bordes.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Villeneuve-les-Bordes soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'La prise en charge inclut l\'acheminement vers un professionnel partenaire habilité pour les véhicules hors d\'usage. Les différentes obligations sont remplies par les professionnels intervenant dans la chaîne de traitement. Chaque opérateur prend en charge la phase pour laquelle il dispose des compétences requises.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Villeneuve-les-Bordes',
      intro: 'À Villeneuve-les-Bordes, notre dispositif d\'intervention permet de couvrir toute la commune efficacement. À Villeneuve-les-Bordes, l\'organisation du retrait s\'adapte aux circonstances décrites. La zone 77154 fait partie de notre secteur d\'intervention prioritaire. Nous organisons des passages réguliers dans cette partie de Villeneuve-les-Bordes. Au-delà du centre de Villeneuve-les-Bordes, les secteurs périphériques sont régulièrement visités.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Villeneuve-les-Bordes',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Villeneuve-les-Bordes est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Villeneuve-les-Bordes sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Villeneuve-les-Bordes',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
