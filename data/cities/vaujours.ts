import { PageData } from '../types'

export const vaujoursData: PageData = {
  slug: 'vaujours',
  entityType: 'City',
  metaTitle: 'Épaviste Vaujours (93410) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Vaujours (93410). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
  relatedServicesSlugs: [
    'enlevement-epave-parking-souterrain',
    'enlevement-voiture-en-panne',
    'enlevement-voiture-sans-carte-grise'
  ],
  relatedCitiesSlugs: [
    'enlevement-epave-seine-saint-denis'
  ],
  blocks: [
    {
      type: 'Hero',
      title: 'Solution enlèvement d\'épave sans frais à Vaujours (93410) pour Vaujours',
      subtitle: 'Vaujours (93410) : votre épaviste gratuit pour l\'enlèvement de votre véhicule hors d\'usage à Vaujours.',
      badge: 'Vaujours (93410)',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Vaujours',
      intro: 'Le service d\'enlèvement gratuit couvre l\'intégralité de la commune de Vaujours. Un créneau d\'enlèvement à Vaujours vous est proposé selon vos disponibilités. Les demandes pour le 93410 de Vaujours sont traitées en priorité par notre équipe qui connaît bien ce secteur. Si vous résidez près de Vaujours, notre service d\'enlèvement est également accessible.',
      zones: [
        { name: 'Zones pavillonnaires', delay: 'Sous 24h', specificities: 'Enlèvement au domicile ou dans votre allée privée.' },
        { name: 'Centre-ville & Axes principaux', delay: '24h', specificities: 'Retrait d\'épave sur voie publique.' },
        { name: 'Secteurs d\'activité', delay: 'Sur RDV', specificities: 'Intervention en zone commerciale.' }
      ],
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Vaujours',
      content: 'Votre véhicule est immobilisé à Vaujours et vous cherchez un enlèvement gratuit et fiable ? Fini les soucis de stationnement abusif : nous récupérons votre véhicule hors d\'usage rapidement. Notre équipe à Vaujours prend en charge gratuitement votre véhicule où qu\'il soit. Les contraintes d\'accès sont identifiées en amont pour éviter les mauvaises surprises. Les spécificités de circulation à Vaujours sont intégrées dans notre planning.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Vaujours, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-Saint-Denis sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'La continuité du parcours est assurée par un partenaire spécialisé dans la filière concernée. Le suivi réglementaire est confié aux professionnels spécialisés dans cette prise en charge. Chaque opérateur prend en charge la phase pour laquelle il dispose des compétences requises.',
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Vaujours',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Intervenez-vous rapidement en cas de véhicule gênant la circulation à Vaujours ?', a: 'Oui, nous priorisons les situations urgentes en petite couronne. Contactez-nous pour un créneau adapté.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Vaujours est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Vaujours sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Vaujours',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
