import { PageData } from '../types'

export const neuillySurMarneData: PageData = {
  slug: 'neuilly-sur-marne',
  entityType: 'City',
  metaTitle: 'Épaviste Neuilly-sur-Marne (93330) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Neuilly-sur-Marne (93330). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Service d\'enlèvement 100% gratuit à Neuilly-sur-Marne (93330) pour les habitants de Neuilly-sur-Marne',
      subtitle: 'À Neuilly-sur-Marne (93330), nous organisons l\'enlèvement gratuit de votre épave partout dans Neuilly-sur-Marne.',
      badge: 'Neuilly-sur-Marne (93330)',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Neuilly-sur-Marne',
      intro: 'La zone d\'intervention à Neuilly-sur-Marne comprend aussi bien les voies principales que les impasses. Les informations fournies sur la situation à Neuilly-sur-Marne permettent de préparer l\'intervention. Notre service dessert quotidiennement le secteur 93330 de Neuilly-sur-Marne avec des équipes spécialisées dans l\'enlèvement d\'épaves. Les habitants des environs de Neuilly-sur-Marne peuvent aussi faire appel à notre service.',
      zones: [
        { name: 'Zones pavillonnaires', delay: 'Sous 24h', specificities: 'Enlèvement au domicile ou dans votre allée privée.' },
        { name: 'Centre-ville & Axes principaux', delay: '24h', specificities: 'Retrait d\'épave sur voie publique.' },
        { name: 'Secteurs d\'activité', delay: 'Sur RDV', specificities: 'Intervention en zone commerciale.' }
      ],
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Neuilly-sur-Marne',
      content: 'Notre service à Neuilly-sur-Marne permet un enlèvement gratuit même dans les quartiers les plus denses. Fini les soucis de stationnement abusif : nous récupérons votre véhicule hors d\'usage rapidement. Notre équipe à Neuilly-sur-Marne intervient avec discrétion et efficacité dans les quartiers animés. Les contraintes d\'accès sont identifiées en amont pour éviter les mauvaises surprises. Les créneaux proposés tiennent compte des heures d\'affluence à Neuilly-sur-Marne.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Neuilly-sur-Marne, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-Saint-Denis sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Après la prise en charge initiale, le véhicule est confié à un partenaire technique spécialisé. Les différentes phases de traitement sont réalisées sous le contrôle des opérateurs autorisés. La coordination entre les opérateurs garantit la continuité du traitement réglementaire.',
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Neuilly-sur-Marne',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Intervenez-vous rapidement en cas de véhicule gênant la circulation à Neuilly-sur-Marne ?', a: 'Oui, nous priorisons les situations urgentes en petite couronne. Contactez-nous pour un créneau adapté.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Neuilly-sur-Marne est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Neuilly-sur-Marne sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Neuilly-sur-Marne',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
