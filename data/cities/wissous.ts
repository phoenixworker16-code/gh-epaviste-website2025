import { PageData } from '../types'

export const wissousData: PageData = {
  slug: 'wissous',
  entityType: 'City',
  metaTitle: 'Épaviste Wissous (91320) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Wissous (91320). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Faire enlever son VHU à Wissous par un professionnel dans le 91320 de Wissous',
      subtitle: 'Débarrassez votre épave à Wissous gratuitement. Notre équipe intervient dans tout le 91320 de Wissous.',
      badge: 'Wissous (91320)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Wissous',
      content: 'Votre terrain à Wissous retrouvera son aspect d\'origine après l\'enlèvement de cette épave. À Wissous, une épave oubliée dans un pré peut être retirée sans que vous ayez à bouger. À Wissous, nous venons jusqu\'à votre propriété rurale sans frais supplémentaires. La préparation du retrait inclut une vérification des accès et des contraintes éventuelles. L\'équipe dépêchée à Wissous connaît les spécificités des propriétés rurales.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'L\'enlèvement d\'un véhicule hors d\'usage à Wissous implique une stricte conformité réglementaire. Voici les éléments à préparer. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Essonne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'La prise en charge inclut l\'acheminement vers un professionnel partenaire habilité pour les véhicules hors d\'usage. Le dispositif réglementaire est suivi par les différents opérateurs tout au long du parcours. Le dispositif mis en place précise le rôle de chaque intervenant dans la chaîne de traitement.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Wissous',
      intro: 'Notre équipe se rend dans chaque quartier de Wissous pour les enlèvements programmés. La préparation de l\'intervention à Wissous commence dès la réception de votre demande. Le code postal 91320 est intégré dans notre tournée d\'enlèvement régulière à Wissous, ce qui garantit une intervention rapide. À partir de Wissous, nos dépanneuses rayonnent dans un large secteur géographique.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Wissous',
      questions: [
        { q: 'L\'intervention à Wissous est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Wissous sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Wissous',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
