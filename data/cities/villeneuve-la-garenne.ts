import { PageData } from '../types'

export const villeneuveLaGarenneData: PageData = {
  slug: 'villeneuve-la-garenne',
  entityType: 'City',
  metaTitle: 'Épaviste Villeneuve-la-Garenne (92390) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Villeneuve-la-Garenne (92390). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Débarrassez votre épave à Villeneuve-la-Garenne (92390) gratuitement dans tout Villeneuve-la-Garenne',
      subtitle: 'Épaviste gratuit à Villeneuve-la-Garenne (92390) : intervention dans tout Villeneuve-la-Garenne pour votre véhicule hors d\'usage.',
      badge: 'Villeneuve-la-Garenne (92390)',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Villeneuve-la-Garenne',
      intro: 'Notre périmètre d\'enlèvement inclut l\'ensemble de Villeneuve-la-Garenne sans limitation géographique. La préparation du retrait à Villeneuve-la-Garenne inclut une évaluation des conditions d\'intervention. Notre service dessert quotidiennement le secteur 92390 de Villeneuve-la-Garenne avec des équipes spécialisées dans l\'enlèvement d\'épaves. Nous étendons notre intervention au-delà de Villeneuve-la-Garenne pour couvrir un large secteur.',
      zones: [
        { name: 'Zones pavillonnaires', delay: 'Sous 24h', specificities: 'Enlèvement au domicile ou dans votre allée privée.' },
        { name: 'Centre-ville & Axes principaux', delay: '24h', specificities: 'Retrait d\'épave sur voie publique.' },
        { name: 'Secteurs d\'activité', delay: 'Sur RDV', specificities: 'Intervention en zone commerciale.' }
      ],
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Villeneuve-la-Garenne',
      content: 'Votre véhicule immobilisé à Villeneuve-la-Garenne peut être retiré rapidement par notre équipe. À Villeneuve-la-Garenne, faire enlever son épave gratuitement, c\'est aussi un geste pour la collectivité. Nous disposons à Villeneuve-la-Garenne de dépanneuses adaptées aux rues étroites et au trafic dense. La demande permet d\'identifier les informations nécessaires avant le déplacement. Notre équipe connaît les raccourcis et les horaires de circulation à Villeneuve-la-Garenne.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Villeneuve-la-Garenne soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Hauts-de-Seine sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'L\'enlèvement est suivi d\'un acheminement vers une structure partenaire autorisée à recevoir ce type de véhicule. Le dispositif réglementaire est suivi par les différents opérateurs tout au long du parcours. Le propriétaire conserve ainsi une information claire sur le parcours réglementaire du véhicule.',
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Villeneuve-la-Garenne',
      questions: [
        { q: 'L\'intervention à Villeneuve-la-Garenne est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Villeneuve-la-Garenne sont entièrement gratuits.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Intervenez-vous rapidement en cas de véhicule gênant la circulation à Villeneuve-la-Garenne ?', a: 'Oui, nous priorisons les situations urgentes en petite couronne. Contactez-nous pour un créneau adapté.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Villeneuve-la-Garenne',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
