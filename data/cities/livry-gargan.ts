import { PageData } from '../types'

export const livryGarganData: PageData = {
  slug: 'livry-gargan',
  entityType: 'City',
  metaTitle: 'Épaviste Livry-Gargan (93190) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Livry-Gargan (93190). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
  relatedServicesSlugs: [
    'enlevement-epave-parking-souterrain',
    'enlevement-voiture-en-panne',
    'enlevement-voiture-sans-carte-grise'
  ],
  relatedCitiesSlugs: [
    'seine-saint-denis'
  ],
  blocks: [
    {
      type: 'Hero',
      title: 'Faites enlever votre vieille voiture à Livry-Gargan gratuitement dans tout Livry-Gargan',
      subtitle: 'Votre épaviste à Livry-Gargan (93190) : intervention gratuite et rapide pour votre VHU dans Livry-Gargan.',
      badge: 'Livry-Gargan (93190)',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Livry-Gargan',
      intro: 'Toutes les rues de Livry-Gargan sont couvertes, quel que soit le type d\'habitation. Chaque demande d\'enlèvement à Livry-Gargan reçoit une organisation personnalisée. Le secteur 93190 de Livry-Gargan est couvert sans supplément de prix par notre service d\'enlèvement gratuit de véhicules hors d\'usage. Les voies d\'accès et les secteurs autour de Livry-Gargan font partie de notre circuit.',
      zones: [
        { name: 'Zones pavillonnaires', delay: 'Sous 24h', specificities: 'Enlèvement au domicile ou dans votre allée privée.' },
        { name: 'Centre-ville & Axes principaux', delay: '24h', specificities: 'Retrait d\'épave sur voie publique.' },
        { name: 'Secteurs d\'activité', delay: 'Sur RDV', specificities: 'Intervention en zone commerciale.' }
      ],
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Livry-Gargan',
      content: 'Faites enlever gratuitement votre épave à Livry-Gargan avant qu\'elle ne cause des problèmes de voisinage. Nous mettons à votre disposition nos dépanneuses spécialisées dans les interventions en petite couronne. Notre équipe à Livry-Gargan intervient avec discrétion et efficacité dans les quartiers animés. L\'équipe prépare son intervention à partir des détails fournis lors de la prise de contact. Notre équipe intervient rapidement dans toute Livry-Gargan grâce à une connaissance fine du secteur.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Livry-Gargan soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-Saint-Denis sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le parcours du véhicule comprend une étape chez un partenaire habilité pour la suite du traitement. La conformité du traitement est assurée par le respect des procédures en vigueur. L\'organisation du parcours permet un suivi clair des différentes phases de traitement.',
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Livry-Gargan',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Intervenez-vous rapidement en cas de véhicule gênant la circulation à Livry-Gargan ?', a: 'Oui, nous priorisons les situations urgentes en petite couronne. Contactez-nous pour un créneau adapté.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Livry-Gargan est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Livry-Gargan sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Livry-Gargan',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
