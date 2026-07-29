import { PageData } from '../types'

export const monnervilleData: PageData = {
  slug: 'monnerville',
  entityType: 'City',
  metaTitle: 'Épaviste Monnerville (91930) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Monnerville (91930). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Faire enlever son VHU à Monnerville par un professionnel dans le 91930 de Monnerville',
      subtitle: 'Nous enlevons les épaves à Monnerville (91930). Prestation gratuite incluant remorquage à Monnerville.',
      badge: 'Monnerville (91930)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Monnerville',
      content: 'Votre propriété à Monnerville est encombrée par un véhicule hors d\'usage ? Nous intervenons. Dans la campagne de Monnerville, nous intervenons sans frais de déplacement supplémentaires. À Monnerville, nous venons jusqu\'à votre propriété rurale sans frais supplémentaires. La logistique est organisée pour garantir une intervention efficace et sans attente. Chaque détail de l\'enlèvement à Monnerville est pensé pour une expérience sans tracas.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Monnerville, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Essonne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le véhicule est conduit vers un professionnel partenaire après l\'enlèvement. Cette organisation garantit une prise en charge conforme et une valorisation dans les filières prévues. Les professionnels impliqués travaillent en coordination pour la bonne fin des opérations.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Monnerville',
      intro: 'L\'enlèvement à Monnerville est organisé sans considération de zone ou de quartier. Le rendez-vous pour Monnerville est défini en fonction des éléments communiqués lors du contact. Les habitants du 91930 à Monnerville bénéficient d\'un passage régulier de nos équipes et d\'une prise en charge adaptée à ce secteur. Notre dispositif autour de Monnerville permet d\'intervenir dans une zone élargie.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Monnerville',
      questions: [
        { q: 'L\'intervention à Monnerville est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Monnerville sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Monnerville',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
