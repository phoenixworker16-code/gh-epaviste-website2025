import { PageData } from '../types'

export const saintOuenLaumoneData: PageData = {
  slug: 'saint-ouen-laumone',
  entityType: 'City',
  metaTitle: 'Épaviste Saint-Ouen-l\'Aumône (95310) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Saint-Ouen-l\'Aumône (95310). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Épaviste professionnel à Saint-Ouen-l\'Aumône (95310) pour votre VHU à Saint-Ouen-l\'Aumône',
      subtitle: 'Épave à Saint-Ouen-l\'Aumône ? Intervention gratuite dans le secteur 95310 de Saint-Ouen-l\'Aumône sous 24-48h.',
      badge: 'Saint-Ouen-l\'Aumône (95310)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Saint-Ouen-l\'Aumône',
      content: 'Un véhicule hors d\'usage oublié dans votre propriété à Saint-Ouen-l\'Aumône peut être retiré sans frais. Dans les zones reculées de Saint-Ouen-l\'Aumône, nous adaptons notre matériel pour un retrait sans difficulté. À Saint-Ouen-l\'Aumône, nous proposons un enlèvement gratuit même dans les zones les plus isolées. Les contraintes d\'accès sont identifiées en amont pour éviter les mauvaises surprises. Nous adaptons notre intervention à Saint-Ouen-l\'Aumône en fonction de la configuration des lieux.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'L\'enlèvement d\'un véhicule hors d\'usage à Saint-Ouen-l\'Aumône implique une stricte conformité réglementaire. Voici les éléments à préparer. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Val-d\'Oise sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le parcours du véhicule comprend une étape chez un partenaire habilité pour la suite du traitement. Les différentes phases de traitement sont réalisées sous le contrôle des opérateurs autorisés. Le propriétaire est informé du déroulement et des étapes successives de la prise en charge.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Saint-Ouen-l\'Aumône',
      intro: 'À Saint-Ouen-l\'Aumône, notre dispositif d\'intervention permet de couvrir toute la commune efficacement. La planification de l\'enlèvement à Saint-Ouen-l\'Aumône s\'appuie sur les données communiquées en amont. La zone 95310 fait partie de notre secteur d\'intervention prioritaire. Nous organisons des passages réguliers dans cette partie de Saint-Ouen-l\'Aumône. Les axes secondaires et les hameaux près de Saint-Ouen-l\'Aumône sont inclus dans notre périmètre.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Saint-Ouen-l\'Aumône',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Saint-Ouen-l\'Aumône est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Saint-Ouen-l\'Aumône sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Saint-Ouen-l\'Aumône',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
