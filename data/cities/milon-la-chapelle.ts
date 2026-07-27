import { PageData } from '../types'

export const milonLaChapelleData: PageData = {
  slug: 'milon-la-chapelle',
  entityType: 'City',
  metaTitle: 'Épaviste Milon-la-Chapelle (78470) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Milon-la-Chapelle (78470). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
  relatedServicesSlugs: [
    'enlevement-epave-parking-souterrain',
    'enlevement-voiture-en-panne',
    'enlevement-voiture-sans-carte-grise'
  ],
  relatedCitiesSlugs: [
    'enlevement-epave-yvelines'
  ],
  blocks: [
    {
      type: 'Hero',
      title: 'Enlèvement voiture hors d\'usage Milon-la-Chapelle (78470) - Service Milon-la-Chapelle',
      subtitle: 'Milon-la-Chapelle (78470) : enlèvement gratuit de votre épave à Milon-la-Chapelle par notre équipe.',
      badge: 'Milon-la-Chapelle (78470)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Milon-la-Chapelle',
      content: 'Nous venons à Milon-la-Chapelle avec du matériel adapté aux accès ruraux pour l\'enlèvement gratuit. À Milon-la-Chapelle, l\'éloignement des centres urbains n\'empêche pas un enlèvement professionnel. Notre service rural à Milon-la-Chapelle garantit un retrait professionnel sans contrainte de distance. La demande permet de préciser les contraintes de stationnement et les documents disponibles avant l\'intervention. Notre équipe à Milon-la-Chapelle est équipée de véhicules adaptés aux chemins ruraux.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Milon-la-Chapelle, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Yvelines sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Une fois retiré, le véhicule est orienté vers une installation partenaire compétente dans la filière de recyclage. Les professionnels intervenants garantissent l\'application des règles en matière de recyclage. Le parcours du véhicule est défini dès la prise de rendez-vous avec les professionnels concernés.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Milon-la-Chapelle',
      intro: 'La commune de Milon-la-Chapelle est intégralement couverte par notre service gratuit d\'enlèvement. Les particularités de l\'emplacement à Milon-la-Chapelle sont prises en compte dans l\'organisation. Le code postal 78470 est intégré dans notre tournée d\'enlèvement régulière à Milon-la-Chapelle, ce qui garantit une intervention rapide. Les zones industrielles et résidentielles autour de Milon-la-Chapelle sont comprises.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Milon-la-Chapelle',
      questions: [
        { q: 'L\'intervention à Milon-la-Chapelle est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Milon-la-Chapelle sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Milon-la-Chapelle',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
