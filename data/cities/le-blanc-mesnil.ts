import { PageData } from '../types'

export const leBlancMesnilData: PageData = {
  slug: 'le-blanc-mesnil',
  entityType: 'City',
  metaTitle: 'Épaviste Le Blanc-Mesnil (93150) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Le Blanc-Mesnil (93150). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Votre épaviste à Le Blanc-Mesnil pour enlèvement gratuit de VHU dans le 93150',
      subtitle: 'Épaviste gratuit à Le Blanc-Mesnil (93150) : intervention dans tout Le Blanc-Mesnil pour votre véhicule hors d\'usage.',
      badge: 'Le Blanc-Mesnil (93150)',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Le Blanc-Mesnil',
      intro: 'Que vous habitiez le centre ou la périphérie de Le Blanc-Mesnil, nous venons retirer votre véhicule. Notre équipe adapte sa logistique à Le Blanc-Mesnil en fonction de chaque configuration. Notre équipe couvre le secteur postal 93150 avec une logistique dédiée. Les habitants de Le Blanc-Mesnil peuvent compter sur notre présence régulière dans ce code postal. Au-delà des limites de Le Blanc-Mesnil, notre service continue dans les secteurs alentour.',
      zones: [
        { name: 'Zones pavillonnaires', delay: 'Sous 24h', specificities: 'Enlèvement au domicile ou dans votre allée privée.' },
        { name: 'Centre-ville & Axes principaux', delay: '24h', specificities: 'Retrait d\'épave sur voie publique.' },
        { name: 'Secteurs d\'activité', delay: 'Sur RDV', specificities: 'Intervention en zone commerciale.' }
      ],
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Le Blanc-Mesnil',
      content: 'À Le Blanc-Mesnil, le stationnement est déjà difficile sans une épave qui occupe une place. Un véhicule abandonné dans Le Blanc-Mesnil gêne rapidement la circulation et le stationnement. Notre équipe à Le Blanc-Mesnil intervient avec discrétion et efficacité dans les quartiers animés. La préparation du passage vise à éviter les déplacements inutiles et les difficultés d\'accès. Nous anticipons les difficultés d\'accès à Le Blanc-Mesnil pour une intervention sans accroc.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Le Blanc-Mesnil soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-Saint-Denis sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Une fois l\'enlèvement effectué, le véhicule rejoint une installation partenaire dédiée. Les exigences légales sont satisfaites par l\'intervention de partenaires compétents dans la filière. Le propriétaire conserve ainsi une information claire sur le parcours réglementaire du véhicule.',
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Le Blanc-Mesnil',
      questions: [
        { q: 'L\'intervention à Le Blanc-Mesnil est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Le Blanc-Mesnil sont entièrement gratuits.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Intervenez-vous rapidement en cas de véhicule gênant la circulation à Le Blanc-Mesnil ?', a: 'Oui, nous priorisons les situations urgentes en petite couronne. Contactez-nous pour un créneau adapté.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Le Blanc-Mesnil',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
