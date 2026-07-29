import { PageData } from '../types'

export const courbevoieData: PageData = {
  slug: 'courbevoie',
  entityType: 'City',
  metaTitle: 'Épaviste Courbevoie (92400) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Courbevoie (92400). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Retrait de véhicule hors d\'usage à Courbevoie (92400) dans le 92400',
      subtitle: 'Besoin d\'un épaviste à Courbevoie (92400) ? Enlèvement gratuit de votre VHU dans tout Courbevoie.',
      badge: 'Courbevoie (92400)',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Courbevoie',
      intro: 'Notre service à Courbevoie est accessible dans tous les quartiers, du centre aux lotissements. Pour Courbevoie, l\'équipe se renseigne sur les spécificités d\'accès avant le départ. Le code postal 92400 est intégré dans notre tournée d\'enlèvement régulière à Courbevoie, ce qui garantit une intervention rapide. Les alentours de Courbevoie sont intégrés à notre tournée d\'enlèvement régulière. C\'est le cas notamment vers Levallois-Perret et La Garenne-Colombes.',
      zones: [
        { name: 'Zones pavillonnaires', delay: 'Sous 24h', specificities: 'Enlèvement au domicile ou dans votre allée privée.' },
        { name: 'Centre-ville & Axes principaux', delay: '24h', specificities: 'Retrait d\'épave sur voie publique.' },
        { name: 'Secteurs d\'activité', delay: 'Sur RDV', specificities: 'Intervention en zone commerciale.' }
      ],
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Courbevoie',
      content: 'Dans une commune dense comme Courbevoie, une épave sur la voie publique pose vite problème. Dans une commune comme Courbevoie, le stationnement est déjà tendu sans une épave en plus. L\'intervention à Courbevoie est réalisée avec les équipements appropriés à la circulation locale. Un échange téléphonique permet de finaliser l\'organisation avant le passage. Notre équipe connaît les raccourcis et les horaires de circulation à Courbevoie. Notre équipe dessert notamment le secteur de Rue De Visien dans la commune.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'L\'enlèvement d\'un véhicule hors d\'usage à Courbevoie implique une stricte conformité réglementaire. Voici les éléments à préparer. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Hauts-de-Seine sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Après l\'enlèvement, le véhicule est acheminé vers une installation partenaire autorisée pour les opérations de fin de vie. Les formalités requises sont accomplies par les partenaires compétents dans la filière. Le processus est organisé de manière à respecter les obligations à chaque phase du parcours.',
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Courbevoie',
      questions: [
        { q: 'L\'intervention à Courbevoie est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Courbevoie sont entièrement gratuits.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Intervenez-vous rapidement en cas de véhicule gênant la circulation à Courbevoie ?', a: 'Oui, nous priorisons les situations urgentes en petite couronne. Contactez-nous pour un créneau adapté.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Courbevoie',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
