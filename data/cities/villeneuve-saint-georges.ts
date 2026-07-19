import { PageData } from '../types'

export const villeneuveSaintGeorgesData: PageData = {
  slug: 'villeneuve-saint-georges',
  entityType: 'City',
  metaTitle: 'Épaviste Villeneuve-Saint-Georges (94190) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Villeneuve-Saint-Georges (94190). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Enlèvement gratuit de votre épave à Villeneuve-Saint-Georges (94190) dans tout Villeneuve-Saint-Georges',
      subtitle: 'Débarrassez votre épave à Villeneuve-Saint-Georges (94190) sans frais. Notre service couvre tout le secteur de Villeneuve-Saint-Georges.',
      badge: 'Villeneuve-Saint-Georges (94190)',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Villeneuve-Saint-Georges',
      intro: 'Que vous habitiez le centre ou la périphérie de Villeneuve-Saint-Georges, nous venons retirer votre véhicule. Pour Villeneuve-Saint-Georges, l\'équipe se renseigne sur les spécificités d\'accès avant le départ. Notre équipe couvre le secteur postal 94190 avec une logistique dédiée. Les habitants de Villeneuve-Saint-Georges peuvent compter sur notre présence régulière dans ce code postal. Notre rayonnement autour de Villeneuve-Saint-Georges s\'étend sur plusieurs kilomètres à la ronde.',
      zones: [
        { name: 'Zones pavillonnaires', delay: 'Sous 24h', specificities: 'Enlèvement au domicile ou dans votre allée privée.' },
        { name: 'Centre-ville & Axes principaux', delay: '24h', specificities: 'Retrait d\'épave sur voie publique.' },
        { name: 'Secteurs d\'activité', delay: 'Sur RDV', specificities: 'Intervention en zone commerciale.' }
      ],
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Villeneuve-Saint-Georges',
      content: 'La circulation dense à Villeneuve-Saint-Georges rend l\'enlèvement d\'épave urgent pour libérer la voie publique. Un véhicule abandonné dans Villeneuve-Saint-Georges gêne rapidement la circulation et le stationnement. Nous acheminons votre véhicule hors d\'usage vers un centre partenaire agréé pour un traitement conforme. Les informations recueillies permettent de dimensionner l\'intervention au plus juste. Nous anticipons les difficultés d\'accès à Villeneuve-Saint-Georges pour une intervention sans accroc.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Villeneuve-Saint-Georges soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Val-de-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'L\'enlèvement est suivi d\'un acheminement vers une structure partenaire autorisée à recevoir ce type de véhicule. Le recyclage est effectué dans le respect des filières autorisées et des normes applicables. L\'articulation entre les intervenants est définie pour assurer un suivi continu du dossier.',
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Villeneuve-Saint-Georges',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Intervenez-vous rapidement en cas de véhicule gênant la circulation à Villeneuve-Saint-Georges ?', a: 'Oui, nous priorisons les situations urgentes en petite couronne. Contactez-nous pour un créneau adapté.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Délivrez-vous le certificat de destruction immédiatement ?', a: 'Oui, nous vous remettons le certificat de cession pour destruction en main propre le jour de l\'enlèvement.' },
        { q: 'L\'intervention à Villeneuve-Saint-Georges est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Villeneuve-Saint-Georges sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Villeneuve-Saint-Georges',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
