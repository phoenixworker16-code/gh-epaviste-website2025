import { PageData } from '../types'

export const souppesSurLoingData: PageData = {
  slug: 'souppes-sur-loing',
  entityType: 'City',
  metaTitle: 'Épaviste Souppes-sur-Loing (77460) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Souppes-sur-Loing (77460). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
  relatedServicesSlugs: [
    'enlevement-epave-parking-souterrain',
    'enlevement-voiture-en-panne',
    'enlevement-voiture-sans-carte-grise'
  ],
  relatedCitiesSlugs: [
    'seine-et-marne'
  ],
  blocks: [
    {
      type: 'Hero',
      title: 'Service d\'enlèvement d\'épave à Souppes-sur-Loing (77460) - Intervention Souppes-sur-Loing',
      subtitle: 'À Souppes-sur-Loing (77460), nous organisons l\'enlèvement gratuit de votre épave partout dans Souppes-sur-Loing.',
      badge: 'Souppes-sur-Loing (77460)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Souppes-sur-Loing',
      content: 'Un véhicule hors d\'usage oublié dans votre propriété à Souppes-sur-Loing peut être retiré sans frais. Dans les secteurs ruraux autour de Souppes-sur-Loing, l\'accès à un service d\'enlèvement est simplifié. Le retrait gratuit de votre épave à Souppes-sur-Loing est organisé avec des équipements tout-terrain. La logistique est organisée pour garantir une intervention efficace et sans attente. Le rendez-vous à Souppes-sur-Loing est organisé pour minimiser les déplacements superflus.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Souppes-sur-Loing, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Après enlèvement, la prise en charge est transmise à un opérateur spécialisé dans la filière automobile. Les opérateurs impliqués appliquent les règles en vigueur pour le traitement de ces véhicules. Les opérateurs compétents interviennent à tour de rôle pour couvrir l\'ensemble du processus.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Souppes-sur-Loing',
      intro: 'La zone d\'intervention à Souppes-sur-Loing comprend aussi bien les voies principales que les impasses. Avant l\'enlèvement à Souppes-sur-Loing, les informations pratiques sont échangées avec le propriétaire. Pour le secteur 77460, nos équipes interviennent régulièrement et connaissent parfaitement les accès et particularités de Souppes-sur-Loing. Les communes proches de Souppes-sur-Loing sont incluses dans notre zone d\'intervention.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Souppes-sur-Loing',
      questions: [
        { q: 'L\'intervention à Souppes-sur-Loing est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Souppes-sur-Loing sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Souppes-sur-Loing',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
