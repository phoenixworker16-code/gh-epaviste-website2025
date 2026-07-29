import { PageData } from '../types'

export const vertSaintDenisData: PageData = {
  slug: 'vert-saint-denis',
  entityType: 'City',
  metaTitle: 'Épaviste Vert-Saint-Denis (77240) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Vert-Saint-Denis (77240). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Retrait d\'épave professionnel à Vert-Saint-Denis (77240) pour votre VHU à Vert-Saint-Denis',
      subtitle: 'Retrait VHU à Vert-Saint-Denis (77240) : prise en charge totale et gratuite de votre épave à Vert-Saint-Denis.',
      badge: 'Vert-Saint-Denis (77240)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Vert-Saint-Denis',
      content: 'Nous venons à Vert-Saint-Denis avec du matériel adapté aux accès ruraux pour l\'enlèvement gratuit. Les distances en zone rurale ne sont pas un problème pour notre service d\'enlèvement. Nous organisons à Vert-Saint-Denis des interventions adaptées aux grandes propriétés et aux écarts. Le rendez-vous est organisé à partir de la situation du véhicule et des conditions d\'accès indiquées. L\'équipe dépêchée à Vert-Saint-Denis connaît les spécificités des propriétés rurales.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'L\'enlèvement d\'un véhicule hors d\'usage à Vert-Saint-Denis implique une stricte conformité réglementaire. Voici les éléments à préparer. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Après l\'enlèvement, un professionnel partenaire prend le relais pour les opérations ultérieures. La fin de vie du véhicule est gérée conformément aux procédures réglementaires établies. Les opérateurs successifs interviennent chacun selon leurs compétences et habilitations.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Vert-Saint-Denis',
      intro: 'Pour un enlèvement à Vert-Saint-Denis, notre logistique couvre tous les secteurs sans exception. Avant de se déplacer à Vert-Saint-Denis, l\'équipe vérifie les accès et prépare le matériel adapté. Les demandes pour le 77240 de Vert-Saint-Denis sont traitées en priorité par notre équipe qui connaît bien ce secteur. Au-delà de Vert-Saint-Denis, nous intervenons aussi dans les secteurs voisins.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Vert-Saint-Denis',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Vert-Saint-Denis est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Vert-Saint-Denis sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Vert-Saint-Denis',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
