import { PageData } from '../types'

export const leMesnilSaintDenisData: PageData = {
  slug: 'le-mesnil-saint-denis',
  entityType: 'City',
  metaTitle: 'Épaviste Le Mesnil-Saint-Denis (78320) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Le Mesnil-Saint-Denis (78320). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
  relatedServicesSlugs: [
    'enlevement-epave-parking-souterrain',
    'enlevement-voiture-en-panne',
    'enlevement-voiture-sans-carte-grise'
  ],
  relatedCitiesSlugs: [
    'yvelines'
  ],
  blocks: [
    {
      type: 'Hero',
      title: 'Retrait d\'épave par professionnel agréé à Le Mesnil-Saint-Denis (78320) dans tout Le Mesnil-Saint-Denis',
      subtitle: 'Faites retirer votre épave à Le Mesnil-Saint-Denis gratuitement. Notre équipe intervient dans le 78320 de Le Mesnil-Saint-Denis.',
      badge: 'Le Mesnil-Saint-Denis (78320)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Le Mesnil-Saint-Denis',
      content: 'Dans le secteur rural de Le Mesnil-Saint-Denis, nous nous déplaçons gratuitement pour enlever votre épave. Les habitants des zones rurales de Le Mesnil-Saint-Denis nous font confiance pour un service fiable. Notre service à Le Mesnil-Saint-Denis garantit un retrait gratuit où que vous soyez dans la commune. Le programme d\'intervention est défini avec le propriétaire pour une prise en charge optimale. L\'équipe dépêchée à Le Mesnil-Saint-Denis connaît les spécificités des propriétés rurales.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Le Mesnil-Saint-Denis soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Yvelines sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Après la prise en charge initiale, le véhicule est confié à un partenaire technique spécialisé. Le processus respecte les prescriptions légales applicables à ce type de véhicule. La chaîne de prise en charge est structurée pour respecter les exigences applicables à chaque étape.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Le Mesnil-Saint-Denis',
      intro: 'Nous venons chercher votre épave à Le Mesnil-Saint-Denis, même dans les endroits difficilement accessibles. Le passage à Le Mesnil-Saint-Denis est planifié de manière à optimiser le temps d\'intervention. Pour le secteur 78320, nos équipes interviennent régulièrement et connaissent parfaitement les accès et particularités de Le Mesnil-Saint-Denis. Les zones limitrophes de Le Mesnil-Saint-Denis peuvent aussi profiter de notre service d\'enlèvement.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Le Mesnil-Saint-Denis',
      questions: [
        { q: 'L\'intervention à Le Mesnil-Saint-Denis est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Le Mesnil-Saint-Denis sont entièrement gratuits.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Le Mesnil-Saint-Denis',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
