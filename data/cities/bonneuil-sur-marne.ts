import { PageData } from '../types'

export const bonneuilSurMarneData: PageData = {
  slug: 'bonneuil-sur-marne',
  entityType: 'City',
  metaTitle: 'Épaviste Bonneuil-sur-Marne (94380) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Bonneuil-sur-Marne (94380). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Retrait auto hors d\'usage Bonneuil-sur-Marne (94380) dans le département 94380',
      subtitle: 'Solution enlèvement épave à Bonneuil-sur-Marne (94380). Intervention rapide et gratuite dans le 94380 de Bonneuil-sur-Marne.',
      badge: 'Bonneuil-sur-Marne (94380)',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Bonneuil-sur-Marne',
      intro: 'Notre équipe se rend dans chaque quartier de Bonneuil-sur-Marne pour les enlèvements programmés. Les modalités d\'intervention à Bonneuil-sur-Marne sont adaptées à l\'emplacement signalé du véhicule. Le secteur 94380 de Bonneuil-sur-Marne est couvert sans supplément de prix par notre service d\'enlèvement gratuit de véhicules hors d\'usage. Si vous résidez près de Bonneuil-sur-Marne, notre service d\'enlèvement est également accessible.',
      zones: [
        { name: 'Zones pavillonnaires', delay: 'Sous 24h', specificities: 'Enlèvement au domicile ou dans votre allée privée.' },
        { name: 'Centre-ville & Axes principaux', delay: '24h', specificities: 'Retrait d\'épave sur voie publique.' },
        { name: 'Secteurs d\'activité', delay: 'Sur RDV', specificities: 'Intervention en zone commerciale.' }
      ],
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Bonneuil-sur-Marne',
      content: 'Votre épave à Bonneuil-sur-Marne peut être retirée gratuitement, sans paperasse compliquée. Une épave dans une rue de Bonneuil-sur-Marne peut rapidement faire l\'objet d\'une plainte de voisinage. Le service à Bonneuil-sur-Marne est optimisé pour une intervention rapide en zone urbaine dense. L\'organisation du retrait est préparée conjointement avec le propriétaire du véhicule. L\'intervention à Bonneuil-sur-Marne est optimisée pour réduire le temps de trajet et d\'opération.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Bonneuil-sur-Marne soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Val-de-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'La suite du parcours est confiée à un partenaire habilité à intervenir sur les véhicules en fin de vie. Le traitement respecte les normes applicables aux véhicules en fin de vie. Les étapes sont enchaînées de manière organisée pour un parcours cohérent du véhicule.',
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Bonneuil-sur-Marne',
      questions: [
        { q: 'L\'intervention à Bonneuil-sur-Marne est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Bonneuil-sur-Marne sont entièrement gratuits.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Intervenez-vous rapidement en cas de véhicule gênant la circulation à Bonneuil-sur-Marne ?', a: 'Oui, nous priorisons les situations urgentes en petite couronne. Contactez-nous pour un créneau adapté.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Bonneuil-sur-Marne',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
