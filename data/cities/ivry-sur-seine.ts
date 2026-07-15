import { PageData } from '../types'

export const ivrySurSeineData: PageData = {
  slug: 'ivry-sur-seine',
  entityType: 'City',
  metaTitle: 'Épaviste Ivry-sur-Seine (94200) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Ivry-sur-Seine (94200). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Enlèvement d\'épave à Ivry-sur-Seine (94200)',
      subtitle: 'Prise en charge professionnelle de votre véhicule hors d\'usage avec un rendez-vous adapté à son emplacement.',
      badge: 'Ivry-sur-Seine (94200)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Ivry-sur-Seine',
      content: 'Dans une agglomération dynamique comme Ivry-sur-Seine (94200), se débarrasser d\'un véhicule encombrant nécessite une logistique précise. Notre équipe couvre l\'ensemble de la commune pour vous proposer un service d\'enlèvement d\'épave totalement gratuit. Que ce soit du côté de Rue Gaston Picard ou ailleurs dans la commune, nous intervenons gratuitement. Nous garantissons une prise en charge conforme à la législation avec remise du certificat de destruction. Avant le rendez-vous, vérifiez l’accès au véhicule et préparez les documents demandés. Le rendez-vous est organisé à partir de la situation du véhicule et des conditions d’accès indiquées. Les modalités du rendez-vous sont précisées afin de préparer l’intervention.',
    },
    {
      type: 'VhuCompliance',
      title: 'Dépollution et Recyclage',
      content: 'La prise en charge prévoit le transfert du véhicule vers un centre VHU partenaire agréé. Les opérations prévues par la réglementation et le recyclage y sont assurés dans les filières adaptées. Le transfert est organisé avec un partenaire spécialisé dans les procédures applicables aux véhicules hors d’usage.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Ivry-sur-Seine',
      intro: 'Notre équipe intervient dans l\'ensemble de la commune de Ivry-sur-Seine pour procéder à l\'enlèvement de votre véhicule. La préparation du passage prend en compte les contraintes signalées avant l’intervention. Les contraintes d’accès sont prises en compte pendant la préparation du rendez-vous.',
      zones: [
        { name: 'Centre-ville & Rues étroites', delay: 'Sous 24h', specificities: 'Matériel adapté aux accès difficiles et parkings.' },
        { name: 'Secteur Allée de la Chocolaterie / Avenue Danielle Casanova', delay: 'Sur RDV', specificities: 'Prise en charge rapide sur les grands axes.' }
      ],
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Ivry-sur-Seine, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Val-de-Marne sera indispensable.',
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Ivry-sur-Seine',
      questions: [
        { q: 'Mon véhicule est bloqué en sous-sol à Ivry-sur-Seine, est-ce un problème ?', a: 'Pas du tout. Nous disposons de dépanneuses 4x4 extra-basses capables d\'entrer dans la majorité des parkings souterrains.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Délivrez-vous le certificat de destruction immédiatement ?', a: 'Oui, nous vous remettons le certificat de cession pour destruction en main propre le jour de l\'enlèvement.' },
        { q: 'L\'intervention à Ivry-sur-Seine est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Ivry-sur-Seine sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Ivry-sur-Seine',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
