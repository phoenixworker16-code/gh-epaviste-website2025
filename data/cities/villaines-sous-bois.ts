import { PageData } from '../types'

export const villainesSousBoisData: PageData = {
  slug: 'villaines-sous-bois',
  entityType: 'City',
  metaTitle: 'Épaviste Villaines-sous-Bois (95570) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Villaines-sous-Bois (95570). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Débarras d\'épave automobile à Villaines-sous-Bois (95570) par épaviste à Villaines-sous-Bois',
      subtitle: 'Enlèvement gratuit dans le 95570 à Villaines-sous-Bois. Débarras professionnel de votre épave à Villaines-sous-Bois.',
      badge: 'Villaines-sous-Bois (95570)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Villaines-sous-Bois',
      content: 'À Villaines-sous-Bois, nous intervenons même sur les chemins non goudronnés pour retirer votre épave. Même à Villaines-sous-Bois, au bout d\'un chemin, notre dépanneuse peut accéder à votre épave. À Villaines-sous-Bois, nous proposons un enlèvement gratuit même dans les zones les plus isolées. L\'organisation du retrait tient compte de l\'emplacement du véhicule, de son état et des conditions d\'accès. Notre expérience des interventions en zone rurale garantit un service de qualité à Villaines-sous-Bois.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'L\'enlèvement d\'un véhicule hors d\'usage à Villaines-sous-Bois implique une stricte conformité réglementaire. Voici les éléments à préparer. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Val-d\'Oise sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le transfert vers l\'opérateur compétent est planifié dès la confirmation de l\'enlèvement. Le traitement est effectué dans le respect des obligations environnementales en vigueur. Le dispositif mis en place précise le rôle de chaque intervenant dans la chaîne de traitement.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Villaines-sous-Bois',
      intro: 'Grâce à notre organisation, Villaines-sous-Bois est entièrement desservie pour l\'enlèvement d\'épaves. Pour Villaines-sous-Bois, l\'équipe se renseigne sur les spécificités d\'accès avant le départ. La zone 95570 fait partie de notre secteur d\'intervention prioritaire. Nous organisons des passages réguliers dans cette partie de Villaines-sous-Bois. Les communes autour de Villaines-sous-Bois sont également parcourues par nos dépanneuses.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Villaines-sous-Bois',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Villaines-sous-Bois est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Villaines-sous-Bois sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Villaines-sous-Bois',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
