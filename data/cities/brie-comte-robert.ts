import { PageData } from '../types'

export const brieComteRobertData: PageData = {
  slug: 'brie-comte-robert',
  entityType: 'City',
  metaTitle: 'Épaviste Brie-Comte-Robert (77170) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Brie-Comte-Robert (77170). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Service professionnel d\'enlèvement VHU à Brie-Comte-Robert (77170) dans tout Brie-Comte-Robert',
      subtitle: 'Épaviste professionnel à Brie-Comte-Robert (77170) : enlèvement gratuit de votre VHU dans tout Brie-Comte-Robert.',
      badge: 'Brie-Comte-Robert (77170)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Brie-Comte-Robert',
      content: 'Vous avez une vieille voiture qui rouille dans un champ à Brie-Comte-Robert ? Nous l\'enlevons gratuitement. Les zones rurales autour de Brie-Comte-Robert sont intégralement couvertes par notre service. À Brie-Comte-Robert, nous retirons les épaves des champs, prés et chemins sans difficulté. Les contraintes d\'accès sont identifiées en amont pour éviter les mauvaises surprises. Notre équipe connaît les spécificités des zones rurales autour de Brie-Comte-Robert pour une intervention adaptée.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Brie-Comte-Robert, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le véhicule est acheminé vers un partenaire disposant des compétences pour le traitement de fin de vie. Les différentes obligations sont remplies par les professionnels intervenant dans la chaîne de traitement. Les partenaires coordonnent leurs interventions pour assurer la complétude du traitement.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Brie-Comte-Robert',
      intro: 'Où que soit garé votre véhicule à Brie-Comte-Robert, notre dépanneuse peut accéder pour le retirer. Le rendez-vous pour Brie-Comte-Robert est défini en fonction des éléments communiqués lors du contact. Les habitants du 77170 à Brie-Comte-Robert bénéficient d\'un passage régulier de nos équipes et d\'une prise en charge adaptée à ce secteur. Au départ de Brie-Comte-Robert, nos équipes couvrent un vaste secteur géographique.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Brie-Comte-Robert',
      questions: [
        { q: 'L\'intervention à Brie-Comte-Robert est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Brie-Comte-Robert sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Brie-Comte-Robert',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
