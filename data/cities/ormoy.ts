import { PageData } from '../types'

export const ormoyData: PageData = {
  slug: 'ormoy',
  entityType: 'City',
  metaTitle: 'Épaviste Ormoy (91540) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Ormoy (91540). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
  relatedServicesSlugs: [
    'enlevement-epave-parking-souterrain',
    'enlevement-voiture-en-panne',
    'enlevement-voiture-sans-carte-grise'
  ],
  relatedCitiesSlugs: [
    'enlevement-epave-essonne'
  ],
  blocks: [
    {
      type: 'Hero',
      title: 'Retrait auto hors d\'usage Ormoy (91540) dans le département 91540',
      subtitle: 'Débarrassez votre épave à Ormoy gratuitement. Notre équipe intervient dans tout le 91540 de Ormoy.',
      badge: 'Ormoy (91540)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Ormoy',
      content: 'À Ormoy, nous retirons gratuitement les épaves même dans les zones les plus reculées. À Ormoy, une épave oubliée dans un pré peut être retirée sans que vous ayez à bouger. À Ormoy, nous retirons les épaves des champs, prés et chemins sans difficulté. Les contraintes d\'accès sont identifiées en amont pour éviter les mauvaises surprises. Nous organisons le passage à Ormoy avec une logistique adaptée aux grands terrains.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Ormoy, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Essonne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'La prestation prévoit l\'orientation du véhicule vers un interlocuteur compétent pour la fin de vie. La traçabilité du parcours est assurée conformément aux obligations en vigueur. Les différents opérateurs interviennent en synergie pour la réalisation des opérations requises.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Ormoy',
      intro: 'La commune de Ormoy est intégralement couverte par notre service gratuit d\'enlèvement. Notre équipe adapte sa logistique à Ormoy en fonction de chaque configuration. Notre équipe couvre le secteur postal 91540 avec une logistique dédiée. Les habitants de Ormoy peuvent compter sur notre présence régulière dans ce code postal. Les habitants des environs de Ormoy peuvent aussi faire appel à notre service.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Ormoy',
      questions: [
        { q: 'L\'intervention à Ormoy est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Ormoy sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Ormoy',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
