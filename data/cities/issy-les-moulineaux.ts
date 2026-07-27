import { PageData } from '../types'

export const issyLesMoulineauxData: PageData = {
  slug: 'issy-les-moulineaux',
  entityType: 'City',
  metaTitle: 'Épaviste Issy-les-Moulineaux (92130) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Issy-les-Moulineaux (92130). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
  relatedServicesSlugs: [
    'enlevement-epave-parking-souterrain',
    'enlevement-voiture-en-panne',
    'enlevement-voiture-sans-carte-grise'
  ],
  relatedCitiesSlugs: [
    'enlevement-epave-hauts-de-seine'
  ],
  blocks: [
    {
      type: 'Hero',
      title: 'Solution enlèvement épave Issy-les-Moulineaux (92130) - Prise en charge Issy-les-Moulineaux',
      subtitle: 'Enlèvement gratuit VHU à Issy-les-Moulineaux (92130). Prenez rendez-vous, on s\'occupe de votre épave à Issy-les-Moulineaux.',
      badge: 'Issy-les-Moulineaux (92130)',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Issy-les-Moulineaux',
      intro: 'À Issy-les-Moulineaux, nous pouvons retirer votre véhicule hors d\'usage en tout point du territoire. Avant de se déplacer à Issy-les-Moulineaux, l\'équipe vérifie les accès et prépare le matériel adapté. La zone 92130 fait partie de notre secteur d\'intervention prioritaire. Nous organisons des passages réguliers dans cette partie de Issy-les-Moulineaux. Au départ de Issy-les-Moulineaux, nos équipes couvrent un vaste secteur géographique.',
      zones: [
        { name: 'Zones pavillonnaires', delay: 'Sous 24h', specificities: 'Enlèvement au domicile ou dans votre allée privée.' },
        { name: 'Centre-ville & Axes principaux', delay: '24h', specificities: 'Retrait d\'épave sur voie publique.' },
        { name: 'Secteurs d\'activité', delay: 'Sur RDV', specificities: 'Intervention en zone commerciale.' }
      ],
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Issy-les-Moulineaux',
      content: 'Nous organisons l\'enlèvement gratuit de votre véhicule à Issy-les-Moulineaux sur simple demande. Dans une commune dense comme Issy-les-Moulineaux, chaque mètre de voirie compte pour le stationnement. Le retrait gratuit de votre épave à Issy-les-Moulineaux est assuré par des professionnels expérimentés. Le programme d\'intervention est défini avec le propriétaire pour une prise en charge optimale. Notre connaissance de la petite couronne garantit une intervention rapide à Issy-les-Moulineaux. Le secteur de Rue de la Défense est couvert comme l\'ensemble de la commune.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'L\'enlèvement d\'un véhicule hors d\'usage à Issy-les-Moulineaux implique une stricte conformité réglementaire. Voici les éléments à préparer. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Hauts-de-Seine sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le véhicule est acheminé vers un professionnel autorisé à intervenir dans cette filière spécifique. La traçabilité du parcours est assurée conformément aux obligations en vigueur. Les différents opérateurs interviennent en synergie pour la réalisation des opérations requises.',
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Issy-les-Moulineaux',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Intervenez-vous rapidement en cas de véhicule gênant la circulation à Issy-les-Moulineaux ?', a: 'Oui, nous priorisons les situations urgentes en petite couronne. Contactez-nous pour un créneau adapté.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Issy-les-Moulineaux est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Issy-les-Moulineaux sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Issy-les-Moulineaux',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
