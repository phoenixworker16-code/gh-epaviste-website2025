import { PageData } from '../types'

export const leChesnayRocquencourtData: PageData = {
  slug: 'le-chesnay-rocquencourt',
  entityType: 'City',
  metaTitle: 'Épaviste Le Chesnay-Rocquencourt (78150) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Le Chesnay-Rocquencourt (78150). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
  relatedServicesSlugs: [
    'enlevement-epave-parking-souterrain',
    'enlevement-voiture-en-panne',
    'enlevement-voiture-sans-carte-grise'
  ],
  relatedCitiesSlugs: [
    'yvelines'
  ],
  blocks: [
    {
      type: 'Hero',
      title: 'Enlèvement voiture hors d\'usage Le Chesnay-Rocquencourt (78150) - Service Le Chesnay-Rocquencourt',
      subtitle: 'Enlèvement gratuit VHU à Le Chesnay-Rocquencourt (78150). Prenez rendez-vous, on s\'occupe de votre épave à Le Chesnay-Rocquencourt.',
      badge: 'Le Chesnay-Rocquencourt (78150)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Le Chesnay-Rocquencourt',
      content: 'Situé à Le Chesnay-Rocquencourt, votre véhicule hors d\'usage encombre votre terrain ou votre cour ? Dans les zones reculées de Le Chesnay-Rocquencourt, nous adaptons notre matériel pour un retrait sans difficulté. Notre équipe à Le Chesnay-Rocquencourt est équipée de véhicules adaptés aux chemins ruraux. Le programme d\'intervention est défini avec le propriétaire pour une prise en charge optimale. Chaque détail de l\'enlèvement à Le Chesnay-Rocquencourt est pensé pour une expérience sans tracas.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Le Chesnay-Rocquencourt, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Yvelines sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le transfert est organisé avec un professionnel de la filière autorisée pour ces opérations. Le respect des textes en vigueur est garanti par l\'intervention de professionnels habilités. La chaîne de prise en charge est structurée pour respecter les exigences applicables à chaque étape.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Le Chesnay-Rocquencourt',
      intro: 'L\'ensemble des zones résidentielles, commerciales et industrielles de Le Chesnay-Rocquencourt est couvert. La préparation de l\'intervention à Le Chesnay-Rocquencourt commence dès la réception de votre demande. Notre équipe couvre le secteur postal 78150 avec une logistique dédiée. Les habitants de Le Chesnay-Rocquencourt peuvent compter sur notre présence régulière dans ce code postal. Au-delà des limites de Le Chesnay-Rocquencourt, notre service continue dans les secteurs alentour.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Le Chesnay-Rocquencourt',
      questions: [
        { q: 'L\'intervention à Le Chesnay-Rocquencourt est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Le Chesnay-Rocquencourt sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Le Chesnay-Rocquencourt',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
