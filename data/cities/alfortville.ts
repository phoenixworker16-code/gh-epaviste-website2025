import { PageData } from '../types'

export const alfortvilleData: PageData = {
  slug: 'alfortville',
  entityType: 'City',
  metaTitle: 'Épaviste Alfortville (94140) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Alfortville (94140). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
  relatedServicesSlugs: [
    'enlevement-epave-parking-souterrain',
    'enlevement-voiture-en-panne',
    'enlevement-voiture-sans-carte-grise'
  ],
  relatedCitiesSlugs: [
    'enlevement-epave-val-de-marne'
  ],
  blocks: [
    {
      type: 'Hero',
      title: 'Débarras auto gratuit à Alfortville (94140) - Intervention dans le 94140',
      subtitle: 'Débarrassez votre épave à Alfortville (94140) sans frais. Notre service couvre tout le secteur de Alfortville.',
      badge: 'Alfortville (94140)',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Alfortville',
      intro: 'L\'enlèvement gratuit de votre épave est organisé sur l\'ensemble du territoire de Alfortville. Les détails d\'accès pour Alfortville sont examinés avant le départ de l\'équipe. Notre service dessert quotidiennement le secteur 94140 de Alfortville avec des équipes spécialisées dans l\'enlèvement d\'épaves. Au-delà de Alfortville, nous intervenons aussi dans les secteurs voisins.',
      zones: [
        { name: 'Zones pavillonnaires', delay: 'Sous 24h', specificities: 'Enlèvement au domicile ou dans votre allée privée.' },
        { name: 'Centre-ville & Axes principaux', delay: '24h', specificities: 'Retrait d\'épave sur voie publique.' },
        { name: 'Secteurs d\'activité', delay: 'Sur RDV', specificities: 'Intervention en zone commerciale.' }
      ],
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Alfortville',
      content: 'Dans une commune dense comme Alfortville, une épave gêne rapidement la circulation quotidienne. Fini les soucis de stationnement abusif : nous récupérons votre véhicule hors d\'usage rapidement. Nous disposons à Alfortville de dépanneuses adaptées aux rues étroites et au trafic dense. Le créneau d\'intervention est déterminé en tenant compte de vos disponibilités. Les modalités de l\'enlèvement sont adaptées à chaque situation dans Alfortville.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Alfortville, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Val-de-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le véhicule est remis à un partenaire spécialisé pour la suite de son traitement réglementaire. La conformité aux textes réglementaires est vérifiée par les opérateurs compétents. L\'organisation du parcours permet un suivi clair des différentes phases de traitement.',
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Alfortville',
      questions: [
        { q: 'L\'intervention à Alfortville est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Alfortville sont entièrement gratuits.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Intervenez-vous rapidement en cas de véhicule gênant la circulation à Alfortville ?', a: 'Oui, nous priorisons les situations urgentes en petite couronne. Contactez-nous pour un créneau adapté.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Alfortville',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
