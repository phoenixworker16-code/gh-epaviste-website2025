import { PageData } from '../types'

export const saintSauveurSurEcoleData: PageData = {
  slug: 'saint-sauveur-sur-ecole',
  entityType: 'City',
  metaTitle: 'Épaviste Saint-Sauveur-sur-École (77930) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Saint-Sauveur-sur-École (77930). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Service d\'enlèvement 100% gratuit à Saint-Sauveur-sur-École (77930) pour les habitants de Saint-Sauveur-sur-École',
      subtitle: 'Service d\'enlèvement à Saint-Sauveur-sur-École (77930) : retrait gratuit de votre VHU par notre équipe à Saint-Sauveur-sur-École.',
      badge: 'Saint-Sauveur-sur-École (77930)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Saint-Sauveur-sur-École',
      content: 'À Saint-Sauveur-sur-École, notre équipe se déplace jusque dans les hameaux pour retirer les épaves. Les chemins ruraux de Saint-Sauveur-sur-École ne sont pas un obstacle pour nos équipes équipées. Profitez d\'un débarras d\'épave professionnel et écologique, avec une prise en charge complète du remorquage au recyclage. L\'équipe adapte sa préparation en fonction du type de véhicule et de son emplacement. Chaque détail de l\'enlèvement à Saint-Sauveur-sur-École est pensé pour une expérience sans tracas.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Saint-Sauveur-sur-École, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le dispositif inclut un acheminement vers un professionnel disposant des habilitations requises. Les formalités requises sont accomplies par les partenaires compétents dans la filière. La continuité du traitement est assurée par une organisation structurée entre les partenaires.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Saint-Sauveur-sur-École',
      intro: 'Les propriétaires à Saint-Sauveur-sur-École peuvent compter sur notre service dans toute la commune. La préparation du retrait à Saint-Sauveur-sur-École inclut une évaluation des conditions d\'intervention. Les demandes pour le 77930 de Saint-Sauveur-sur-École sont traitées en priorité par notre équipe qui connaît bien ce secteur. Au-delà du centre de Saint-Sauveur-sur-École, les secteurs périphériques sont régulièrement visités.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Saint-Sauveur-sur-École',
      questions: [
        { q: 'L\'intervention à Saint-Sauveur-sur-École est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Saint-Sauveur-sur-École sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Saint-Sauveur-sur-École',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
