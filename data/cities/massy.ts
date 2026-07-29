import { PageData } from '../types'

export const massyData: PageData = {
  slug: 'massy',
  entityType: 'City',
  metaTitle: 'Épaviste Massy (91300) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Massy (91300). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
  relatedServicesSlugs: [
    'enlevement-epave-parking-souterrain',
    'enlevement-voiture-en-panne',
    'enlevement-voiture-sans-carte-grise'
  ],
  relatedCitiesSlugs: [
    'essonne'
  ],
  blocks: [
    {
      type: 'Hero',
      title: 'Votre épaviste à Massy pour enlèvement gratuit de VHU dans le 91300',
      subtitle: 'Débarrassez votre épave à Massy (91300) sans frais. Notre service couvre tout le secteur de Massy.',
      badge: 'Massy (91300)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Massy',
      content: 'Vous avez une épave à Massy qui vous encombre et vous ne savez pas comment vous en défaire ? À Massy, la circulation dense nécessite une intervention professionnelle pour retirer toute épave. Nous déployons à Massy des moyens adaptés pour retirer votre épave sans complication. L\'organisation du retrait tient compte de l\'emplacement du véhicule, de son état et des conditions d\'accès. L\'organisation de l\'enlèvement à Massy est conçue pour être la plus fluide possible. Les interventions sont possibles jusqu\'à Rue Mangeon et dans tous les quartiers.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'L\'organisation mise en place prévoit un relais vers un opérateur partenaire pour les phases suivantes. La traçabilité du parcours est assurée conformément aux obligations en vigueur. Les opérateurs compétents interviennent à tour de rôle pour couvrir l\'ensemble du processus.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Massy',
      intro: 'Où que soit garé votre véhicule à Massy, notre dépanneuse peut accéder pour le retirer. La préparation du retrait à Massy inclut une évaluation des conditions d\'intervention. Le secteur 91300 de Massy est couvert sans supplément de prix par notre service d\'enlèvement gratuit de véhicules hors d\'usage. Au-delà du centre de Massy, les secteurs périphériques sont régulièrement visités.',
      zones: [
        { name: 'Centre-ville & Zones denses', delay: 'Sous 24h', specificities: 'Intervention rapide sur l\'agglomération.' },
        { name: 'Quartiers résidentiels', delay: '24h', specificities: 'Enlèvement au domicile ou parking.' },
        { name: 'Zones d\'activité', delay: 'Sur RDV', specificities: 'Retrait sur parkings d\'entreprise.' }
      ],
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Massy, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Essonne sera indispensable.',
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Massy',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Mon véhicule est bloqué en sous-sol à Massy, est-ce un problème ?', a: 'Pas du tout. Nous disposons de dépanneuses 4x4 extra-basses capables d\'entrer dans la majorité des parkings souterrains.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Massy est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Massy sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Massy',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
