import { PageData } from '../types'

export const marollesSurSeineData: PageData = {
  slug: 'marolles-sur-seine',
  entityType: 'City',
  metaTitle: 'Épaviste Marolles-sur-Seine (77130) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Marolles-sur-Seine (77130). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Débarrassez votre épave à Marolles-sur-Seine (77130) gratuitement dans tout Marolles-sur-Seine',
      subtitle: 'Épaviste professionnel à Marolles-sur-Seine (77130) : enlèvement gratuit de votre VHU dans tout Marolles-sur-Seine.',
      badge: 'Marolles-sur-Seine (77130)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Marolles-sur-Seine',
      content: 'Un véhicule abandonné sur votre terrain à Marolles-sur-Seine vous gêne au quotidien ? Notre équipe est habituée aux accès ruraux à Marolles-sur-Seine et intervient dans les meilleures conditions. À Marolles-sur-Seine, nous proposons un enlèvement gratuit même dans les zones les plus isolées. Le créneau est confirmé après vérification des éléments utiles à la prise en charge. Les modalités de l\'intervention à Marolles-sur-Seine sont conçues pour les propriétés rurales.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Marolles-sur-Seine soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le transfert vers un partenaire compétent est organisé dès l\'enlèvement terminé. L\'ensemble des acteurs respecte les dispositions réglementaires encadrant cette activité. L\'organisation du parcours permet un suivi clair des différentes phases de traitement.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Marolles-sur-Seine',
      intro: 'Notre équipe se rend dans chaque quartier de Marolles-sur-Seine pour les enlèvements programmés. Les informations fournies sur la situation à Marolles-sur-Seine permettent de préparer l\'intervention. Notre service dessert quotidiennement le secteur 77130 de Marolles-sur-Seine avec des équipes spécialisées dans l\'enlèvement d\'épaves. Notre rayonnement autour de Marolles-sur-Seine s\'étend sur plusieurs kilomètres à la ronde.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Marolles-sur-Seine',
      questions: [
        { q: 'L\'intervention à Marolles-sur-Seine est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Marolles-sur-Seine sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Marolles-sur-Seine',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
