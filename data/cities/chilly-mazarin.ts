import { PageData } from '../types'

export const chillyMazarinData: PageData = {
  slug: 'chilly-mazarin',
  entityType: 'City',
  metaTitle: 'Épaviste Chilly-Mazarin (91380) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Chilly-Mazarin (91380). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Solution enlèvement d\'épave sans frais à Chilly-Mazarin (91380) pour Chilly-Mazarin',
      subtitle: 'Débarrassez votre épave à Chilly-Mazarin gratuitement. Notre équipe intervient dans tout le 91380 de Chilly-Mazarin.',
      badge: 'Chilly-Mazarin (91380)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Chilly-Mazarin',
      content: 'Dans le secteur rural de Chilly-Mazarin, nous nous déplaçons gratuitement pour enlever votre épave. Notre équipe est habituée aux accès ruraux à Chilly-Mazarin et intervient dans les meilleures conditions. Nous organisons à Chilly-Mazarin des interventions adaptées aux grandes propriétés et aux écarts. Le programme d\'intervention est défini avec le propriétaire pour une prise en charge optimale. Le passage est organisé pour vous offrir un enlèvement sans contrainte, même à Chilly-Mazarin.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Chilly-Mazarin, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Essonne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'L\'organisation logistique prévoit un transfert vers un professionnel agréé pour le traitement de ces véhicules. Les formalités administratives liées à la fin de vie sont accomplies par les opérateurs compétents. La répartition des tâches entre les partenaires est définie dès l\'organisation de l\'enlèvement.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Chilly-Mazarin',
      intro: 'Notre équipe se rend dans chaque quartier de Chilly-Mazarin pour les enlèvements programmés. La planification de l\'enlèvement à Chilly-Mazarin s\'appuie sur les données communiquées en amont. Pour le secteur 91380, nos équipes interviennent régulièrement et connaissent parfaitement les accès et particularités de Chilly-Mazarin. Si vous résidez près de Chilly-Mazarin, notre service d\'enlèvement est également accessible.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Chilly-Mazarin',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Chilly-Mazarin est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Chilly-Mazarin sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Chilly-Mazarin',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
