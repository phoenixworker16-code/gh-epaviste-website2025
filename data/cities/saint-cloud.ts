import { PageData } from '../types'

export const saintCloudData: PageData = {
  slug: 'saint-cloud',
  entityType: 'City',
  metaTitle: 'Épaviste Saint-Cloud (92210) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Saint-Cloud (92210). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Retrait gratuit de VHU à Saint-Cloud (92210) pour les habitants de Saint-Cloud',
      subtitle: 'Débarrassez votre épave à Saint-Cloud gratuitement. Notre équipe intervient dans tout le 92210 de Saint-Cloud.',
      badge: 'Saint-Cloud (92210)',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Saint-Cloud',
      intro: 'Nous retirons les épaves dans chaque rue et chaque quartier de Saint-Cloud. Pour Saint-Cloud, une préparation sur mesure est réalisée selon vos indications. Notre service dessert quotidiennement le secteur 92210 de Saint-Cloud avec des équipes spécialisées dans l\'enlèvement d\'épaves. Les routes et chemins autour de Saint-Cloud sont parcourus régulièrement par nos véhicules.',
      zones: [
        { name: 'Zones pavillonnaires', delay: 'Sous 24h', specificities: 'Enlèvement au domicile ou dans votre allée privée.' },
        { name: 'Centre-ville & Axes principaux', delay: '24h', specificities: 'Retrait d\'épave sur voie publique.' },
        { name: 'Secteurs d\'activité', delay: 'Sur RDV', specificities: 'Intervention en zone commerciale.' }
      ],
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Saint-Cloud',
      content: 'Nous organisons l\'enlèvement gratuit de votre véhicule à Saint-Cloud sur simple demande. Dans les quartiers populaires de Saint-Cloud, une épave gêne la circulation des piétons et des véhicules. À Saint-Cloud, le service gratuit inclut la prise en charge dans les zones piétonnes et les ruelles. Les informations transmises permettent d\'anticiper les besoins techniques et humains. Les créneaux proposés tiennent compte des heures d\'affluence à Saint-Cloud.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Saint-Cloud, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Hauts-de-Seine sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le véhicule est conduit vers un professionnel partenaire après l\'enlèvement. L\'ensemble des opérations est réalisé dans les conditions fixées par la réglementation. Chaque opérateur prend en charge la phase pour laquelle il dispose des compétences requises.',
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Saint-Cloud',
      questions: [
        { q: 'L\'intervention à Saint-Cloud est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Saint-Cloud sont entièrement gratuits.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Intervenez-vous rapidement en cas de véhicule gênant la circulation à Saint-Cloud ?', a: 'Oui, nous priorisons les situations urgentes en petite couronne. Contactez-nous pour un créneau adapté.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Saint-Cloud',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
