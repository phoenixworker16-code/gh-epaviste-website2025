import { PageData } from '../types'

export const vanvilleData: PageData = {
  slug: 'vanville',
  entityType: 'City',
  metaTitle: 'Épaviste Vanvillé (77370) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Vanvillé (77370). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Service d\'enlèvement d\'épave à Vanvillé (77370) - Intervention Vanvillé',
      subtitle: 'Enlèvement épave Vanvillé (77370) : service gratuit pour votre VHU dans tout le secteur de Vanvillé.',
      badge: 'Vanvillé (77370)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Vanvillé',
      content: 'À Vanvillé, nous intervenons même sur les chemins non goudronnés pour retirer votre épave. À Vanvillé, faire retirer une épave de son terrain, c\'est aussi valoriser sa propriété. Notre service à Vanvillé garantit un retrait gratuit où que vous soyez dans la commune. Un contact est établi avant le passage pour confirmer les modalités de l\'intervention. L\'enlèvement à Vanvillé bénéficie d\'une organisation adaptée à l\'environnement rural.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Vanvillé, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'La remise du véhicule à un opérateur spécialisé est prévue dans l\'organisation du service. Les opérateurs veillent au respect des exigences réglementaires tout au long du processus. Le suivi du parcours permet au propriétaire de connaître les différentes étapes réalisées.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Vanvillé',
      intro: 'Que votre épave soit à Vanvillé dans un parking, une rue ou un garage, nous l\'enlevons. À Vanvillé, le rendez-vous est calé pour garantir une intervention efficace et ponctuelle. Le code postal 77370 est intégré dans notre tournée d\'enlèvement régulière à Vanvillé, ce qui garantit une intervention rapide. Les zones industrielles et résidentielles autour de Vanvillé sont comprises.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Vanvillé',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Vanvillé est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Vanvillé sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Vanvillé',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
