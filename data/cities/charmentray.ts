import { PageData } from '../types'

export const charmentrayData: PageData = {
  slug: 'charmentray',
  entityType: 'City',
  metaTitle: 'Épaviste Charmentray (77410) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Charmentray (77410). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Retrait et recyclage de votre épave à Charmentray (77410) - Service Charmentray',
      subtitle: 'Charmentray (77410) : enlèvement gratuit de votre épave à Charmentray par notre équipe.',
      badge: 'Charmentray (77410)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Charmentray',
      content: 'Vous habitez à Charmentray et une épave vous encombre depuis des mois ? Agissez gratuitement. À Charmentray, une épave oubliée dans un pré peut être retirée sans que vous ayez à bouger. Nous intervenons à Charmentray sur les terrains les plus difficiles d\'accès. La préparation logistique intègre les spécificités de chaque demande d\'enlèvement. Notre équipe connaît les spécificités des zones rurales autour de Charmentray pour une intervention adaptée.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Charmentray, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'La prestation d\'enlèvement intègre le transfert vers un opérateur compétent pour la suite du parcours. Les professionnels engagés respectent le cadre légal applicable à cette catégorie de véhicules. L\'organisation prévoit une articulation claire entre les différentes étapes du processus.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Charmentray',
      intro: 'Nous venons chercher votre épave à Charmentray, même dans les endroits difficilement accessibles. La préparation de l\'intervention à Charmentray commence dès la réception de votre demande. Le code postal 77410 est intégré dans notre tournée d\'enlèvement régulière à Charmentray, ce qui garantit une intervention rapide. Notre couverture géographique dépasse Charmentray pour inclure les communes avoisinantes.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Charmentray',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Charmentray est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Charmentray sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Charmentray',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
