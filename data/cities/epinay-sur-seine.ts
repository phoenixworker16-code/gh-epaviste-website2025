import { PageData } from '../types'

export const epinaySurSeineData: PageData = {
  slug: 'epinay-sur-seine',
  entityType: 'City',
  metaTitle: 'Épaviste Épinay-sur-Seine (93800) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Épinay-sur-Seine (93800). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Enlèvement gratuit VHU à Épinay-sur-Seine (93800) par épaviste agréé dans Épinay-sur-Seine',
      subtitle: 'Besoin d\'un épaviste à Épinay-sur-Seine (93800) ? Enlèvement gratuit de votre VHU dans tout Épinay-sur-Seine.',
      badge: 'Épinay-sur-Seine (93800)',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Épinay-sur-Seine',
      intro: 'Nous nous déplaçons dans tous les secteurs de Épinay-sur-Seine pour un enlèvement gratuit. La planification de l\'enlèvement à Épinay-sur-Seine s\'appuie sur les données communiquées en amont. Notre équipe couvre le secteur postal 93800 avec une logistique dédiée. Les habitants de Épinay-sur-Seine peuvent compter sur notre présence régulière dans ce code postal. Autour de Épinay-sur-Seine, notre dispositif d\'intervention s\'étend aux zones péri-urbaines.',
      zones: [
        { name: 'Zones pavillonnaires', delay: 'Sous 24h', specificities: 'Enlèvement au domicile ou dans votre allée privée.' },
        { name: 'Centre-ville & Axes principaux', delay: '24h', specificities: 'Retrait d\'épave sur voie publique.' },
        { name: 'Secteurs d\'activité', delay: 'Sur RDV', specificities: 'Intervention en zone commerciale.' }
      ],
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Épinay-sur-Seine',
      content: 'Notre service à Épinay-sur-Seine permet un enlèvement gratuit même dans les quartiers les plus denses. À Épinay-sur-Seine, les règles de stationnement sont strictes concernant les véhicules hors d\'usage. Nous retirons gratuitement votre épave à Épinay-sur-Seine dans tous les quartiers, même les plus denses. Le programme d\'intervention est défini avec le propriétaire pour une prise en charge optimale. Les détails du passage sont confirmés avant l\'intervention pour une coordination optimale.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'L\'enlèvement d\'un véhicule hors d\'usage à Épinay-sur-Seine implique une stricte conformité réglementaire. Voici les éléments à préparer. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-Saint-Denis sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'La suite des opérations est confiée à un établissement partenaire habilité dans la filière automobile. La réglementation encadrant les véhicules hors d\'usage est respectée par les intervenants agréés. Les responsabilités sont clairement établies entre les opérateurs de la chaîne de traitement.',
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Épinay-sur-Seine',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Intervenez-vous rapidement en cas de véhicule gênant la circulation à Épinay-sur-Seine ?', a: 'Oui, nous priorisons les situations urgentes en petite couronne. Contactez-nous pour un créneau adapté.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Délivrez-vous le certificat de destruction immédiatement ?', a: 'Oui, nous vous remettons le certificat de cession pour destruction en main propre le jour de l\'enlèvement.' },
        { q: 'L\'intervention à Épinay-sur-Seine est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Épinay-sur-Seine sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Épinay-sur-Seine',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
