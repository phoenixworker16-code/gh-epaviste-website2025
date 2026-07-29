import { PageData } from '../types'

export const montignyLesCormeillesData: PageData = {
  slug: 'montigny-les-cormeilles',
  entityType: 'City',
  metaTitle: 'Épaviste Montigny-lès-Cormeilles (95370) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Montigny-lès-Cormeilles (95370). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Débarrassez votre épave à Montigny-lès-Cormeilles (95370) gratuitement dans tout Montigny-lès-Cormeilles',
      subtitle: 'Solution enlèvement épave à Montigny-lès-Cormeilles (95370). Intervention rapide et gratuite dans le 95370 de Montigny-lès-Cormeilles.',
      badge: 'Montigny-lès-Cormeilles (95370)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Montigny-lès-Cormeilles',
      content: 'Votre vieux véhicule à Montigny-lès-Cormeilles prend la poussière et vous voulez vous en séparer ? Les chemins ruraux de Montigny-lès-Cormeilles ne sont pas un obstacle pour nos équipes équipées. Nous organisons à Montigny-lès-Cormeilles des interventions adaptées aux grandes propriétés et aux écarts. Un échange téléphonique permet de finaliser l\'organisation avant le passage. Le passage est organisé pour vous offrir un enlèvement sans contrainte, même à Montigny-lès-Cormeilles.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Montigny-lès-Cormeilles, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Val-d\'Oise sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Après l\'intervention, la prise en charge est relayée à un partenaire technique habilité. Les différentes opérations sont soumises au respect des règles applicables à la filière. Le processus est organisé de manière à respecter les obligations à chaque phase du parcours.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Montigny-lès-Cormeilles',
      intro: 'Même dans les secteurs les plus excentrés de Montigny-lès-Cormeilles, nous organisons l\'enlèvement. Notre équipe à Montigny-lès-Cormeilles coordonne le passage avec vous pour une intervention sans accroc. Pour le secteur 95370, nos équipes interviennent régulièrement et connaissent parfaitement les accès et particularités de Montigny-lès-Cormeilles. À partir du secteur de Montigny-lès-Cormeilles, nous desservons également les zones avoisinantes.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Montigny-lès-Cormeilles',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Montigny-lès-Cormeilles est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Montigny-lès-Cormeilles sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Montigny-lès-Cormeilles',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
