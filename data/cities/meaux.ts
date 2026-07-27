import { PageData } from '../types'

export const meauxData: PageData = {
  slug: 'meaux',
  entityType: 'City',
  metaTitle: 'Épaviste Meaux (77100) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Meaux (77100). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Service d\'enlèvement 100% gratuit à Meaux (77100) pour les habitants de Meaux',
      subtitle: 'Service d\'enlèvement à Meaux (77100) : retrait gratuit de votre VHU par notre équipe à Meaux.',
      badge: 'Meaux (77100)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Meaux',
      content: 'Votre voiture ne circule plus à Meaux et vous souhaitez libérer de l\'espace ? Dans une grande agglomération comme Meaux, il est essentiel de libérer l\'espace public. Nous couvrons Meaux et ses environs pour un retrait professionnel et sans frais. La préparation du retrait inclut une vérification des accès et des contraintes éventuelles. Notre équipe à Meaux garantit un service professionnel et ponctuel. Le secteur de Rue Georges Renard est couvert comme l\'ensemble de la commune.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Une fois le véhicule pris en charge, il est transféré vers un opérateur partenaire qualifié. Les professionnels engagés respectent le cadre légal applicable à cette catégorie de véhicules. La coordination entre les opérateurs garantit la continuité du traitement réglementaire.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Meaux',
      intro: 'Notre dispositif à Meaux assure un enlèvement gratuit dans tous les secteurs sans exception. À Meaux, l\'organisation du retrait s\'adapte aux circonstances décrites. Notre service dessert quotidiennement le secteur 77100 de Meaux avec des équipes spécialisées dans l\'enlèvement d\'épaves. Au-delà des limites de Meaux, notre service continue dans les secteurs alentour. C\'est le cas notamment vers Nanteuil-lès-Meaux et Chambry (Seine-et-Marne).',
      zones: [
        { name: 'Centre-ville & Zones denses', delay: 'Sous 24h', specificities: 'Intervention rapide sur l\'agglomération.' },
        { name: 'Quartiers résidentiels', delay: '24h', specificities: 'Enlèvement au domicile ou parking.' },
        { name: 'Zones d\'activité', delay: 'Sur RDV', specificities: 'Retrait sur parkings d\'entreprise.' }
      ],
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Meaux, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Meaux',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Mon véhicule est bloqué en sous-sol à Meaux, est-ce un problème ?', a: 'Pas du tout. Nous disposons de dépanneuses 4x4 extra-basses capables d\'entrer dans la majorité des parkings souterrains.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Meaux est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Meaux sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Meaux',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
