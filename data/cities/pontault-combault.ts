import { PageData } from '../types'

export const pontaultCombaultData: PageData = {
  slug: 'pontault-combault',
  entityType: 'City',
  metaTitle: 'Épaviste Pontault-Combault (77340) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Pontault-Combault (77340). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Enlèvement gratuit VHU à Pontault-Combault (77340) par épaviste agréé dans Pontault-Combault',
      subtitle: 'À Pontault-Combault (77340) : bénéficiez d\'un enlèvement gratuit de votre épave dans tout Pontault-Combault.',
      badge: 'Pontault-Combault (77340)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Pontault-Combault',
      content: 'Dans la campagne autour de Pontault-Combault, débarrassez-vous gratuitement de votre épave. Même à Pontault-Combault, au bout d\'un chemin, notre dépanneuse peut accéder à votre épave. Nous intervenons à Pontault-Combault pour un enlèvement gratuit, même dans les lieux difficilement accessibles. La logistique est organisée pour garantir une intervention efficace et sans attente. Le rendez-vous à Pontault-Combault est organisé pour minimiser les déplacements superflus.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Pontault-Combault, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le véhicule confié est dirigé vers un partenaire technique habilité par les autorités compétentes. Les différentes obligations sont remplies par les professionnels intervenant dans la chaîne de traitement. L\'organisation des différentes phases permet un traitement complet dans le respect des règles.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Pontault-Combault',
      intro: 'Les propriétaires à Pontault-Combault peuvent compter sur notre service dans toute la commune. Pour Pontault-Combault, une préparation sur mesure est réalisée selon vos indications. Le secteur 77340 de Pontault-Combault est couvert sans supplément de prix par notre service d\'enlèvement gratuit de véhicules hors d\'usage. Au-delà des limites de Pontault-Combault, notre service continue dans les secteurs alentour.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Pontault-Combault',
      questions: [
        { q: 'L\'intervention à Pontault-Combault est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Pontault-Combault sont entièrement gratuits.' },
        { q: 'Délivrez-vous le certificat de destruction immédiatement ?', a: 'Oui, nous vous remettons le certificat de cession pour destruction en main propre le jour de l\'enlèvement.' },
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
      title: 'Prendre rendez-vous pour votre épave à Pontault-Combault',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
