import { PageData } from '../types'

export const chatillonLaBordeData: PageData = {
  slug: 'chatillon-la-borde',
  entityType: 'City',
  metaTitle: 'Épaviste Châtillon-la-Borde (77820) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Châtillon-la-Borde (77820). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Enlèvement d\'épave gratuit à Châtillon-la-Borde (77820) - Service Châtillon-la-Borde',
      subtitle: 'Pour votre épave à Châtillon-la-Borde (77820) : intervention gratuite et professionnelle dans tout Châtillon-la-Borde.',
      badge: 'Châtillon-la-Borde (77820)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Châtillon-la-Borde',
      content: 'Votre vieux véhicule à Châtillon-la-Borde prend la poussière et vous voulez vous en séparer ? À Châtillon-la-Borde, faire retirer une épave de son terrain, c\'est aussi valoriser sa propriété. Nous intervenons à Châtillon-la-Borde pour un enlèvement gratuit, même dans les lieux difficilement accessibles. Les précisions apportées en amont aident à préparer le matériel et l\'équipe adaptés. Chaque détail de l\'enlèvement à Châtillon-la-Borde est pensé pour une expérience sans tracas.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Châtillon-la-Borde soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le véhicule est acheminé vers un professionnel autorisé à intervenir dans cette filière spécifique. Les exigences légales sont satisfaites par l\'intervention de partenaires compétents dans la filière. Les responsabilités de chaque intervenant sont distinguées dès l\'organisation de l\'enlèvement.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Châtillon-la-Borde',
      intro: 'L\'ensemble des zones résidentielles, commerciales et industrielles de Châtillon-la-Borde est couvert. Nous organisons le passage à Châtillon-la-Borde avec une préparation minutieuse de l\'itinéraire. La zone 77820 fait partie de notre secteur d\'intervention prioritaire. Nous organisons des passages réguliers dans cette partie de Châtillon-la-Borde. Les habitants des environs proches de Châtillon-la-Borde peuvent compter sur notre service.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Châtillon-la-Borde',
      questions: [
        { q: 'L\'intervention à Châtillon-la-Borde est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Châtillon-la-Borde sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Châtillon-la-Borde',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
