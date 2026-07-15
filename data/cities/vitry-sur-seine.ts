import { PageData } from '../types'

export const vitrySurSeineData: PageData = {
  slug: 'vitry-sur-seine',
  entityType: 'City',
  metaTitle: 'Épaviste Vitry-sur-Seine (94400) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Vitry-sur-Seine (94400). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
  relatedServicesSlugs: [
    'enlevement-epave-parking-souterrain',
    'enlevement-voiture-en-panne',
    'enlevement-voiture-sans-carte-grise'
  ],
  relatedCitiesSlugs: [
    'enlevement-epave-val-de-marne'
  ],
  blocks: [
    {
      type: 'Hero',
      title: 'Service d\'enlèvement d\'épave à Vitry-sur-Seine',
      subtitle: 'Service professionnel d\'enlèvement d\'épaves gratuit sur l\'agglomération de Vitry-sur-Seine (94400). Prise en charge immédiate.',
      badge: 'Vitry-sur-Seine (94400)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Vitry-sur-Seine',
      content: 'Dans une agglomération dynamique comme Vitry-sur-Seine (94400), se débarrasser d\'un véhicule encombrant nécessite une logistique précise. Notre équipe couvre l\'ensemble de la commune pour vous proposer un service d\'enlèvement d\'épave totalement gratuit. Que ce soit du côté de Rue Meissonier ou ailleurs dans la commune, nous intervenons gratuitement. Nous garantissons une prise en charge conforme à la législation avec remise du certificat de destruction. Avant le rendez-vous, vérifiez l’accès au véhicule et préparez les documents demandés. Un échange préalable permet de prévoir le matériel approprié et le créneau de passage. Un point préalable facilite la coordination entre le propriétaire et le professionnel chargé du retrait.',
    },
    {
      type: 'VhuCompliance',
      title: 'Dépollution et Recyclage',
      content: 'Après l\'enlèvement, le véhicule est acheminé vers un centre VHU partenaire agréé. Le partenaire assure les formalités et l’orientation du véhicule vers les filières réglementaires appropriées. Le partenaire compétent prend ensuite le relais pour les étapes qui relèvent de sa responsabilité.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Vitry-sur-Seine',
      intro: 'Notre équipe intervient dans l\'ensemble de la commune de Vitry-sur-Seine pour procéder à l\'enlèvement de votre véhicule. Les informations de stationnement permettent d’anticiper les conditions de prise en charge. La prise en charge est organisée à partir des informations communiquées lors du contact. Nos dépanneuses rayonnent également sur les secteurs limitrophes comme Villejuif et Ivry-sur-Seine.',
      zones: [
        { name: 'Centre-ville & Rues étroites', delay: 'Sous 24h', specificities: 'Matériel adapté aux accès difficiles et parkings.' },
        { name: 'Secteur Avenue Anatole France / Avenue André Maginot', delay: 'Sur RDV', specificities: 'Prise en charge rapide sur les grands axes.' }
      ],
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Vitry-sur-Seine soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Val-de-Marne sera indispensable.',
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Vitry-sur-Seine',
      questions: [
        { q: 'L\'intervention à Vitry-sur-Seine est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Vitry-sur-Seine sont entièrement gratuits.' },
        { q: 'Délivrez-vous le certificat de destruction immédiatement ?', a: 'Oui, nous vous remettons le certificat de cession pour destruction en main propre le jour de l\'enlèvement.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Mon véhicule est bloqué en sous-sol à Vitry-sur-Seine, est-ce un problème ?', a: 'Pas du tout. Nous disposons de dépanneuses 4x4 extra-basses capables d\'entrer dans la majorité des parkings souterrains.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Vitry-sur-Seine',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
