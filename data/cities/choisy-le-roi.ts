import { PageData } from '../types'

export const choisyLeRoiData: PageData = {
  slug: 'choisy-le-roi',
  entityType: 'City',
  metaTitle: 'Épaviste Choisy-le-Roi (94600) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Choisy-le-Roi (94600). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
  relatedServicesSlugs: [
    'enlevement-epave-parking-souterrain',
    'enlevement-voiture-en-panne',
    'enlevement-voiture-sans-carte-grise'
  ],
  relatedCitiesSlugs: [
    'val-de-marne'
  ],
  blocks: [
    {
      type: 'Hero',
      title: 'Retrait d\'épave professionnel à Choisy-le-Roi (94600) pour votre VHU à Choisy-le-Roi',
      subtitle: 'Service de retrait d\'épave à Choisy-le-Roi (94600). Gratuit et sans contrainte pour les habitants de Choisy-le-Roi.',
      badge: 'Choisy-le-Roi (94600)',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Choisy-le-Roi',
      intro: 'L\'enlèvement à Choisy-le-Roi est organisé sans considération de zone ou de quartier. Le rendez-vous pour Choisy-le-Roi est défini en fonction des éléments communiqués lors du contact. Les demandes pour le 94600 de Choisy-le-Roi sont traitées en priorité par notre équipe qui connaît bien ce secteur. Au-delà du territoire de Choisy-le-Roi, les secteurs périphériques sont également couverts.',
      zones: [
        { name: 'Zones pavillonnaires', delay: 'Sous 24h', specificities: 'Enlèvement au domicile ou dans votre allée privée.' },
        { name: 'Centre-ville & Axes principaux', delay: '24h', specificities: 'Retrait d\'épave sur voie publique.' },
        { name: 'Secteurs d\'activité', delay: 'Sur RDV', specificities: 'Intervention en zone commerciale.' }
      ],
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Choisy-le-Roi',
      content: 'Dans une commune dense comme Choisy-le-Roi, une épave gêne rapidement la circulation quotidienne. La densité de population à Choisy-le-Roi rend chaque mètre carré de voirie précieux. À Choisy-le-Roi, le service gratuit inclut la prise en charge dans les zones piétonnes et les ruelles. La préparation du retrait inclut une vérification des accès et des contraintes éventuelles. Les détails du passage sont confirmés avant l\'intervention pour une coordination optimale.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'L\'enlèvement d\'un véhicule hors d\'usage à Choisy-le-Roi implique une stricte conformité réglementaire. Voici les éléments à préparer. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Val-de-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le véhicule est orienté vers un opérateur de la filière autorisée dès la fin de l\'enlèvement. Le traitement est effectué dans le respect des obligations environnementales en vigueur. La transition entre les intervenants est organisée pour garantir la continuité du service.',
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Choisy-le-Roi',
      questions: [
        { q: 'L\'intervention à Choisy-le-Roi est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Choisy-le-Roi sont entièrement gratuits.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Intervenez-vous rapidement en cas de véhicule gênant la circulation à Choisy-le-Roi ?', a: 'Oui, nous priorisons les situations urgentes en petite couronne. Contactez-nous pour un créneau adapté.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Choisy-le-Roi',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
