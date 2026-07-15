import { PageData } from '../types'

export const massyData: PageData = {
  slug: 'massy',
  entityType: 'City',
  metaTitle: 'Épaviste Massy (91300) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Massy (91300). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
  relatedServicesSlugs: [
    'enlevement-epave-parking-souterrain',
    'enlevement-voiture-en-panne',
    'enlevement-voiture-sans-carte-grise'
  ],
  relatedCitiesSlugs: [
    'enlevement-epave-essonne'
  ],
  blocks: [
    {
      type: 'Hero',
      title: 'Épaviste Agréé Partenaire à Massy',
      subtitle: 'Un enlèvement préparé selon l’accès au véhicule et les informations transmises lors de votre demande.',
      badge: 'Massy (91300)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Massy',
      content: 'Dans une agglomération dynamique comme Massy (91300), se débarrasser d\'un véhicule encombrant nécessite une logistique précise. Notre équipe couvre l\'ensemble de la commune pour vous proposer un service d\'enlèvement d\'épave totalement gratuit. Que ce soit du côté de Rue Marx Dormoy ou ailleurs dans la commune, nous intervenons gratuitement. Nous garantissons une prise en charge conforme à la législation avec remise du certificat de destruction. Avant le rendez-vous, vérifiez l’accès au véhicule et préparez les documents demandés. Le rendez-vous est organisé à partir de la situation du véhicule et des conditions d’accès indiquées. La préparation du rendez-vous clarifie les éléments à présenter lors de l’enlèvement.',
    },
    {
      type: 'VhuCompliance',
      title: 'Dépollution et Recyclage',
      content: 'La prise en charge prévoit le transfert du véhicule vers un centre VHU partenaire agréé. Cette organisation garantit une prise en charge conforme et une valorisation dans les filières prévues. Les démarches sont préparées afin que le relais vers le partenaire soit effectué dans le cadre prévu.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Massy',
      intro: 'Notre équipe intervient dans l\'ensemble de la commune de Massy pour procéder à l\'enlèvement de votre véhicule. La préparation du passage prend en compte les contraintes signalées avant l’intervention. Le rendez-vous est préparé pour tenir compte de la situation déclarée par le propriétaire.',
      zones: [
        { name: 'Centre-ville & Rues étroites', delay: 'Sous 24h', specificities: 'Matériel adapté aux accès difficiles et parkings.' },
        { name: 'Secteur Av du Pdt J Fitzgerald Kennedy / Avenue Carnot', delay: 'Sur RDV', specificities: 'Prise en charge rapide sur les grands axes.' }
      ],
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Massy, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Essonne sera indispensable.',
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Massy',
      questions: [
        { q: 'L\'intervention à Massy est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Massy sont entièrement gratuits.' },
        { q: 'Délivrez-vous le certificat de destruction immédiatement ?', a: 'Oui, nous vous remettons le certificat de cession pour destruction en main propre le jour de l\'enlèvement.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Mon véhicule est bloqué en sous-sol à Massy, est-ce un problème ?', a: 'Pas du tout. Nous disposons de dépanneuses 4x4 extra-basses capables d\'entrer dans la majorité des parkings souterrains.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Massy',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
