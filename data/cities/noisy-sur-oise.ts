import { PageData } from '../types'

export const noisySurOiseData: PageData = {
  slug: 'noisy-sur-oise',
  entityType: 'City',
  metaTitle: 'Épaviste Noisy-sur-Oise (95270) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Noisy-sur-Oise (95270). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Votre épaviste de secteur à Noisy-sur-Oise (95270) pour enlèvement à Noisy-sur-Oise',
      subtitle: 'Épaviste gratuit à Noisy-sur-Oise (95270) : intervention dans tout Noisy-sur-Oise pour votre véhicule hors d\'usage.',
      badge: 'Noisy-sur-Oise (95270)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Noisy-sur-Oise',
      content: 'À Noisy-sur-Oise, nous retirons gratuitement les épaves même dans les zones les plus reculées. Même à Noisy-sur-Oise, au bout d\'un chemin, notre dépanneuse peut accéder à votre épave. Nous retirons gratuitement votre épave à Noisy-sur-Oise avec du matériel adapté aux terrains ruraux. La préparation logistique intègre les spécificités de chaque demande d\'enlèvement. Notre connaissance des zones rurales garantit une intervention efficace à Noisy-sur-Oise.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Noisy-sur-Oise, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Val-d\'Oise sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'La prestation d\'enlèvement intègre le transfert vers un opérateur compétent pour la suite du parcours. Les étapes de traitement sont encadrées par les dispositions légales en vigueur. Le propriétaire bénéficie d\'un suivi transparent des différentes phases de prise en charge.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Noisy-sur-Oise',
      intro: 'Nous intervenons à Noisy-sur-Oise dans tous les secteurs, y compris dans les zones à accès difficile. Les contraintes spécifiques à Noisy-sur-Oise sont intégrées dans l\'organisation du retrait. Notre service dessert quotidiennement le secteur 95270 de Noisy-sur-Oise avec des équipes spécialisées dans l\'enlèvement d\'épaves. Au-delà de Noisy-sur-Oise, nous intervenons aussi dans les secteurs voisins.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Noisy-sur-Oise',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Noisy-sur-Oise est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Noisy-sur-Oise sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Noisy-sur-Oise',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
