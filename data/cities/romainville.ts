import { PageData } from '../types'

export const romainvilleData: PageData = {
  slug: 'romainville',
  entityType: 'City',
  metaTitle: 'Épaviste Romainville (93230) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Romainville (93230). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Votre épaviste à Romainville pour enlèvement gratuit de VHU dans le 93230',
      subtitle: 'À Romainville (93230) : solution complète d\'enlèvement d\'épave gratuite pour les habitants de Romainville.',
      badge: 'Romainville (93230)',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Romainville',
      intro: 'Nous venons chercher votre épave à Romainville, même dans les endroits difficilement accessibles. L\'intervention à Romainville fait l\'objet d\'une préparation approfondie en amont. Notre équipe couvre le secteur postal 93230 avec une logistique dédiée. Les habitants de Romainville peuvent compter sur notre présence régulière dans ce code postal. À partir de Romainville, nos dépanneuses rayonnent dans un large secteur géographique.',
      zones: [
        { name: 'Zones pavillonnaires', delay: 'Sous 24h', specificities: 'Enlèvement au domicile ou dans votre allée privée.' },
        { name: 'Centre-ville & Axes principaux', delay: '24h', specificities: 'Retrait d\'épave sur voie publique.' },
        { name: 'Secteurs d\'activité', delay: 'Sur RDV', specificities: 'Intervention en zone commerciale.' }
      ],
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Romainville',
      content: 'Les rues étroites de Romainville ne sont pas un endroit pour laisser un véhicule hors d\'usage. Un véhicule abandonné dans Romainville gêne rapidement la circulation et le stationnement. Nous disposons à Romainville de dépanneuses adaptées aux rues étroites et au trafic dense. Le rendez-vous est organisé à partir de la situation du véhicule et des conditions d\'accès indiquées. L\'intervention à Romainville est organisée pour être efficace malgré la densité urbaine.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Romainville, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-Saint-Denis sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'L\'organisation du service prévoit l\'orientation systématique vers un professionnel habilité. La conformité aux textes réglementaires est vérifiée par les opérateurs compétents. L\'organisation des différentes phases permet un traitement complet dans le respect des règles.',
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Romainville',
      questions: [
        { q: 'L\'intervention à Romainville est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Romainville sont entièrement gratuits.' },
        { q: 'Délivrez-vous le certificat de destruction immédiatement ?', a: 'Oui, nous vous remettons le certificat de cession pour destruction en main propre le jour de l\'enlèvement.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Intervenez-vous rapidement en cas de véhicule gênant la circulation à Romainville ?', a: 'Oui, nous priorisons les situations urgentes en petite couronne. Contactez-nous pour un créneau adapté.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Romainville',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
