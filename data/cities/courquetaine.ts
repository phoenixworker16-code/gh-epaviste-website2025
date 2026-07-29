import { PageData } from '../types'

export const courquetaineData: PageData = {
  slug: 'courquetaine',
  entityType: 'City',
  metaTitle: 'Épaviste Courquetaine (77390) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Courquetaine (77390). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Service professionnel d\'enlèvement VHU à Courquetaine (77390) dans tout Courquetaine',
      subtitle: 'Débarras auto Courquetaine (77390) : notre équipe enlève gratuitement votre épave à Courquetaine.',
      badge: 'Courquetaine (77390)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Courquetaine',
      content: 'À Courquetaine, même les épaves situées sur des terrains difficiles sont prises en charge. Dans la campagne de Courquetaine, nous intervenons sans frais de déplacement supplémentaires. Notre service à Courquetaine garantit un retrait gratuit où que vous soyez dans la commune. Le créneau est confirmé après vérification des éléments utiles à la prise en charge. L\'équipe dépêchée à Courquetaine connaît les spécificités des propriétés rurales.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Courquetaine soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'L\'organisation comprend un relais vers un établissement habilité pour la suite des opérations. Les opérateurs impliqués appliquent les règles en vigueur pour le traitement de ces véhicules. Le partenaire compétent prend ensuite le relais pour les étapes qui relèvent de sa responsabilité.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Courquetaine',
      intro: 'Où que soit garé votre véhicule à Courquetaine, notre dépanneuse peut accéder pour le retirer. Les contraintes spécifiques à Courquetaine sont intégrées dans l\'organisation du retrait. Le code postal 77390 est intégré dans notre tournée d\'enlèvement régulière à Courquetaine, ce qui garantit une intervention rapide. Les voies d\'accès et les secteurs autour de Courquetaine font partie de notre circuit.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Courquetaine',
      questions: [
        { q: 'L\'intervention à Courquetaine est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Courquetaine sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Courquetaine',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
