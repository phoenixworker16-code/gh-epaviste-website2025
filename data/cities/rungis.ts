import { PageData } from '../types'

export const rungisData: PageData = {
  slug: 'rungis',
  entityType: 'City',
  metaTitle: 'Épaviste Rungis (94150) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Rungis (94150). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Enlèvement VHU Rungis - Prise en charge totale à Rungis (94150)',
      subtitle: 'Retrait gratuit épave Rungis (94150) : notre équipe intervient partout à Rungis sans frais.',
      badge: 'Rungis (94150)',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Rungis',
      intro: 'Le service d\'enlèvement gratuit couvre l\'intégralité de la commune de Rungis. Le rendez-vous pour Rungis est défini en fonction des éléments communiqués lors du contact. Le secteur 94150 de Rungis est couvert sans supplément de prix par notre service d\'enlèvement gratuit de véhicules hors d\'usage. Notre dispositif autour de Rungis permet d\'intervenir dans une zone élargie.',
      zones: [
        { name: 'Zones pavillonnaires', delay: 'Sous 24h', specificities: 'Enlèvement au domicile ou dans votre allée privée.' },
        { name: 'Centre-ville & Axes principaux', delay: '24h', specificities: 'Retrait d\'épave sur voie publique.' },
        { name: 'Secteurs d\'activité', delay: 'Sur RDV', specificities: 'Intervention en zone commerciale.' }
      ],
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Rungis',
      content: 'Faites enlever gratuitement votre épave à Rungis avant qu\'elle ne cause des problèmes de voisinage. Une épave dans une rue de Rungis peut rapidement faire l\'objet d\'une plainte de voisinage. Nous organisons à Rungis des passages coordonnés pour éviter les heures de pointe. Un échange téléphonique permet de finaliser l\'organisation avant le passage. Notre présence régulière à Rungis nous permet d\'intervenir en toute connaissance du terrain.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Rungis soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Val-de-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Une fois le véhicule pris en charge, il est transféré vers un opérateur partenaire qualifié. La réglementation encadrant les véhicules hors d\'usage est respectée par les intervenants agréés. Chaque opérateur prend en charge la phase pour laquelle il dispose des compétences requises.',
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Rungis',
      questions: [
        { q: 'L\'intervention à Rungis est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Rungis sont entièrement gratuits.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Intervenez-vous rapidement en cas de véhicule gênant la circulation à Rungis ?', a: 'Oui, nous priorisons les situations urgentes en petite couronne. Contactez-nous pour un créneau adapté.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Rungis',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
