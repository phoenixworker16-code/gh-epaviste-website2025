import { PageData } from '../types'

export const saintMauriceMontcouronneData: PageData = {
  slug: 'saint-maurice-montcouronne',
  entityType: 'City',
  metaTitle: 'Épaviste Saint-Maurice-Montcouronne (91530) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Saint-Maurice-Montcouronne (91530). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Enlèvement gratuit de votre épave à Saint-Maurice-Montcouronne (91530) dans tout Saint-Maurice-Montcouronne',
      subtitle: 'Retrait VHU à Saint-Maurice-Montcouronne (91530) : prise en charge totale et gratuite de votre épave à Saint-Maurice-Montcouronne.',
      badge: 'Saint-Maurice-Montcouronne (91530)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Saint-Maurice-Montcouronne',
      content: 'Vous habitez à Saint-Maurice-Montcouronne et une épave vous encombre depuis des mois ? Agissez gratuitement. Votre propriété à Saint-Maurice-Montcouronne est accessible à nos dépanneuses pour un enlèvement gratuit. À Saint-Maurice-Montcouronne, l\'enlèvement gratuit comprend le déplacement jusqu\'à votre propriété. La logistique est organisée pour garantir une intervention efficace et sans attente. L\'organisation de l\'enlèvement à Saint-Maurice-Montcouronne tient compte des distances et de l\'accessibilité rurale.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Saint-Maurice-Montcouronne, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Essonne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'La continuité du parcours est assurée par un partenaire spécialisé dans la filière concernée. La fin de vie du véhicule est traitée dans le respect des filières autorisées. Le dispositif assure une répartition claire des tâches entre les différents partenaires.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Saint-Maurice-Montcouronne',
      intro: 'Pour les habitants de Saint-Maurice-Montcouronne, l\'enlèvement d\'épave est gratuit dans toute la commune. Un créneau d\'enlèvement à Saint-Maurice-Montcouronne vous est proposé selon vos disponibilités. Notre équipe couvre le secteur postal 91530 avec une logistique dédiée. Les habitants de Saint-Maurice-Montcouronne peuvent compter sur notre présence régulière dans ce code postal. À partir de Saint-Maurice-Montcouronne, nos dépanneuses rayonnent dans un large secteur géographique.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Saint-Maurice-Montcouronne',
      questions: [
        { q: 'L\'intervention à Saint-Maurice-Montcouronne est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Saint-Maurice-Montcouronne sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Saint-Maurice-Montcouronne',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
