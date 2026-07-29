import { PageData } from '../types'

export const courcellesSurViosneData: PageData = {
  slug: 'courcelles-sur-viosne',
  entityType: 'City',
  metaTitle: 'Épaviste Courcelles-sur-Viosne (95650) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Courcelles-sur-Viosne (95650). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Débarrassez votre épave à Courcelles-sur-Viosne (95650) gratuitement dans tout Courcelles-sur-Viosne',
      subtitle: 'Nous enlevons les épaves à Courcelles-sur-Viosne (95650). Prestation gratuite incluant remorquage à Courcelles-sur-Viosne.',
      badge: 'Courcelles-sur-Viosne (95650)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Courcelles-sur-Viosne',
      content: 'Nous venons à Courcelles-sur-Viosne avec du matériel adapté aux accès ruraux pour l\'enlèvement gratuit. Les zones rurales autour de Courcelles-sur-Viosne sont intégralement couvertes par notre service. À Courcelles-sur-Viosne, notre logistique rurale permet de retirer les épaves même en terrain accidenté. Les informations recueillies permettent de dimensionner l\'intervention au plus juste. Notre équipe connaît les spécificités des zones rurales autour de Courcelles-sur-Viosne pour une intervention adaptée.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Courcelles-sur-Viosne soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Val-d\'Oise sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le véhicule est acheminé vers un professionnel autorisé à intervenir dans cette filière spécifique. Les professionnels habilités assurent le respect des procédures imposées par la réglementation. Le propriétaire est tenu informé des différentes étapes par les intervenants successifs.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Courcelles-sur-Viosne',
      intro: 'Les interventions à Courcelles-sur-Viosne sont possibles aussi bien sur voie publique que sur propriété privée. Pour Courcelles-sur-Viosne, l\'équipe se renseigne sur les spécificités d\'accès avant le départ. Le code postal 95650 est intégré dans notre tournée d\'enlèvement régulière à Courcelles-sur-Viosne, ce qui garantit une intervention rapide. Les voies d\'accès et les secteurs autour de Courcelles-sur-Viosne font partie de notre circuit.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Courcelles-sur-Viosne',
      questions: [
        { q: 'L\'intervention à Courcelles-sur-Viosne est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Courcelles-sur-Viosne sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Courcelles-sur-Viosne',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
