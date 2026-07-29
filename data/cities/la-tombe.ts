import { PageData } from '../types'

export const laTombeData: PageData = {
  slug: 'la-tombe',
  entityType: 'City',
  metaTitle: 'Épaviste La Tombe (77130) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à La Tombe (77130). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Débarras d\'épave automobile à La Tombe (77130) par épaviste à La Tombe',
      subtitle: 'Votre épave à La Tombe retirée gratuitement. Intervention rapide dans le 77130 à La Tombe.',
      badge: 'La Tombe (77130)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à La Tombe',
      content: 'À La Tombe, nous intervenons même sur les chemins non goudronnés pour retirer votre épave. À la campagne, à La Tombe, une épave qui rouille sur un terrain est fréquente mais pas une fatalité. À La Tombe, même dans les secteurs isolés, notre équipe se déplace gratuitement. Le programme d\'intervention est défini avec le propriétaire pour une prise en charge optimale. L\'organisation de l\'enlèvement à La Tombe tient compte des distances et de l\'accessibilité rurale.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis La Tombe, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'L\'organisation prévoit la remise du véhicule à un professionnel spécialisé dans la filière réglementée. Le partenaire assure les formalités et l\'orientation du véhicule vers les filières réglementaires appropriées. Cette répartition des rôles assure une continuité entre l\'enlèvement et les opérations réglementaires ultérieures.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur La Tombe',
      intro: 'Que votre épave soit à La Tombe dans un parking, une rue ou un garage, nous l\'enlevons. Pour un retrait à La Tombe, le professionnel se prépare en fonction des indications reçues. La zone 77130 fait partie de notre secteur d\'intervention prioritaire. Nous organisons des passages réguliers dans cette partie de La Tombe. Les zones limitrophes de La Tombe peuvent aussi profiter de notre service d\'enlèvement.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à La Tombe',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à La Tombe est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à La Tombe sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à La Tombe',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
