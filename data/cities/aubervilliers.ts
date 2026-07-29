import { PageData } from '../types'

export const aubervilliersData: PageData = {
  slug: 'aubervilliers',
  entityType: 'City',
  metaTitle: 'Épaviste Aubervilliers (93300) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Aubervilliers (93300). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Enlèvement d\'épave gratuit à Aubervilliers (93300) - Service Aubervilliers',
      subtitle: 'Enlèvement épave Aubervilliers (93300) : service gratuit pour votre VHU dans tout le secteur de Aubervilliers.',
      badge: 'Aubervilliers (93300)',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Aubervilliers',
      intro: 'Depuis le centre historique jusqu\'aux zones d\'activité de Aubervilliers, notre service est disponible. Le planning d\'intervention à Aubervilliers intègre les contraintes horaires du propriétaire. Le code postal 93300 est intégré dans notre tournée d\'enlèvement régulière à Aubervilliers, ce qui garantit une intervention rapide. Les axes routiers menant à Aubervilliers sont régulièrement empruntés par nos équipes.',
      zones: [
        { name: 'Zones pavillonnaires', delay: 'Sous 24h', specificities: 'Enlèvement au domicile ou dans votre allée privée.' },
        { name: 'Centre-ville & Axes principaux', delay: '24h', specificities: 'Retrait d\'épave sur voie publique.' },
        { name: 'Secteurs d\'activité', delay: 'Sur RDV', specificities: 'Intervention en zone commerciale.' }
      ],
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Aubervilliers',
      content: 'Votre voiture ne roule plus à Aubervilliers et vous voulez une intervention rapide ? Nous mettons à votre disposition nos dépanneuses spécialisées dans les interventions en petite couronne. Nous organisons à Aubervilliers des passages coordonnés pour éviter les heures de pointe. Le programme d\'intervention est défini avec le propriétaire pour une prise en charge optimale. Notre équipe intervient rapidement dans toute Aubervilliers grâce à une connaissance fine du secteur.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'L\'enlèvement d\'un véhicule hors d\'usage à Aubervilliers implique une stricte conformité réglementaire. Voici les éléments à préparer. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-Saint-Denis sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Une fois le véhicule pris en charge, il est transféré vers un opérateur partenaire qualifié. Le traitement est effectué dans le respect des obligations environnementales en vigueur. La progression du véhicule dans la filière est suivie par les différents opérateurs concernés.',
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Aubervilliers',
      questions: [
        { q: 'L\'intervention à Aubervilliers est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Aubervilliers sont entièrement gratuits.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Intervenez-vous rapidement en cas de véhicule gênant la circulation à Aubervilliers ?', a: 'Oui, nous priorisons les situations urgentes en petite couronne. Contactez-nous pour un créneau adapté.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Aubervilliers',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
