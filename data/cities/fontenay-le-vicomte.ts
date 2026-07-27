import { PageData } from '../types'

export const fontenayLeVicomteData: PageData = {
  slug: 'fontenay-le-vicomte',
  entityType: 'City',
  metaTitle: 'Épaviste Fontenay-le-Vicomte (91540) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Fontenay-le-Vicomte (91540). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Service professionnel d\'enlèvement VHU à Fontenay-le-Vicomte (91540) dans tout Fontenay-le-Vicomte',
      subtitle: 'Service gratuit d\'épaviste à Fontenay-le-Vicomte (91540). Votre véhicule hors d\'usage retiré à Fontenay-le-Vicomte.',
      badge: 'Fontenay-le-Vicomte (91540)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Fontenay-le-Vicomte',
      content: 'Un véhicule abandonné sur votre terrain à Fontenay-le-Vicomte vous gêne au quotidien ? Votre propriété à Fontenay-le-Vicomte est accessible à nos dépanneuses pour un enlèvement gratuit. Notre équipe à Fontenay-le-Vicomte assure un service professionnel d\'enlèvement gratuit en zone rurale. Un échange préalable permet de prévoir le matériel approprié et le créneau de passage. Le rendez-vous à Fontenay-le-Vicomte est programmé avec une logistique adaptée aux routes et chemins.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'L\'enlèvement d\'un véhicule hors d\'usage à Fontenay-le-Vicomte implique une stricte conformité réglementaire. Voici les éléments à préparer. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Essonne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Après l\'enlèvement, un professionnel partenaire prend le relais pour les opérations ultérieures. Les étapes ultérieures sont réalisées par les professionnels compétents, conformément au cadre applicable. Les différents opérateurs interviennent en synergie pour la réalisation des opérations requises.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Fontenay-le-Vicomte',
      intro: 'Notre service à Fontenay-le-Vicomte est accessible dans tous les quartiers, du centre aux lotissements. Le dispositif mis en place pour Fontenay-le-Vicomte est adapté à chaque situation particulière. Les demandes pour le 91540 de Fontenay-le-Vicomte sont traitées en priorité par notre équipe qui connaît bien ce secteur. Notre zone de couverture s\'articule autour de Fontenay-le-Vicomte et de ses environs.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Fontenay-le-Vicomte',
      questions: [
        { q: 'L\'intervention à Fontenay-le-Vicomte est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Fontenay-le-Vicomte sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Fontenay-le-Vicomte',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
