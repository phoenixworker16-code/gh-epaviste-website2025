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
      title: 'Épaviste Gratuit à Paris (75001)',
      subtitle: 'Enlèvement gratuit et professionnel de votre véhicule hors d\'usage à Paris. Intervention rapide en moins de 24h.',
      badge: 'Paris (75001)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste à Paris',
      content: 'Vous avez un véhicule hors d\'usage à Paris (75001), dans le département Paris ? GH Épaviste intervient gratuitement pour l\'enlèvement de votre épave. Nous prenons en charge tous types de véhicules : voitures, utilitaires, motos et scooters. Votre véhicule est récupéré puis acheminé vers un centre VHU partenaire agréé par la préfecture, où il sera dépollué et recyclé dans le respect des normes environnementales en vigueur. Un certificat de destruction vous est remis le jour même de l\'intervention, vous dégageant de toute responsabilité légale.',
    },
    {
      type: 'LocalCoverage',
      title: 'Zones d\'intervention à Paris',
      intro: 'Notre équipe intervient dans l\'ensemble de la commune de Paris et ses environs immédiats.',
      zones: [
        { name: 'Centre-ville de Paris', delay: 'Sous 24h', specificities: 'Accès facilité pour dépanneuses de petit gabarit.' },
        { name: 'Quartiers résidentiels', delay: '24h à 48h', specificities: 'Intervention en zones pavillonnaires et résidences.' }
      ],
    },
    {
      type: 'DocsPreparation',
      title: 'Documents nécessaires pour la prise en charge',
      intro: 'Pour que l\'enlèvement de votre épave à Paris se déroule dans les meilleures conditions, préparez les documents suivants : carte grise originale, pièce d\'identité du titulaire, et un certificat de non-gage récent.',
      specialCase: 'En cas de perte de la carte grise, rendez-vous en préfecture du département Paris pour obtenir une attestation de perte.',
    },
    {
      type: 'VhuCompliance',
      title: 'Notre engagement écologique',
      content: 'Chaque véhicule récupéré à Paris est acheminé vers un centre VHU partenaire agréé. La dépollution complète est réalisée conformément à la réglementation : extraction des fluides (huiles, liquide de frein, de refroidissement), retrait de la batterie et du filtre à huile, récupération du gaz de climatisation. Les matériaux sont ensuite triés et recyclés avec un objectif de valorisation de 95% du poids total du véhicule, contribuant à la préservation de l\'environnement et des ressources naturelles.',
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement d\'épaves à Paris',
      questions: [
        { q: 'L\'enlèvement de mon épave à Paris est-il vraiment gratuit ?', a: 'Oui, l\'enlèvement est 100% gratuit à condition que le véhicule soit complet (moteur, roues, ligne d\'échappement). Si des pièces majeures manquent, un devis vous sera communiqué au préalable.' },
        { q: 'Dans quel délai intervenez-vous à Paris ?', a: 'Nous intervenons généralement sous 24 à 48 heures après votre appel. En cas d\'urgence (véhicule accidenté sur la voie publique), un enlèvement le jour même peut être organisé.' },
        { q: 'Quels types de véhicules prenez-vous en charge ?', a: 'Nous prenons en charge tous les véhicules de moins de 3,5 tonnes : voitures, utilitaires, fourgons, motos, scooters et quads hors d\'usage.' },
        { q: 'Comment obtenir le certificat de destruction ?', a: 'Le certificat de cession pour destruction (Cerfa 15776) vous est remis en main propre le jour de l\'enlèvement. Il atteste de la prise en charge officielle de votre véhicule par un professionnel.' },
        { q: 'Mon véhicule est dans un parking souterrain, pouvez-vous intervenir ?', a: 'Oui, nous disposons de dépanneuses adaptées aux parkings souterrains avec une hauteur limitée. Précisez-le lors de votre appel pour que nous envoyions le matériel adéquat.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Faites enlever votre épave à Paris gratuitement',
      subtitle: 'Contactez GH Épaviste dès maintenant pour programmer une intervention rapide, gratuite et conforme à la réglementation.',
    }
  ]
}
