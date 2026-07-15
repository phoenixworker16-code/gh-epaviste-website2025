import { PageData } from '../types'

export const issyLesMoulineauxData: PageData = {
  slug: 'issy-les-moulineaux',
  entityType: 'City',
  metaTitle: 'Épaviste Issy-les-Moulineaux (92130) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Issy-les-Moulineaux (92130). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
  relatedServicesSlugs: [
    'enlevement-epave-parking-souterrain',
    'enlevement-voiture-en-panne',
    'enlevement-voiture-sans-carte-grise'
  ],
  relatedCitiesSlugs: [
    'enlevement-epave-hauts-de-seine'
  ],
  blocks: [
    {
      type: 'Hero',
      title: 'Service d\'enlèvement d\'épave à Issy-les-Moulineaux',
      subtitle: 'Un enlèvement préparé selon l’accès au véhicule et les informations transmises lors de votre demande.',
      badge: 'Issy-les-Moulineaux (92130)',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Issy-les-Moulineaux',
      intro: 'Notre équipe intervient dans l\'ensemble de la commune de Issy-les-Moulineaux pour procéder à l\'enlèvement de votre véhicule. Le rendez-vous est préparé selon le type d’accès indiqué lors de la demande. Les modalités de passage sont précisées avant le déplacement du professionnel.',
      zones: [
        { name: 'Zones pavillonnaires', delay: 'Sous 24h', specificities: 'Enlèvement au domicile ou dans votre allée privée.' },
        { name: 'Secteur Gare / Centre', delay: 'Rapide', specificities: 'Retrait d\'épave sur voie publique.' }
      ],
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Issy-les-Moulineaux',
      content: 'La densité de circulation à Issy-les-Moulineaux (92130) exige une solution professionnelle pour l\'enlèvement de votre épave. Nous mettons à votre disposition nos dépanneuses spécialisées dans les interventions en petite couronne. Fini les soucis de stationnement abusif : nous récupérons votre véhicule hors d\'usage et l\'amenons chez un broyeur agréé VHU partenaire. La demande permet de préciser les contraintes de stationnement et les documents disponibles avant l’intervention. Le rendez-vous est organisé à partir de la situation du véhicule et des conditions d’accès indiquées. Les modalités du rendez-vous sont précisées afin de préparer l’intervention.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'L\'enlèvement d\'un véhicule hors d\'usage à Issy-les-Moulineaux implique une stricte conformité réglementaire. Voici les éléments à préparer. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Hauts-de-Seine sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Dépollution et Recyclage',
      content: 'L\'enlèvement est suivi d\'un acheminement vers un centre VHU partenaire agréé. Le partenaire assure les formalités et l’orientation du véhicule vers les filières réglementaires appropriées. Le partenaire compétent prend ensuite le relais pour les étapes qui relèvent de sa responsabilité.',
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Issy-les-Moulineaux',
      questions: [
        { q: 'L\'intervention à Issy-les-Moulineaux est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Issy-les-Moulineaux sont entièrement gratuits.' },
        { q: 'Délivrez-vous le certificat de destruction immédiatement ?', a: 'Oui, nous vous remettons le certificat de cession pour destruction en main propre le jour de l\'enlèvement.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Issy-les-Moulineaux',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
