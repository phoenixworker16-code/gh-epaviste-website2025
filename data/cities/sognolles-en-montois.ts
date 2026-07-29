import { PageData } from '../types'

export const sognollesEnMontoisData: PageData = {
  slug: 'sognolles-en-montois',
  entityType: 'City',
  metaTitle: 'Épaviste Sognolles-en-Montois (77520) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Sognolles-en-Montois (77520). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Débarrassez votre épave à Sognolles-en-Montois (77520) gratuitement dans tout Sognolles-en-Montois',
      subtitle: 'Votre véhicule hors d\'usage à Sognolles-en-Montois (77520) ? Enlèvement gratuit partout dans Sognolles-en-Montois.',
      badge: 'Sognolles-en-Montois (77520)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Sognolles-en-Montois',
      content: 'Votre terrain à Sognolles-en-Montois retrouvera son aspect d\'origine après l\'enlèvement de cette épave. À Sognolles-en-Montois, une épave oubliée dans un pré peut être retirée sans que vous ayez à bouger. Notre équipe à Sognolles-en-Montois est équipée de véhicules adaptés aux chemins ruraux. Le passage est planifié selon les indications reçues sur l\'emplacement exact du véhicule. Les distances jusqu\'à Sognolles-en-Montois sont anticipées dans notre organisation logistique.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Sognolles-en-Montois, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Une fois retiré, le véhicule est orienté vers une installation partenaire compétente dans la filière de recyclage. La traçabilité du parcours est assurée conformément aux obligations en vigueur. Le propriétaire bénéficie d\'un suivi transparent des différentes phases de prise en charge.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Sognolles-en-Montois',
      intro: 'Que vous habitiez le centre ou la périphérie de Sognolles-en-Montois, nous venons retirer votre véhicule. Les modalités pratiques de l\'enlèvement à Sognolles-en-Montois sont calées en amont avec vous. Notre équipe couvre le secteur postal 77520 avec une logistique dédiée. Les habitants de Sognolles-en-Montois peuvent compter sur notre présence régulière dans ce code postal. Notre rayon d\'action ne se limite pas à Sognolles-en-Montois mais s\'étend aux alentours.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Sognolles-en-Montois',
      questions: [
        { q: 'L\'intervention à Sognolles-en-Montois est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Sognolles-en-Montois sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Sognolles-en-Montois',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
