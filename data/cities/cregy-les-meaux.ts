import { PageData } from '../types'

export const cregyLesMeauxData: PageData = {
  slug: 'cregy-les-meaux',
  entityType: 'City',
  metaTitle: 'Épaviste Crégy-lès-Meaux (77124) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Crégy-lès-Meaux (77124). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Retrait de épave sans frais à Crégy-lès-Meaux (77124) - Service pour Crégy-lès-Meaux',
      subtitle: 'Débarras auto Crégy-lès-Meaux (77124) : notre équipe enlève gratuitement votre épave à Crégy-lès-Meaux.',
      badge: 'Crégy-lès-Meaux (77124)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Crégy-lès-Meaux',
      content: 'À Crégy-lès-Meaux, nous intervenons même sur les chemins non goudronnés pour retirer votre épave. Dans les secteurs agricoles de Crégy-lès-Meaux, nous retirons les épaves sans endommager les terrains. À Crégy-lès-Meaux, notre logistique rurale permet de retirer les épaves même en terrain accidenté. La préparation logistique intègre les spécificités de chaque demande d\'enlèvement. Les distances jusqu\'à Crégy-lès-Meaux sont anticipées dans notre organisation logistique.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Crégy-lès-Meaux soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'La prise en charge inclut l\'acheminement vers un professionnel partenaire habilité pour les véhicules hors d\'usage. La traçabilité des opérations est assurée par les professionnels intervenant dans la filière. L\'organisation du parcours permet un suivi clair des différentes phases de traitement.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Crégy-lès-Meaux',
      intro: 'L\'enlèvement gratuit de votre épave est organisé sur l\'ensemble du territoire de Crégy-lès-Meaux. Les détails d\'accès pour Crégy-lès-Meaux sont examinés avant le départ de l\'équipe. La zone 77124 fait partie de notre secteur d\'intervention prioritaire. Nous organisons des passages réguliers dans cette partie de Crégy-lès-Meaux. Notre rayon d\'action ne se limite pas à Crégy-lès-Meaux mais s\'étend aux alentours.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Crégy-lès-Meaux',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Crégy-lès-Meaux est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Crégy-lès-Meaux sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Crégy-lès-Meaux',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
