import { PageData } from '../types'

export const attainvilleData: PageData = {
  slug: 'attainville',
  entityType: 'City',
  metaTitle: 'Épaviste Attainville (95570) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Attainville (95570). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Solution enlèvement épave Attainville (95570) - Prise en charge Attainville',
      subtitle: 'Votre épave à Attainville retirée gratuitement. Intervention rapide dans le 95570 à Attainville.',
      badge: 'Attainville (95570)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Attainville',
      content: 'Vous avez une vieille voiture qui rouille dans un champ à Attainville ? Nous l\'enlevons gratuitement. Notre équipe est habituée aux accès ruraux à Attainville et intervient dans les meilleures conditions. Nous intervenons à Attainville sur les terrains les plus difficiles d\'accès. Les informations recueillies permettent de dimensionner l\'intervention au plus juste. L\'organisation de l\'enlèvement à Attainville tient compte des distances et de l\'accessibilité rurale.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Attainville, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Val-d\'Oise sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'L\'organisation intègre un transfert vers un prestataire compétent pour la filière des véhicules usagés. Les professionnels engagés respectent le cadre légal applicable à cette catégorie de véhicules. Les étapes sont orchestrées pour assurer une transition fluide entre les différents opérateurs.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Attainville',
      intro: 'Tous les points de la commune de Attainville sont desservis, même les zones les moins denses. Avant de se déplacer à Attainville, l\'équipe vérifie les accès et prépare le matériel adapté. Notre service dessert quotidiennement le secteur 95570 de Attainville avec des équipes spécialisées dans l\'enlèvement d\'épaves. Les zones limitrophes de Attainville peuvent aussi profiter de notre service d\'enlèvement.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Attainville',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Attainville est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Attainville sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Attainville',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
