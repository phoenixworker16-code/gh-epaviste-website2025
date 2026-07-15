import { PageData } from '../types'

export const chellesData: PageData = {
  slug: 'chelles',
  entityType: 'City',
  metaTitle: 'Épaviste Chelles (77500) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Chelles (77500). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Enlèvement d\'épave à Chelles (77500)',
      subtitle: 'Nous venons jusqu\'à vous à Chelles (77500) pour retirer gratuitement votre véhicule encombrant.',
      badge: 'Chelles (77500)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Chelles',
      content: 'Situé à Chelles (77500), votre véhicule hors d\'usage encombre votre terrain ou votre cour ? Nous nous déplaçons gratuitement jusqu\'à vous, même dans les zones moins denses du département Seine-et-Marne. Profitez d\'un débarras d\'épave professionnel et écologique, avec une prise en charge complète du remorquage au recyclage. Avant le rendez-vous, vérifiez l’accès au véhicule et préparez les documents demandés. La préparation du passage vise à éviter les déplacements inutiles et les difficultés d’accès. La demande permet d’identifier les informations nécessaires avant le déplacement.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'L\'enlèvement d\'un véhicule hors d\'usage à Chelles implique une stricte conformité réglementaire. Voici les éléments à préparer. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Dépollution et Recyclage',
      content: 'Le véhicule est remis à un partenaire spécialisé pour la suite de son traitement réglementaire. Cette organisation garantit une prise en charge conforme et une valorisation dans les filières prévues. Cette répartition des rôles assure une continuité entre l’enlèvement et les opérations réglementaires ultérieures.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Chelles',
      intro: 'Notre équipe intervient dans l\'ensemble de la commune de Chelles pour procéder à l\'enlèvement de votre véhicule. Le rendez-vous est préparé selon le type d’accès indiqué lors de la demande. Les détails partagés avant l’intervention facilitent l’organisation du passage. Nos dépanneuses rayonnent également sur les secteurs limitrophes comme Coubron et Le Pin (Seine-et-Marne).',
      zones: [
        { name: 'Bourg et centre de Chelles', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Chelles',
      questions: [
        { q: 'L\'intervention à Chelles est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Chelles sont entièrement gratuits.' },
        { q: 'Délivrez-vous le certificat de destruction immédiatement ?', a: 'Oui, nous vous remettons le certificat de cession pour destruction en main propre le jour de l\'enlèvement.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Chelles',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
