import { PageData } from '../types'

export const butrySurOiseData: PageData = {
  slug: 'butry-sur-oise',
  entityType: 'City',
  metaTitle: 'Épaviste Butry-sur-Oise (95430) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Butry-sur-Oise (95430). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
  relatedServicesSlugs: [
    'enlevement-epave-parking-souterrain',
    'enlevement-voiture-en-panne',
    'enlevement-voiture-sans-carte-grise'
  ],
  relatedCitiesSlugs: [
    'enlevement-epave-val-d-oise'
  ],
  blocks: [
    {
      type: 'Hero',
      title: 'Retrait auto hors d\'usage Butry-sur-Oise (95430) dans le département 95430',
      subtitle: 'Service de retrait d\'épave à Butry-sur-Oise (95430). Gratuit et sans contrainte pour les habitants de Butry-sur-Oise.',
      badge: 'Butry-sur-Oise (95430)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Butry-sur-Oise',
      content: 'Situé à Butry-sur-Oise, votre véhicule hors d\'usage encombre votre terrain ou votre cour ? Les habitants des zones rurales de Butry-sur-Oise nous font confiance pour un service fiable. Nous organisons à Butry-sur-Oise des interventions adaptées aux grandes propriétés et aux écarts. L\'organisation du retrait est préparée conjointement avec le propriétaire du véhicule. Notre équipe connaît les spécificités des zones rurales autour de Butry-sur-Oise pour une intervention adaptée.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Butry-sur-Oise, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Val-d\'Oise sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le véhicule retiré est confié à un partenaire autorisé à réaliser les opérations de recyclage. La prise en charge respecte les dispositions réglementaires applicables aux véhicules hors d\'usage. Les différents opérateurs interviennent en synergie pour la réalisation des opérations requises.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Butry-sur-Oise',
      intro: 'Où que soit garé votre véhicule à Butry-sur-Oise, notre dépanneuse peut accéder pour le retirer. À Butry-sur-Oise, le rendez-vous est calé pour garantir une intervention efficace et ponctuelle. Notre service dessert quotidiennement le secteur 95430 de Butry-sur-Oise avec des équipes spécialisées dans l\'enlèvement d\'épaves. Nous étendons notre intervention au-delà de Butry-sur-Oise pour couvrir un large secteur.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Butry-sur-Oise',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Butry-sur-Oise est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Butry-sur-Oise sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Butry-sur-Oise',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
