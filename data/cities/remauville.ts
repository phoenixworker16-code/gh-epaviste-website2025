import { PageData } from '../types'

export const remauvilleData: PageData = {
  slug: 'remauville',
  entityType: 'City',
  metaTitle: 'Épaviste Remauville (77710) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Remauville (77710). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Retrait gratuit de carcasse automobile à Remauville (77710) dans le 77710',
      subtitle: 'Nous enlevons les épaves à Remauville (77710). Prestation gratuite incluant remorquage à Remauville.',
      badge: 'Remauville (77710)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Remauville',
      content: 'Votre propriété rurale à Remauville n\'a pas besoin de cette épave : faites-la enlever. Dans les secteurs ruraux autour de Remauville, l\'accès à un service d\'enlèvement est simplifié. Notre équipe à Remauville assure un service professionnel d\'enlèvement gratuit en zone rurale. Les informations transmises permettent d\'anticiper les besoins techniques et humains. Chaque détail de l\'enlèvement à Remauville est pensé pour une expérience sans tracas.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'L\'enlèvement d\'un véhicule hors d\'usage à Remauville implique une stricte conformité réglementaire. Voici les éléments à préparer. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'La prise en charge prévoit le transfert du véhicule vers un opérateur partenaire habilité à traiter les véhicules hors d\'usage. Le processus respecte les prescriptions légales applicables à ce type de véhicule. La continuité du traitement est assurée par une organisation structurée entre les partenaires.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Remauville',
      intro: 'La commune de Remauville est intégralement couverte par notre service gratuit d\'enlèvement. Notre équipe à Remauville coordonne le passage avec vous pour une intervention sans accroc. Notre service dessert quotidiennement le secteur 77710 de Remauville avec des équipes spécialisées dans l\'enlèvement d\'épaves. Les communes situées à proximité de Remauville peuvent bénéficier d\'un enlèvement.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Remauville',
      questions: [
        { q: 'L\'intervention à Remauville est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Remauville sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Remauville',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
