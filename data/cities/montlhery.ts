import { PageData } from '../types'

export const montlheryData: PageData = {
  slug: 'montlhery',
  entityType: 'City',
  metaTitle: 'Épaviste Montlhéry (91310) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Montlhéry (91310). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Service rapide d\'enlèvement d\'épave à Montlhéry (91310) dans tout Montlhéry',
      subtitle: 'À Montlhéry (91310) : faites enlever votre épave gratuitement par des professionnels dans tout Montlhéry.',
      badge: 'Montlhéry (91310)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Montlhéry',
      content: 'Vous avez une vieille voiture qui rouille dans un champ à Montlhéry ? Nous l\'enlevons gratuitement. Dans la campagne de Montlhéry, nous intervenons sans frais de déplacement supplémentaires. Nous intervenons à Montlhéry pour un enlèvement gratuit, même dans les lieux difficilement accessibles. L\'équipe adapte sa préparation en fonction du type de véhicule et de son emplacement. Les détails de l\'intervention à Montlhéry sont confirmés en amont pour une coordination parfaite.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Montlhéry soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Essonne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'L\'organisation comprend un relais vers un établissement habilité pour la suite des opérations. Les différentes opérations sont soumises au respect des règles applicables à la filière. Le propriétaire est tenu informé des différentes étapes par les intervenants successifs.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Montlhéry',
      intro: 'La tournée de nos dépanneuses couvre Montlhéry en intégralité chaque semaine. Les détails d\'accès pour Montlhéry sont examinés avant le départ de l\'équipe. La zone 91310 fait partie de notre secteur d\'intervention prioritaire. Nous organisons des passages réguliers dans cette partie de Montlhéry. Les voies d\'accès et les secteurs autour de Montlhéry font partie de notre circuit.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Montlhéry',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Montlhéry est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Montlhéry sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Montlhéry',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
