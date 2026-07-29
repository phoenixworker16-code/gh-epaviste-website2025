import { PageData } from '../types'

export const rosnySurSeineData: PageData = {
  slug: 'rosny-sur-seine',
  entityType: 'City',
  metaTitle: 'Épaviste Rosny-sur-Seine (78710) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Rosny-sur-Seine (78710). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Retrait d\'épave professionnel à Rosny-sur-Seine (78710) pour votre VHU à Rosny-sur-Seine',
      subtitle: 'À Rosny-sur-Seine (78710), nous organisons l\'enlèvement gratuit de votre épave partout dans Rosny-sur-Seine.',
      badge: 'Rosny-sur-Seine (78710)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Rosny-sur-Seine',
      content: 'À Rosny-sur-Seine, nous retirons gratuitement les épaves même dans les zones les plus reculées. Les habitants des zones rurales de Rosny-sur-Seine nous font confiance pour un service fiable. À Rosny-sur-Seine, même dans les secteurs isolés, notre équipe se déplace gratuitement. Les informations communiquées au moment de la demande facilitent la préparation du retrait. L\'équipe dépêchée à Rosny-sur-Seine connaît les spécificités des propriétés rurales.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Rosny-sur-Seine soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Yvelines sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'La continuité du parcours est assurée par un partenaire spécialisé dans la filière concernée. Le processus respecte les prescriptions légales applicables à ce type de véhicule. La continuité entre l\'enlèvement et le traitement est assurée par une organisation cadrée.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Rosny-sur-Seine',
      intro: 'Même dans les secteurs les plus excentrés de Rosny-sur-Seine, nous organisons l\'enlèvement. Avant l\'enlèvement à Rosny-sur-Seine, les informations pratiques sont échangées avec le propriétaire. Notre service dessert quotidiennement le secteur 78710 de Rosny-sur-Seine avec des équipes spécialisées dans l\'enlèvement d\'épaves. Les habitants des environs proches de Rosny-sur-Seine peuvent compter sur notre service.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Rosny-sur-Seine',
      questions: [
        { q: 'L\'intervention à Rosny-sur-Seine est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Rosny-sur-Seine sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Rosny-sur-Seine',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
