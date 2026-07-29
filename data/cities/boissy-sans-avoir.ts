import { PageData } from '../types'

export const boissySansAvoirData: PageData = {
  slug: 'boissy-sans-avoir',
  entityType: 'City',
  metaTitle: 'Épaviste Boissy-sans-Avoir (78490) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Boissy-sans-Avoir (78490). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
  relatedServicesSlugs: [
    'enlevement-epave-parking-souterrain',
    'enlevement-voiture-en-panne',
    'enlevement-voiture-sans-carte-grise'
  ],
  relatedCitiesSlugs: [
    'enlevement-epave-yvelines'
  ],
  blocks: [
    {
      type: 'Hero',
      title: 'Enlèvement voiture hors d\'usage Boissy-sans-Avoir (78490) - Service Boissy-sans-Avoir',
      subtitle: 'Débarrassez votre épave à Boissy-sans-Avoir (78490) sans frais. Notre service couvre tout le secteur de Boissy-sans-Avoir.',
      badge: 'Boissy-sans-Avoir (78490)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Boissy-sans-Avoir',
      content: 'Vous avez une vieille voiture qui rouille dans un champ à Boissy-sans-Avoir ? Nous l\'enlevons gratuitement. Même à Boissy-sans-Avoir, au bout d\'un chemin, notre dépanneuse peut accéder à votre épave. À Boissy-sans-Avoir, nous retirons les épaves des champs, prés et chemins sans difficulté. La planification de l\'intervention s\'appuie sur les éléments communiqués lors de la demande. Notre équipe connaît les spécificités des zones rurales autour de Boissy-sans-Avoir pour une intervention adaptée.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Boissy-sans-Avoir, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Yvelines sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le véhicule confié est dirigé vers un partenaire technique habilité par les autorités compétentes. La réglementation relative à la fin de vie des véhicules est appliquée par les intervenants. Le suivi du parcours permet au propriétaire de connaître les différentes étapes réalisées.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Boissy-sans-Avoir',
      intro: 'Notre service gratuit à Boissy-sans-Avoir couvre toutes les zones, du bourg aux hameaux périphériques. L\'organisation du passage à Boissy-sans-Avoir tient compte des particularités annoncées. Notre service dessert quotidiennement le secteur 78490 de Boissy-sans-Avoir avec des équipes spécialisées dans l\'enlèvement d\'épaves. Les zones limitrophes de Boissy-sans-Avoir peuvent aussi profiter de notre service d\'enlèvement.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Boissy-sans-Avoir',
      questions: [
        { q: 'L\'intervention à Boissy-sans-Avoir est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Boissy-sans-Avoir sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Boissy-sans-Avoir',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
