import { PageData } from '../types'

export const guibevilleData: PageData = {
  slug: 'guibeville',
  entityType: 'City',
  metaTitle: 'Épaviste Guibeville (91630) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Guibeville (91630). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Débarras auto gratuit à Guibeville (91630) - Intervention dans le 91630',
      subtitle: 'Épaviste gratuit à Guibeville (91630) : intervention dans tout Guibeville pour votre véhicule hors d\'usage.',
      badge: 'Guibeville (91630)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Guibeville',
      content: 'Votre propriété à Guibeville est encombrée par un véhicule hors d\'usage ? Nous intervenons. Votre propriété à Guibeville est accessible à nos dépanneuses pour un enlèvement gratuit. Notre équipe à Guibeville est équipée de véhicules adaptés aux chemins ruraux. Le créneau est confirmé après vérification des éléments utiles à la prise en charge. Les modalités de l\'intervention à Guibeville sont conçues pour les propriétés rurales.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'L\'enlèvement d\'un véhicule hors d\'usage à Guibeville implique une stricte conformité réglementaire. Voici les éléments à préparer. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Essonne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'La suite du parcours est confiée à un partenaire habilité à intervenir sur les véhicules en fin de vie. La conformité du traitement est assurée par le respect des procédures en vigueur. La chaîne de traitement est conçue pour assurer une prise en charge sans interruption.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Guibeville',
      intro: 'À Guibeville, notre dispositif d\'intervention permet de couvrir toute la commune efficacement. Pour un retrait à Guibeville, le professionnel se prépare en fonction des indications reçues. Le code postal 91630 est intégré dans notre tournée d\'enlèvement régulière à Guibeville, ce qui garantit une intervention rapide. Au départ de Guibeville, nos équipes couvrent un vaste secteur géographique.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Guibeville',
      questions: [
        { q: 'L\'intervention à Guibeville est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Guibeville sont entièrement gratuits.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Guibeville',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
