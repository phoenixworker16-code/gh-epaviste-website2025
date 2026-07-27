import { PageData } from '../types'

export const boulogneBillancourtData: PageData = {
  slug: 'boulogne-billancourt',
  entityType: 'City',
  metaTitle: 'Épaviste Boulogne-Billancourt (92100) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Boulogne-Billancourt (92100). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Votre épaviste à Boulogne-Billancourt pour enlèvement gratuit de VHU dans le 92100',
      subtitle: 'Faites retirer votre épave à Boulogne-Billancourt gratuitement. Notre équipe intervient dans le 92100 de Boulogne-Billancourt.',
      badge: 'Boulogne-Billancourt (92100)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Boulogne-Billancourt',
      content: 'Ne laissez pas votre épave occuper inutilement l\'espace public à Boulogne-Billancourt. Faire retirer son épave à Boulogne-Billancourt, c\'est aussi participer à la propreté de l\'espace urbain. À Boulogne-Billancourt, le service d\'enlèvement gratuit est organisé avec une logistique de proximité. Un échange préalable permet de prévoir le matériel approprié et le créneau de passage. Chaque détail de l\'intervention à Boulogne-Billancourt est pensé pour votre tranquillité. Notre équipe dessert notamment le secteur de Rue des Tilleuls dans la commune.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le transfert vers l\'opérateur compétent est planifié dès la confirmation de l\'enlèvement. Les obligations applicables aux véhicules hors d\'usage sont respectées tout au long du processus. Chaque intervenant intervient dans son domaine de compétence selon le planning établi.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Boulogne-Billancourt',
      intro: 'Pour un enlèvement à Boulogne-Billancourt, notre logistique couvre tous les secteurs sans exception. Le rendez-vous pour Boulogne-Billancourt est fixé après un échange sur les conditions d\'accès. Le secteur 92100 de Boulogne-Billancourt est couvert sans supplément de prix par notre service d\'enlèvement gratuit de véhicules hors d\'usage. Les routes et chemins autour de Boulogne-Billancourt sont parcourus régulièrement par nos véhicules. C\'est le cas notamment vers Sèvres et Paris.',
      zones: [
        { name: 'Centre-ville & Zones denses', delay: 'Sous 24h', specificities: 'Intervention rapide sur l\'agglomération.' },
        { name: 'Quartiers résidentiels', delay: '24h', specificities: 'Enlèvement au domicile ou parking.' },
        { name: 'Zones d\'activité', delay: 'Sur RDV', specificities: 'Retrait sur parkings d\'entreprise.' }
      ],
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Boulogne-Billancourt, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Hauts-de-Seine sera indispensable.',
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Boulogne-Billancourt',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Mon véhicule est bloqué en sous-sol à Boulogne-Billancourt, est-ce un problème ?', a: 'Pas du tout. Nous disposons de dépanneuses 4x4 extra-basses capables d\'entrer dans la majorité des parkings souterrains.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Boulogne-Billancourt est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Boulogne-Billancourt sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Boulogne-Billancourt',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
