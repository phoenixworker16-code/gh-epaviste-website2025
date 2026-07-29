import { PageData } from '../types'

export const laCourneuveData: PageData = {
  slug: 'la-courneuve',
  entityType: 'City',
  metaTitle: 'Épaviste La Courneuve (93120) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à La Courneuve (93120). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Service d\'enlèvement de véhicule à La Courneuve (93120) dans tout La Courneuve',
      subtitle: 'Votre épave à La Courneuve retirée gratuitement. Intervention rapide dans le 93120 à La Courneuve.',
      badge: 'La Courneuve (93120)',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur La Courneuve',
      intro: 'À La Courneuve, nous pouvons retirer votre véhicule hors d\'usage en tout point du territoire. Avant l\'enlèvement à La Courneuve, les informations pratiques sont échangées avec le propriétaire. Le code postal 93120 est intégré dans notre tournée d\'enlèvement régulière à La Courneuve, ce qui garantit une intervention rapide. Les axes routiers menant à La Courneuve sont régulièrement empruntés par nos équipes.',
      zones: [
        { name: 'Zones pavillonnaires', delay: 'Sous 24h', specificities: 'Enlèvement au domicile ou dans votre allée privée.' },
        { name: 'Centre-ville & Axes principaux', delay: '24h', specificities: 'Retrait d\'épave sur voie publique.' },
        { name: 'Secteurs d\'activité', delay: 'Sur RDV', specificities: 'Intervention en zone commerciale.' }
      ],
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à La Courneuve',
      content: 'Votre véhicule est immobilisé à La Courneuve et vous cherchez un enlèvement gratuit et fiable ? Un véhicule abandonné dans La Courneuve gêne rapidement la circulation et le stationnement. Notre service à La Courneuve garantit un enlèvement gratuit avec une logistique adaptée à la densité urbaine. Un créneau vous est proposé en fonction des informations communiquées sur le véhicule. Notre équipe intervient rapidement dans toute La Courneuve grâce à une connaissance fine du secteur.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à La Courneuve soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-Saint-Denis sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Un opérateur partenaire réceptionne le véhicule pour les opérations suivantes. Le processus respecte les prescriptions légales applicables à ce type de véhicule. L\'organisation du parcours permet un suivi clair des différentes phases de traitement.',
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à La Courneuve',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Intervenez-vous rapidement en cas de véhicule gênant la circulation à La Courneuve ?', a: 'Oui, nous priorisons les situations urgentes en petite couronne. Contactez-nous pour un créneau adapté.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à La Courneuve est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à La Courneuve sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à La Courneuve',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
