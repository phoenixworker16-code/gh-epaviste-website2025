import { PageData } from '../types'

export const nanterreData: PageData = {
  slug: 'nanterre',
  entityType: 'City',
  metaTitle: 'Épaviste Nanterre (92000) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Nanterre (92000). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Service rapide d\'enlèvement d\'épave à Nanterre (92000) dans tout Nanterre',
      subtitle: 'Pour votre épave à Nanterre (92000) : intervention gratuite et professionnelle dans tout Nanterre.',
      badge: 'Nanterre (92000)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Nanterre',
      content: 'Vous cherchez à faire enlever gratuitement votre épave à Nanterre simplement et sans frais ? À Nanterre, mieux vaut organiser un enlèvement gratuit avant que la situation ne se complique. À Nanterre, le service d\'enlèvement gratuit est organisé avec une logistique de proximité. La coordination avec le propriétaire permet de caler le meilleur créneau pour l\'enlèvement. Les contraintes urbaines de Nanterre sont intégrées dans la préparation du passage. Le secteur de Rue du Sergent Bobillot est couvert comme l\'ensemble de la commune.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Dès l\'enlèvement réalisé, le transfert vers l\'installation partenaire appropriée est programmé. Les différentes opérations sont soumises au respect des règles applicables à la filière. Les professionnels impliqués travaillent en coordination pour la bonne fin des opérations.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Nanterre',
      intro: 'Notre équipe intervient dans toute l\'agglomération de Nanterre pour retirer votre épave gratuitement. La logistique à Nanterre est adaptée au type de véhicule et à son environnement. Le code postal 92000 est intégré dans notre tournée d\'enlèvement régulière à Nanterre, ce qui garantit une intervention rapide. Les communes autour de Nanterre sont également parcourues par nos dépanneuses. C\'est le cas notamment vers Bezons et La Garenne-Colombes.',
      zones: [
        { name: 'Centre-ville & Zones denses', delay: 'Sous 24h', specificities: 'Intervention rapide sur l\'agglomération.' },
        { name: 'Quartiers résidentiels', delay: '24h', specificities: 'Enlèvement au domicile ou parking.' },
        { name: 'Zones d\'activité', delay: 'Sur RDV', specificities: 'Retrait sur parkings d\'entreprise.' }
      ],
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Nanterre, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Hauts-de-Seine sera indispensable.',
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Nanterre',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Mon véhicule est bloqué en sous-sol à Nanterre, est-ce un problème ?', a: 'Pas du tout. Nous disposons de dépanneuses 4x4 extra-basses capables d\'entrer dans la majorité des parkings souterrains.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Nanterre est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Nanterre sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Nanterre',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
