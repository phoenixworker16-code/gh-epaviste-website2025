import { PageData } from '../types'

export const montignyLeGuesdierData: PageData = {
  slug: 'montigny-le-guesdier',
  entityType: 'City',
  metaTitle: 'Épaviste Montigny-le-Guesdier (77480) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Montigny-le-Guesdier (77480). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Débarras automobile Montigny-le-Guesdier (77480) dans toute l\'agglomération Montigny-le-Guesdier',
      subtitle: 'Montigny-le-Guesdier (77480) : votre épaviste gratuit pour l\'enlèvement de votre véhicule hors d\'usage à Montigny-le-Guesdier.',
      badge: 'Montigny-le-Guesdier (77480)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Montigny-le-Guesdier',
      content: 'À Montigny-le-Guesdier, notre équipe se déplace jusque dans les hameaux pour retirer les épaves. Notre équipe est habituée aux accès ruraux à Montigny-le-Guesdier et intervient dans les meilleures conditions. Nous retirons gratuitement votre épave à Montigny-le-Guesdier avec du matériel adapté aux terrains ruraux. Le programme d\'intervention est défini avec le propriétaire pour une prise en charge optimale. L\'équipe dépêchée à Montigny-le-Guesdier connaît les spécificités des propriétés rurales.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Montigny-le-Guesdier, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Une fois l\'enlèvement effectué, le véhicule rejoint une installation partenaire dédiée. La conformité du traitement est assurée par le respect des procédures en vigueur. Le processus est organisé de manière à respecter les obligations à chaque phase du parcours.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Montigny-le-Guesdier',
      intro: 'Aucun quartier de Montigny-le-Guesdier n\'est exclu : nous intervenons partout dans la commune. Notre équipe à Montigny-le-Guesdier coordonne le passage avec vous pour une intervention sans accroc. Le code postal 77480 est intégré dans notre tournée d\'enlèvement régulière à Montigny-le-Guesdier, ce qui garantit une intervention rapide. Les localités voisines de Montigny-le-Guesdier peuvent aussi solliciter notre intervention.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Montigny-le-Guesdier',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Montigny-le-Guesdier est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Montigny-le-Guesdier sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Montigny-le-Guesdier',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
