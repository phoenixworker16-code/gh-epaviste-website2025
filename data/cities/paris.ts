import { PageData } from '../types'

export const parisData: PageData = {
  slug: 'paris',
  entityType: 'City',
  metaTitle: 'Épaviste Paris (75001) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Paris (75001). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
  relatedServicesSlugs: [
    'enlevement-epave-parking-souterrain',
    'enlevement-voiture-en-panne',
    'enlevement-voiture-sans-carte-grise'
  ],
  relatedCitiesSlugs: [
    'enlevement-epave-paris'
  ],
  blocks: [
    {
      type: 'Hero',
      title: 'Retrait d\'épave professionnel à Paris (75001) pour votre VHU à Paris',
      subtitle: 'Votre épave à Paris retirée gratuitement. Intervention rapide dans le 75001 à Paris.',
      badge: 'Paris (75001)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Paris',
      content: 'Votre vieille voiture ne démarre plus dans Paris et occupe une place précieuse ? Dans un environnement urbain aussi dense que Paris, une épave est vite repérée. Le service d\'enlèvement gratuit couvre Paris dans son intégralité, du centre aux périphéries. La coordination avec le propriétaire permet de caler le meilleur créneau pour l\'enlèvement. Nous connaissons les particularités de chaque arrondissement pour une intervention ciblée. Le secteur de Allée Paris-Ivry est couvert comme l\'ensemble de la commune.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Paris',
      intro: 'L\'enlèvement à Paris est organisé sans considération de zone ou de quartier. Les détails d\'accès pour Paris sont examinés avant le départ de l\'équipe. Les demandes pour le 75001 de Paris sont traitées en priorité par notre équipe qui connaît bien ce secteur. Au-delà de Paris, nous intervenons aussi dans les secteurs voisins. C\'est le cas notamment vers Saint-Mandé et Clichy.',
      zones: [
        { name: 'Centre-ville & Rues étroites', delay: 'Sous 24h', specificities: 'Matériel adapté aux accès difficiles et parkings.' },
        { name: 'Parkings souterrains', delay: 'Sur RDV', specificities: 'Dépanneuse extra-basse pour sous-sols.' },
        { name: 'Quartiers périphériques', delay: '24h à 48h', specificities: 'Intervention planifiée sur voie publique.' }
      ],
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Paris, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Paris sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'La suite du parcours est confiée à un partenaire habilité à intervenir sur les véhicules en fin de vie. Les formalités réglementaires sont accomplies dans les conditions prévues par la législation. La coordination des acteurs garantit le respect des procédures à chaque étape du parcours.',
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Paris',
      questions: [
        { q: 'L\'intervention à Paris est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Paris sont entièrement gratuits.' },
        { q: 'Délivrez-vous le certificat de destruction immédiatement ?', a: 'Oui, nous vous remettons le certificat de cession pour destruction en main propre le jour de l\'enlèvement.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Mon véhicule est bloqué en sous-sol à Paris, est-ce un problème ?', a: 'Pas du tout. Nous disposons de dépanneuses 4x4 extra-basses capables d\'entrer dans la majorité des parkings souterrains.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Paris',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
