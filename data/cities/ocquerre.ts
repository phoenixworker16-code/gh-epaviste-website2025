import { PageData } from '../types'

export const ocquerreData: PageData = {
  slug: 'ocquerre',
  entityType: 'City',
  metaTitle: 'Épaviste Ocquerre (77440) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Ocquerre (77440). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Service épaviste Ocquerre (77440) - Intervention rapide à Ocquerre',
      subtitle: 'Débarras auto Ocquerre (77440) : notre équipe enlève gratuitement votre épave à Ocquerre.',
      badge: 'Ocquerre (77440)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Ocquerre',
      content: 'Un véhicule hors d\'usage oublié dans votre propriété à Ocquerre peut être retiré sans frais. Les zones rurales autour de Ocquerre sont intégralement couvertes par notre service. Les exploitants agricoles de Ocquerre nous confient leurs épaves pour un traitement réglementaire. Les informations transmises permettent d\'anticiper les besoins techniques et humains. L\'intervention à Ocquerre est préparée avec soin pour garantir votre satisfaction.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Ocquerre, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le véhicule est dirigé vers un prestataire spécialisé dans le traitement des véhicules en fin de vie. La traçabilité des opérations est assurée par les professionnels intervenant dans la filière. Les professionnels impliqués assurent chacun la partie du processus relevant de leur compétence.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Ocquerre',
      intro: 'Si votre épave se trouve à Ocquerre, notre équipe peut intervenir sans contrainte de zone. Pour un retrait à Ocquerre, notre équipe se tient prête à intervenir au créneau convenu. Le code postal 77440 est intégré dans notre tournée d\'enlèvement régulière à Ocquerre, ce qui garantit une intervention rapide. Les alentours de Ocquerre sont intégrés à notre tournée d\'enlèvement régulière.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Ocquerre',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Ocquerre est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Ocquerre sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Ocquerre',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
