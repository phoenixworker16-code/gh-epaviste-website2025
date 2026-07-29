import { PageData } from '../types'

export const neuillySurSeineData: PageData = {
  slug: 'neuilly-sur-seine',
  entityType: 'City',
  metaTitle: 'Épaviste Neuilly-sur-Seine (92200) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Neuilly-sur-Seine (92200). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
  relatedServicesSlugs: [
    'enlevement-epave-parking-souterrain',
    'enlevement-voiture-en-panne',
    'enlevement-voiture-sans-carte-grise'
  ],
  relatedCitiesSlugs: [
    'hauts-de-seine'
  ],
  blocks: [
    {
      type: 'Hero',
      title: 'Solution enlèvement épave Neuilly-sur-Seine (92200) - Prise en charge Neuilly-sur-Seine',
      subtitle: 'Débarrassez votre épave à Neuilly-sur-Seine gratuitement. Notre équipe intervient dans tout le 92200 de Neuilly-sur-Seine.',
      badge: 'Neuilly-sur-Seine (92200)',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Neuilly-sur-Seine',
      intro: 'Pour un enlèvement à Neuilly-sur-Seine, notre logistique couvre tous les secteurs sans exception. L\'intervention à Neuilly-sur-Seine est programmée après avoir pris connaissance de votre situation. Notre service dessert quotidiennement le secteur 92200 de Neuilly-sur-Seine avec des équipes spécialisées dans l\'enlèvement d\'épaves. À partir de Neuilly-sur-Seine, nos dépanneuses rayonnent dans un large secteur géographique.',
      zones: [
        { name: 'Zones pavillonnaires', delay: 'Sous 24h', specificities: 'Enlèvement au domicile ou dans votre allée privée.' },
        { name: 'Centre-ville & Axes principaux', delay: '24h', specificities: 'Retrait d\'épave sur voie publique.' },
        { name: 'Secteurs d\'activité', delay: 'Sur RDV', specificities: 'Intervention en zone commerciale.' }
      ],
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Neuilly-sur-Seine',
      content: 'À Neuilly-sur-Seine, nous retirons votre épave gratuitement où qu\'elle se trouve dans la commune. Les quartiers denses de Neuilly-sur-Seine nécessitent une intervention rapide pour éviter les nuisances. Nous acheminons votre véhicule hors d\'usage vers un centre partenaire agréé pour un traitement conforme. La préparation logistique intègre les spécificités de chaque demande d\'enlèvement. Les contraintes urbaines de Neuilly-sur-Seine sont gérées par notre équipe expérimentée.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Neuilly-sur-Seine, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Hauts-de-Seine sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le véhicule est acheminé vers un partenaire disposant des compétences pour le traitement de fin de vie. Les formalités administratives liées à la fin de vie sont accomplies par les opérateurs compétents. L\'organisation du parcours permet un suivi clair des différentes phases de traitement.',
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Neuilly-sur-Seine',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Intervenez-vous rapidement en cas de véhicule gênant la circulation à Neuilly-sur-Seine ?', a: 'Oui, nous priorisons les situations urgentes en petite couronne. Contactez-nous pour un créneau adapté.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Neuilly-sur-Seine est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Neuilly-sur-Seine sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Neuilly-sur-Seine',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
