import { PageData } from '../types'

export const villeneuveLeRoiData: PageData = {
  slug: 'villeneuve-le-roi',
  entityType: 'City',
  metaTitle: 'Épaviste Villeneuve-le-Roi (94290) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Villeneuve-le-Roi (94290). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
  relatedServicesSlugs: [
    'enlevement-epave-parking-souterrain',
    'enlevement-voiture-en-panne',
    'enlevement-voiture-sans-carte-grise'
  ],
  relatedCitiesSlugs: [
    'enlevement-epave-val-de-marne'
  ],
  blocks: [
    {
      type: 'Hero',
      title: 'Service d\'enlèvement 100% gratuit à Villeneuve-le-Roi (94290) pour les habitants de Villeneuve-le-Roi',
      subtitle: 'À Villeneuve-le-Roi (94290), notre équipe enlève gratuitement votre épave où qu\'elle soit.',
      badge: 'Villeneuve-le-Roi (94290)',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Villeneuve-le-Roi',
      intro: 'Nous nous déplaçons dans tous les secteurs de Villeneuve-le-Roi pour un enlèvement gratuit. L\'équipe dépêchée à Villeneuve-le-Roi connaît à l\'avance les conditions d\'accès au véhicule. La zone 94290 fait partie de notre secteur d\'intervention prioritaire. Nous organisons des passages réguliers dans cette partie de Villeneuve-le-Roi. Notre dispositif autour de Villeneuve-le-Roi permet d\'intervenir dans une zone élargie.',
      zones: [
        { name: 'Zones pavillonnaires', delay: 'Sous 24h', specificities: 'Enlèvement au domicile ou dans votre allée privée.' },
        { name: 'Centre-ville & Axes principaux', delay: '24h', specificities: 'Retrait d\'épave sur voie publique.' },
        { name: 'Secteurs d\'activité', delay: 'Sur RDV', specificities: 'Intervention en zone commerciale.' }
      ],
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Villeneuve-le-Roi',
      content: 'Une épave à Villeneuve-le-Roi attire les regards et les remarques : solutionnez cela gratuitement. Un véhicule hors d\'usage à Villeneuve-le-Roi attire l\'attention et peut dégrader l\'image du quartier. L\'organisation à Villeneuve-le-Roi permet un enlèvement sans stress, même dans les secteurs très fréquentés. Les informations recueillies permettent de dimensionner l\'intervention au plus juste. Le créneau d\'intervention est défini selon les contraintes de stationnement signalées.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Villeneuve-le-Roi, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Val-de-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Une fois retiré, le véhicule est orienté vers une installation partenaire compétente dans la filière de recyclage. Les partenaires assurent le respect des obligations liées à la prise en charge de ces véhicules. L\'articulation entre les intervenants est définie pour assurer un suivi continu du dossier.',
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Villeneuve-le-Roi',
      questions: [
        { q: 'L\'intervention à Villeneuve-le-Roi est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Villeneuve-le-Roi sont entièrement gratuits.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Intervenez-vous rapidement en cas de véhicule gênant la circulation à Villeneuve-le-Roi ?', a: 'Oui, nous priorisons les situations urgentes en petite couronne. Contactez-nous pour un créneau adapté.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Villeneuve-le-Roi',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
