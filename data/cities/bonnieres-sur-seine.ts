import { PageData } from '../types'

export const bonnieresSurSeineData: PageData = {
  slug: 'bonnieres-sur-seine',
  entityType: 'City',
  metaTitle: 'Épaviste Bonnières-sur-Seine (78270) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Bonnières-sur-Seine (78270). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
  relatedServicesSlugs: [
    'enlevement-epave-parking-souterrain',
    'enlevement-voiture-en-panne',
    'enlevement-voiture-sans-carte-grise'
  ],
  relatedCitiesSlugs: [
    'enlevement-epave-yvelines'
  ],
  blocks: [
    {
      type: 'Hero',
      title: 'Débarras d\'épave automobile à Bonnières-sur-Seine (78270) par épaviste à Bonnières-sur-Seine',
      subtitle: 'Faites retirer votre épave à Bonnières-sur-Seine gratuitement. Notre équipe intervient dans le 78270 de Bonnières-sur-Seine.',
      badge: 'Bonnières-sur-Seine (78270)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Bonnières-sur-Seine',
      content: 'Nous venons à Bonnières-sur-Seine avec du matériel adapté aux accès ruraux pour l\'enlèvement gratuit. Les zones rurales autour de Bonnières-sur-Seine sont intégralement couvertes par notre service. Notre service rural à Bonnières-sur-Seine garantit un retrait professionnel sans contrainte de distance. La préparation du passage vise à éviter les déplacements inutiles et les difficultés d\'accès. L\'organisation de l\'enlèvement à Bonnières-sur-Seine tient compte des distances et de l\'accessibilité rurale.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'L\'enlèvement d\'un véhicule hors d\'usage à Bonnières-sur-Seine implique une stricte conformité réglementaire. Voici les éléments à préparer. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Yvelines sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Un opérateur partenaire réceptionne le véhicule pour les opérations suivantes. La conformité du traitement est assurée par le respect des procédures en vigueur. Le dispositif assure une répartition claire des tâches entre les différents partenaires.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Bonnières-sur-Seine',
      intro: 'Tous les points de la commune de Bonnières-sur-Seine sont desservis, même les zones les moins denses. Les détails d\'accès pour Bonnières-sur-Seine sont examinés avant le départ de l\'équipe. Pour le secteur 78270, nos équipes interviennent régulièrement et connaissent parfaitement les accès et particularités de Bonnières-sur-Seine. Les communes situées à proximité de Bonnières-sur-Seine peuvent bénéficier d\'un enlèvement.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Bonnières-sur-Seine',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Bonnières-sur-Seine est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Bonnières-sur-Seine sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Bonnières-sur-Seine',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
