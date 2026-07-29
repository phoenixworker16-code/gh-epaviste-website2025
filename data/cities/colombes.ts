import { PageData } from '../types'

export const colombesData: PageData = {
  slug: 'colombes',
  entityType: 'City',
  metaTitle: 'Épaviste Colombes (92700) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Colombes (92700). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Retrait de véhicule hors d\'usage à Colombes (92700) dans le 92700',
      subtitle: 'À Colombes (92700) : solution complète d\'enlèvement d\'épave gratuite pour les habitants de Colombes.',
      badge: 'Colombes (92700)',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Colombes',
      intro: 'Toutes les rues de Colombes sont couvertes, quel que soit le type d\'habitation. La logistique à Colombes est adaptée au type de véhicule et à son environnement. Les demandes pour le 92700 de Colombes sont traitées en priorité par notre équipe qui connaît bien ce secteur. Les zones industrielles et résidentielles autour de Colombes sont comprises.',
      zones: [
        { name: 'Zones pavillonnaires', delay: 'Sous 24h', specificities: 'Enlèvement au domicile ou dans votre allée privée.' },
        { name: 'Centre-ville & Axes principaux', delay: '24h', specificities: 'Retrait d\'épave sur voie publique.' },
        { name: 'Secteurs d\'activité', delay: 'Sur RDV', specificities: 'Intervention en zone commerciale.' }
      ],
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Colombes',
      content: 'Dans une commune dense comme Colombes, une épave sur la voie publique pose vite problème. Un véhicule hors d\'usage à Colombes attire l\'attention et peut dégrader l\'image du quartier. À Colombes, le service gratuit inclut la prise en charge dans les zones piétonnes et les ruelles. Le rendez-vous est organisé à partir de la situation du véhicule et des conditions d\'accès indiquées. Les créneaux proposés tiennent compte des heures d\'affluence à Colombes.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Colombes, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Hauts-de-Seine sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'La suite du parcours est confiée à un partenaire habilité à intervenir sur les véhicules en fin de vie. La conformité du traitement est assurée par le respect des procédures en vigueur. Chaque opérateur prend en charge la phase pour laquelle il dispose des compétences requises.',
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Colombes',
      questions: [
        { q: 'L\'intervention à Colombes est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Colombes sont entièrement gratuits.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Intervenez-vous rapidement en cas de véhicule gênant la circulation à Colombes ?', a: 'Oui, nous priorisons les situations urgentes en petite couronne. Contactez-nous pour un créneau adapté.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Colombes',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
