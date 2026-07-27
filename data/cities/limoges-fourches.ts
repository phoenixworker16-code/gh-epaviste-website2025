import { PageData } from '../types'

export const limogesFourchesData: PageData = {
  slug: 'limoges-fourches',
  entityType: 'City',
  metaTitle: 'Épaviste Limoges-Fourches (77550) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Limoges-Fourches (77550). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Faites enlever votre vieille voiture à Limoges-Fourches gratuitement dans tout Limoges-Fourches',
      subtitle: 'À Limoges-Fourches (77550) : faites enlever votre épave gratuitement par des professionnels dans tout Limoges-Fourches.',
      badge: 'Limoges-Fourches (77550)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Limoges-Fourches',
      content: 'Nous venons à Limoges-Fourches avec du matériel adapté aux accès ruraux pour l\'enlèvement gratuit. Dans les zones reculées de Limoges-Fourches, nous adaptons notre matériel pour un retrait sans difficulté. À Limoges-Fourches, même dans les secteurs isolés, notre équipe se déplace gratuitement. Le rendez-vous est organisé à partir de la situation du véhicule et des conditions d\'accès indiquées. Notre équipe connaît les spécificités des zones rurales autour de Limoges-Fourches pour une intervention adaptée.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'L\'enlèvement d\'un véhicule hors d\'usage à Limoges-Fourches implique une stricte conformité réglementaire. Voici les éléments à préparer. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le véhicule retiré est orienté vers une structure partenaire disposant des autorisations nécessaires. Le traitement respecte les normes applicables aux véhicules en fin de vie. La continuité entre l\'enlèvement et le traitement est assurée par une organisation cadrée.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Limoges-Fourches',
      intro: 'Grâce à notre organisation, Limoges-Fourches est entièrement desservie pour l\'enlèvement d\'épaves. Le rendez-vous pour Limoges-Fourches est défini en fonction des éléments communiqués lors du contact. Notre service dessert quotidiennement le secteur 77550 de Limoges-Fourches avec des équipes spécialisées dans l\'enlèvement d\'épaves. Au départ de Limoges-Fourches, nos équipes couvrent un vaste secteur géographique.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Limoges-Fourches',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Limoges-Fourches est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Limoges-Fourches sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Limoges-Fourches',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
