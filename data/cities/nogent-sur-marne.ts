import { PageData } from '../types'

export const nogentSurMarneData: PageData = {
  slug: 'nogent-sur-marne',
  entityType: 'City',
  metaTitle: 'Épaviste Nogent-sur-Marne (94130) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Nogent-sur-Marne (94130). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
  relatedServicesSlugs: [
    'enlevement-epave-parking-souterrain',
    'enlevement-voiture-en-panne',
    'enlevement-voiture-sans-carte-grise'
  ],
  relatedCitiesSlugs: [
    'enlevement-epave-val-de-marne'
  ],
  blocks: [
    {
      type: 'Hero',
      title: 'Retrait de épave sans frais à Nogent-sur-Marne (94130) - Service pour Nogent-sur-Marne',
      subtitle: 'Retrait de VHU à Nogent-sur-Marne (94130) : un service gratuit et rapide pour tout Nogent-sur-Marne et ses environs.',
      badge: 'Nogent-sur-Marne (94130)',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Nogent-sur-Marne',
      intro: 'Tous les points de la commune de Nogent-sur-Marne sont desservis, même les zones les moins denses. Avant l\'enlèvement à Nogent-sur-Marne, les informations pratiques sont échangées avec le propriétaire. Le code postal 94130 est intégré dans notre tournée d\'enlèvement régulière à Nogent-sur-Marne, ce qui garantit une intervention rapide. Notre dispositif autour de Nogent-sur-Marne permet d\'intervenir dans une zone élargie.',
      zones: [
        { name: 'Zones pavillonnaires', delay: 'Sous 24h', specificities: 'Enlèvement au domicile ou dans votre allée privée.' },
        { name: 'Centre-ville & Axes principaux', delay: '24h', specificities: 'Retrait d\'épave sur voie publique.' },
        { name: 'Secteurs d\'activité', delay: 'Sur RDV', specificities: 'Intervention en zone commerciale.' }
      ],
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Nogent-sur-Marne',
      content: 'Nous organisons l\'enlèvement gratuit de votre véhicule à Nogent-sur-Marne sur simple demande. À Nogent-sur-Marne, faire enlever son épave gratuitement, c\'est aussi un geste pour la collectivité. L\'organisation à Nogent-sur-Marne permet un enlèvement sans stress, même dans les secteurs très fréquentés. L\'équipe adapte sa préparation en fonction du type de véhicule et de son emplacement. Notre présence régulière à Nogent-sur-Marne nous permet d\'intervenir en toute connaissance du terrain.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'L\'enlèvement d\'un véhicule hors d\'usage à Nogent-sur-Marne implique une stricte conformité réglementaire. Voici les éléments à préparer. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Val-de-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Un opérateur partenaire réceptionne le véhicule pour les opérations suivantes. La réglementation relative à la fin de vie des véhicules est appliquée par les intervenants. Les partenaires coordonnent leurs interventions pour assurer la complétude du traitement.',
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Nogent-sur-Marne',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Intervenez-vous rapidement en cas de véhicule gênant la circulation à Nogent-sur-Marne ?', a: 'Oui, nous priorisons les situations urgentes en petite couronne. Contactez-nous pour un créneau adapté.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Délivrez-vous le certificat de destruction immédiatement ?', a: 'Oui, nous vous remettons le certificat de cession pour destruction en main propre le jour de l\'enlèvement.' },
        { q: 'L\'intervention à Nogent-sur-Marne est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Nogent-sur-Marne sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Nogent-sur-Marne',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
