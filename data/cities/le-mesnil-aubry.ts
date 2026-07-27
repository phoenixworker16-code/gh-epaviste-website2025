import { PageData } from '../types'

export const leMesnilAubryData: PageData = {
  slug: 'le-mesnil-aubry',
  entityType: 'City',
  metaTitle: 'Épaviste Le Mesnil-Aubry (95720) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Le Mesnil-Aubry (95720). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
  relatedServicesSlugs: [
    'enlevement-epave-parking-souterrain',
    'enlevement-voiture-en-panne',
    'enlevement-voiture-sans-carte-grise'
  ],
  relatedCitiesSlugs: [
    'enlevement-epave-val-d-oise'
  ],
  blocks: [
    {
      type: 'Hero',
      title: 'Débarrassez-vous de votre épave à Le Mesnil-Aubry gratuitement autour de Le Mesnil-Aubry',
      subtitle: 'Retrait VHU à Le Mesnil-Aubry (95720) : prise en charge totale et gratuite de votre épave à Le Mesnil-Aubry.',
      badge: 'Le Mesnil-Aubry (95720)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Le Mesnil-Aubry',
      content: 'Nous venons à Le Mesnil-Aubry avec du matériel adapté aux accès ruraux pour l\'enlèvement gratuit. À Le Mesnil-Aubry, une épave oubliée dans un pré peut être retirée sans que vous ayez à bouger. Nous organisons à Le Mesnil-Aubry des interventions adaptées aux grandes propriétés et aux écarts. Un créneau vous est proposé en fonction des informations communiquées sur le véhicule. Nous adaptons notre intervention à Le Mesnil-Aubry en fonction de la configuration des lieux.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Le Mesnil-Aubry soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Val-d\'Oise sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le véhicule est orienté vers un opérateur de la filière autorisée dès la fin de l\'enlèvement. Les opérations de valorisation sont réalisées dans des conditions conformes à la réglementation. L\'organisation prévoit une articulation claire entre les différentes étapes du processus.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Le Mesnil-Aubry',
      intro: 'La tournée de nos dépanneuses couvre Le Mesnil-Aubry en intégralité chaque semaine. Un créneau d\'enlèvement à Le Mesnil-Aubry vous est proposé selon vos disponibilités. Les demandes pour le 95720 de Le Mesnil-Aubry sont traitées en priorité par notre équipe qui connaît bien ce secteur. Les axes secondaires et les hameaux près de Le Mesnil-Aubry sont inclus dans notre périmètre.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Le Mesnil-Aubry',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Le Mesnil-Aubry est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Le Mesnil-Aubry sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Le Mesnil-Aubry',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
