import { PageData } from '../types'

export const montrougeData: PageData = {
  slug: 'montrouge',
  entityType: 'City',
  metaTitle: 'Épaviste Montrouge (92120) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Montrouge (92120). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Enlèvement de carcasse auto à Montrouge (92120) dans le secteur Montrouge',
      subtitle: 'Service d\'enlèvement à Montrouge (92120) : retrait gratuit de votre VHU par notre équipe à Montrouge.',
      badge: 'Montrouge (92120)',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Montrouge',
      intro: 'Que votre épave soit à Montrouge dans un parking, une rue ou un garage, nous l\'enlevons. À Montrouge, nous veillons à ce que tous les aspects logistiques soient anticipés. Notre équipe couvre le secteur postal 92120 avec une logistique dédiée. Les habitants de Montrouge peuvent compter sur notre présence régulière dans ce code postal. À partir de Montrouge, nos dépanneuses rayonnent dans un large secteur géographique.',
      zones: [
        { name: 'Zones pavillonnaires', delay: 'Sous 24h', specificities: 'Enlèvement au domicile ou dans votre allée privée.' },
        { name: 'Centre-ville & Axes principaux', delay: '24h', specificities: 'Retrait d\'épave sur voie publique.' },
        { name: 'Secteurs d\'activité', delay: 'Sur RDV', specificities: 'Intervention en zone commerciale.' }
      ],
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Montrouge',
      content: 'Faites enlever gratuitement votre épave à Montrouge avant qu\'elle ne cause des problèmes de voisinage. La densité de population à Montrouge rend chaque mètre carré de voirie précieux. À Montrouge, le service gratuit inclut la prise en charge dans les zones piétonnes et les ruelles. Le créneau d\'intervention est déterminé en tenant compte de vos disponibilités. Nous vous accompagnons dans l\'organisation de l\'enlèvement à Montrouge en toute sérénité.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Montrouge soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Hauts-de-Seine sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Après l\'intervention, la prise en charge est relayée à un partenaire technique habilité. Le traitement du véhicule suit les procédures imposées par la réglementation en vigueur. Le processus est conçu pour assurer une prise en charge complète sans rupture de service.',
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Montrouge',
      questions: [
        { q: 'L\'intervention à Montrouge est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Montrouge sont entièrement gratuits.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Intervenez-vous rapidement en cas de véhicule gênant la circulation à Montrouge ?', a: 'Oui, nous priorisons les situations urgentes en petite couronne. Contactez-nous pour un créneau adapté.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Montrouge',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
