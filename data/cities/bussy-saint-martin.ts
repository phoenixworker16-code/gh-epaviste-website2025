import { PageData } from '../types'

export const bussySaintMartinData: PageData = {
  slug: 'bussy-saint-martin',
  entityType: 'City',
  metaTitle: 'Épaviste Bussy-Saint-Martin (77600) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Bussy-Saint-Martin (77600). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
  relatedServicesSlugs: [
    'enlevement-epave-parking-souterrain',
    'enlevement-voiture-en-panne',
    'enlevement-voiture-sans-carte-grise'
  ],
  relatedCitiesSlugs: [
    'enlevement-epave-seine-et-marne'
  ],
  blocks: [
    {
      type: 'Hero',
      title: 'Retrait d\'épave professionnel à Bussy-Saint-Martin (77600) pour votre VHU à Bussy-Saint-Martin',
      subtitle: 'Service de retrait d\'épave à Bussy-Saint-Martin (77600). Gratuit et sans contrainte pour les habitants de Bussy-Saint-Martin.',
      badge: 'Bussy-Saint-Martin (77600)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Bussy-Saint-Martin',
      content: 'Nous venons à Bussy-Saint-Martin avec du matériel adapté aux accès ruraux pour l\'enlèvement gratuit. À Bussy-Saint-Martin, même dans les lieux-dits et les hameaux, nous retirons votre épave gratuitement. À Bussy-Saint-Martin, notre logistique rurale permet de retirer les épaves même en terrain accidenté. La coordination avec le propriétaire permet de caler le meilleur créneau pour l\'enlèvement. Notre expérience des interventions en zone rurale garantit un service de qualité à Bussy-Saint-Martin.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Bussy-Saint-Martin soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Après l\'intervention, la prise en charge est relayée à un partenaire technique habilité. La réglementation en vigueur est suivie par l\'ensemble des intervenants de la filière. Le dispositif mis en place précise le rôle de chaque intervenant dans la chaîne de traitement.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Bussy-Saint-Martin',
      intro: 'Depuis le centre historique jusqu\'aux zones d\'activité de Bussy-Saint-Martin, notre service est disponible. Pour Bussy-Saint-Martin, une préparation sur mesure est réalisée selon vos indications. Notre équipe couvre le secteur postal 77600 avec une logistique dédiée. Les habitants de Bussy-Saint-Martin peuvent compter sur notre présence régulière dans ce code postal. Les communes autour de Bussy-Saint-Martin sont également parcourues par nos dépanneuses.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Bussy-Saint-Martin',
      questions: [
        { q: 'L\'intervention à Bussy-Saint-Martin est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Bussy-Saint-Martin sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Bussy-Saint-Martin',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
