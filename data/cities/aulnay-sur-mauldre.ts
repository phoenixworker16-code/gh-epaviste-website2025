import { PageData } from '../types'

export const aulnaySurMauldreData: PageData = {
  slug: 'aulnay-sur-mauldre',
  entityType: 'City',
  metaTitle: 'Épaviste Aulnay-sur-Mauldre (78126) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Aulnay-sur-Mauldre (78126). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Retrait gratuit de carcasse automobile à Aulnay-sur-Mauldre (78126) dans le 78126',
      subtitle: 'Débarras auto Aulnay-sur-Mauldre (78126) : notre équipe enlève gratuitement votre épave à Aulnay-sur-Mauldre.',
      badge: 'Aulnay-sur-Mauldre (78126)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Aulnay-sur-Mauldre',
      content: 'À Aulnay-sur-Mauldre, notre équipe se déplace jusque dans les hameaux pour retirer les épaves. Nous nous déplaçons gratuitement jusqu\'à vous, même dans les zones moins denses du département. À Aulnay-sur-Mauldre, l\'enlèvement gratuit comprend le déplacement jusqu\'à votre propriété. La planification de l\'intervention s\'appuie sur les éléments communiqués lors de la demande. Chaque détail de l\'enlèvement à Aulnay-sur-Mauldre est pensé pour une expérience sans tracas.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Aulnay-sur-Mauldre soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Yvelines sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Une fois l\'enlèvement effectué, le véhicule rejoint une installation partenaire dédiée. La réglementation encadrant les véhicules hors d\'usage est respectée par les intervenants agréés. Les professionnels impliqués travaillent en coordination pour la bonne fin des opérations.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Aulnay-sur-Mauldre',
      intro: 'Tous les points de la commune de Aulnay-sur-Mauldre sont desservis, même les zones les moins denses. Pour un retrait à Aulnay-sur-Mauldre, notre équipe se tient prête à intervenir au créneau convenu. La zone 78126 fait partie de notre secteur d\'intervention prioritaire. Nous organisons des passages réguliers dans cette partie de Aulnay-sur-Mauldre. Les communes qui entourent Aulnay-sur-Mauldre profitent également de notre service gratuit.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Aulnay-sur-Mauldre',
      questions: [
        { q: 'L\'intervention à Aulnay-sur-Mauldre est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Aulnay-sur-Mauldre sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Aulnay-sur-Mauldre',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
