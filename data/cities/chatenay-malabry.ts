import { PageData } from '../types'

export const chatenayMalabryData: PageData = {
  slug: 'chatenay-malabry',
  entityType: 'City',
  metaTitle: 'Épaviste Châtenay-Malabry (92290) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Châtenay-Malabry (92290). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
  relatedServicesSlugs: [
    'enlevement-epave-parking-souterrain',
    'enlevement-voiture-en-panne',
    'enlevement-voiture-sans-carte-grise'
  ],
  relatedCitiesSlugs: [
    'hauts-de-seine'
  ],
  blocks: [
    {
      type: 'Hero',
      title: 'Retrait et recyclage de votre épave à Châtenay-Malabry (92290) - Service Châtenay-Malabry',
      subtitle: 'Pour tout Châtenay-Malabry (92290) : enlèvement gratuit et professionnel de votre véhicule hors d\'usage.',
      badge: 'Châtenay-Malabry (92290)',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Châtenay-Malabry',
      intro: 'L\'enlèvement gratuit de votre épave est organisé sur l\'ensemble du territoire de Châtenay-Malabry. L\'équipe dépêchée à Châtenay-Malabry connaît à l\'avance les conditions d\'accès au véhicule. Pour le secteur 92290, nos équipes interviennent régulièrement et connaissent parfaitement les accès et particularités de Châtenay-Malabry. Notre rayon d\'action ne se limite pas à Châtenay-Malabry mais s\'étend aux alentours.',
      zones: [
        { name: 'Zones pavillonnaires', delay: 'Sous 24h', specificities: 'Enlèvement au domicile ou dans votre allée privée.' },
        { name: 'Centre-ville & Axes principaux', delay: '24h', specificities: 'Retrait d\'épave sur voie publique.' },
        { name: 'Secteurs d\'activité', delay: 'Sur RDV', specificities: 'Intervention en zone commerciale.' }
      ],
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Châtenay-Malabry',
      content: 'Notre service à Châtenay-Malabry permet un enlèvement gratuit même dans les quartiers les plus denses. Dans une commune dense comme Châtenay-Malabry, chaque mètre de voirie compte pour le stationnement. L\'intervention à Châtenay-Malabry est réalisée avec les équipements appropriés à la circulation locale. La demande permet de préciser les contraintes de stationnement et les documents disponibles avant l\'intervention. Les créneaux proposés tiennent compte des heures d\'affluence à Châtenay-Malabry.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'L\'enlèvement d\'un véhicule hors d\'usage à Châtenay-Malabry implique une stricte conformité réglementaire. Voici les éléments à préparer. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Hauts-de-Seine sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le véhicule est conduit vers un professionnel partenaire après l\'enlèvement. La fin de vie du véhicule est gérée conformément aux procédures réglementaires établies. Les responsabilités sont clairement établies entre les opérateurs de la chaîne de traitement.',
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Châtenay-Malabry',
      questions: [
        { q: 'L\'intervention à Châtenay-Malabry est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Châtenay-Malabry sont entièrement gratuits.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Intervenez-vous rapidement en cas de véhicule gênant la circulation à Châtenay-Malabry ?', a: 'Oui, nous priorisons les situations urgentes en petite couronne. Contactez-nous pour un créneau adapté.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Châtenay-Malabry',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
