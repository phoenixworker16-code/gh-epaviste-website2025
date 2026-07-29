import { PageData } from '../types'

export const noisyLeSecData: PageData = {
  slug: 'noisy-le-sec',
  entityType: 'City',
  metaTitle: 'Épaviste Noisy-le-Sec (93130) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Noisy-le-Sec (93130). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
  relatedServicesSlugs: [
    'enlevement-epave-parking-souterrain',
    'enlevement-voiture-en-panne',
    'enlevement-voiture-sans-carte-grise'
  ],
  relatedCitiesSlugs: [
    'seine-saint-denis'
  ],
  blocks: [
    {
      type: 'Hero',
      title: 'Enlèvement de carcasse auto à Noisy-le-Sec (93130) dans le secteur Noisy-le-Sec',
      subtitle: 'À Noisy-le-Sec (93130) : solution complète d\'enlèvement d\'épave gratuite pour les habitants de Noisy-le-Sec.',
      badge: 'Noisy-le-Sec (93130)',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Noisy-le-Sec',
      intro: 'Notre dispositif à Noisy-le-Sec assure un enlèvement gratuit dans tous les secteurs sans exception. L\'équipe dépêchée à Noisy-le-Sec connaît à l\'avance les conditions d\'accès au véhicule. Pour le secteur 93130, nos équipes interviennent régulièrement et connaissent parfaitement les accès et particularités de Noisy-le-Sec. Les alentours de Noisy-le-Sec sont intégrés à notre tournée d\'enlèvement régulière.',
      zones: [
        { name: 'Zones pavillonnaires', delay: 'Sous 24h', specificities: 'Enlèvement au domicile ou dans votre allée privée.' },
        { name: 'Centre-ville & Axes principaux', delay: '24h', specificities: 'Retrait d\'épave sur voie publique.' },
        { name: 'Secteurs d\'activité', delay: 'Sur RDV', specificities: 'Intervention en zone commerciale.' }
      ],
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Noisy-le-Sec',
      content: 'Vous avez un véhicule hors d\'usage dans une rue de Noisy-le-Sec et vous voulez agir vite ? Dans une commune dense comme Noisy-le-Sec, chaque mètre de voirie compte pour le stationnement. Nous disposons à Noisy-le-Sec de dépanneuses adaptées aux rues étroites et au trafic dense. Le dispositif logistique est adapté à chaque situation pour garantir une intervention de qualité. Notre présence régulière à Noisy-le-Sec nous permet d\'intervenir en toute connaissance du terrain.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Noisy-le-Sec soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-Saint-Denis sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le véhicule est conduit vers un professionnel partenaire après l\'enlèvement. Le partenaire assure les formalités et l\'orientation du véhicule vers les filières réglementaires appropriées. Les professionnels habilités prennent le relais selon le planning établi lors de l\'enlèvement.',
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Noisy-le-Sec',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Intervenez-vous rapidement en cas de véhicule gênant la circulation à Noisy-le-Sec ?', a: 'Oui, nous priorisons les situations urgentes en petite couronne. Contactez-nous pour un créneau adapté.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Noisy-le-Sec est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Noisy-le-Sec sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Noisy-le-Sec',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
