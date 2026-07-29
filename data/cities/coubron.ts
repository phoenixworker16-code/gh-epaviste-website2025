import { PageData } from '../types'

export const coubronData: PageData = {
  slug: 'coubron',
  entityType: 'City',
  metaTitle: 'Épaviste Coubron (93470) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Coubron (93470). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
  relatedServicesSlugs: [
    'enlevement-epave-parking-souterrain',
    'enlevement-voiture-en-panne',
    'enlevement-voiture-sans-carte-grise'
  ],
  relatedCitiesSlugs: [
    'enlevement-epave-seine-saint-denis'
  ],
  blocks: [
    {
      type: 'Hero',
      title: 'Service rapide d\'enlèvement d\'épave à Coubron (93470) dans tout Coubron',
      subtitle: 'Enlèvement gratuit dans le 93470 à Coubron. Débarras professionnel de votre épave à Coubron.',
      badge: 'Coubron (93470)',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Coubron',
      intro: 'Les interventions à Coubron sont possibles aussi bien sur voie publique que sur propriété privée. L\'équipe dépêchée à Coubron connaît à l\'avance les conditions d\'accès au véhicule. Pour le secteur 93470, nos équipes interviennent régulièrement et connaissent parfaitement les accès et particularités de Coubron. Au-delà du territoire de Coubron, les secteurs périphériques sont également couverts.',
      zones: [
        { name: 'Zones pavillonnaires', delay: 'Sous 24h', specificities: 'Enlèvement au domicile ou dans votre allée privée.' },
        { name: 'Centre-ville & Axes principaux', delay: '24h', specificities: 'Retrait d\'épave sur voie publique.' },
        { name: 'Secteurs d\'activité', delay: 'Sur RDV', specificities: 'Intervention en zone commerciale.' }
      ],
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Coubron',
      content: 'Un véhicule hors d\'usage à Coubron peut rapidement devenir une source de contraintes. Les épaves à Coubron sont souvent signalées par les habitants, mieux vaut les devancer. Notre équipe à Coubron connaît parfaitement les spécificités de la banlieue dense. Un échange téléphonique permet de finaliser l\'organisation avant le passage. L\'intervention à Coubron est organisée pour être efficace malgré la densité urbaine.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'L\'enlèvement d\'un véhicule hors d\'usage à Coubron implique une stricte conformité réglementaire. Voici les éléments à préparer. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-Saint-Denis sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Un opérateur partenaire réceptionne le véhicule pour les opérations suivantes. La fin de vie du véhicule est traitée dans le respect des filières autorisées. Le processus est conçu pour assurer une prise en charge complète sans rupture de service.',
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Coubron',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Intervenez-vous rapidement en cas de véhicule gênant la circulation à Coubron ?', a: 'Oui, nous priorisons les situations urgentes en petite couronne. Contactez-nous pour un créneau adapté.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Coubron est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Coubron sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Coubron',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
