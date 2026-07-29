import { PageData } from '../types'

export const boissySaintLegerData: PageData = {
  slug: 'boissy-saint-leger',
  entityType: 'City',
  metaTitle: 'Épaviste Boissy-Saint-Léger (94470) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Boissy-Saint-Léger (94470). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Débarrassez votre véhicule hors d\'usage à Boissy-Saint-Léger (94470) - Épaviste Boissy-Saint-Léger',
      subtitle: 'Nous enlevons les épaves à Boissy-Saint-Léger (94470). Prestation gratuite incluant remorquage à Boissy-Saint-Léger.',
      badge: 'Boissy-Saint-Léger (94470)',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Boissy-Saint-Léger',
      intro: 'Les interventions à Boissy-Saint-Léger sont possibles aussi bien sur voie publique que sur propriété privée. Le passage à Boissy-Saint-Léger est planifié de manière à optimiser le temps d\'intervention. Pour le secteur 94470, nos équipes interviennent régulièrement et connaissent parfaitement les accès et particularités de Boissy-Saint-Léger. Notre zone de couverture s\'articule autour de Boissy-Saint-Léger et de ses environs.',
      zones: [
        { name: 'Zones pavillonnaires', delay: 'Sous 24h', specificities: 'Enlèvement au domicile ou dans votre allée privée.' },
        { name: 'Centre-ville & Axes principaux', delay: '24h', specificities: 'Retrait d\'épave sur voie publique.' },
        { name: 'Secteurs d\'activité', delay: 'Sur RDV', specificities: 'Intervention en zone commerciale.' }
      ],
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Boissy-Saint-Léger',
      content: 'La densité de circulation à Boissy-Saint-Léger exige une solution professionnelle pour l\'enlèvement de votre épave. Les services municipaux de Boissy-Saint-Léger veillent à ce que les épaves ne s\'accumulent pas sur la voie publique. Nous acheminons votre véhicule hors d\'usage vers un centre partenaire agréé pour un traitement conforme. Les conditions d\'accès sont vérifiées avant le départ pour garantir une intervention sans accroc. Notre équipe intervient rapidement dans toute Boissy-Saint-Léger grâce à une connaissance fine du secteur.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Boissy-Saint-Léger soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Val-de-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'La suite du parcours est confiée à un partenaire habilité à intervenir sur les véhicules en fin de vie. Les opérateurs impliqués appliquent les règles en vigueur pour le traitement de ces véhicules. L\'organisation prévoit une articulation claire entre les différentes étapes du processus.',
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Boissy-Saint-Léger',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Intervenez-vous rapidement en cas de véhicule gênant la circulation à Boissy-Saint-Léger ?', a: 'Oui, nous priorisons les situations urgentes en petite couronne. Contactez-nous pour un créneau adapté.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Boissy-Saint-Léger est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Boissy-Saint-Léger sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Boissy-Saint-Léger',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
