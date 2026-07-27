import { PageData } from '../types'

export const montceauxLesProvinsData: PageData = {
  slug: 'montceaux-les-provins',
  entityType: 'City',
  metaTitle: 'Épaviste Montceaux-lès-Provins (77151) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Montceaux-lès-Provins (77151). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Épaviste professionnel à Montceaux-lès-Provins (77151) pour votre VHU à Montceaux-lès-Provins',
      subtitle: 'Débarrassez votre épave à Montceaux-lès-Provins gratuitement. Notre équipe intervient dans tout le 77151 de Montceaux-lès-Provins.',
      badge: 'Montceaux-lès-Provins (77151)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Montceaux-lès-Provins',
      content: 'Votre propriété rurale à Montceaux-lès-Provins n\'a pas besoin de cette épave : faites-la enlever. Votre propriété à Montceaux-lès-Provins est accessible à nos dépanneuses pour un enlèvement gratuit. Le déplacement à Montceaux-lès-Provins est inclus dans notre service, sans supplément kilométrique. Les détails pratiques sont échangés en amont pour assurer le bon déroulement du retrait. Le rendez-vous à Montceaux-lès-Provins est programmé avec une logistique adaptée aux routes et chemins.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Montceaux-lès-Provins soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le véhicule retiré est confié à un partenaire autorisé à réaliser les opérations de recyclage. La conformité du traitement est assurée par le respect des procédures en vigueur. Les professionnels impliqués travaillent en coordination pour la bonne fin des opérations.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Montceaux-lès-Provins',
      intro: 'Notre périmètre d\'enlèvement inclut l\'ensemble de Montceaux-lès-Provins sans limitation géographique. Avant de se déplacer à Montceaux-lès-Provins, l\'équipe vérifie les accès et prépare le matériel adapté. La zone 77151 fait partie de notre secteur d\'intervention prioritaire. Nous organisons des passages réguliers dans cette partie de Montceaux-lès-Provins. Notre rayon d\'action ne se limite pas à Montceaux-lès-Provins mais s\'étend aux alentours.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Montceaux-lès-Provins',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Montceaux-lès-Provins est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Montceaux-lès-Provins sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Montceaux-lès-Provins',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
