import { PageData } from '../types'

export const collegienData: PageData = {
  slug: 'collegien',
  entityType: 'City',
  metaTitle: 'Épaviste Collégien (77090) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Collégien (77090). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Épaviste professionnel à Collégien (77090) pour votre VHU à Collégien',
      subtitle: 'Service de retrait d\'épave à Collégien (77090). Gratuit et sans contrainte pour les habitants de Collégien.',
      badge: 'Collégien (77090)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Collégien',
      content: 'À Collégien, notre équipe se déplace jusque dans les hameaux pour retirer les épaves. Nous nous déplaçons gratuitement jusqu\'à vous, même dans les zones moins denses du département. Le service à Collégien est conçu pour les zones agricoles et les habitations isolées. L\'organisation du retrait tient compte de l\'emplacement du véhicule, de son état et des conditions d\'accès. Les détails de l\'intervention à Collégien sont confirmés en amont pour une coordination parfaite.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Collégien soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Un opérateur partenaire réceptionne le véhicule pour les opérations suivantes. Les formalités réglementaires sont accomplies dans les conditions prévues par la législation. Chaque opérateur prend en charge la phase pour laquelle il dispose des compétences requises.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Collégien',
      intro: 'Que vous habitiez le centre ou la périphérie de Collégien, nous venons retirer votre véhicule. Notre équipe adapte sa logistique à Collégien en fonction de chaque configuration. Pour le secteur 77090, nos équipes interviennent régulièrement et connaissent parfaitement les accès et particularités de Collégien. Notre dispositif autour de Collégien permet d\'intervenir dans une zone élargie.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Collégien',
      questions: [
        { q: 'L\'intervention à Collégien est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Collégien sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Collégien',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
