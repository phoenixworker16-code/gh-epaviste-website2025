import { PageData } from '../types'

export const montaletLeBoisData: PageData = {
  slug: 'montalet-le-bois',
  entityType: 'City',
  metaTitle: 'Épaviste Montalet-le-Bois (78440) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Montalet-le-Bois (78440). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
  relatedServicesSlugs: [
    'enlevement-epave-parking-souterrain',
    'enlevement-voiture-en-panne',
    'enlevement-voiture-sans-carte-grise'
  ],
  relatedCitiesSlugs: [
    'enlevement-epave-yvelines'
  ],
  blocks: [
    {
      type: 'Hero',
      title: 'Retrait d\'épave par professionnel agréé à Montalet-le-Bois (78440) dans tout Montalet-le-Bois',
      subtitle: 'Service gratuit d\'épaviste à Montalet-le-Bois (78440). Votre véhicule hors d\'usage retiré à Montalet-le-Bois.',
      badge: 'Montalet-le-Bois (78440)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Montalet-le-Bois',
      content: 'À Montalet-le-Bois, nous intervenons même sur les chemins non goudronnés pour retirer votre épave. Les habitants des zones rurales de Montalet-le-Bois nous font confiance pour un service fiable. À Montalet-le-Bois, notre logistique rurale permet de retirer les épaves même en terrain accidenté. La préparation logistique intègre les spécificités de chaque demande d\'enlèvement. Notre équipe connaît les spécificités des zones rurales autour de Montalet-le-Bois pour une intervention adaptée.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'L\'enlèvement d\'un véhicule hors d\'usage à Montalet-le-Bois implique une stricte conformité réglementaire. Voici les éléments à préparer. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Yvelines sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'L\'enlèvement terminé, le transfert est organisé vers un professionnel de la filière réglementée. Les partenaires assurent le respect des obligations liées à la prise en charge de ces véhicules. Chaque intervenant intervient dans son domaine de compétence selon le planning établi.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Montalet-le-Bois',
      intro: 'Le retrait de votre épave à Montalet-le-Bois est possible où qu\'elle se trouve sur la commune. Pour un retrait à Montalet-le-Bois, notre équipe se tient prête à intervenir au créneau convenu. Pour le secteur 78440, nos équipes interviennent régulièrement et connaissent parfaitement les accès et particularités de Montalet-le-Bois. Au-delà du centre de Montalet-le-Bois, les secteurs périphériques sont régulièrement visités.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Montalet-le-Bois',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Montalet-le-Bois est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Montalet-le-Bois sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Montalet-le-Bois',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
