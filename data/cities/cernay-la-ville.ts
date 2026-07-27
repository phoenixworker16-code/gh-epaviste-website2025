import { PageData } from '../types'

export const cernayLaVilleData: PageData = {
  slug: 'cernay-la-ville',
  entityType: 'City',
  metaTitle: 'Épaviste Cernay-la-Ville (78720) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Cernay-la-Ville (78720). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Retrait gratuit voiture épave à Cernay-la-Ville (78720) pour tout Cernay-la-Ville',
      subtitle: 'Retrait gratuit épave Cernay-la-Ville (78720) : notre équipe intervient partout à Cernay-la-Ville sans frais.',
      badge: 'Cernay-la-Ville (78720)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Cernay-la-Ville',
      content: 'Nous venons à Cernay-la-Ville avec du matériel adapté aux accès ruraux pour l\'enlèvement gratuit. Même à Cernay-la-Ville, au bout d\'un chemin, notre dépanneuse peut accéder à votre épave. Le service à Cernay-la-Ville est conçu pour les zones agricoles et les habitations isolées. Les informations transmises permettent d\'anticiper les besoins techniques et humains. Nous organisons le passage à Cernay-la-Ville avec une logistique adaptée aux grands terrains.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Cernay-la-Ville soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Yvelines sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Après la prise en charge initiale, le véhicule est confié à un partenaire technique spécialisé. La réglementation en vigueur est suivie par l\'ensemble des intervenants de la filière. Les responsabilités sont clairement établies entre les opérateurs de la chaîne de traitement.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Cernay-la-Ville',
      intro: 'Vous avez une épave à Cernay-la-Ville ? Notre équipe se déplace gratuitement où qu\'elle soit. Le passage à Cernay-la-Ville est planifié de manière à optimiser le temps d\'intervention. Les habitants du 78720 à Cernay-la-Ville bénéficient d\'un passage régulier de nos équipes et d\'une prise en charge adaptée à ce secteur. Au-delà du territoire de Cernay-la-Ville, les secteurs périphériques sont également couverts.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Cernay-la-Ville',
      questions: [
        { q: 'L\'intervention à Cernay-la-Ville est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Cernay-la-Ville sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Cernay-la-Ville',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
