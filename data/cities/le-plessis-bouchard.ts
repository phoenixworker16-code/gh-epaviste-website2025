import { PageData } from '../types'

export const lePlessisBouchardData: PageData = {
  slug: 'le-plessis-bouchard',
  entityType: 'City',
  metaTitle: 'Épaviste Le Plessis-Bouchard (95130) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Le Plessis-Bouchard (95130). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Service d\'enlèvement 100% gratuit à Le Plessis-Bouchard (95130) pour les habitants de Le Plessis-Bouchard',
      subtitle: 'Épaviste professionnel à Le Plessis-Bouchard (95130) : enlèvement gratuit de votre VHU dans tout Le Plessis-Bouchard.',
      badge: 'Le Plessis-Bouchard (95130)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Le Plessis-Bouchard',
      content: 'À Le Plessis-Bouchard, nous intervenons même sur les chemins non goudronnés pour retirer votre épave. À Le Plessis-Bouchard, une épave oubliée dans un pré peut être retirée sans que vous ayez à bouger. À Le Plessis-Bouchard, nous retirons les épaves des champs, prés et chemins sans difficulté. Les informations transmises permettent d\'anticiper les besoins techniques et humains. L\'enlèvement à Le Plessis-Bouchard bénéficie d\'une organisation adaptée à l\'environnement rural.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'L\'enlèvement d\'un véhicule hors d\'usage à Le Plessis-Bouchard implique une stricte conformité réglementaire. Voici les éléments à préparer. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Val-d\'Oise sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'La prise en charge prévoit le transfert du véhicule vers un opérateur partenaire habilité à traiter les véhicules hors d\'usage. Les obligations applicables aux véhicules hors d\'usage sont respectées tout au long du processus. Les démarches sont préparées afin que le relais vers le partenaire soit effectué dans le cadre prévu.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Le Plessis-Bouchard',
      intro: 'Pour un enlèvement à Le Plessis-Bouchard, notre logistique couvre tous les secteurs sans exception. À Le Plessis-Bouchard, le professionnel confirme avec vous les modalités avant de se déplacer. La zone 95130 fait partie de notre secteur d\'intervention prioritaire. Nous organisons des passages réguliers dans cette partie de Le Plessis-Bouchard. Au-delà du territoire de Le Plessis-Bouchard, les secteurs périphériques sont également couverts.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Le Plessis-Bouchard',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Le Plessis-Bouchard est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Le Plessis-Bouchard sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Le Plessis-Bouchard',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
