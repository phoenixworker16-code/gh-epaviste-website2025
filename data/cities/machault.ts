import { PageData } from '../types'

export const machaultData: PageData = {
  slug: 'machault',
  entityType: 'City',
  metaTitle: 'Épaviste Machault (77133) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Machault (77133). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Débarras automobile Machault (77133) dans toute l\'agglomération Machault',
      subtitle: 'Retrait VHU à Machault (77133) : prise en charge totale et gratuite de votre épave à Machault.',
      badge: 'Machault (77133)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Machault',
      content: 'Un véhicule abandonné sur votre terrain à Machault vous gêne au quotidien ? À la campagne, à Machault, une épave qui rouille sur un terrain est fréquente mais pas une fatalité. Notre équipe à Machault connaît les spécificités des propriétés rurales et agricoles. La coordination avec le propriétaire permet de caler le meilleur créneau pour l\'enlèvement. Le rendez-vous à Machault est programmé avec une logistique adaptée aux routes et chemins.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Machault, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le véhicule confié est dirigé vers un partenaire technique habilité par les autorités compétentes. Les différentes étapes réglementaires sont assurées par les partenaires habilités. Chaque opérateur prend en charge la phase pour laquelle il dispose des compétences requises.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Machault',
      intro: 'La tournée de nos dépanneuses couvre Machault en intégralité chaque semaine. La préparation du retrait à Machault inclut une évaluation des conditions d\'intervention. Notre service dessert quotidiennement le secteur 77133 de Machault avec des équipes spécialisées dans l\'enlèvement d\'épaves. Les habitants des environs proches de Machault peuvent compter sur notre service.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Machault',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Machault est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Machault sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Machault',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
