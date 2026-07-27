import { PageData } from '../types'

export const ormoyLaRiviereData: PageData = {
  slug: 'ormoy-la-riviere',
  entityType: 'City',
  metaTitle: 'Épaviste Ormoy-la-Rivière (91150) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Ormoy-la-Rivière (91150). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Épaviste gratuit Ormoy-la-Rivière intervention rapide dans le 91150 de Ormoy-la-Rivière',
      subtitle: 'Votre épaviste à Ormoy-la-Rivière (91150) : intervention gratuite et rapide pour votre VHU dans Ormoy-la-Rivière.',
      badge: 'Ormoy-la-Rivière (91150)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Ormoy-la-Rivière',
      content: 'Situé à Ormoy-la-Rivière, votre véhicule hors d\'usage encombre votre terrain ou votre cour ? À Ormoy-la-Rivière, faire retirer une épave de son terrain, c\'est aussi valoriser sa propriété. Nous organisons à Ormoy-la-Rivière des interventions adaptées aux grandes propriétés et aux écarts. La coordination avec le propriétaire permet de caler le meilleur créneau pour l\'enlèvement. Chaque détail de l\'enlèvement à Ormoy-la-Rivière est pensé pour une expérience sans tracas.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'L\'enlèvement d\'un véhicule hors d\'usage à Ormoy-la-Rivière implique une stricte conformité réglementaire. Voici les éléments à préparer. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Essonne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le transfert vers l\'opérateur compétent est planifié dès la confirmation de l\'enlèvement. La réglementation relative à la fin de vie des véhicules est appliquée par les intervenants. Le suivi du parcours permet au propriétaire de connaître les différentes étapes réalisées.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Ormoy-la-Rivière',
      intro: 'Nous nous déplaçons dans tous les secteurs de Ormoy-la-Rivière pour un enlèvement gratuit. Chaque enlèvement à Ormoy-la-Rivière est préparé en étudiant les accès et les contraintes locales. La zone 91150 fait partie de notre secteur d\'intervention prioritaire. Nous organisons des passages réguliers dans cette partie de Ormoy-la-Rivière. Les habitants des environs de Ormoy-la-Rivière peuvent aussi faire appel à notre service.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Ormoy-la-Rivière',
      questions: [
        { q: 'L\'intervention à Ormoy-la-Rivière est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Ormoy-la-Rivière sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Ormoy-la-Rivière',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
