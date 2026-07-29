import { PageData } from '../types'

export const noisyLeGrandData: PageData = {
  slug: 'noisy-le-grand',
  entityType: 'City',
  metaTitle: 'Épaviste Noisy-le-Grand (93160) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Noisy-le-Grand (93160). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
  relatedServicesSlugs: [
    'enlevement-epave-parking-souterrain',
    'enlevement-voiture-en-panne',
    'enlevement-voiture-sans-carte-grise'
  ],
  relatedCitiesSlugs: [
    'seine-saint-denis'
  ],
  blocks: [
    {
      type: 'Hero',
      title: 'Débarras automobile Noisy-le-Grand (93160) dans toute l\'agglomération Noisy-le-Grand',
      subtitle: 'À Noisy-le-Grand (93160) : débarras auto gratuit avec prise en charge complète de votre épave.',
      badge: 'Noisy-le-Grand (93160)',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Noisy-le-Grand',
      intro: 'À Noisy-le-Grand, notre dispositif d\'intervention permet de couvrir toute la commune efficacement. Chaque demande d\'enlèvement à Noisy-le-Grand reçoit une organisation personnalisée. Pour le secteur 93160, nos équipes interviennent régulièrement et connaissent parfaitement les accès et particularités de Noisy-le-Grand. Les zones limitrophes de Noisy-le-Grand peuvent aussi profiter de notre service d\'enlèvement.',
      zones: [
        { name: 'Zones pavillonnaires', delay: 'Sous 24h', specificities: 'Enlèvement au domicile ou dans votre allée privée.' },
        { name: 'Centre-ville & Axes principaux', delay: '24h', specificities: 'Retrait d\'épave sur voie publique.' },
        { name: 'Secteurs d\'activité', delay: 'Sur RDV', specificities: 'Intervention en zone commerciale.' }
      ],
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Noisy-le-Grand',
      content: 'Une épave à Noisy-le-Grand attire les regards et les remarques : solutionnez cela gratuitement. Un véhicule hors d\'usage à Noisy-le-Grand attire l\'attention et peut dégrader l\'image du quartier. À Noisy-le-Grand, nous garantissons un service d\'enlèvement gratuit et efficace dans toute la commune. Un échange téléphonique permet de finaliser l\'organisation avant le passage. Les spécificités de circulation à Noisy-le-Grand sont intégrées dans notre planning.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Noisy-le-Grand, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-Saint-Denis sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'L\'organisation intègre un transfert vers un prestataire compétent pour la filière des véhicules usagés. L\'ensemble des acteurs respecte les dispositions réglementaires encadrant cette activité. La transition entre les intervenants est organisée pour garantir la continuité du service.',
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Noisy-le-Grand',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Intervenez-vous rapidement en cas de véhicule gênant la circulation à Noisy-le-Grand ?', a: 'Oui, nous priorisons les situations urgentes en petite couronne. Contactez-nous pour un créneau adapté.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Noisy-le-Grand est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Noisy-le-Grand sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Noisy-le-Grand',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
