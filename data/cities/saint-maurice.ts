import { PageData } from '../types'

export const saintMauriceData: PageData = {
  slug: 'saint-maurice',
  entityType: 'City',
  metaTitle: 'Épaviste Saint-Maurice (94410) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Saint-Maurice (94410). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Service d\'enlèvement de véhicule à Saint-Maurice (94410) dans tout Saint-Maurice',
      subtitle: 'À Saint-Maurice (94410) : notre équipe retire gratuitement votre vieux véhicule dans tout Saint-Maurice.',
      badge: 'Saint-Maurice (94410)',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Saint-Maurice',
      intro: 'Pour les habitants de Saint-Maurice, l\'enlèvement d\'épave est gratuit dans toute la commune. Les informations fournies sur la situation à Saint-Maurice permettent de préparer l\'intervention. Le secteur 94410 de Saint-Maurice est couvert sans supplément de prix par notre service d\'enlèvement gratuit de véhicules hors d\'usage. Notre dispositif autour de Saint-Maurice permet d\'intervenir dans une zone élargie.',
      zones: [
        { name: 'Zones pavillonnaires', delay: 'Sous 24h', specificities: 'Enlèvement au domicile ou dans votre allée privée.' },
        { name: 'Centre-ville & Axes principaux', delay: '24h', specificities: 'Retrait d\'épave sur voie publique.' },
        { name: 'Secteurs d\'activité', delay: 'Sur RDV', specificities: 'Intervention en zone commerciale.' }
      ],
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Saint-Maurice',
      content: 'Dans une commune dense comme Saint-Maurice, une épave gêne rapidement la circulation quotidienne. Un véhicule hors d\'usage à Saint-Maurice attire l\'attention et peut dégrader l\'image du quartier. Notre équipe à Saint-Maurice connaît parfaitement les spécificités de la banlieue dense. Les précisions apportées en amont aident à préparer le matériel et l\'équipe adaptés. Les créneaux proposés tiennent compte des heures d\'affluence à Saint-Maurice.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'L\'enlèvement d\'un véhicule hors d\'usage à Saint-Maurice implique une stricte conformité réglementaire. Voici les éléments à préparer. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Val-de-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Après retrait, le véhicule est pris en relais par un opérateur de la filière de recyclage. Les opérations de valorisation sont réalisées dans des conditions conformes à la réglementation. Les professionnels se relaient pour couvrir l\'ensemble des phases du processus réglementaire.',
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Saint-Maurice',
      questions: [
        { q: 'L\'intervention à Saint-Maurice est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Saint-Maurice sont entièrement gratuits.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Intervenez-vous rapidement en cas de véhicule gênant la circulation à Saint-Maurice ?', a: 'Oui, nous priorisons les situations urgentes en petite couronne. Contactez-nous pour un créneau adapté.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Saint-Maurice',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
