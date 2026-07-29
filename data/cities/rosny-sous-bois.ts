import { PageData } from '../types'

export const rosnySousBoisData: PageData = {
  slug: 'rosny-sous-bois',
  entityType: 'City',
  metaTitle: 'Épaviste Rosny-sous-Bois (93110) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Rosny-sous-Bois (93110). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
  relatedServicesSlugs: [
    'enlevement-epave-parking-souterrain',
    'enlevement-voiture-en-panne',
    'enlevement-voiture-sans-carte-grise'
  ],
  relatedCitiesSlugs: [
    'enlevement-epave-seine-saint-denis'
  ],
  blocks: [
    {
      type: 'Hero',
      title: 'Débarras auto gratuit à Rosny-sous-Bois (93110) - Intervention dans le 93110',
      subtitle: 'Solution enlèvement épave à Rosny-sous-Bois (93110). Intervention rapide et gratuite dans le 93110 de Rosny-sous-Bois.',
      badge: 'Rosny-sous-Bois (93110)',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Rosny-sous-Bois',
      intro: 'L\'enlèvement à Rosny-sous-Bois est organisé sans considération de zone ou de quartier. La planification de l\'enlèvement à Rosny-sous-Bois s\'appuie sur les données communiquées en amont. Les demandes pour le 93110 de Rosny-sous-Bois sont traitées en priorité par notre équipe qui connaît bien ce secteur. Les communes autour de Rosny-sous-Bois sont également parcourues par nos dépanneuses.',
      zones: [
        { name: 'Zones pavillonnaires', delay: 'Sous 24h', specificities: 'Enlèvement au domicile ou dans votre allée privée.' },
        { name: 'Centre-ville & Axes principaux', delay: '24h', specificities: 'Retrait d\'épave sur voie publique.' },
        { name: 'Secteurs d\'activité', delay: 'Sur RDV', specificities: 'Intervention en zone commerciale.' }
      ],
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Rosny-sous-Bois',
      content: 'Nous organisons l\'enlèvement gratuit de votre véhicule à Rosny-sous-Bois sur simple demande. À Rosny-sous-Bois, les règles de stationnement sont strictes concernant les véhicules hors d\'usage. L\'organisation à Rosny-sous-Bois permet un enlèvement sans stress, même dans les secteurs très fréquentés. Les informations communiquées au moment de la demande facilitent la préparation du retrait. La préparation du rendez-vous prend en compte la densité de circulation à Rosny-sous-Bois.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Rosny-sous-Bois soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-Saint-Denis sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'L\'organisation mise en place prévoit un relais vers un opérateur partenaire pour les phases suivantes. Les différentes obligations sont remplies par les professionnels intervenant dans la chaîne de traitement. Les professionnels impliqués assurent chacun la partie du processus relevant de leur compétence.',
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Rosny-sous-Bois',
      questions: [
        { q: 'L\'intervention à Rosny-sous-Bois est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Rosny-sous-Bois sont entièrement gratuits.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Intervenez-vous rapidement en cas de véhicule gênant la circulation à Rosny-sous-Bois ?', a: 'Oui, nous priorisons les situations urgentes en petite couronne. Contactez-nous pour un créneau adapté.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Rosny-sous-Bois',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
