import { PageData } from '../types'

export const lechelleData: PageData = {
  slug: 'lechelle',
  entityType: 'City',
  metaTitle: 'Épaviste Léchelle (77171) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Léchelle (77171). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Enlèvement de véhicule accidenté à Léchelle sans frais dans tout Léchelle (77171)',
      subtitle: 'Débarrassez votre épave à Léchelle (77171) sans frais. Notre service couvre tout le secteur de Léchelle.',
      badge: 'Léchelle (77171)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Léchelle',
      content: 'À Léchelle, notre équipe se déplace jusque dans les hameaux pour retirer les épaves. À Léchelle, l\'éloignement des centres urbains n\'empêche pas un enlèvement professionnel. Notre équipe à Léchelle est équipée de véhicules adaptés aux chemins ruraux. La coordination avec le propriétaire permet de caler le meilleur créneau pour l\'enlèvement. L\'équipe dépêchée à Léchelle connaît les spécificités des propriétés rurales.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Léchelle, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'L\'enlèvement est suivi d\'un acheminement vers une structure partenaire autorisée à recevoir ce type de véhicule. Le dispositif réglementaire est suivi par les différents opérateurs tout au long du parcours. Chaque phase est prise en charge par le professionnel compétent pour ce type d\'opération.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Léchelle',
      intro: 'La commune de Léchelle est intégralement couverte par notre service gratuit d\'enlèvement. Avant de se déplacer à Léchelle, l\'équipe vérifie les accès et prépare le matériel adapté. Le code postal 77171 est intégré dans notre tournée d\'enlèvement régulière à Léchelle, ce qui garantit une intervention rapide. Les voies d\'accès et les secteurs autour de Léchelle font partie de notre circuit.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Léchelle',
      questions: [
        { q: 'L\'intervention à Léchelle est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Léchelle sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Léchelle',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
