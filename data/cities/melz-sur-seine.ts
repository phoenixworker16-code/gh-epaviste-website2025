import { PageData } from '../types'

export const melzSurSeineData: PageData = {
  slug: 'melz-sur-seine',
  entityType: 'City',
  metaTitle: 'Épaviste Melz-sur-Seine (77171) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Melz-sur-Seine (77171). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Enlèvement gratuit de votre épave à Melz-sur-Seine (77171) dans tout Melz-sur-Seine',
      subtitle: 'Épaviste professionnel à Melz-sur-Seine (77171) : enlèvement gratuit de votre VHU dans tout Melz-sur-Seine.',
      badge: 'Melz-sur-Seine (77171)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Melz-sur-Seine',
      content: 'Redonnez de l\'espace à votre terrain à Melz-sur-Seine en confiant cette épave à notre service. Nous nous déplaçons gratuitement jusqu\'à vous, même dans les zones moins denses du département. À Melz-sur-Seine, nous proposons un enlèvement gratuit même dans les zones les plus isolées. La préparation logistique intègre les spécificités de chaque demande d\'enlèvement. Les détails de l\'intervention à Melz-sur-Seine sont confirmés en amont pour une coordination parfaite.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Melz-sur-Seine, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'La prestation prévoit l\'orientation du véhicule vers un interlocuteur compétent pour la fin de vie. Les professionnels habilités assurent le respect des procédures imposées par la réglementation. La chaîne de prise en charge est structurée pour respecter les exigences applicables à chaque étape.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Melz-sur-Seine',
      intro: 'Même dans les secteurs les plus excentrés de Melz-sur-Seine, nous organisons l\'enlèvement. L\'intervention à Melz-sur-Seine fait l\'objet d\'une préparation approfondie en amont. Les habitants du 77171 à Melz-sur-Seine bénéficient d\'un passage régulier de nos équipes et d\'une prise en charge adaptée à ce secteur. Les routes et chemins autour de Melz-sur-Seine sont parcourus régulièrement par nos véhicules.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Melz-sur-Seine',
      questions: [
        { q: 'L\'intervention à Melz-sur-Seine est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Melz-sur-Seine sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Melz-sur-Seine',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
