import { PageData } from '../types'

export const puiseuxPontoiseData: PageData = {
  slug: 'puiseux-pontoise',
  entityType: 'City',
  metaTitle: 'Épaviste Puiseux-Pontoise (95650) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Puiseux-Pontoise (95650). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Faire retirer son vieux véhicule à Puiseux-Pontoise (95650) - Enlèvement Puiseux-Pontoise',
      subtitle: 'À Puiseux-Pontoise (95650) : solution complète d\'enlèvement d\'épave gratuite pour les habitants de Puiseux-Pontoise.',
      badge: 'Puiseux-Pontoise (95650)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Puiseux-Pontoise',
      content: 'Nous venons à Puiseux-Pontoise avec du matériel adapté aux accès ruraux pour l\'enlèvement gratuit. Même à Puiseux-Pontoise, au bout d\'un chemin, notre dépanneuse peut accéder à votre épave. Nous organisons à Puiseux-Pontoise des interventions adaptées aux grandes propriétés et aux écarts. Le rendez-vous est organisé à partir de la situation du véhicule et des conditions d\'accès indiquées. Le rendez-vous à Puiseux-Pontoise est organisé pour minimiser les déplacements superflus.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'L\'enlèvement d\'un véhicule hors d\'usage à Puiseux-Pontoise implique une stricte conformité réglementaire. Voici les éléments à préparer. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Val-d\'Oise sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le véhicule est remis à un partenaire spécialisé pour la suite de son traitement réglementaire. Les opérations réglementaires sont réalisées selon les procédures établies par les partenaires. La coordination entre les opérateurs garantit la continuité du traitement réglementaire.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Puiseux-Pontoise',
      intro: 'Même dans les secteurs les plus excentrés de Puiseux-Pontoise, nous organisons l\'enlèvement. Notre logistique à Puiseux-Pontoise est dimensionnée pour répondre à chaque type de demande. Pour le secteur 95650, nos équipes interviennent régulièrement et connaissent parfaitement les accès et particularités de Puiseux-Pontoise. Les zones industrielles et résidentielles autour de Puiseux-Pontoise sont comprises.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Puiseux-Pontoise',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Puiseux-Pontoise est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Puiseux-Pontoise sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Puiseux-Pontoise',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
