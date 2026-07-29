import { PageData } from '../types'

export const sancyLesProvinsData: PageData = {
  slug: 'sancy-les-provins',
  entityType: 'City',
  metaTitle: 'Épaviste Sancy-lès-Provins (77320) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Sancy-lès-Provins (77320). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Retrait de véhicule hors d\'usage à Sancy-lès-Provins (77320) dans le 77320',
      subtitle: 'Besoin d\'un épaviste à Sancy-lès-Provins (77320) ? Enlèvement gratuit de votre VHU dans tout Sancy-lès-Provins.',
      badge: 'Sancy-lès-Provins (77320)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Sancy-lès-Provins',
      content: 'Vous avez une vieille voiture qui rouille dans un champ à Sancy-lès-Provins ? Nous l\'enlevons gratuitement. Même à Sancy-lès-Provins, au bout d\'un chemin, notre dépanneuse peut accéder à votre épave. À Sancy-lès-Provins, même dans les secteurs isolés, notre équipe se déplace gratuitement. La préparation logistique intègre les spécificités de chaque demande d\'enlèvement. Le rendez-vous à Sancy-lès-Provins est organisé pour minimiser les déplacements superflus.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Sancy-lès-Provins, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le véhicule est conduit vers un professionnel partenaire après l\'enlèvement. Le traitement respecte les normes applicables aux véhicules en fin de vie. Le transfert est organisé avec un partenaire spécialisé dans les procédures applicables aux véhicules hors d\'usage.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Sancy-lès-Provins',
      intro: 'Les interventions à Sancy-lès-Provins sont possibles aussi bien sur voie publique que sur propriété privée. Le planning d\'intervention à Sancy-lès-Provins intègre les contraintes horaires du propriétaire. La zone 77320 fait partie de notre secteur d\'intervention prioritaire. Nous organisons des passages réguliers dans cette partie de Sancy-lès-Provins. Les localités voisines de Sancy-lès-Provins peuvent aussi solliciter notre intervention.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Sancy-lès-Provins',
      questions: [
        { q: 'L\'intervention à Sancy-lès-Provins est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Sancy-lès-Provins sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Sancy-lès-Provins',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
