import { PageData } from '../types'

export const melunData: PageData = {
  slug: 'melun',
  entityType: 'City',
  metaTitle: 'Épaviste Melun (77000) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Melun (77000). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Service d\'enlèvement d\'épave à Melun',
      subtitle: 'Une solution organisée pour retirer un véhicule immobilisé à Melun (77000) dans le respect des démarches requises.',
      badge: 'Melun (77000)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Melun',
      content: 'Dans une agglomération dynamique comme Melun (77000), se débarrasser d\'un véhicule encombrant nécessite une logistique précise. Notre équipe couvre l\'ensemble de la commune pour vous proposer un service d\'enlèvement d\'épave totalement gratuit. Que ce soit du côté de Rue de Belle Ombre ou ailleurs dans la commune, nous intervenons gratuitement. Nous garantissons une prise en charge conforme à la législation avec remise du certificat de destruction. La demande permet de préciser les contraintes de stationnement et les documents disponibles avant l’intervention. Un échange préalable permet de prévoir le matériel approprié et le créneau de passage. Les informations disponibles sont examinées avant de fixer les modalités du retrait.',
    },
    {
      type: 'VhuCompliance',
      title: 'Dépollution et Recyclage',
      content: 'Après l\'enlèvement, le véhicule est acheminé vers un centre VHU partenaire agréé. Les étapes ultérieures sont réalisées par les professionnels compétents, conformément au cadre applicable. Cette répartition des rôles assure une continuité entre l’enlèvement et les opérations réglementaires ultérieures.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Melun',
      intro: 'Notre équipe intervient dans l\'ensemble de la commune de Melun pour procéder à l\'enlèvement de votre véhicule. Le rendez-vous est préparé selon le type d’accès indiqué lors de la demande. La demande permet d’anticiper les informations pratiques liées au lieu de retrait. Nos dépanneuses rayonnent également sur les secteurs limitrophes comme Le Mée-sur-Seine et Vert-Saint-Denis.',
      zones: [
        { name: 'Centre-ville & Rues étroites', delay: 'Sous 24h', specificities: 'Matériel adapté aux accès difficiles et parkings.' },
        { name: 'Secteur Avenue Alexandre Ribot / Avenue Georges Pompidou', delay: 'Sur RDV', specificities: 'Prise en charge rapide sur les grands axes.' }
      ],
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Melun, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Melun',
      questions: [
        { q: 'L\'intervention à Melun est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Melun sont entièrement gratuits.' },
        { q: 'Délivrez-vous le certificat de destruction immédiatement ?', a: 'Oui, nous vous remettons le certificat de cession pour destruction en main propre le jour de l\'enlèvement.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Mon véhicule est bloqué en sous-sol à Melun, est-ce un problème ?', a: 'Pas du tout. Nous disposons de dépanneuses 4x4 extra-basses capables d\'entrer dans la majorité des parkings souterrains.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Melun',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
