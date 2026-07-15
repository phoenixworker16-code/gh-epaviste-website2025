import { PageData } from '../types'

export const boulogneBillancourtData: PageData = {
  slug: 'boulogne-billancourt',
  entityType: 'City',
  metaTitle: 'Épaviste Boulogne-Billancourt (92100) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Boulogne-Billancourt (92100). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Épaviste Agréé Partenaire à Boulogne-Billancourt',
      subtitle: 'Un enlèvement préparé selon l’accès au véhicule et les informations transmises lors de votre demande.',
      badge: 'Boulogne-Billancourt (92100)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Boulogne-Billancourt',
      content: 'Dans une agglomération dynamique comme Boulogne-Billancourt (92100), se débarrasser d\'un véhicule encombrant nécessite une logistique précise. Notre équipe couvre l\'ensemble de la commune pour vous proposer un service d\'enlèvement d\'épave totalement gratuit. Que ce soit du côté de Rue des Abondances ou ailleurs dans la commune, nous intervenons gratuitement. Nous garantissons une prise en charge conforme à la législation avec remise du certificat de destruction. La demande permet de préciser les contraintes de stationnement et les documents disponibles avant l’intervention. Les informations communiquées au moment de la demande facilitent la préparation du retrait. Un point préalable facilite la coordination entre le propriétaire et le professionnel chargé du retrait.',
    },
    {
      type: 'VhuCompliance',
      title: 'Dépollution et Recyclage',
      content: 'Le véhicule est remis à un partenaire spécialisé pour la suite de son traitement réglementaire. Le partenaire assure les formalités et l’orientation du véhicule vers les filières réglementaires appropriées. Le propriétaire conserve ainsi une information claire sur le parcours réglementaire du véhicule.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Boulogne-Billancourt',
      intro: 'Notre équipe intervient dans l\'ensemble de la commune de Boulogne-Billancourt pour procéder à l\'enlèvement de votre véhicule. Le rendez-vous est préparé selon le type d’accès indiqué lors de la demande. Les indications fournies avant le rendez-vous servent à préparer l’itinéraire et l’accès. Nos dépanneuses rayonnent également sur les secteurs limitrophes comme Sèvres et Paris.',
      zones: [
        { name: 'Centre-ville & Rues étroites', delay: 'Sous 24h', specificities: 'Matériel adapté aux accès difficiles et parkings.' },
        { name: 'Secteur Avenue André Morizet / Avenue Edouard Vaillant', delay: 'Sur RDV', specificities: 'Prise en charge rapide sur les grands axes.' }
      ],
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Boulogne-Billancourt, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Hauts-de-Seine sera indispensable.',
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Boulogne-Billancourt',
      questions: [
        { q: 'Mon véhicule est bloqué en sous-sol à Boulogne-Billancourt, est-ce un problème ?', a: 'Pas du tout. Nous disposons de dépanneuses 4x4 extra-basses capables d\'entrer dans la majorité des parkings souterrains.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Délivrez-vous le certificat de destruction immédiatement ?', a: 'Oui, nous vous remettons le certificat de cession pour destruction en main propre le jour de l\'enlèvement.' },
        { q: 'L\'intervention à Boulogne-Billancourt est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Boulogne-Billancourt sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Boulogne-Billancourt',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
