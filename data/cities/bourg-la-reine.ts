import { PageData } from '../types'

export const bourgLaReineData: PageData = {
  slug: 'bourg-la-reine',
  entityType: 'City',
  metaTitle: 'Épaviste Bourg-la-Reine (92340) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Bourg-la-Reine (92340). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Retrait gratuit de carcasse automobile à Bourg-la-Reine (92340) dans le 92340',
      subtitle: 'Nous enlevons les épaves à Bourg-la-Reine (92340). Prestation gratuite incluant remorquage à Bourg-la-Reine.',
      badge: 'Bourg-la-Reine (92340)',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Bourg-la-Reine',
      intro: 'Notre périmètre d\'enlèvement inclut l\'ensemble de Bourg-la-Reine sans limitation géographique. Notre équipe adapte sa logistique à Bourg-la-Reine en fonction de chaque configuration. Pour le secteur 92340, nos équipes interviennent régulièrement et connaissent parfaitement les accès et particularités de Bourg-la-Reine. Les routes et chemins autour de Bourg-la-Reine sont parcourus régulièrement par nos véhicules.',
      zones: [
        { name: 'Zones pavillonnaires', delay: 'Sous 24h', specificities: 'Enlèvement au domicile ou dans votre allée privée.' },
        { name: 'Centre-ville & Axes principaux', delay: '24h', specificities: 'Retrait d\'épave sur voie publique.' },
        { name: 'Secteurs d\'activité', delay: 'Sur RDV', specificities: 'Intervention en zone commerciale.' }
      ],
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Bourg-la-Reine',
      content: 'Une épave à Bourg-la-Reine attire les regards et les remarques : solutionnez cela gratuitement. Un véhicule abandonné dans Bourg-la-Reine gêne rapidement la circulation et le stationnement. Nous retirons gratuitement votre épave à Bourg-la-Reine dans tous les quartiers, même les plus denses. Le dispositif logistique est adapté à chaque situation pour garantir une intervention de qualité. Notre présence régulière à Bourg-la-Reine nous permet d\'intervenir en toute connaissance du terrain.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Bourg-la-Reine, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Hauts-de-Seine sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le transfert est assuré vers un exploitant partenaire autorisé à recevoir les véhicules hors d\'usage. Les opérations de fin de vie sont réalisées en conformité avec le cadre légal établi. Les responsabilités de chaque intervenant sont distinguées dès l\'organisation de l\'enlèvement.',
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Bourg-la-Reine',
      questions: [
        { q: 'L\'intervention à Bourg-la-Reine est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Bourg-la-Reine sont entièrement gratuits.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Intervenez-vous rapidement en cas de véhicule gênant la circulation à Bourg-la-Reine ?', a: 'Oui, nous priorisons les situations urgentes en petite couronne. Contactez-nous pour un créneau adapté.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Bourg-la-Reine',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
