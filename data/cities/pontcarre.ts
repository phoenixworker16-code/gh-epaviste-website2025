import { PageData } from '../types'

export const pontcarreData: PageData = {
  slug: 'pontcarre',
  entityType: 'City',
  metaTitle: 'Épaviste Pontcarré (77135) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Pontcarré (77135). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
  relatedServicesSlugs: [
    'enlevement-epave-parking-souterrain',
    'enlevement-voiture-en-panne',
    'enlevement-voiture-sans-carte-grise'
  ],
  relatedCitiesSlugs: [
    'enlevement-epave-seine-et-marne'
  ],
  blocks: [
    {
      type: 'Hero',
      title: 'Service d\'enlèvement d\'épave à Pontcarré (77135) - Intervention Pontcarré',
      subtitle: 'Service d\'enlèvement d\'épave à Pontcarré (77135) : gratuit, rapide et professionnel à Pontcarré.',
      badge: 'Pontcarré (77135)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Pontcarré',
      content: 'Votre propriété rurale à Pontcarré n\'a pas besoin de cette épave : faites-la enlever. Votre propriété à Pontcarré est accessible à nos dépanneuses pour un enlèvement gratuit. À Pontcarré, l\'enlèvement gratuit comprend le déplacement jusqu\'à votre propriété. La préparation du retrait inclut une vérification des accès et des contraintes éventuelles. Le rendez-vous à Pontcarré est programmé avec une logistique adaptée aux routes et chemins.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Pontcarré soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'La suite du parcours est confiée à un partenaire habilité à intervenir sur les véhicules en fin de vie. Le partenaire assure les formalités et l\'orientation du véhicule vers les filières réglementaires appropriées. Les intervenants se coordonnent pour assurer la continuité du traitement réglementaire.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Pontcarré',
      intro: 'À Pontcarré, nous pouvons retirer votre véhicule hors d\'usage en tout point du territoire. L\'équipe dépêchée à Pontcarré connaît à l\'avance les conditions d\'accès au véhicule. Notre équipe couvre le secteur postal 77135 avec une logistique dédiée. Les habitants de Pontcarré peuvent compter sur notre présence régulière dans ce code postal. Les axes routiers menant à Pontcarré sont régulièrement empruntés par nos équipes.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Pontcarré',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Pontcarré est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Pontcarré sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Pontcarré',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
