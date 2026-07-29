import { PageData } from '../types'

export const charentonLePontData: PageData = {
  slug: 'charenton-le-pont',
  entityType: 'City',
  metaTitle: 'Épaviste Charenton-le-Pont (94220) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Charenton-le-Pont (94220). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Enlèvement gratuit VHU à Charenton-le-Pont (94220) par épaviste agréé dans Charenton-le-Pont',
      subtitle: 'Pour tout Charenton-le-Pont (94220) : enlèvement gratuit et professionnel de votre véhicule hors d\'usage.',
      badge: 'Charenton-le-Pont (94220)',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Charenton-le-Pont',
      intro: 'L\'enlèvement gratuit de votre épave est organisé sur l\'ensemble du territoire de Charenton-le-Pont. Les détails d\'accès pour Charenton-le-Pont sont examinés avant le départ de l\'équipe. Les demandes pour le 94220 de Charenton-le-Pont sont traitées en priorité par notre équipe qui connaît bien ce secteur. Au-delà de Charenton-le-Pont, nous intervenons aussi dans les secteurs voisins.',
      zones: [
        { name: 'Zones pavillonnaires', delay: 'Sous 24h', specificities: 'Enlèvement au domicile ou dans votre allée privée.' },
        { name: 'Centre-ville & Axes principaux', delay: '24h', specificities: 'Retrait d\'épave sur voie publique.' },
        { name: 'Secteurs d\'activité', delay: 'Sur RDV', specificities: 'Intervention en zone commerciale.' }
      ],
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Charenton-le-Pont',
      content: 'Votre véhicule immobilisé à Charenton-le-Pont peut être retiré rapidement par notre équipe. Un véhicule abandonné dans Charenton-le-Pont gêne rapidement la circulation et le stationnement. Notre équipe à Charenton-le-Pont intervient avec discrétion et efficacité dans les quartiers animés. Le dispositif logistique est adapté à chaque situation pour garantir une intervention de qualité. Notre connaissance de la petite couronne garantit une intervention rapide à Charenton-le-Pont.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Charenton-le-Pont, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Val-de-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le véhicule est acheminé vers un partenaire disposant des compétences pour le traitement de fin de vie. La traçabilité du parcours est assurée conformément aux obligations en vigueur. Les partenaires se répartissent les opérations selon leur domaine d\'expertise respectif.',
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Charenton-le-Pont',
      questions: [
        { q: 'L\'intervention à Charenton-le-Pont est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Charenton-le-Pont sont entièrement gratuits.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Intervenez-vous rapidement en cas de véhicule gênant la circulation à Charenton-le-Pont ?', a: 'Oui, nous priorisons les situations urgentes en petite couronne. Contactez-nous pour un créneau adapté.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Charenton-le-Pont',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
