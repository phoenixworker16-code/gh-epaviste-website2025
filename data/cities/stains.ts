import { PageData } from '../types'

export const stainsData: PageData = {
  slug: 'stains',
  entityType: 'City',
  metaTitle: 'Épaviste Stains (93240) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Stains (93240). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Débarrassez-vous de votre épave à Stains gratuitement autour de Stains',
      subtitle: 'Votre épave à Stains retirée gratuitement. Intervention rapide dans le 93240 à Stains.',
      badge: 'Stains (93240)',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Stains',
      intro: 'L\'enlèvement à Stains est organisé sans considération de zone ou de quartier. Pour un retrait à Stains, le professionnel se prépare en fonction des indications reçues. Les habitants du 93240 à Stains bénéficient d\'un passage régulier de nos équipes et d\'une prise en charge adaptée à ce secteur. Les voies d\'accès et les secteurs autour de Stains font partie de notre circuit.',
      zones: [
        { name: 'Zones pavillonnaires', delay: 'Sous 24h', specificities: 'Enlèvement au domicile ou dans votre allée privée.' },
        { name: 'Centre-ville & Axes principaux', delay: '24h', specificities: 'Retrait d\'épave sur voie publique.' },
        { name: 'Secteurs d\'activité', delay: 'Sur RDV', specificities: 'Intervention en zone commerciale.' }
      ],
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Stains',
      content: 'Faites enlever gratuitement votre épave à Stains avant qu\'elle ne cause des problèmes de voisinage. Un véhicule hors d\'usage à Stains attire l\'attention et peut dégrader l\'image du quartier. À Stains, le service gratuit inclut la prise en charge dans les zones piétonnes et les ruelles. Un échange préalable permet de prévoir le matériel approprié et le créneau de passage. Les contraintes urbaines de Stains sont gérées par notre équipe expérimentée.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Stains soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-Saint-Denis sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le véhicule est acheminé vers un professionnel autorisé à intervenir dans cette filière spécifique. Le cadre réglementaire est respecté à chaque étape par les professionnels habilités. La coordination des professionnels garantit l\'efficacité du traitement réglementaire.',
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Stains',
      questions: [
        { q: 'L\'intervention à Stains est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Stains sont entièrement gratuits.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Intervenez-vous rapidement en cas de véhicule gênant la circulation à Stains ?', a: 'Oui, nous priorisons les situations urgentes en petite couronne. Contactez-nous pour un créneau adapté.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Stains',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
