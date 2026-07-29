import { PageData } from '../types'

export const dugnyData: PageData = {
  slug: 'dugny',
  entityType: 'City',
  metaTitle: 'Épaviste Dugny (93440) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Dugny (93440). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Faire enlever son VHU à Dugny par un professionnel dans le 93440 de Dugny',
      subtitle: 'À Dugny (93440) : faites enlever votre épave gratuitement par des professionnels dans tout Dugny.',
      badge: 'Dugny (93440)',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Dugny',
      intro: 'Notre équipe intervient dans toute l\'agglomération de Dugny pour retirer votre épave gratuitement. Le rendez-vous pour Dugny est défini en fonction des éléments communiqués lors du contact. Notre équipe couvre le secteur postal 93440 avec une logistique dédiée. Les habitants de Dugny peuvent compter sur notre présence régulière dans ce code postal. Au-delà du centre de Dugny, les secteurs périphériques sont régulièrement visités.',
      zones: [
        { name: 'Zones pavillonnaires', delay: 'Sous 24h', specificities: 'Enlèvement au domicile ou dans votre allée privée.' },
        { name: 'Centre-ville & Axes principaux', delay: '24h', specificities: 'Retrait d\'épave sur voie publique.' },
        { name: 'Secteurs d\'activité', delay: 'Sur RDV', specificities: 'Intervention en zone commerciale.' }
      ],
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Dugny',
      content: 'Faites enlever gratuitement votre épave à Dugny avant qu\'elle ne cause des problèmes de voisinage. Une épave dans une rue de Dugny peut rapidement faire l\'objet d\'une plainte de voisinage. Le retrait à Dugny bénéficie de notre expérience des interventions en milieu dense. Les informations transmises permettent d\'anticiper les besoins techniques et humains. Notre expérience de la banlieue dense garantit un enlèvement rapide à Dugny.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Dugny, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-Saint-Denis sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Un opérateur partenaire réceptionne le véhicule pour les opérations suivantes. La prise en charge respecte les dispositions réglementaires applicables aux véhicules hors d\'usage. Le partenaire compétent prend ensuite le relais pour les étapes qui relèvent de sa responsabilité.',
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Dugny',
      questions: [
        { q: 'L\'intervention à Dugny est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Dugny sont entièrement gratuits.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Intervenez-vous rapidement en cas de véhicule gênant la circulation à Dugny ?', a: 'Oui, nous priorisons les situations urgentes en petite couronne. Contactez-nous pour un créneau adapté.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Dugny',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
