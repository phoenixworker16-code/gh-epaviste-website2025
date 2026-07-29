import { PageData } from '../types'

export const rueilMalmaisonData: PageData = {
  slug: 'rueil-malmaison',
  entityType: 'City',
  metaTitle: 'Épaviste Rueil-Malmaison (92500) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Rueil-Malmaison (92500). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
  relatedServicesSlugs: [
    'enlevement-epave-parking-souterrain',
    'enlevement-voiture-en-panne',
    'enlevement-voiture-sans-carte-grise'
  ],
  relatedCitiesSlugs: [
    'hauts-de-seine'
  ],
  blocks: [
    {
      type: 'Hero',
      title: 'Débarras automobile Rueil-Malmaison (92500) dans toute l\'agglomération Rueil-Malmaison',
      subtitle: 'Pour votre épave à Rueil-Malmaison (92500) : intervention gratuite et professionnelle dans tout Rueil-Malmaison.',
      badge: 'Rueil-Malmaison (92500)',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Rueil-Malmaison',
      intro: 'Notre service à Rueil-Malmaison est accessible dans tous les quartiers, du centre aux lotissements. Le passage à Rueil-Malmaison est planifié de manière à optimiser le temps d\'intervention. Notre équipe couvre le secteur postal 92500 avec une logistique dédiée. Les habitants de Rueil-Malmaison peuvent compter sur notre présence régulière dans ce code postal. À partir de Rueil-Malmaison, nos dépanneuses rayonnent dans un large secteur géographique.',
      zones: [
        { name: 'Zones pavillonnaires', delay: 'Sous 24h', specificities: 'Enlèvement au domicile ou dans votre allée privée.' },
        { name: 'Centre-ville & Axes principaux', delay: '24h', specificities: 'Retrait d\'épave sur voie publique.' },
        { name: 'Secteurs d\'activité', delay: 'Sur RDV', specificities: 'Intervention en zone commerciale.' }
      ],
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Rueil-Malmaison',
      content: 'La densité de circulation à Rueil-Malmaison exige une solution professionnelle pour l\'enlèvement de votre épave. À Rueil-Malmaison, nous intervenons dans tous les quartiers, même les plus denses. À Rueil-Malmaison, nous garantissons un service d\'enlèvement gratuit et efficace dans toute la commune. Les informations recueillies permettent de dimensionner l\'intervention au plus juste. L\'intervention à Rueil-Malmaison est organisée pour être efficace malgré la densité urbaine.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Rueil-Malmaison soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Hauts-de-Seine sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'La prise en charge prévoit le transfert du véhicule vers un opérateur partenaire habilité à traiter les véhicules hors d\'usage. Les professionnels habilités assurent le respect des procédures imposées par la réglementation. Les étapes sont orchestrées pour assurer une transition fluide entre les différents opérateurs.',
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Rueil-Malmaison',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Intervenez-vous rapidement en cas de véhicule gênant la circulation à Rueil-Malmaison ?', a: 'Oui, nous priorisons les situations urgentes en petite couronne. Contactez-nous pour un créneau adapté.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Rueil-Malmaison est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Rueil-Malmaison sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Rueil-Malmaison',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
