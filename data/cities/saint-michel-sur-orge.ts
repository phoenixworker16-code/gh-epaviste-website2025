import { PageData } from '../types'

export const saintMichelSurOrgeData: PageData = {
  slug: 'saint-michel-sur-orge',
  entityType: 'City',
  metaTitle: 'Épaviste Saint-Michel-sur-Orge (91240) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Saint-Michel-sur-Orge (91240). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Service de retrait d\'épave à Saint-Michel-sur-Orge sans frais dans tout Saint-Michel-sur-Orge (91240)',
      subtitle: 'Retrait gratuit épave Saint-Michel-sur-Orge (91240) : notre équipe intervient partout à Saint-Michel-sur-Orge sans frais.',
      badge: 'Saint-Michel-sur-Orge (91240)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Saint-Michel-sur-Orge',
      content: 'À Saint-Michel-sur-Orge, nous intervenons même sur les chemins non goudronnés pour retirer votre épave. À Saint-Michel-sur-Orge, l\'éloignement des centres urbains n\'empêche pas un enlèvement professionnel. À Saint-Michel-sur-Orge, même dans les secteurs isolés, notre équipe se déplace gratuitement. La préparation du retrait inclut une vérification des accès et des contraintes éventuelles. L\'organisation de l\'enlèvement à Saint-Michel-sur-Orge tient compte des distances et de l\'accessibilité rurale.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Saint-Michel-sur-Orge soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Essonne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le dispositif inclut un acheminement vers un professionnel disposant des habilitations requises. Les différentes opérations sont soumises au respect des règles applicables à la filière. Chaque étape est confiée à un professionnel adapté, de l\'enlèvement jusqu\'à la valorisation finale.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Saint-Michel-sur-Orge',
      intro: 'Grâce à notre organisation, Saint-Michel-sur-Orge est entièrement desservie pour l\'enlèvement d\'épaves. Les modalités pratiques de l\'enlèvement à Saint-Michel-sur-Orge sont calées en amont avec vous. La zone 91240 fait partie de notre secteur d\'intervention prioritaire. Nous organisons des passages réguliers dans cette partie de Saint-Michel-sur-Orge. Autour de Saint-Michel-sur-Orge, notre dispositif d\'intervention s\'étend aux zones péri-urbaines.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Saint-Michel-sur-Orge',
      questions: [
        { q: 'L\'intervention à Saint-Michel-sur-Orge est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Saint-Michel-sur-Orge sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Saint-Michel-sur-Orge',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
