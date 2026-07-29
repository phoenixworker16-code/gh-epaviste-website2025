import { PageData } from '../types'

export const congisSurTherouanneData: PageData = {
  slug: 'congis-sur-therouanne',
  entityType: 'City',
  metaTitle: 'Épaviste Congis-sur-Thérouanne (77440) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Congis-sur-Thérouanne (77440). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Enlèvement gratuit de carcasse à Congis-sur-Thérouanne (77440) - Service Congis-sur-Thérouanne',
      subtitle: 'Votre épaviste à Congis-sur-Thérouanne (77440) : intervention gratuite et rapide pour votre VHU dans Congis-sur-Thérouanne.',
      badge: 'Congis-sur-Thérouanne (77440)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Congis-sur-Thérouanne',
      content: 'Nous venons à Congis-sur-Thérouanne avec du matériel adapté aux accès ruraux pour l\'enlèvement gratuit. Même à Congis-sur-Thérouanne, au bout d\'un chemin, notre dépanneuse peut accéder à votre épave. À Congis-sur-Thérouanne, nous venons jusqu\'à votre propriété rurale sans frais supplémentaires. Les précisions apportées en amont aident à préparer le matériel et l\'équipe adaptés. Chaque détail de l\'enlèvement à Congis-sur-Thérouanne est pensé pour une expérience sans tracas.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Congis-sur-Thérouanne soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le véhicule est orienté vers un opérateur de la filière autorisée dès la fin de l\'enlèvement. Le traitement est effectué dans le respect des obligations environnementales en vigueur. La coordination des acteurs garantit le respect des procédures à chaque étape du parcours.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Congis-sur-Thérouanne',
      intro: 'Pour les habitants de Congis-sur-Thérouanne, l\'enlèvement d\'épave est gratuit dans toute la commune. L\'intervention à Congis-sur-Thérouanne est programmée après avoir pris connaissance de votre situation. Pour le secteur 77440, nos équipes interviennent régulièrement et connaissent parfaitement les accès et particularités de Congis-sur-Thérouanne. Au départ de Congis-sur-Thérouanne, nos équipes couvrent un vaste secteur géographique.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Congis-sur-Thérouanne',
      questions: [
        { q: 'L\'intervention à Congis-sur-Thérouanne est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Congis-sur-Thérouanne sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Congis-sur-Thérouanne',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
