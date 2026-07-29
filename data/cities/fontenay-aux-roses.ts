import { PageData } from '../types'

export const fontenayAuxRosesData: PageData = {
  slug: 'fontenay-aux-roses',
  entityType: 'City',
  metaTitle: 'Épaviste Fontenay-aux-Roses (92260) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Fontenay-aux-Roses (92260). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Faire retirer son vieux véhicule à Fontenay-aux-Roses (92260) - Enlèvement Fontenay-aux-Roses',
      subtitle: 'Débarrassez votre épave à Fontenay-aux-Roses gratuitement. Notre équipe intervient dans tout le 92260 de Fontenay-aux-Roses.',
      badge: 'Fontenay-aux-Roses (92260)',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Fontenay-aux-Roses',
      intro: 'Les propriétaires à Fontenay-aux-Roses peuvent compter sur notre service dans toute la commune. Notre équipe adapte sa logistique à Fontenay-aux-Roses en fonction de chaque configuration. Notre équipe couvre le secteur postal 92260 avec une logistique dédiée. Les habitants de Fontenay-aux-Roses peuvent compter sur notre présence régulière dans ce code postal. Notre dispositif autour de Fontenay-aux-Roses permet d\'intervenir dans une zone élargie.',
      zones: [
        { name: 'Zones pavillonnaires', delay: 'Sous 24h', specificities: 'Enlèvement au domicile ou dans votre allée privée.' },
        { name: 'Centre-ville & Axes principaux', delay: '24h', specificities: 'Retrait d\'épave sur voie publique.' },
        { name: 'Secteurs d\'activité', delay: 'Sur RDV', specificities: 'Intervention en zone commerciale.' }
      ],
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Fontenay-aux-Roses',
      content: 'À Fontenay-aux-Roses, le stationnement est déjà difficile sans une épave qui occupe une place. À Fontenay-aux-Roses, faire enlever son épave gratuitement, c\'est aussi un geste pour la collectivité. À Fontenay-aux-Roses, l\'enlèvement gratuit est réalisé par des professionnels de la petite couronne. La demande permet de préciser les contraintes de stationnement et les documents disponibles avant l\'intervention. Notre équipe connaît les raccourcis et les horaires de circulation à Fontenay-aux-Roses.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Fontenay-aux-Roses soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Hauts-de-Seine sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'La prestation prévoit l\'orientation du véhicule vers un interlocuteur compétent pour la fin de vie. Les étapes de traitement sont encadrées par les dispositions légales en vigueur. L\'articulation entre les intervenants est définie pour assurer un suivi continu du dossier.',
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Fontenay-aux-Roses',
      questions: [
        { q: 'L\'intervention à Fontenay-aux-Roses est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Fontenay-aux-Roses sont entièrement gratuits.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Intervenez-vous rapidement en cas de véhicule gênant la circulation à Fontenay-aux-Roses ?', a: 'Oui, nous priorisons les situations urgentes en petite couronne. Contactez-nous pour un créneau adapté.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Fontenay-aux-Roses',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
