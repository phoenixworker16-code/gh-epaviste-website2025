import { PageData } from '../types'

export const nanterreData: PageData = {
  slug: 'nanterre',
  entityType: 'City',
  metaTitle: 'Épaviste Nanterre (92000) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Nanterre (92000). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Épaviste Agréé Partenaire à Nanterre',
      subtitle: 'Une solution organisée pour retirer un véhicule immobilisé à Nanterre (92000) dans le respect des démarches requises.',
      badge: 'Nanterre (92000)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Nanterre',
      content: 'Dans une agglomération dynamique comme Nanterre (92000), se débarrasser d\'un véhicule encombrant nécessite une logistique précise. Notre équipe couvre l\'ensemble de la commune pour vous proposer un service d\'enlèvement d\'épave totalement gratuit. Que ce soit du côté de Rue de Garches ou ailleurs dans la commune, nous intervenons gratuitement. Nous garantissons une prise en charge conforme à la législation avec remise du certificat de destruction. La demande permet de préciser les contraintes de stationnement et les documents disponibles avant l’intervention. La préparation du passage vise à éviter les déplacements inutiles et les difficultés d’accès. Les informations disponibles sont examinées avant de fixer les modalités du retrait.',
    },
    {
      type: 'VhuCompliance',
      title: 'Dépollution et Recyclage',
      content: 'Le véhicule est remis à un partenaire spécialisé pour la suite de son traitement réglementaire. Le partenaire assure les formalités et l’orientation du véhicule vers les filières réglementaires appropriées. Les responsabilités de chaque intervenant sont distinguées dès l’organisation de l’enlèvement.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Nanterre',
      intro: 'Notre équipe intervient dans l\'ensemble de la commune de Nanterre pour procéder à l\'enlèvement de votre véhicule. Le rendez-vous est préparé selon le type d’accès indiqué lors de la demande. Le créneau est défini en fonction des conditions signalées pour le véhicule. Nos dépanneuses rayonnent également sur les secteurs limitrophes comme Bezons et La Garenne-Colombes.',
      zones: [
        { name: 'Centre-ville & Rues étroites', delay: 'Sous 24h', specificities: 'Matériel adapté aux accès difficiles et parkings.' },
        { name: 'Secteur Avenue Félix Faure / Avenue Georges Clemenceau', delay: 'Sur RDV', specificities: 'Prise en charge rapide sur les grands axes.' }
      ],
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Nanterre, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Hauts-de-Seine sera indispensable.',
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Nanterre',
      questions: [
        { q: 'Mon véhicule est bloqué en sous-sol à Nanterre, est-ce un problème ?', a: 'Pas du tout. Nous disposons de dépanneuses 4x4 extra-basses capables d\'entrer dans la majorité des parkings souterrains.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Délivrez-vous le certificat de destruction immédiatement ?', a: 'Oui, nous vous remettons le certificat de cession pour destruction en main propre le jour de l\'enlèvement.' },
        { q: 'L\'intervention à Nanterre est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Nanterre sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Nanterre',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
