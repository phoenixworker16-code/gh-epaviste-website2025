import { PageData } from '../types'

export const vaugrigneuseData: PageData = {
  slug: 'vaugrigneuse',
  entityType: 'City',
  metaTitle: 'Épaviste Vaugrigneuse (91640) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Vaugrigneuse (91640). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Enlèvement gratuit de carcasse à Vaugrigneuse (91640) - Service Vaugrigneuse',
      subtitle: 'Débarrassez votre épave à Vaugrigneuse (91640) sans frais. Notre service couvre tout le secteur de Vaugrigneuse.',
      badge: 'Vaugrigneuse (91640)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Vaugrigneuse',
      content: 'À Vaugrigneuse, même les épaves situées sur des terrains difficiles sont prises en charge. À Vaugrigneuse, même dans les lieux-dits et les hameaux, nous retirons votre épave gratuitement. À Vaugrigneuse, l\'enlèvement gratuit comprend le déplacement jusqu\'à votre propriété. Le créneau d\'intervention est déterminé en tenant compte de vos disponibilités. Les détails de l\'intervention à Vaugrigneuse sont confirmés en amont pour une coordination parfaite.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Vaugrigneuse soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Essonne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'La prise en charge prévoit le transfert du véhicule vers un opérateur partenaire habilité à traiter les véhicules hors d\'usage. La réglementation encadrant les véhicules hors d\'usage est respectée par les intervenants agréés. Les étapes sont enchaînées de manière organisée pour un parcours cohérent du véhicule.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Vaugrigneuse',
      intro: 'Même dans les secteurs les plus excentrés de Vaugrigneuse, nous organisons l\'enlèvement. Le dispositif mis en place pour Vaugrigneuse est adapté à chaque situation particulière. Les habitants du 91640 à Vaugrigneuse bénéficient d\'un passage régulier de nos équipes et d\'une prise en charge adaptée à ce secteur. Au départ de Vaugrigneuse, nos équipes couvrent un vaste secteur géographique.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Vaugrigneuse',
      questions: [
        { q: 'L\'intervention à Vaugrigneuse est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Vaugrigneuse sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Vaugrigneuse',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
