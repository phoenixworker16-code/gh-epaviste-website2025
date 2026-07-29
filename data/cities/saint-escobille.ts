import { PageData } from '../types'

export const saintEscobilleData: PageData = {
  slug: 'saint-escobille',
  entityType: 'City',
  metaTitle: 'Épaviste Saint-Escobille (91410) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Saint-Escobille (91410). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
  relatedServicesSlugs: [
    'enlevement-epave-parking-souterrain',
    'enlevement-voiture-en-panne',
    'enlevement-voiture-sans-carte-grise'
  ],
  relatedCitiesSlugs: [
    'enlevement-epave-essonne'
  ],
  blocks: [
    {
      type: 'Hero',
      title: 'Service professionnel d\'enlèvement VHU à Saint-Escobille (91410) dans tout Saint-Escobille',
      subtitle: 'Pour tout Saint-Escobille (91410) : enlèvement gratuit et professionnel de votre véhicule hors d\'usage.',
      badge: 'Saint-Escobille (91410)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Saint-Escobille',
      content: 'À Saint-Escobille, même les épaves situées sur des terrains difficiles sont prises en charge. Nous nous déplaçons gratuitement jusqu\'à vous, même dans les zones moins denses du département. Notre équipe à Saint-Escobille connaît les spécificités des propriétés rurales et agricoles. Les informations transmises permettent d\'anticiper les besoins techniques et humains. Notre connaissance des zones rurales garantit une intervention efficace à Saint-Escobille.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Saint-Escobille soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Essonne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'L\'organisation mise en place prévoit un relais vers un opérateur partenaire pour les phases suivantes. Les obligations applicables aux véhicules hors d\'usage sont respectées tout au long du processus. La chaîne de prise en charge est structurée pour respecter les exigences applicables à chaque étape.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Saint-Escobille',
      intro: 'L\'ensemble des zones résidentielles, commerciales et industrielles de Saint-Escobille est couvert. À Saint-Escobille, nous veillons à ce que tous les aspects logistiques soient anticipés. Pour le secteur 91410, nos équipes interviennent régulièrement et connaissent parfaitement les accès et particularités de Saint-Escobille. Notre couverture géographique dépasse Saint-Escobille pour inclure les communes avoisinantes.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Saint-Escobille',
      questions: [
        { q: 'L\'intervention à Saint-Escobille est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Saint-Escobille sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Saint-Escobille',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
