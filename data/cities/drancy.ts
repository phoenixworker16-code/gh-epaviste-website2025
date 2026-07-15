import { PageData } from '../types'

export const drancyData: PageData = {
  slug: 'drancy',
  entityType: 'City',
  metaTitle: 'Épaviste Drancy (93700) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Drancy (93700). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Retrait de véhicule hors d\'usage à Drancy',
      subtitle: 'Une solution organisée pour retirer un véhicule immobilisé à Drancy (93700) dans le respect des démarches requises.',
      badge: 'Drancy (93700)',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Drancy',
      intro: 'Notre équipe intervient dans l\'ensemble de la commune de Drancy pour procéder à l\'enlèvement de votre véhicule. Chaque demande est organisée en tenant compte de l’emplacement exact du véhicule. La prise en charge est organisée à partir des informations communiquées lors du contact. Nos dépanneuses rayonnent également sur les secteurs limitrophes comme Le Bourget (Seine-Saint-Denis) et Le Blanc-Mesnil.',
      zones: [
        { name: 'Zones pavillonnaires', delay: 'Sous 24h', specificities: 'Enlèvement au domicile ou dans votre allée privée.' },
        { name: 'Axes vers Bobigny', delay: '24h', specificities: 'Dépannage bord de route ou parking.' }
      ],
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Drancy',
      content: 'La densité de circulation à Drancy (93700) exige une solution professionnelle pour l\'enlèvement de votre épave. Nous mettons à votre disposition nos dépanneuses spécialisées dans les interventions en petite couronne. Fini les soucis de stationnement abusif : nous récupérons votre véhicule hors d\'usage et l\'amenons chez un broyeur agréé VHU partenaire. L’organisation du retrait tient compte de l’emplacement du véhicule, de son état et des conditions d’accès. La préparation du passage vise à éviter les déplacements inutiles et les difficultés d’accès. Le créneau est confirmé après vérification des éléments utiles à la prise en charge.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Drancy soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-Saint-Denis sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Dépollution et Recyclage',
      content: 'L\'enlèvement est suivi d\'un acheminement vers un centre VHU partenaire agréé. Cette organisation garantit une prise en charge conforme et une valorisation dans les filières prévues. Le parcours du véhicule est défini dès la prise de rendez-vous avec les professionnels concernés.',
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Drancy',
      questions: [
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Délivrez-vous le certificat de destruction immédiatement ?', a: 'Oui, nous vous remettons le certificat de cession pour destruction en main propre le jour de l\'enlèvement.' },
        { q: 'L\'intervention à Drancy est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Drancy sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Drancy',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
