import { PageData } from '../types'

export const chaloSaintMarsData: PageData = {
  slug: 'chalo-saint-mars',
  entityType: 'City',
  metaTitle: 'Épaviste Chalo-Saint-Mars (91780) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Chalo-Saint-Mars (91780). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Solution enlèvement d\'épave sans frais à Chalo-Saint-Mars (91780) pour Chalo-Saint-Mars',
      subtitle: 'Pour tout Chalo-Saint-Mars (91780) : enlèvement gratuit et professionnel de votre véhicule hors d\'usage.',
      badge: 'Chalo-Saint-Mars (91780)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Chalo-Saint-Mars',
      content: 'Votre vieux véhicule à Chalo-Saint-Mars prend la poussière et vous voulez vous en séparer ? Les zones rurales autour de Chalo-Saint-Mars sont intégralement couvertes par notre service. Notre équipe à Chalo-Saint-Mars assure un service professionnel d\'enlèvement gratuit en zone rurale. La préparation du retrait inclut une vérification des accès et des contraintes éventuelles. Les modalités d\'accès à Chalo-Saint-Mars sont vérifiées avant le départ pour une intervention réussie.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'L\'enlèvement d\'un véhicule hors d\'usage à Chalo-Saint-Mars implique une stricte conformité réglementaire. Voici les éléments à préparer. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Essonne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le véhicule est acheminé vers un professionnel autorisé à intervenir dans cette filière spécifique. Le suivi réglementaire est confié aux professionnels spécialisés dans cette prise en charge. La répartition des tâches entre les partenaires est définie dès l\'organisation de l\'enlèvement.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Chalo-Saint-Mars',
      intro: 'À Chalo-Saint-Mars, notre dispositif d\'intervention permet de couvrir toute la commune efficacement. L\'intervention à Chalo-Saint-Mars fait l\'objet d\'une préparation approfondie en amont. La zone 91780 fait partie de notre secteur d\'intervention prioritaire. Nous organisons des passages réguliers dans cette partie de Chalo-Saint-Mars. Au-delà du centre de Chalo-Saint-Mars, les secteurs périphériques sont régulièrement visités.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Chalo-Saint-Mars',
      questions: [
        { q: 'L\'intervention à Chalo-Saint-Mars est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Chalo-Saint-Mars sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Chalo-Saint-Mars',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
