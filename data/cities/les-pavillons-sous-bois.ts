import { PageData } from '../types'

export const lesPavillonsSousBoisData: PageData = {
  slug: 'les-pavillons-sous-bois',
  entityType: 'City',
  metaTitle: 'Épaviste Les Pavillons-sous-Bois (93320) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Les Pavillons-sous-Bois (93320). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Retrait de épave sans frais à Les Pavillons-sous-Bois (93320) - Service pour Les Pavillons-sous-Bois',
      subtitle: 'Votre épave à Les Pavillons-sous-Bois retirée gratuitement. Intervention rapide dans le 93320 à Les Pavillons-sous-Bois.',
      badge: 'Les Pavillons-sous-Bois (93320)',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Les Pavillons-sous-Bois',
      intro: 'Nous intervenons à Les Pavillons-sous-Bois dans tous les secteurs, y compris dans les zones à accès difficile. La préparation de l\'intervention à Les Pavillons-sous-Bois commence dès la réception de votre demande. Les habitants du 93320 à Les Pavillons-sous-Bois bénéficient d\'un passage régulier de nos équipes et d\'une prise en charge adaptée à ce secteur. Les axes routiers menant à Les Pavillons-sous-Bois sont régulièrement empruntés par nos équipes.',
      zones: [
        { name: 'Zones pavillonnaires', delay: 'Sous 24h', specificities: 'Enlèvement au domicile ou dans votre allée privée.' },
        { name: 'Centre-ville & Axes principaux', delay: '24h', specificities: 'Retrait d\'épave sur voie publique.' },
        { name: 'Secteurs d\'activité', delay: 'Sur RDV', specificities: 'Intervention en zone commerciale.' }
      ],
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Les Pavillons-sous-Bois',
      content: 'Dans une commune dense comme Les Pavillons-sous-Bois, une épave sur la voie publique pose vite problème. Les rues de Les Pavillons-sous-Bois ne doivent pas servir de dépôt pour un véhicule hors d\'usage. À Les Pavillons-sous-Bois, l\'enlèvement gratuit est réalisé par des professionnels de la petite couronne. Un échange téléphonique permet de finaliser l\'organisation avant le passage. Les détails du passage sont confirmés avant l\'intervention pour une coordination optimale.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Les Pavillons-sous-Bois, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-Saint-Denis sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'L\'organisation logistique prévoit un transfert vers un professionnel agréé pour le traitement de ces véhicules. Le processus respecte les prescriptions légales applicables à ce type de véhicule. Le propriétaire conserve ainsi une information claire sur le parcours réglementaire du véhicule.',
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Les Pavillons-sous-Bois',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Intervenez-vous rapidement en cas de véhicule gênant la circulation à Les Pavillons-sous-Bois ?', a: 'Oui, nous priorisons les situations urgentes en petite couronne. Contactez-nous pour un créneau adapté.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Les Pavillons-sous-Bois est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Les Pavillons-sous-Bois sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Les Pavillons-sous-Bois',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
