import { PageData } from '../types'

export const villemombleData: PageData = {
  slug: 'villemomble',
  entityType: 'City',
  metaTitle: 'Épaviste Villemomble (93250) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Villemomble (93250). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Retrait de véhicule hors d\'usage à Villemomble',
      subtitle: 'Intervention rapide en petite couronne. Débarrassez-vous de votre VHU sans frais et sans contrainte de stationnement.',
      badge: 'Villemomble (93250)',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Villemomble',
      intro: 'Notre équipe intervient dans l\'ensemble de la commune de Villemomble pour procéder à l\'enlèvement de votre véhicule. Les informations de stationnement permettent d’anticiper les conditions de prise en charge. Le rendez-vous est préparé pour tenir compte de la situation déclarée par le propriétaire.',
      zones: [
        { name: 'Zones pavillonnaires', delay: 'Sous 24h', specificities: 'Enlèvement au domicile ou dans votre allée privée.' },
        { name: 'Secteur Gare / Centre', delay: 'Rapide', specificities: 'Retrait d\'épave sur voie publique.' }
      ],
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Villemomble',
      content: 'La densité de circulation à Villemomble (93250) exige une solution professionnelle pour l\'enlèvement de votre épave. Nous mettons à votre disposition nos dépanneuses spécialisées dans les interventions en petite couronne. Fini les soucis de stationnement abusif : nous récupérons votre véhicule hors d\'usage et l\'amenons chez un broyeur agréé VHU partenaire. L’organisation du retrait tient compte de l’emplacement du véhicule, de son état et des conditions d’accès. La préparation du passage vise à éviter les déplacements inutiles et les difficultés d’accès. Un point préalable facilite la coordination entre le propriétaire et le professionnel chargé du retrait.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Villemomble, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-Saint-Denis sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Dépollution et Recyclage',
      content: 'L\'enlèvement est suivi d\'un acheminement vers un centre VHU partenaire agréé. Les étapes ultérieures sont réalisées par les professionnels compétents, conformément au cadre applicable. Cette répartition des rôles assure une continuité entre l’enlèvement et les opérations réglementaires ultérieures.',
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Villemomble',
      questions: [
        { q: 'L\'intervention à Villemomble est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Villemomble sont entièrement gratuits.' },
        { q: 'Délivrez-vous le certificat de destruction immédiatement ?', a: 'Oui, nous vous remettons le certificat de cession pour destruction en main propre le jour de l\'enlèvement.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Intervenez-vous rapidement en cas de véhicule gênant la circulation à Villemomble ?', a: 'Oui, nous priorisons les situations urgentes en petite couronne. Contactez-nous pour un créneau adapté.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Villemomble',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
