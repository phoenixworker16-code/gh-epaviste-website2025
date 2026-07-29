import { PageData } from '../types'

export const pommeuseData: PageData = {
  slug: 'pommeuse',
  entityType: 'City',
  metaTitle: 'Épaviste Pommeuse (77515) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Pommeuse (77515). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Enlèvement VHU Pommeuse - Prise en charge totale à Pommeuse (77515)',
      subtitle: 'Pour Pommeuse (77515) : retrait gratuit de votre épave avec remise des documents à Pommeuse.',
      badge: 'Pommeuse (77515)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Pommeuse',
      content: 'Vous avez une vieille voiture qui rouille dans un champ à Pommeuse ? Nous l\'enlevons gratuitement. À la campagne, à Pommeuse, une épave qui rouille sur un terrain est fréquente mais pas une fatalité. Profitez d\'un débarras d\'épave professionnel et écologique, avec une prise en charge complète du remorquage au recyclage. La coordination avec le propriétaire permet de caler le meilleur créneau pour l\'enlèvement. Les modalités d\'accès à Pommeuse sont vérifiées avant le départ pour une intervention réussie.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Pommeuse, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Après l\'enlèvement, un professionnel partenaire prend le relais pour les opérations ultérieures. La conformité du traitement est assurée par le respect des procédures en vigueur. Les différents rôles sont répartis entre les professionnels intervenant dans le processus.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Pommeuse',
      intro: 'Que votre épave soit à Pommeuse dans un parking, une rue ou un garage, nous l\'enlevons. Notre logistique à Pommeuse est dimensionnée pour répondre à chaque type de demande. Notre équipe couvre le secteur postal 77515 avec une logistique dédiée. Les habitants de Pommeuse peuvent compter sur notre présence régulière dans ce code postal. Au-delà des limites de Pommeuse, notre service continue dans les secteurs alentour.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Pommeuse',
      questions: [
        { q: 'L\'intervention à Pommeuse est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Pommeuse sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Pommeuse',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
