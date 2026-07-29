import { PageData } from '../types'

export const fossesData: PageData = {
  slug: 'fosses',
  entityType: 'City',
  metaTitle: 'Épaviste Fosses (95470) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Fosses (95470). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
  relatedServicesSlugs: [
    'enlevement-epave-parking-souterrain',
    'enlevement-voiture-en-panne',
    'enlevement-voiture-sans-carte-grise'
  ],
  relatedCitiesSlugs: [
    'enlevement-epave-val-d-oise'
  ],
  blocks: [
    {
      type: 'Hero',
      title: 'Débarras auto gratuit à Fosses (95470) - Intervention dans le 95470',
      subtitle: 'Retrait gratuit épave Fosses (95470) : notre équipe intervient partout à Fosses sans frais.',
      badge: 'Fosses (95470)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Fosses',
      content: 'Redonnez de l\'espace à votre terrain à Fosses en confiant cette épave à notre service. Nous nous déplaçons gratuitement jusqu\'à vous, même dans les zones moins denses du département. À Fosses, nous retirons les épaves des champs, prés et chemins sans difficulté. Le créneau d\'intervention est déterminé en tenant compte de vos disponibilités. Le rendez-vous à Fosses est organisé pour minimiser les déplacements superflus.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Fosses soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Val-d\'Oise sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'L\'organisation comprend un relais vers un établissement habilité pour la suite des opérations. Les différentes étapes réglementaires sont assurées par les partenaires habilités. La continuité du traitement est assurée par une organisation structurée entre les partenaires.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Fosses',
      intro: 'Le service d\'enlèvement gratuit couvre l\'intégralité de la commune de Fosses. Pour un retrait à Fosses, notre équipe se tient prête à intervenir au créneau convenu. Pour le secteur 95470, nos équipes interviennent régulièrement et connaissent parfaitement les accès et particularités de Fosses. Au-delà des limites de Fosses, notre service continue dans les secteurs alentour.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Fosses',
      questions: [
        { q: 'L\'intervention à Fosses est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Fosses sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Fosses',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
