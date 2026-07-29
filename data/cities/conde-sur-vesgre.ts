import { PageData } from '../types'

export const condeSurVesgreData: PageData = {
  slug: 'conde-sur-vesgre',
  entityType: 'City',
  metaTitle: 'Épaviste Condé-sur-Vesgre (78113) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Condé-sur-Vesgre (78113). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Enlèvement épave sans papier à Condé-sur-Vesgre (78113) dans tout le 78113',
      subtitle: 'Enlèvement gratuit dans le 78113 à Condé-sur-Vesgre. Débarras professionnel de votre épave à Condé-sur-Vesgre.',
      badge: 'Condé-sur-Vesgre (78113)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Condé-sur-Vesgre',
      content: 'Votre vieux véhicule à Condé-sur-Vesgre prend la poussière et vous voulez vous en séparer ? Dans les secteurs ruraux autour de Condé-sur-Vesgre, l\'accès à un service d\'enlèvement est simplifié. Nous organisons à Condé-sur-Vesgre des interventions adaptées aux grandes propriétés et aux écarts. La planification de l\'intervention s\'appuie sur les éléments communiqués lors de la demande. Notre équipe à Condé-sur-Vesgre est équipée de véhicules adaptés aux chemins ruraux.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'L\'enlèvement d\'un véhicule hors d\'usage à Condé-sur-Vesgre implique une stricte conformité réglementaire. Voici les éléments à préparer. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Yvelines sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le véhicule confié est dirigé vers un partenaire technique habilité par les autorités compétentes. L\'ensemble des opérations est réalisé dans les conditions fixées par la réglementation. L\'organisation des différentes phases permet un traitement complet dans le respect des règles.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Condé-sur-Vesgre',
      intro: 'Que votre épave soit à Condé-sur-Vesgre dans un parking, une rue ou un garage, nous l\'enlevons. À Condé-sur-Vesgre, le professionnel confirme avec vous les modalités avant de se déplacer. Les demandes pour le 78113 de Condé-sur-Vesgre sont traitées en priorité par notre équipe qui connaît bien ce secteur. Les routes et chemins autour de Condé-sur-Vesgre sont parcourus régulièrement par nos véhicules.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Condé-sur-Vesgre',
      questions: [
        { q: 'L\'intervention à Condé-sur-Vesgre est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Condé-sur-Vesgre sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Condé-sur-Vesgre',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
