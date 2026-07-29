import { PageData } from '../types'

export const herouvilleEnVexinData: PageData = {
  slug: 'herouville-en-vexin',
  entityType: 'City',
  metaTitle: 'Épaviste Hérouville-en-Vexin (95300) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Hérouville-en-Vexin (95300). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Service rapide d\'enlèvement d\'épave à Hérouville-en-Vexin (95300) dans tout Hérouville-en-Vexin',
      subtitle: 'Hérouville-en-Vexin (95300) : votre épaviste gratuit pour l\'enlèvement de votre véhicule hors d\'usage à Hérouville-en-Vexin.',
      badge: 'Hérouville-en-Vexin (95300)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Hérouville-en-Vexin',
      content: 'Dans la campagne de Hérouville-en-Vexin, un véhicule hors d\'usage peut être retiré sans aucun frais. À Hérouville-en-Vexin, une épave oubliée dans un pré peut être retirée sans que vous ayez à bouger. À Hérouville-en-Vexin, nous proposons un enlèvement gratuit même dans les zones les plus isolées. Un échange téléphonique permet de finaliser l\'organisation avant le passage. Notre équipe à Hérouville-en-Vexin est équipée de véhicules adaptés aux chemins ruraux.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'L\'enlèvement d\'un véhicule hors d\'usage à Hérouville-en-Vexin implique une stricte conformité réglementaire. Voici les éléments à préparer. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Val-d\'Oise sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'La prise en charge prévoit le transfert du véhicule vers un opérateur partenaire habilité à traiter les véhicules hors d\'usage. L\'ensemble des opérations est réalisé dans les conditions fixées par la réglementation. Les responsabilités de chaque intervenant sont distinguées dès l\'organisation de l\'enlèvement.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Hérouville-en-Vexin',
      intro: 'L\'ensemble des zones résidentielles, commerciales et industrielles de Hérouville-en-Vexin est couvert. À Hérouville-en-Vexin, le rendez-vous est calé pour garantir une intervention efficace et ponctuelle. Notre équipe couvre le secteur postal 95300 avec une logistique dédiée. Les habitants de Hérouville-en-Vexin peuvent compter sur notre présence régulière dans ce code postal. Notre zone de couverture s\'articule autour de Hérouville-en-Vexin et de ses environs.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Hérouville-en-Vexin',
      questions: [
        { q: 'L\'intervention à Hérouville-en-Vexin est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Hérouville-en-Vexin sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Hérouville-en-Vexin',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
