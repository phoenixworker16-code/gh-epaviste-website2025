import { PageData } from '../types'

export const saintIlliersLaVilleData: PageData = {
  slug: 'saint-illiers-la-ville',
  entityType: 'City',
  metaTitle: 'Épaviste Saint-Illiers-la-Ville (78980) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Saint-Illiers-la-Ville (78980). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
  relatedServicesSlugs: [
    'enlevement-epave-parking-souterrain',
    'enlevement-voiture-en-panne',
    'enlevement-voiture-sans-carte-grise'
  ],
  relatedCitiesSlugs: [
    'yvelines'
  ],
  blocks: [
    {
      type: 'Hero',
      title: 'Retrait et recyclage de votre épave à Saint-Illiers-la-Ville (78980) - Service Saint-Illiers-la-Ville',
      subtitle: 'Service de retrait d\'épave à Saint-Illiers-la-Ville (78980). Gratuit et sans contrainte pour les habitants de Saint-Illiers-la-Ville.',
      badge: 'Saint-Illiers-la-Ville (78980)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Saint-Illiers-la-Ville',
      content: 'À Saint-Illiers-la-Ville, même les épaves situées sur des terrains difficiles sont prises en charge. Dans les secteurs ruraux autour de Saint-Illiers-la-Ville, l\'accès à un service d\'enlèvement est simplifié. À Saint-Illiers-la-Ville, l\'enlèvement gratuit comprend le déplacement jusqu\'à votre propriété. La logistique est organisée pour garantir une intervention efficace et sans attente. L\'équipe dépêchée à Saint-Illiers-la-Ville connaît les spécificités des propriétés rurales.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'L\'enlèvement d\'un véhicule hors d\'usage à Saint-Illiers-la-Ville implique une stricte conformité réglementaire. Voici les éléments à préparer. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Yvelines sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le dispositif inclut un acheminement vers un professionnel disposant des habilitations requises. Les obligations applicables aux véhicules hors d\'usage sont respectées tout au long du processus. La répartition des tâches entre les partenaires est définie dès l\'organisation de l\'enlèvement.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Saint-Illiers-la-Ville',
      intro: 'À Saint-Illiers-la-Ville, notre dispositif d\'intervention permet de couvrir toute la commune efficacement. Chaque demande pour Saint-Illiers-la-Ville est traitée avec une attention particulière à la préparation. Pour le secteur 78980, nos équipes interviennent régulièrement et connaissent parfaitement les accès et particularités de Saint-Illiers-la-Ville. Les axes routiers menant à Saint-Illiers-la-Ville sont régulièrement empruntés par nos équipes.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Saint-Illiers-la-Ville',
      questions: [
        { q: 'L\'intervention à Saint-Illiers-la-Ville est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Saint-Illiers-la-Ville sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Saint-Illiers-la-Ville',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
