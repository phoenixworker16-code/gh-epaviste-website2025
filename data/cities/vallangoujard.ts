import { PageData } from '../types'

export const vallangoujardData: PageData = {
  slug: 'vallangoujard',
  entityType: 'City',
  metaTitle: 'Épaviste Vallangoujard (95810) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Vallangoujard (95810). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Épaviste professionnel à Vallangoujard (95810) pour votre VHU à Vallangoujard',
      subtitle: 'Enlèvement gratuit VHU à Vallangoujard (95810). Prenez rendez-vous, on s\'occupe de votre épave à Vallangoujard.',
      badge: 'Vallangoujard (95810)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Vallangoujard',
      content: 'À Vallangoujard, nous intervenons même sur les chemins non goudronnés pour retirer votre épave. Les chemins ruraux de Vallangoujard ne sont pas un obstacle pour nos équipes équipées. Nous retirons gratuitement votre épave à Vallangoujard avec du matériel adapté aux terrains ruraux. Les précisions apportées en amont aident à préparer le matériel et l\'équipe adaptés. Nous prévoyons le passage à Vallangoujard en fonction des conditions météo et d\'accès.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'L\'enlèvement d\'un véhicule hors d\'usage à Vallangoujard implique une stricte conformité réglementaire. Voici les éléments à préparer. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Val-d\'Oise sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le véhicule est conduit vers un professionnel partenaire après l\'enlèvement. Les professionnels engagés respectent le cadre légal applicable à cette catégorie de véhicules. La continuité du traitement est assurée par une organisation structurée entre les partenaires.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Vallangoujard',
      intro: 'La zone d\'intervention à Vallangoujard comprend aussi bien les voies principales que les impasses. Notre équipe adapte sa logistique à Vallangoujard en fonction de chaque configuration. La zone 95810 fait partie de notre secteur d\'intervention prioritaire. Nous organisons des passages réguliers dans cette partie de Vallangoujard. Les voies d\'accès et les secteurs autour de Vallangoujard font partie de notre circuit.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Vallangoujard',
      questions: [
        { q: 'L\'intervention à Vallangoujard est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Vallangoujard sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Vallangoujard',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
