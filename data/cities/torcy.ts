import { PageData } from '../types'

export const torcyData: PageData = {
  slug: 'torcy',
  entityType: 'City',
  metaTitle: 'Épaviste Torcy (77200) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Torcy (77200). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Service d\'enlèvement 100% gratuit à Torcy (77200) pour les habitants de Torcy',
      subtitle: 'Pour tout Torcy (77200) : enlèvement gratuit et professionnel de votre véhicule hors d\'usage.',
      badge: 'Torcy (77200)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Torcy',
      content: 'Un véhicule hors d\'usage oublié dans votre propriété à Torcy peut être retiré sans frais. À Torcy, faire retirer une épave de son terrain, c\'est aussi valoriser sa propriété. À Torcy, même dans les secteurs isolés, notre équipe se déplace gratuitement. Les informations communiquées au moment de la demande facilitent la préparation du retrait. Notre expérience des interventions en zone rurale garantit un service de qualité à Torcy.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Torcy, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'La prestation comprend l\'orientation du véhicule vers un interlocuteur compétent pour les étapes à venir. Le cadre réglementaire est respecté à chaque étape par les professionnels habilités. Les étapes sont enchaînées de manière organisée pour un parcours cohérent du véhicule.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Torcy',
      intro: 'Les propriétaires à Torcy peuvent compter sur notre service dans toute la commune. Pour un retrait à Torcy, le professionnel se prépare en fonction des indications reçues. Le code postal 77200 est intégré dans notre tournée d\'enlèvement régulière à Torcy, ce qui garantit une intervention rapide. Les zones limitrophes de Torcy peuvent aussi profiter de notre service d\'enlèvement.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Torcy',
      questions: [
        { q: 'L\'intervention à Torcy est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Torcy sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Torcy',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
