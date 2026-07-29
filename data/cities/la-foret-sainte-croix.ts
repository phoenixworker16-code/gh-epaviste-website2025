import { PageData } from '../types'

export const laForetSainteCroixData: PageData = {
  slug: 'la-foret-sainte-croix',
  entityType: 'City',
  metaTitle: 'Épaviste La Forêt-Sainte-Croix (91150) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à La Forêt-Sainte-Croix (91150). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
  relatedServicesSlugs: [
    'enlevement-epave-parking-souterrain',
    'enlevement-voiture-en-panne',
    'enlevement-voiture-sans-carte-grise'
  ],
  relatedCitiesSlugs: [
    'essonne'
  ],
  blocks: [
    {
      type: 'Hero',
      title: 'Retrait d\'épave professionnel à La Forêt-Sainte-Croix (91150) pour votre VHU à La Forêt-Sainte-Croix',
      subtitle: 'Enlèvement épave La Forêt-Sainte-Croix (91150) : service gratuit pour votre VHU dans tout le secteur de La Forêt-Sainte-Croix.',
      badge: 'La Forêt-Sainte-Croix (91150)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à La Forêt-Sainte-Croix',
      content: 'À La Forêt-Sainte-Croix, notre équipe se déplace jusque dans les hameaux pour retirer les épaves. À La Forêt-Sainte-Croix, une épave oubliée dans un pré peut être retirée sans que vous ayez à bouger. Nous intervenons à La Forêt-Sainte-Croix pour un enlèvement gratuit, même dans les lieux difficilement accessibles. La préparation du retrait inclut une vérification des accès et des contraintes éventuelles. Notre expérience des interventions en zone rurale garantit un service de qualité à La Forêt-Sainte-Croix.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à La Forêt-Sainte-Croix soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Essonne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le parcours du véhicule comprend une étape chez un partenaire habilité pour la suite du traitement. Les différentes phases de traitement sont réalisées sous le contrôle des opérateurs autorisés. L\'organisation des différentes phases permet un traitement complet dans le respect des règles.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur La Forêt-Sainte-Croix',
      intro: 'À La Forêt-Sainte-Croix, notre dispositif d\'intervention permet de couvrir toute la commune efficacement. Le planning d\'intervention à La Forêt-Sainte-Croix intègre les contraintes horaires du propriétaire. Notre service dessert quotidiennement le secteur 91150 de La Forêt-Sainte-Croix avec des équipes spécialisées dans l\'enlèvement d\'épaves. Les communes situées à proximité de La Forêt-Sainte-Croix peuvent bénéficier d\'un enlèvement.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à La Forêt-Sainte-Croix',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à La Forêt-Sainte-Croix est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à La Forêt-Sainte-Croix sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à La Forêt-Sainte-Croix',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
