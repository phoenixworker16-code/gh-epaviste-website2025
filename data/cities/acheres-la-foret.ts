import { PageData } from '../types'

export const acheresLaForetData: PageData = {
  slug: 'acheres-la-foret',
  entityType: 'City',
  metaTitle: 'Épaviste Achères-la-Forêt (77760) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Achères-la-Forêt (77760). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
  relatedServicesSlugs: [
    'enlevement-epave-parking-souterrain',
    'enlevement-voiture-en-panne',
    'enlevement-voiture-sans-carte-grise'
  ],
  relatedCitiesSlugs: [
    'seine-et-marne'
  ],
  blocks: [
    {
      type: 'Hero',
      title: 'Service rapide d\'enlèvement d\'épave à Achères-la-Forêt (77760) dans tout Achères-la-Forêt',
      subtitle: 'Enlèvement d\'épave Achères-la-Forêt (77760) : service rapide et gratuit pour votre VHU dans tout Achères-la-Forêt.',
      badge: 'Achères-la-Forêt (77760)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Achères-la-Forêt',
      content: 'À Achères-la-Forêt, nous intervenons même sur les chemins non goudronnés pour retirer votre épave. À Achères-la-Forêt, l\'éloignement des centres urbains n\'empêche pas un enlèvement professionnel. Nous intervenons à Achères-la-Forêt sur les terrains les plus difficiles d\'accès. Un échange préalable permet de prévoir le matériel approprié et le créneau de passage. Le passage est organisé pour vous offrir un enlèvement sans contrainte, même à Achères-la-Forêt.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'L\'enlèvement d\'un véhicule hors d\'usage à Achères-la-Forêt implique une stricte conformité réglementaire. Voici les éléments à préparer. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le véhicule est remis à un partenaire spécialisé pour la suite de son traitement réglementaire. Le partenaire assure les formalités et l\'orientation du véhicule vers les filières réglementaires appropriées. Les opérateurs compétents interviennent à tour de rôle pour couvrir l\'ensemble du processus.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Achères-la-Forêt',
      intro: 'À Achères-la-Forêt, nous pouvons retirer votre véhicule hors d\'usage en tout point du territoire. Les contraintes spécifiques à Achères-la-Forêt sont intégrées dans l\'organisation du retrait. La zone 77760 fait partie de notre secteur d\'intervention prioritaire. Nous organisons des passages réguliers dans cette partie de Achères-la-Forêt. Les communes proches de Achères-la-Forêt sont incluses dans notre zone d\'intervention.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Achères-la-Forêt',
      questions: [
        { q: 'L\'intervention à Achères-la-Forêt est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Achères-la-Forêt sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Achères-la-Forêt',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
