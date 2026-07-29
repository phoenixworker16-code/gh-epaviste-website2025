import { PageData } from '../types'

export const clichySousBoisData: PageData = {
  slug: 'clichy-sous-bois',
  entityType: 'City',
  metaTitle: 'Épaviste Clichy-sous-Bois (93390) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Clichy-sous-Bois (93390). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Débarras auto gratuit à Clichy-sous-Bois (93390) - Intervention dans le 93390',
      subtitle: 'Service d\'enlèvement à Clichy-sous-Bois (93390) : retrait gratuit de votre VHU par notre équipe à Clichy-sous-Bois.',
      badge: 'Clichy-sous-Bois (93390)',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Clichy-sous-Bois',
      intro: 'À Clichy-sous-Bois, nous pouvons retirer votre véhicule hors d\'usage en tout point du territoire. Pour Clichy-sous-Bois, une préparation sur mesure est réalisée selon vos indications. Le code postal 93390 est intégré dans notre tournée d\'enlèvement régulière à Clichy-sous-Bois, ce qui garantit une intervention rapide. Les communes qui entourent Clichy-sous-Bois profitent également de notre service gratuit.',
      zones: [
        { name: 'Zones pavillonnaires', delay: 'Sous 24h', specificities: 'Enlèvement au domicile ou dans votre allée privée.' },
        { name: 'Centre-ville & Axes principaux', delay: '24h', specificities: 'Retrait d\'épave sur voie publique.' },
        { name: 'Secteurs d\'activité', delay: 'Sur RDV', specificities: 'Intervention en zone commerciale.' }
      ],
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Clichy-sous-Bois',
      content: 'À Clichy-sous-Bois, la densité urbaine rend le retrapide des épaves indispensable. Nous mettons à votre disposition nos dépanneuses spécialisées dans les interventions en petite couronne. À Clichy-sous-Bois, nous intervenons rapidement, même dans les zones à circulation difficile. Les modalités logistiques sont ajustées selon les particularités de chaque intervention. Nous adaptons notre logistique à la configuration urbaine de Clichy-sous-Bois.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'L\'enlèvement d\'un véhicule hors d\'usage à Clichy-sous-Bois implique une stricte conformité réglementaire. Voici les éléments à préparer. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-Saint-Denis sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Une fois le véhicule pris en charge, il est transféré vers un opérateur partenaire qualifié. La prise en charge respecte les dispositions réglementaires applicables aux véhicules hors d\'usage. Le dispositif mis en place précise le rôle de chaque intervenant dans la chaîne de traitement.',
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Clichy-sous-Bois',
      questions: [
        { q: 'L\'intervention à Clichy-sous-Bois est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Clichy-sous-Bois sont entièrement gratuits.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Intervenez-vous rapidement en cas de véhicule gênant la circulation à Clichy-sous-Bois ?', a: 'Oui, nous priorisons les situations urgentes en petite couronne. Contactez-nous pour un créneau adapté.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Clichy-sous-Bois',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
