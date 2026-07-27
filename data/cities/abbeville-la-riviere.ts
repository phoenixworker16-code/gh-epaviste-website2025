import { PageData } from '../types'

export const abbevilleLaRiviereData: PageData = {
  slug: 'abbeville-la-riviere',
  entityType: 'City',
  metaTitle: 'Épaviste Abbéville-la-Rivière (91150) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Abbéville-la-Rivière (91150). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
  relatedServicesSlugs: [
    'enlevement-epave-parking-souterrain',
    'enlevement-voiture-en-panne',
    'enlevement-voiture-sans-carte-grise'
  ],
  relatedCitiesSlugs: [
    'enlevement-epave-essonne'
  ],
  blocks: [
    {
      type: 'Hero',
      title: 'Enlèvement de véhicule accidenté à Abbéville-la-Rivière sans frais dans tout Abbéville-la-Rivière (91150)',
      subtitle: 'Abbéville-la-Rivière (91150) : votre épaviste gratuit pour l\'enlèvement de votre véhicule hors d\'usage à Abbéville-la-Rivière.',
      badge: 'Abbéville-la-Rivière (91150)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Abbéville-la-Rivière',
      content: 'Redonnez de l\'espace à votre terrain à Abbéville-la-Rivière en confiant cette épave à notre service. Même à Abbéville-la-Rivière, au bout d\'un chemin, notre dépanneuse peut accéder à votre épave. À Abbéville-la-Rivière, nous retirons les épaves des champs, prés et chemins sans difficulté. Un échange préalable permet de prévoir le matériel approprié et le créneau de passage. Notre équipe à Abbéville-la-Rivière est équipée de véhicules adaptés aux chemins ruraux.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Abbéville-la-Rivière, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Essonne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'La prestation d\'enlèvement intègre le transfert vers un opérateur compétent pour la suite du parcours. Les opérateurs veillent au respect des exigences réglementaires tout au long du processus. Les opérateurs compétents interviennent à tour de rôle pour couvrir l\'ensemble du processus.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Abbéville-la-Rivière',
      intro: 'Tous les habitants de Abbéville-la-Rivière peuvent bénéficier de notre service d\'enlèvement à domicile. À Abbéville-la-Rivière, le rendez-vous est calé pour garantir une intervention efficace et ponctuelle. Pour le secteur 91150, nos équipes interviennent régulièrement et connaissent parfaitement les accès et particularités de Abbéville-la-Rivière. Les voies d\'accès et les secteurs autour de Abbéville-la-Rivière font partie de notre circuit.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Abbéville-la-Rivière',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Abbéville-la-Rivière est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Abbéville-la-Rivière sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Abbéville-la-Rivière',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
