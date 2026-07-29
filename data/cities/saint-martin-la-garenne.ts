import { PageData } from '../types'

export const saintMartinLaGarenneData: PageData = {
  slug: 'saint-martin-la-garenne',
  entityType: 'City',
  metaTitle: 'Épaviste Saint-Martin-la-Garenne (78520) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Saint-Martin-la-Garenne (78520). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Enlèvement gratuit de votre épave à Saint-Martin-la-Garenne (78520) dans tout Saint-Martin-la-Garenne',
      subtitle: 'Nous enlevons les épaves à Saint-Martin-la-Garenne (78520). Prestation gratuite incluant remorquage à Saint-Martin-la-Garenne.',
      badge: 'Saint-Martin-la-Garenne (78520)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Saint-Martin-la-Garenne',
      content: 'Dans la campagne autour de Saint-Martin-la-Garenne, débarrassez-vous gratuitement de votre épave. Dans les zones reculées de Saint-Martin-la-Garenne, nous adaptons notre matériel pour un retrait sans difficulté. Notre équipe à Saint-Martin-la-Garenne assure un service professionnel d\'enlèvement gratuit en zone rurale. La préparation du retrait inclut une vérification des accès et des contraintes éventuelles. Notre équipe connaît les spécificités des zones rurales autour de Saint-Martin-la-Garenne pour une intervention adaptée.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Saint-Martin-la-Garenne, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Yvelines sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Après l\'enlèvement, un professionnel partenaire prend le relais pour les opérations ultérieures. Les professionnels engagés respectent le cadre légal applicable à cette catégorie de véhicules. Les responsabilités de chaque intervenant sont distinguées dès l\'organisation de l\'enlèvement.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Saint-Martin-la-Garenne',
      intro: 'Aucun quartier de Saint-Martin-la-Garenne n\'est exclu : nous intervenons partout dans la commune. L\'intervention à Saint-Martin-la-Garenne est programmée après avoir pris connaissance de votre situation. Les demandes pour le 78520 de Saint-Martin-la-Garenne sont traitées en priorité par notre équipe qui connaît bien ce secteur. Notre rayon d\'action ne se limite pas à Saint-Martin-la-Garenne mais s\'étend aux alentours.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Saint-Martin-la-Garenne',
      questions: [
        { q: 'L\'intervention à Saint-Martin-la-Garenne est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Saint-Martin-la-Garenne sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Saint-Martin-la-Garenne',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
