import { PageData } from '../types'

export const mandresLesRosesData: PageData = {
  slug: 'mandres-les-roses',
  entityType: 'City',
  metaTitle: 'Épaviste Mandres-les-Roses (94520) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Mandres-les-Roses (94520). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Service épaviste Mandres-les-Roses (94520) - Intervention rapide à Mandres-les-Roses',
      subtitle: 'Enlèvement d\'épave Mandres-les-Roses (94520) : service rapide et gratuit pour votre VHU dans tout Mandres-les-Roses.',
      badge: 'Mandres-les-Roses (94520)',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Mandres-les-Roses',
      intro: 'La tournée de nos dépanneuses couvre Mandres-les-Roses en intégralité chaque semaine. Notre équipe adapte sa logistique à Mandres-les-Roses en fonction de chaque configuration. Notre équipe couvre le secteur postal 94520 avec une logistique dédiée. Les habitants de Mandres-les-Roses peuvent compter sur notre présence régulière dans ce code postal. À partir de Mandres-les-Roses, nos dépanneuses rayonnent dans un large secteur géographique.',
      zones: [
        { name: 'Zones pavillonnaires', delay: 'Sous 24h', specificities: 'Enlèvement au domicile ou dans votre allée privée.' },
        { name: 'Centre-ville & Axes principaux', delay: '24h', specificities: 'Retrait d\'épave sur voie publique.' },
        { name: 'Secteurs d\'activité', delay: 'Sur RDV', specificities: 'Intervention en zone commerciale.' }
      ],
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Mandres-les-Roses',
      content: 'Faites enlever gratuitement votre épave à Mandres-les-Roses avant qu\'elle ne cause des problèmes de voisinage. À Mandres-les-Roses, nous intervenons dans tous les quartiers, même les plus denses. Nous acheminons votre véhicule hors d\'usage vers un centre partenaire agréé pour un traitement conforme. Les informations recueillies permettent de dimensionner l\'intervention au plus juste. Le professionnel confirme les détails pratiques avant de se rendre sur place à Mandres-les-Roses.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Mandres-les-Roses, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Val-de-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le véhicule est conduit vers un professionnel partenaire après l\'enlèvement. Les étapes ultérieures sont réalisées par les professionnels compétents, conformément au cadre applicable. L\'articulation entre les intervenants est définie pour assurer un suivi continu du dossier.',
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Mandres-les-Roses',
      questions: [
        { q: 'L\'intervention à Mandres-les-Roses est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Mandres-les-Roses sont entièrement gratuits.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Intervenez-vous rapidement en cas de véhicule gênant la circulation à Mandres-les-Roses ?', a: 'Oui, nous priorisons les situations urgentes en petite couronne. Contactez-nous pour un créneau adapté.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Mandres-les-Roses',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
