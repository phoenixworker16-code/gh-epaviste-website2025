import { PageData } from '../types'

export const antonyData: PageData = {
  slug: 'antony',
  entityType: 'City',
  metaTitle: 'Épaviste Antony (92160) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Antony (92160). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Retrait de véhicule hors d\'usage à Antony',
      subtitle: 'Une solution organisée pour retirer un véhicule immobilisé à Antony (92160) dans le respect des démarches requises.',
      badge: 'Antony (92160)',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Antony',
      intro: 'Notre équipe intervient dans l\'ensemble de la commune de Antony pour procéder à l\'enlèvement de votre véhicule. Le rendez-vous est préparé selon le type d’accès indiqué lors de la demande. Le rendez-vous est préparé pour tenir compte de la situation déclarée par le propriétaire. Nos dépanneuses rayonnent également sur les secteurs limitrophes comme Massy (Essonne) et Bourg-la-Reine.',
      zones: [
        { name: 'Zones pavillonnaires', delay: 'Sous 24h', specificities: 'Enlèvement au domicile ou dans votre allée privée.' },
        { name: 'Axes vers Bourg-la-Reine', delay: '24h', specificities: 'Dépannage bord de route ou parking.' }
      ],
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Antony',
      content: 'La densité de circulation à Antony (92160) exige une solution professionnelle pour l\'enlèvement de votre épave. Nous mettons à votre disposition nos dépanneuses spécialisées dans les interventions en petite couronne. Fini les soucis de stationnement abusif : nous récupérons votre véhicule hors d\'usage et l\'amenons chez un broyeur agréé VHU partenaire. L’organisation du retrait tient compte de l’emplacement du véhicule, de son état et des conditions d’accès. Les informations communiquées au moment de la demande facilitent la préparation du retrait. La demande permet d’identifier les informations nécessaires avant le déplacement.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Antony soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Hauts-de-Seine sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Dépollution et Recyclage',
      content: 'Après l\'enlèvement, le véhicule est acheminé vers un centre VHU partenaire agréé. Les étapes ultérieures sont réalisées par les professionnels compétents, conformément au cadre applicable. Le transfert est organisé avec un partenaire spécialisé dans les procédures applicables aux véhicules hors d’usage.',
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Antony',
      questions: [
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Délivrez-vous le certificat de destruction immédiatement ?', a: 'Oui, nous vous remettons le certificat de cession pour destruction en main propre le jour de l\'enlèvement.' },
        { q: 'L\'intervention à Antony est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Antony sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Antony',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
