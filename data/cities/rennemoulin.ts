import { PageData } from '../types'

export const rennemoulinData: PageData = {
  slug: 'rennemoulin',
  entityType: 'City',
  metaTitle: 'Épaviste Rennemoulin (78590) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Rennemoulin (78590). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Enlèvement gratuit de votre épave à Rennemoulin (78590) dans tout Rennemoulin',
      subtitle: 'Épaviste gratuit à Rennemoulin (78590) : intervention dans tout Rennemoulin pour votre véhicule hors d\'usage.',
      badge: 'Rennemoulin (78590)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Rennemoulin',
      content: 'Redonnez de l\'espace à votre terrain à Rennemoulin en confiant cette épave à notre service. Les chemins ruraux de Rennemoulin ne sont pas un obstacle pour nos équipes équipées. Profitez d\'un débarras d\'épave professionnel et écologique, avec une prise en charge complète du remorquage au recyclage. La préparation du passage vise à éviter les déplacements inutiles et les difficultés d\'accès. L\'équipe dépêchée à Rennemoulin connaît les spécificités des propriétés rurales.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Rennemoulin, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Yvelines sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le véhicule retiré est confié à un partenaire autorisé à réaliser les opérations de recyclage. Les professionnels intervenants garantissent l\'application des règles en matière de recyclage. La continuité entre l\'enlèvement et le traitement est assurée par une organisation cadrée.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Rennemoulin',
      intro: 'Notre équipe se rend dans chaque quartier de Rennemoulin pour les enlèvements programmés. Chaque enlèvement à Rennemoulin est préparé en étudiant les accès et les contraintes locales. Pour le secteur 78590, nos équipes interviennent régulièrement et connaissent parfaitement les accès et particularités de Rennemoulin. Au-delà du centre de Rennemoulin, les secteurs périphériques sont régulièrement visités.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Rennemoulin',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Rennemoulin est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Rennemoulin sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Rennemoulin',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
