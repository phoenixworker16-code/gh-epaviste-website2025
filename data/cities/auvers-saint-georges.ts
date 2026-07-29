import { PageData } from '../types'

export const auversSaintGeorgesData: PageData = {
  slug: 'auvers-saint-georges',
  entityType: 'City',
  metaTitle: 'Épaviste Auvers-Saint-Georges (91580) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Auvers-Saint-Georges (91580). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Service professionnel d\'enlèvement VHU à Auvers-Saint-Georges (91580) dans tout Auvers-Saint-Georges',
      subtitle: 'Pour tout Auvers-Saint-Georges (91580) : enlèvement gratuit et professionnel de votre véhicule hors d\'usage.',
      badge: 'Auvers-Saint-Georges (91580)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Auvers-Saint-Georges',
      content: 'Situé à Auvers-Saint-Georges, votre véhicule hors d\'usage encombre votre terrain ou votre cour ? Vivre à la campagne à Auvers-Saint-Georges ne signifie pas renoncer à un service d\'enlèvement professionnel. Le service à Auvers-Saint-Georges est conçu pour les zones agricoles et les habitations isolées. La préparation logistique intègre les spécificités de chaque demande d\'enlèvement. Les modalités de l\'intervention à Auvers-Saint-Georges sont conçues pour les propriétés rurales.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Auvers-Saint-Georges, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Essonne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'La remise du véhicule à un opérateur spécialisé est prévue dans l\'organisation du service. La conformité du traitement est assurée par le respect des procédures en vigueur. La chaîne de traitement est conçue pour assurer une prise en charge sans interruption.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Auvers-Saint-Georges',
      intro: 'Les interventions à Auvers-Saint-Georges sont possibles aussi bien sur voie publique que sur propriété privée. Le dispositif mis en place pour Auvers-Saint-Georges est adapté à chaque situation particulière. Le code postal 91580 est intégré dans notre tournée d\'enlèvement régulière à Auvers-Saint-Georges, ce qui garantit une intervention rapide. Les alentours de Auvers-Saint-Georges sont intégrés à notre tournée d\'enlèvement régulière.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Auvers-Saint-Georges',
      questions: [
        { q: 'L\'intervention à Auvers-Saint-Georges est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Auvers-Saint-Georges sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Auvers-Saint-Georges',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
