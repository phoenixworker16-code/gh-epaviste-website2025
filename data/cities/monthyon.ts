import { PageData } from '../types'

export const monthyonData: PageData = {
  slug: 'monthyon',
  entityType: 'City',
  metaTitle: 'Épaviste Monthyon (77122) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Monthyon (77122). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
  relatedServicesSlugs: [
    'enlevement-epave-parking-souterrain',
    'enlevement-voiture-en-panne',
    'enlevement-voiture-sans-carte-grise'
  ],
  relatedCitiesSlugs: [
    'enlevement-epave-seine-et-marne'
  ],
  blocks: [
    {
      type: 'Hero',
      title: 'Retrait auto hors d\'usage Monthyon (77122) dans le département 77122',
      subtitle: 'À Monthyon (77122) : solution complète d\'enlèvement d\'épave gratuite pour les habitants de Monthyon.',
      badge: 'Monthyon (77122)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Monthyon',
      content: 'À Monthyon, nous intervenons même sur les chemins non goudronnés pour retirer votre épave. Votre propriété à Monthyon est accessible à nos dépanneuses pour un enlèvement gratuit. À Monthyon, nous retirons les épaves des champs, prés et chemins sans difficulté. La préparation logistique intègre les spécificités de chaque demande d\'enlèvement. Les détails de l\'intervention à Monthyon sont confirmés en amont pour une coordination parfaite.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Monthyon, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le véhicule est acheminé vers un professionnel autorisé à intervenir dans cette filière spécifique. Le suivi réglementaire est confié aux professionnels spécialisés dans cette prise en charge. Les professionnels impliqués travaillent en coordination pour la bonne fin des opérations.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Monthyon',
      intro: 'Vous avez une épave à Monthyon ? Notre équipe se déplace gratuitement où qu\'elle soit. Avant l\'enlèvement à Monthyon, les informations pratiques sont échangées avec le propriétaire. Les demandes pour le 77122 de Monthyon sont traitées en priorité par notre équipe qui connaît bien ce secteur. Les zones limitrophes de Monthyon peuvent aussi profiter de notre service d\'enlèvement.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Monthyon',
      questions: [
        { q: 'L\'intervention à Monthyon est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Monthyon sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Monthyon',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
