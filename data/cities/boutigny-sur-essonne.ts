import { PageData } from '../types'

export const boutignySurEssonneData: PageData = {
  slug: 'boutigny-sur-essonne',
  entityType: 'City',
  metaTitle: 'Épaviste Boutigny-sur-Essonne (91820) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Boutigny-sur-Essonne (91820). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Débarras véhicule hors d\'usage Boutigny-sur-Essonne (91820) - Épaviste Boutigny-sur-Essonne',
      subtitle: 'Épaviste gratuit à Boutigny-sur-Essonne (91820) : intervention dans tout Boutigny-sur-Essonne pour votre véhicule hors d\'usage.',
      badge: 'Boutigny-sur-Essonne (91820)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Boutigny-sur-Essonne',
      content: 'Votre terrain à Boutigny-sur-Essonne retrouvera son aspect d\'origine après l\'enlèvement de cette épave. À Boutigny-sur-Essonne, une épave oubliée dans un pré peut être retirée sans que vous ayez à bouger. À Boutigny-sur-Essonne, nous retirons les épaves des champs, prés et chemins sans difficulté. Les informations transmises permettent d\'anticiper les besoins techniques et humains. Notre connaissance des zones rurales garantit une intervention efficace à Boutigny-sur-Essonne.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Boutigny-sur-Essonne, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Essonne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Après retrait, le véhicule est pris en relais par un opérateur de la filière de recyclage. Les étapes de traitement sont encadrées par les dispositions légales en vigueur. Le transfert est organisé avec un partenaire spécialisé dans les procédures applicables aux véhicules hors d\'usage.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Boutigny-sur-Essonne',
      intro: 'Le retrait de votre épave à Boutigny-sur-Essonne est possible où qu\'elle se trouve sur la commune. Le rendez-vous pour Boutigny-sur-Essonne est fixé après un échange sur les conditions d\'accès. La zone 91820 fait partie de notre secteur d\'intervention prioritaire. Nous organisons des passages réguliers dans cette partie de Boutigny-sur-Essonne. Au-delà de Boutigny-sur-Essonne, nous intervenons aussi dans les secteurs voisins.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Boutigny-sur-Essonne',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Boutigny-sur-Essonne est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Boutigny-sur-Essonne sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Boutigny-sur-Essonne',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
