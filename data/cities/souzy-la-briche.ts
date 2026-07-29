import { PageData } from '../types'

export const souzyLaBricheData: PageData = {
  slug: 'souzy-la-briche',
  entityType: 'City',
  metaTitle: 'Épaviste Souzy-la-Briche (91580) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Souzy-la-Briche (91580). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Service professionnel d\'enlèvement VHU à Souzy-la-Briche (91580) dans tout Souzy-la-Briche',
      subtitle: 'À Souzy-la-Briche (91580) : notre équipe retire gratuitement votre vieux véhicule dans tout Souzy-la-Briche.',
      badge: 'Souzy-la-Briche (91580)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Souzy-la-Briche',
      content: 'Redonnez de l\'espace à votre terrain à Souzy-la-Briche en confiant cette épave à notre service. Nous nous déplaçons gratuitement jusqu\'à vous, même dans les zones moins denses du département. Le retrait gratuit de votre épave à Souzy-la-Briche est organisé avec des équipements tout-terrain. Les informations communiquées au moment de la demande facilitent la préparation du retrait. L\'organisation de l\'enlèvement à Souzy-la-Briche tient compte des distances et de l\'accessibilité rurale.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Souzy-la-Briche soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Essonne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le véhicule est orienté vers un opérateur de la filière autorisée dès la fin de l\'enlèvement. Les formalités réglementaires sont accomplies dans les conditions prévues par la législation. Le partenaire compétent prend ensuite le relais pour les étapes qui relèvent de sa responsabilité.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Souzy-la-Briche',
      intro: 'Notre dispositif à Souzy-la-Briche assure un enlèvement gratuit dans tous les secteurs sans exception. Les détails d\'accès pour Souzy-la-Briche sont examinés avant le départ de l\'équipe. Notre équipe couvre le secteur postal 91580 avec une logistique dédiée. Les habitants de Souzy-la-Briche peuvent compter sur notre présence régulière dans ce code postal. Les habitants des environs de Souzy-la-Briche peuvent aussi faire appel à notre service.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Souzy-la-Briche',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Souzy-la-Briche est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Souzy-la-Briche sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Souzy-la-Briche',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
