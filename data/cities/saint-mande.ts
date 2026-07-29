import { PageData } from '../types'

export const saintMandeData: PageData = {
  slug: 'saint-mande',
  entityType: 'City',
  metaTitle: 'Épaviste Saint-Mandé (94160) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Saint-Mandé (94160). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
  relatedServicesSlugs: [
    'enlevement-epave-parking-souterrain',
    'enlevement-voiture-en-panne',
    'enlevement-voiture-sans-carte-grise'
  ],
  relatedCitiesSlugs: [
    'enlevement-epave-val-de-marne'
  ],
  blocks: [
    {
      type: 'Hero',
      title: 'Retrait d\'épave professionnel à Saint-Mandé (94160) pour votre VHU à Saint-Mandé',
      subtitle: 'Débarras auto Saint-Mandé (94160) : notre équipe enlève gratuitement votre épave à Saint-Mandé.',
      badge: 'Saint-Mandé (94160)',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Saint-Mandé',
      intro: 'Aucun quartier de Saint-Mandé n\'est exclu : nous intervenons partout dans la commune. À Saint-Mandé, nous veillons à ce que tous les aspects logistiques soient anticipés. Pour le secteur 94160, nos équipes interviennent régulièrement et connaissent parfaitement les accès et particularités de Saint-Mandé. Notre rayon d\'action ne se limite pas à Saint-Mandé mais s\'étend aux alentours.',
      zones: [
        { name: 'Zones pavillonnaires', delay: 'Sous 24h', specificities: 'Enlèvement au domicile ou dans votre allée privée.' },
        { name: 'Centre-ville & Axes principaux', delay: '24h', specificities: 'Retrait d\'épave sur voie publique.' },
        { name: 'Secteurs d\'activité', delay: 'Sur RDV', specificities: 'Intervention en zone commerciale.' }
      ],
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Saint-Mandé',
      content: 'Les rues étroites de Saint-Mandé ne sont pas un endroit pour laisser un véhicule hors d\'usage. Dans une commune comme Saint-Mandé, le stationnement est déjà tendu sans une épave en plus. Nous retirons gratuitement votre épave à Saint-Mandé dans tous les quartiers, même les plus denses. La demande permet d\'identifier les informations nécessaires avant le déplacement. Notre présence régulière à Saint-Mandé nous permet d\'intervenir en toute connaissance du terrain.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Saint-Mandé, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Val-de-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Après retrait, le véhicule est pris en relais par un opérateur de la filière de recyclage. Les étapes ultérieures sont réalisées par les professionnels compétents, conformément au cadre applicable. Le transfert est organisé avec un partenaire spécialisé dans les procédures applicables aux véhicules hors d\'usage.',
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Saint-Mandé',
      questions: [
        { q: 'L\'intervention à Saint-Mandé est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Saint-Mandé sont entièrement gratuits.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Intervenez-vous rapidement en cas de véhicule gênant la circulation à Saint-Mandé ?', a: 'Oui, nous priorisons les situations urgentes en petite couronne. Contactez-nous pour un créneau adapté.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Saint-Mandé',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
