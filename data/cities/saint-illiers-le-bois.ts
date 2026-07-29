import { PageData } from '../types'

export const saintIlliersLeBoisData: PageData = {
  slug: 'saint-illiers-le-bois',
  entityType: 'City',
  metaTitle: 'Épaviste Saint-Illiers-le-Bois (78980) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Saint-Illiers-le-Bois (78980). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Enlèvement de carcasse auto à Saint-Illiers-le-Bois (78980) dans le secteur Saint-Illiers-le-Bois',
      subtitle: 'Service de retrait d\'épave à Saint-Illiers-le-Bois (78980). Gratuit et sans contrainte pour les habitants de Saint-Illiers-le-Bois.',
      badge: 'Saint-Illiers-le-Bois (78980)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Saint-Illiers-le-Bois',
      content: 'À Saint-Illiers-le-Bois, notre équipe se déplace jusque dans les hameaux pour retirer les épaves. Nous nous déplaçons gratuitement jusqu\'à vous, même dans les zones moins denses du département. À Saint-Illiers-le-Bois, l\'enlèvement gratuit comprend le déplacement jusqu\'à votre propriété. Les détails pratiques sont échangés en amont pour assurer le bon déroulement du retrait. L\'équipe dépêchée à Saint-Illiers-le-Bois connaît les spécificités des propriétés rurales.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Saint-Illiers-le-Bois soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Yvelines sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'La prise en charge prévoit le transfert du véhicule vers un opérateur partenaire habilité à traiter les véhicules hors d\'usage. Les obligations applicables aux véhicules hors d\'usage sont respectées tout au long du processus. La répartition des tâches entre les partenaires est définie dès l\'organisation de l\'enlèvement.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Saint-Illiers-le-Bois',
      intro: 'Les interventions à Saint-Illiers-le-Bois sont possibles aussi bien sur voie publique que sur propriété privée. À Saint-Illiers-le-Bois, le professionnel confirme avec vous les modalités avant de se déplacer. Pour le secteur 78980, nos équipes interviennent régulièrement et connaissent parfaitement les accès et particularités de Saint-Illiers-le-Bois. Les communes qui entourent Saint-Illiers-le-Bois profitent également de notre service gratuit.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Saint-Illiers-le-Bois',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Saint-Illiers-le-Bois est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Saint-Illiers-le-Bois sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Saint-Illiers-le-Bois',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
