import { PageData } from '../types'

export const melunData: PageData = {
  slug: 'melun',
  entityType: 'City',
  metaTitle: 'Épaviste Melun (77000) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Melun (77000). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Votre épaviste de secteur à Melun (77000) pour enlèvement à Melun',
      subtitle: 'Épaviste gratuit à Melun (77000) : intervention dans tout Melun pour votre véhicule hors d\'usage.',
      badge: 'Melun (77000)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Melun',
      content: 'Les rues de Melun ne sont pas adaptées au stockage d\'un véhicule hors d\'usage. Dans une grande agglomération comme Melun, il est essentiel de libérer l\'espace public. Le service à Melun garantit un enlèvement gratuit et une orientation vers les filières adaptées. Les informations recueillies permettent de dimensionner l\'intervention au plus juste. Notre connaissance de Melun permet d\'optimiser les déplacements et l\'intervention. Le secteur de Boulevard de l\'Almont est couvert comme l\'ensemble de la commune.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'L\'organisation comprend un relais vers un établissement habilité pour la suite des opérations. La fin de vie du véhicule est traitée dans le respect des filières autorisées. Les professionnels impliqués travaillent en coordination pour la bonne fin des opérations.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Melun',
      intro: 'À Melun, nous pouvons retirer votre véhicule hors d\'usage en tout point du territoire. Les informations fournies sur la situation à Melun permettent de préparer l\'intervention. Notre service dessert quotidiennement le secteur 77000 de Melun avec des équipes spécialisées dans l\'enlèvement d\'épaves. Les communes proches de Melun sont incluses dans notre zone d\'intervention. C\'est le cas notamment vers Le Mée-sur-Seine et Vert-Saint-Denis.',
      zones: [
        { name: 'Centre-ville & Zones denses', delay: 'Sous 24h', specificities: 'Intervention rapide sur l\'agglomération.' },
        { name: 'Quartiers résidentiels', delay: '24h', specificities: 'Enlèvement au domicile ou parking.' },
        { name: 'Zones d\'activité', delay: 'Sur RDV', specificities: 'Retrait sur parkings d\'entreprise.' }
      ],
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Melun, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Melun',
      questions: [
        { q: 'L\'intervention à Melun est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Melun sont entièrement gratuits.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Mon véhicule est bloqué en sous-sol à Melun, est-ce un problème ?', a: 'Pas du tout. Nous disposons de dépanneuses 4x4 extra-basses capables d\'entrer dans la majorité des parkings souterrains.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Melun',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
