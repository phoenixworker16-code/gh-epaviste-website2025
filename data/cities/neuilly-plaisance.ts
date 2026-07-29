import { PageData } from '../types'

export const neuillyPlaisanceData: PageData = {
  slug: 'neuilly-plaisance',
  entityType: 'City',
  metaTitle: 'Épaviste Neuilly-Plaisance (93360) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Neuilly-Plaisance (93360). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Débarras automobile Neuilly-Plaisance (93360) dans toute l\'agglomération Neuilly-Plaisance',
      subtitle: 'Pour tout Neuilly-Plaisance (93360) : enlèvement gratuit et professionnel de votre véhicule hors d\'usage.',
      badge: 'Neuilly-Plaisance (93360)',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Neuilly-Plaisance',
      intro: 'Notre service gratuit à Neuilly-Plaisance couvre toutes les zones, du bourg aux hameaux périphériques. Les modalités d\'intervention à Neuilly-Plaisance sont adaptées à l\'emplacement signalé du véhicule. La zone 93360 fait partie de notre secteur d\'intervention prioritaire. Nous organisons des passages réguliers dans cette partie de Neuilly-Plaisance. Les communes autour de Neuilly-Plaisance sont également parcourues par nos dépanneuses.',
      zones: [
        { name: 'Zones pavillonnaires', delay: 'Sous 24h', specificities: 'Enlèvement au domicile ou dans votre allée privée.' },
        { name: 'Centre-ville & Axes principaux', delay: '24h', specificities: 'Retrait d\'épave sur voie publique.' },
        { name: 'Secteurs d\'activité', delay: 'Sur RDV', specificities: 'Intervention en zone commerciale.' }
      ],
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Neuilly-Plaisance',
      content: 'Nous organisons l\'enlèvement gratuit de votre véhicule à Neuilly-Plaisance sur simple demande. À Neuilly-Plaisance, la densité urbaine rend le retrait des épaves prioritaire pour la collectivité. L\'organisation à Neuilly-Plaisance permet un enlèvement sans stress, même dans les secteurs très fréquentés. Le rendez-vous est organisé à partir de la situation du véhicule et des conditions d\'accès indiquées. Notre connaissance de la petite couronne garantit une intervention rapide à Neuilly-Plaisance.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Neuilly-Plaisance, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-Saint-Denis sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Après l\'enlèvement, un professionnel partenaire prend le relais pour les opérations ultérieures. Le partenaire assure les formalités et l\'orientation du véhicule vers les filières réglementaires appropriées. Cette répartition des rôles assure une continuité entre l\'enlèvement et les opérations réglementaires ultérieures.',
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Neuilly-Plaisance',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Intervenez-vous rapidement en cas de véhicule gênant la circulation à Neuilly-Plaisance ?', a: 'Oui, nous priorisons les situations urgentes en petite couronne. Contactez-nous pour un créneau adapté.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Neuilly-Plaisance est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Neuilly-Plaisance sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Neuilly-Plaisance',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
