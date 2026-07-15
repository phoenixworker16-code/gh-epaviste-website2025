import { PageData } from '../types'

export const parisData: PageData = {
  slug: 'paris',
  entityType: 'City',
  metaTitle: 'Épaviste Paris (75001) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Paris (75001). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
  relatedServicesSlugs: [
    'enlevement-epave-parking-souterrain',
    'enlevement-voiture-en-panne',
    'enlevement-voiture-sans-carte-grise'
  ],
  relatedCitiesSlugs: [
    'enlevement-epave-paris'
  ],
  blocks: [
    {
      type: 'Hero',
      title: 'Épaviste Rapide au Cœur de Paris (75001)',
      subtitle: 'Prise en charge professionnelle de votre véhicule hors d\'usage avec un rendez-vous adapté à son emplacement.',
      badge: 'Paris (75001)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Paris',
      content: 'Vous résidez en plein centre de Paris (75001) et votre véhicule est hors d\'usage ? Le stationnement urbain rend la présence d\'une épave particulièrement coûteuse et contraignante. GH Épaviste intervient rapidement pour l\'enlèvement gratuit de votre VHU (voiture, moto, utilitaire). Que ce soit du côté de Allée Paris-Ivry ou ailleurs dans la commune, nous intervenons gratuitement. Votre véhicule est ensuite acheminé vers un centre VHU partenaire pour y être dépollué dans les règles. L’organisation du retrait tient compte de l’emplacement du véhicule, de son état et des conditions d’accès. Le rendez-vous est organisé à partir de la situation du véhicule et des conditions d’accès indiquées. Les détails communiqués en amont servent à organiser le passage dans de bonnes conditions.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Paris',
      intro: 'Notre équipe intervient dans l\'ensemble de la commune de Paris pour procéder à l\'enlèvement de votre véhicule. Le rendez-vous est préparé selon le type d’accès indiqué lors de la demande. Les modalités de passage sont précisées avant le déplacement du professionnel. Nos dépanneuses rayonnent également sur les secteurs limitrophes comme Saint-Mandé et Clichy.',
      zones: [
        { name: 'Centre-ville & Rues étroites', delay: 'Sous 24h', specificities: 'Matériel adapté aux accès difficiles et parkings.' },
        { name: 'Quartiers périphériques', delay: '24h à 48h', specificities: 'Intervention planifiée.' }
      ],
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Paris, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Paris sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Dépollution et Recyclage',
      content: 'La prise en charge prévoit le transfert du véhicule vers un centre VHU partenaire agréé. Les opérations prévues par la réglementation et le recyclage y sont assurés dans les filières adaptées. Le propriétaire conserve ainsi une information claire sur le parcours réglementaire du véhicule.',
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Paris',
      questions: [
        { q: 'L\'intervention à Paris est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Paris sont entièrement gratuits.' },
        { q: 'Délivrez-vous le certificat de destruction immédiatement ?', a: 'Oui, nous vous remettons le certificat de cession pour destruction en main propre le jour de l\'enlèvement.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Mon véhicule est bloqué en sous-sol à Paris, est-ce un problème ?', a: 'Pas du tout. Nous disposons de dépanneuses 4x4 extra-basses capables d\'entrer dans la majorité des parkings souterrains.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Paris',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
