import { PageData } from '../types'

export const saintOuenSurSeineData: PageData = {
  slug: 'saint-ouen-sur-seine',
  entityType: 'City',
  metaTitle: 'Épaviste Saint-Ouen-sur-Seine (93400) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Saint-Ouen-sur-Seine (93400). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Débarras véhicule hors d\'usage Saint-Ouen-sur-Seine (93400) - Épaviste Saint-Ouen-sur-Seine',
      subtitle: 'Service gratuit d\'épaviste à Saint-Ouen-sur-Seine (93400). Votre véhicule hors d\'usage retiré à Saint-Ouen-sur-Seine.',
      badge: 'Saint-Ouen-sur-Seine (93400)',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Saint-Ouen-sur-Seine',
      intro: 'Les interventions à Saint-Ouen-sur-Seine sont possibles aussi bien sur voie publique que sur propriété privée. Chaque enlèvement à Saint-Ouen-sur-Seine est préparé en étudiant les accès et les contraintes locales. La zone 93400 fait partie de notre secteur d\'intervention prioritaire. Nous organisons des passages réguliers dans cette partie de Saint-Ouen-sur-Seine. Notre zone de couverture s\'articule autour de Saint-Ouen-sur-Seine et de ses environs.',
      zones: [
        { name: 'Zones pavillonnaires', delay: 'Sous 24h', specificities: 'Enlèvement au domicile ou dans votre allée privée.' },
        { name: 'Centre-ville & Axes principaux', delay: '24h', specificities: 'Retrait d\'épave sur voie publique.' },
        { name: 'Secteurs d\'activité', delay: 'Sur RDV', specificities: 'Intervention en zone commerciale.' }
      ],
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Saint-Ouen-sur-Seine',
      content: 'Notre service à Saint-Ouen-sur-Seine permet un enlèvement gratuit même dans les quartiers les plus denses. À Saint-Ouen-sur-Seine, les règles de stationnement sont strictes concernant les véhicules hors d\'usage. Nous disposons à Saint-Ouen-sur-Seine de dépanneuses adaptées aux rues étroites et au trafic dense. La demande permet d\'identifier les informations nécessaires avant le déplacement. Les modalités de l\'enlèvement sont adaptées à chaque situation dans Saint-Ouen-sur-Seine.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Saint-Ouen-sur-Seine, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-Saint-Denis sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'La suite du parcours est confiée à un partenaire habilité à intervenir sur les véhicules en fin de vie. Le recyclage est effectué dans le respect des filières autorisées et des normes applicables. Les professionnels impliqués travaillent en coordination pour la bonne fin des opérations.',
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Saint-Ouen-sur-Seine',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Intervenez-vous rapidement en cas de véhicule gênant la circulation à Saint-Ouen-sur-Seine ?', a: 'Oui, nous priorisons les situations urgentes en petite couronne. Contactez-nous pour un créneau adapté.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Saint-Ouen-sur-Seine est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Saint-Ouen-sur-Seine sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Saint-Ouen-sur-Seine',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
