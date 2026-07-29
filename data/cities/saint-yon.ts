import { PageData } from '../types'

export const saintYonData: PageData = {
  slug: 'saint-yon',
  entityType: 'City',
  metaTitle: 'Épaviste Saint-Yon (91650) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Saint-Yon (91650). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
  relatedServicesSlugs: [
    'enlevement-epave-parking-souterrain',
    'enlevement-voiture-en-panne',
    'enlevement-voiture-sans-carte-grise'
  ],
  relatedCitiesSlugs: [
    'enlevement-epave-essonne'
  ],
  blocks: [
    {
      type: 'Hero',
      title: 'Débarras auto gratuit à Saint-Yon (91650) - Intervention dans le 91650',
      subtitle: 'Saint-Yon (91650) : votre épaviste gratuit pour l\'enlèvement de votre véhicule hors d\'usage à Saint-Yon.',
      badge: 'Saint-Yon (91650)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Saint-Yon',
      content: 'Vous habitez à Saint-Yon et une épave vous encombre depuis des mois ? Agissez gratuitement. À la campagne, à Saint-Yon, une épave qui rouille sur un terrain est fréquente mais pas une fatalité. À Saint-Yon, l\'enlèvement gratuit comprend le déplacement jusqu\'à votre propriété. La coordination avec le propriétaire permet de caler le meilleur créneau pour l\'enlèvement. L\'intervention à Saint-Yon est préparée avec soin pour garantir votre satisfaction.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Saint-Yon soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Essonne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le transfert est assuré vers un exploitant partenaire autorisé à recevoir les véhicules hors d\'usage. Les formalités réglementaires sont accomplies dans les conditions prévues par la législation. L\'organisation prévoit une articulation claire entre les différentes étapes du processus.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Saint-Yon',
      intro: 'Le service d\'enlèvement gratuit couvre l\'intégralité de la commune de Saint-Yon. Pour Saint-Yon, l\'équipe se renseigne sur les spécificités d\'accès avant le départ. Le code postal 91650 est intégré dans notre tournée d\'enlèvement régulière à Saint-Yon, ce qui garantit une intervention rapide. Au-delà de Saint-Yon, nous intervenons aussi dans les secteurs voisins.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Saint-Yon',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Saint-Yon est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Saint-Yon sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Saint-Yon',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
