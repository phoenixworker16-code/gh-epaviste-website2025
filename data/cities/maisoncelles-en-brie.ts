import { PageData } from '../types'

export const maisoncellesEnBrieData: PageData = {
  slug: 'maisoncelles-en-brie',
  entityType: 'City',
  metaTitle: 'Épaviste Maisoncelles-en-Brie (77580) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Maisoncelles-en-Brie (77580). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Service d\'enlèvement d\'épave à Maisoncelles-en-Brie (77580) - Intervention Maisoncelles-en-Brie',
      subtitle: 'À Maisoncelles-en-Brie (77580) : débarras auto gratuit avec prise en charge complète de votre épave.',
      badge: 'Maisoncelles-en-Brie (77580)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Maisoncelles-en-Brie',
      content: 'Votre terrain à Maisoncelles-en-Brie retrouvera son aspect d\'origine après l\'enlèvement de cette épave. Dans l\'environnement rural de Maisoncelles-en-Brie, nous intervenons avec discrétion et efficacité. À Maisoncelles-en-Brie, nous retirons les épaves des champs, prés et chemins sans difficulté. Les conditions d\'accès sont vérifiées avant le départ pour garantir une intervention sans accroc. Notre équipe à Maisoncelles-en-Brie est équipée de véhicules adaptés aux chemins ruraux.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Maisoncelles-en-Brie, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le véhicule est remis à un partenaire spécialisé pour la suite de son traitement réglementaire. Les différentes phases de traitement sont réalisées sous le contrôle des opérateurs autorisés. Les partenaires se répartissent les opérations selon leur domaine d\'expertise respectif.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Maisoncelles-en-Brie',
      intro: 'Pour un enlèvement à Maisoncelles-en-Brie, notre logistique couvre tous les secteurs sans exception. À Maisoncelles-en-Brie, le rendez-vous est calé pour garantir une intervention efficace et ponctuelle. Les habitants du 77580 à Maisoncelles-en-Brie bénéficient d\'un passage régulier de nos équipes et d\'une prise en charge adaptée à ce secteur. Les voies d\'accès et les secteurs autour de Maisoncelles-en-Brie font partie de notre circuit.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Maisoncelles-en-Brie',
      questions: [
        { q: 'L\'intervention à Maisoncelles-en-Brie est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Maisoncelles-en-Brie sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Maisoncelles-en-Brie',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
