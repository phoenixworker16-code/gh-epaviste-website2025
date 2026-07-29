import { PageData } from '../types'

export const saintGermainEnLayeData: PageData = {
  slug: 'saint-germain-en-laye',
  entityType: 'City',
  metaTitle: 'Épaviste Saint-Germain-en-Laye (78100) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Saint-Germain-en-Laye (78100). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
  relatedServicesSlugs: [
    'enlevement-epave-parking-souterrain',
    'enlevement-voiture-en-panne',
    'enlevement-voiture-sans-carte-grise'
  ],
  relatedCitiesSlugs: [
    'yvelines'
  ],
  blocks: [
    {
      type: 'Hero',
      title: 'Retrait d\'épave par professionnel agréé à Saint-Germain-en-Laye (78100) dans tout Saint-Germain-en-Laye',
      subtitle: 'Service de retrait d\'épave à Saint-Germain-en-Laye (78100). Gratuit et sans contrainte pour les habitants de Saint-Germain-en-Laye.',
      badge: 'Saint-Germain-en-Laye (78100)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Saint-Germain-en-Laye',
      content: 'Dans la campagne autour de Saint-Germain-en-Laye, débarrassez-vous gratuitement de votre épave. Dans les secteurs agricoles de Saint-Germain-en-Laye, nous retirons les épaves sans endommager les terrains. À Saint-Germain-en-Laye, nous proposons un enlèvement gratuit même dans les zones les plus isolées. L\'équipe prépare son intervention à partir des détails fournis lors de la prise de contact. Les distances jusqu\'à Saint-Germain-en-Laye sont anticipées dans notre organisation logistique.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Saint-Germain-en-Laye soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Yvelines sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Après la prise en charge initiale, le véhicule est confié à un partenaire technique spécialisé. Les différentes phases de traitement sont réalisées sous le contrôle des opérateurs autorisés. Les responsabilités sont clairement établies entre les opérateurs de la chaîne de traitement.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Saint-Germain-en-Laye',
      intro: 'Le service d\'enlèvement gratuit couvre l\'intégralité de la commune de Saint-Germain-en-Laye. Le passage à Saint-Germain-en-Laye est planifié de manière à optimiser le temps d\'intervention. Les demandes pour le 78100 de Saint-Germain-en-Laye sont traitées en priorité par notre équipe qui connaît bien ce secteur. Au-delà des limites de Saint-Germain-en-Laye, notre service continue dans les secteurs alentour.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Saint-Germain-en-Laye',
      questions: [
        { q: 'L\'intervention à Saint-Germain-en-Laye est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Saint-Germain-en-Laye sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Saint-Germain-en-Laye',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
