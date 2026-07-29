import { PageData } from '../types'

export const longpontSurOrgeData: PageData = {
  slug: 'longpont-sur-orge',
  entityType: 'City',
  metaTitle: 'Épaviste Longpont-sur-Orge (91310) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Longpont-sur-Orge (91310). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
  relatedServicesSlugs: [
    'enlevement-epave-parking-souterrain',
    'enlevement-voiture-en-panne',
    'enlevement-voiture-sans-carte-grise'
  ],
  relatedCitiesSlugs: [
    'essonne'
  ],
  blocks: [
    {
      type: 'Hero',
      title: 'Retrait gratuit voiture épave à Longpont-sur-Orge (91310) pour tout Longpont-sur-Orge',
      subtitle: 'Épaviste professionnel à Longpont-sur-Orge (91310) : enlèvement gratuit de votre VHU dans tout Longpont-sur-Orge.',
      badge: 'Longpont-sur-Orge (91310)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Longpont-sur-Orge',
      content: 'À Longpont-sur-Orge, notre équipe se déplace jusque dans les hameaux pour retirer les épaves. À Longpont-sur-Orge, faire retirer une épave de son terrain, c\'est aussi valoriser sa propriété. Notre équipe à Longpont-sur-Orge assure un service professionnel d\'enlèvement gratuit en zone rurale. Un échange téléphonique permet de finaliser l\'organisation avant le passage. Notre expérience des interventions en zone rurale garantit un service de qualité à Longpont-sur-Orge.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Longpont-sur-Orge, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Essonne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Une fois retiré, le véhicule est orienté vers une installation partenaire compétente dans la filière de recyclage. Les professionnels engagés respectent le cadre légal applicable à cette catégorie de véhicules. Les professionnels impliqués travaillent en coordination pour la bonne fin des opérations.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Longpont-sur-Orge',
      intro: 'Les interventions à Longpont-sur-Orge sont possibles aussi bien sur voie publique que sur propriété privée. Pour Longpont-sur-Orge, l\'équipe se renseigne sur les spécificités d\'accès avant le départ. Le code postal 91310 est intégré dans notre tournée d\'enlèvement régulière à Longpont-sur-Orge, ce qui garantit une intervention rapide. Les zones limitrophes de Longpont-sur-Orge peuvent aussi profiter de notre service d\'enlèvement.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Longpont-sur-Orge',
      questions: [
        { q: 'L\'intervention à Longpont-sur-Orge est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Longpont-sur-Orge sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Longpont-sur-Orge',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
