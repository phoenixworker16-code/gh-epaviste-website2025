import { PageData } from '../types'

export const montreuilSurEpteData: PageData = {
  slug: 'montreuil-sur-epte',
  entityType: 'City',
  metaTitle: 'Épaviste Montreuil-sur-Epte (95770) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Montreuil-sur-Epte (95770). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
  relatedServicesSlugs: [
    'enlevement-epave-parking-souterrain',
    'enlevement-voiture-en-panne',
    'enlevement-voiture-sans-carte-grise'
  ],
  relatedCitiesSlugs: [
    'val-d-oise'
  ],
  blocks: [
    {
      type: 'Hero',
      title: 'Épaviste professionnel à Montreuil-sur-Epte (95770) pour votre VHU à Montreuil-sur-Epte',
      subtitle: 'Votre véhicule hors d\'usage à Montreuil-sur-Epte (95770) ? Enlèvement gratuit partout dans Montreuil-sur-Epte.',
      badge: 'Montreuil-sur-Epte (95770)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Montreuil-sur-Epte',
      content: 'Nous venons à Montreuil-sur-Epte avec du matériel adapté aux accès ruraux pour l\'enlèvement gratuit. Dans les secteurs ruraux autour de Montreuil-sur-Epte, l\'accès à un service d\'enlèvement est simplifié. Les exploitants agricoles de Montreuil-sur-Epte nous confient leurs épaves pour un traitement réglementaire. Les détails pratiques sont échangés en amont pour assurer le bon déroulement du retrait. Les distances jusqu\'à Montreuil-sur-Epte sont anticipées dans notre organisation logistique.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Montreuil-sur-Epte soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Val-d\'Oise sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le véhicule est remis à un professionnel compétent pour assurer la continuité du traitement réglementaire. Les professionnels habilités assurent le respect des procédures imposées par la réglementation. L\'organisation du parcours permet un suivi clair des différentes phases de traitement.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Montreuil-sur-Epte',
      intro: 'Où que soit garé votre véhicule à Montreuil-sur-Epte, notre dépanneuse peut accéder pour le retirer. La préparation du retrait à Montreuil-sur-Epte inclut une évaluation des conditions d\'intervention. Le code postal 95770 est intégré dans notre tournée d\'enlèvement régulière à Montreuil-sur-Epte, ce qui garantit une intervention rapide. Les zones industrielles et résidentielles autour de Montreuil-sur-Epte sont comprises.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Montreuil-sur-Epte',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Montreuil-sur-Epte est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Montreuil-sur-Epte sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Montreuil-sur-Epte',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
