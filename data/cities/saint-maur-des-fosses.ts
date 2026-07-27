import { PageData } from '../types'

export const saintMaurDesFossesData: PageData = {
  slug: 'saint-maur-des-fosses',
  entityType: 'City',
  metaTitle: 'Épaviste Saint-Maur-des-Fossés (94100) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Saint-Maur-des-Fossés (94100). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Débarrassez votre épave à Saint-Maur-des-Fossés (94100) gratuitement dans tout Saint-Maur-des-Fossés',
      subtitle: 'Saint-Maur-des-Fossés (94100) : votre épaviste gratuit pour l\'enlèvement de votre véhicule hors d\'usage à Saint-Maur-des-Fossés.',
      badge: 'Saint-Maur-des-Fossés (94100)',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Saint-Maur-des-Fossés',
      intro: 'Notre maillage territorial permet une couverture complète de Saint-Maur-des-Fossés pour les enlèvements. L\'organisation du passage à Saint-Maur-des-Fossés tient compte des particularités annoncées. Les habitants du 94100 à Saint-Maur-des-Fossés bénéficient d\'un passage régulier de nos équipes et d\'une prise en charge adaptée à ce secteur. Les communes autour de Saint-Maur-des-Fossés sont également parcourues par nos dépanneuses.',
      zones: [
        { name: 'Zones pavillonnaires', delay: 'Sous 24h', specificities: 'Enlèvement au domicile ou dans votre allée privée.' },
        { name: 'Centre-ville & Axes principaux', delay: '24h', specificities: 'Retrait d\'épave sur voie publique.' },
        { name: 'Secteurs d\'activité', delay: 'Sur RDV', specificities: 'Intervention en zone commerciale.' }
      ],
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Saint-Maur-des-Fossés',
      content: 'Votre épave à Saint-Maur-des-Fossés peut être retirée gratuitement, sans paperasse compliquée. Les rues de Saint-Maur-des-Fossés ne doivent pas servir de dépôt pour un véhicule hors d\'usage. Notre logistique à Saint-Maur-des-Fossés est conçue pour minimiser les contraintes de circulation. Les précisions apportées en amont aident à préparer le matériel et l\'équipe adaptés. Notre présence régulière à Saint-Maur-des-Fossés nous permet d\'intervenir en toute connaissance du terrain.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Saint-Maur-des-Fossés soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Val-de-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Une fois l\'enlèvement effectué, le véhicule rejoint une installation partenaire dédiée. La réglementation relative à la fin de vie des véhicules est appliquée par les intervenants. Les opérateurs compétents interviennent à tour de rôle pour couvrir l\'ensemble du processus.',
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Saint-Maur-des-Fossés',
      questions: [
        { q: 'L\'intervention à Saint-Maur-des-Fossés est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Saint-Maur-des-Fossés sont entièrement gratuits.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Intervenez-vous rapidement en cas de véhicule gênant la circulation à Saint-Maur-des-Fossés ?', a: 'Oui, nous priorisons les situations urgentes en petite couronne. Contactez-nous pour un créneau adapté.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Saint-Maur-des-Fossés',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
