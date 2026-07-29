import { PageData } from '../types'

export const villiersSurMarneData: PageData = {
  slug: 'villiers-sur-marne',
  entityType: 'City',
  metaTitle: 'Épaviste Villiers-sur-Marne (94350) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Villiers-sur-Marne (94350). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
  relatedServicesSlugs: [
    'enlevement-epave-parking-souterrain',
    'enlevement-voiture-en-panne',
    'enlevement-voiture-sans-carte-grise'
  ],
  relatedCitiesSlugs: [
    'val-de-marne'
  ],
  blocks: [
    {
      type: 'Hero',
      title: 'Votre épaviste à Villiers-sur-Marne pour enlèvement gratuit de VHU dans le 94350',
      subtitle: 'Villiers-sur-Marne (94350) : votre épaviste gratuit pour l\'enlèvement de votre véhicule hors d\'usage à Villiers-sur-Marne.',
      badge: 'Villiers-sur-Marne (94350)',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Villiers-sur-Marne',
      intro: 'Même dans les secteurs les plus excentrés de Villiers-sur-Marne, nous organisons l\'enlèvement. À Villiers-sur-Marne, nous veillons à ce que tous les aspects logistiques soient anticipés. Le secteur 94350 de Villiers-sur-Marne est couvert sans supplément de prix par notre service d\'enlèvement gratuit de véhicules hors d\'usage. Les communes autour de Villiers-sur-Marne sont également parcourues par nos dépanneuses.',
      zones: [
        { name: 'Zones pavillonnaires', delay: 'Sous 24h', specificities: 'Enlèvement au domicile ou dans votre allée privée.' },
        { name: 'Centre-ville & Axes principaux', delay: '24h', specificities: 'Retrait d\'épave sur voie publique.' },
        { name: 'Secteurs d\'activité', delay: 'Sur RDV', specificities: 'Intervention en zone commerciale.' }
      ],
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Villiers-sur-Marne',
      content: 'Dans une commune dense comme Villiers-sur-Marne, une épave gêne rapidement la circulation quotidienne. Dans une commune comme Villiers-sur-Marne, le stationnement est déjà tendu sans une épave en plus. Notre équipe à Villiers-sur-Marne connaît parfaitement les spécificités de la banlieue dense. Un échange téléphonique permet de finaliser l\'organisation avant le passage. Notre expérience de la banlieue dense garantit un enlèvement rapide à Villiers-sur-Marne.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Villiers-sur-Marne soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Val-de-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Une fois le véhicule pris en charge, il est transféré vers un opérateur partenaire qualifié. La réglementation en vigueur est suivie par l\'ensemble des intervenants de la filière. Le processus est conçu pour assurer une prise en charge complète sans rupture de service.',
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Villiers-sur-Marne',
      questions: [
        { q: 'L\'intervention à Villiers-sur-Marne est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Villiers-sur-Marne sont entièrement gratuits.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Intervenez-vous rapidement en cas de véhicule gênant la circulation à Villiers-sur-Marne ?', a: 'Oui, nous priorisons les situations urgentes en petite couronne. Contactez-nous pour un créneau adapté.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Villiers-sur-Marne',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
