import { PageData } from '../types'

export const ezanvilleData: PageData = {
  slug: 'ezanville',
  entityType: 'City',
  metaTitle: 'Épaviste Ézanville (95460) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Ézanville (95460). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
  relatedServicesSlugs: [
    'enlevement-epave-parking-souterrain',
    'enlevement-voiture-en-panne',
    'enlevement-voiture-sans-carte-grise'
  ],
  relatedCitiesSlugs: [
    'enlevement-epave-val-d-oise'
  ],
  blocks: [
    {
      type: 'Hero',
      title: 'Votre épaviste de secteur à Ézanville (95460) pour enlèvement à Ézanville',
      subtitle: 'Retrait gratuit épave Ézanville (95460) : notre équipe intervient partout à Ézanville sans frais.',
      badge: 'Ézanville (95460)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Ézanville',
      content: 'Un véhicule abandonné sur votre terrain à Ézanville vous gêne au quotidien ? À Ézanville, même dans les lieux-dits et les hameaux, nous retirons votre épave gratuitement. Nous intervenons à Ézanville pour un enlèvement gratuit, même dans les lieux difficilement accessibles. Un contact est établi avant le passage pour confirmer les modalités de l\'intervention. L\'organisation de l\'enlèvement à Ézanville tient compte des distances et de l\'accessibilité rurale.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Ézanville soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Val-d\'Oise sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le véhicule est dirigé vers un prestataire spécialisé dans le traitement des véhicules en fin de vie. Les exigences légales sont satisfaites par l\'intervention de partenaires compétents dans la filière. L\'enchaînement des étapes est planifié pour respecter les délais et les obligations réglementaires.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Ézanville',
      intro: 'Le retrait de votre épave à Ézanville est possible où qu\'elle se trouve sur la commune. Pour Ézanville, une préparation sur mesure est réalisée selon vos indications. Le secteur 95460 de Ézanville est couvert sans supplément de prix par notre service d\'enlèvement gratuit de véhicules hors d\'usage. Au-delà du territoire de Ézanville, les secteurs périphériques sont également couverts.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Ézanville',
      questions: [
        { q: 'L\'intervention à Ézanville est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Ézanville sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Ézanville',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
