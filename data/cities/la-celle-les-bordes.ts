import { PageData } from '../types'

export const laCelleLesBordesData: PageData = {
  slug: 'la-celle-les-bordes',
  entityType: 'City',
  metaTitle: 'Épaviste La Celle-les-Bordes (78720) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à La Celle-les-Bordes (78720). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Épaviste gratuit La Celle-les-Bordes intervention rapide dans le 78720 de La Celle-les-Bordes',
      subtitle: 'Épaviste gratuit à La Celle-les-Bordes (78720) : intervention dans tout La Celle-les-Bordes pour votre véhicule hors d\'usage.',
      badge: 'La Celle-les-Bordes (78720)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à La Celle-les-Bordes',
      content: 'À La Celle-les-Bordes, vous avez une épave qui ne bouge plus depuis longtemps sur votre propriété ? Les propriétés rurales de La Celle-les-Bordes sont desservies par notre service sans supplément. À La Celle-les-Bordes, l\'enlèvement gratuit comprend le déplacement jusqu\'à votre propriété. La préparation logistique intègre les spécificités de chaque demande d\'enlèvement. Les modalités d\'accès à La Celle-les-Bordes sont vérifiées avant le départ pour une intervention réussie.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'L\'enlèvement d\'un véhicule hors d\'usage à La Celle-les-Bordes implique une stricte conformité réglementaire. Voici les éléments à préparer. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Yvelines sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Après l\'enlèvement, le véhicule est acheminé vers une installation partenaire autorisée pour les opérations de fin de vie. Les obligations applicables aux véhicules hors d\'usage sont respectées tout au long du processus. Les intervenants se coordonnent pour assurer la continuité du traitement réglementaire.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur La Celle-les-Bordes',
      intro: 'La tournée de nos dépanneuses couvre La Celle-les-Bordes en intégralité chaque semaine. Nous préparons l\'enlèvement à La Celle-les-Bordes avec le souci du détail pour une exécution parfaite. Pour le secteur 78720, nos équipes interviennent régulièrement et connaissent parfaitement les accès et particularités de La Celle-les-Bordes. Les zones industrielles et résidentielles autour de La Celle-les-Bordes sont comprises.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à La Celle-les-Bordes',
      questions: [
        { q: 'L\'intervention à La Celle-les-Bordes est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à La Celle-les-Bordes sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à La Celle-les-Bordes',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
