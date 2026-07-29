import { PageData } from '../types'

export const risOrangisData: PageData = {
  slug: 'ris-orangis',
  entityType: 'City',
  metaTitle: 'Épaviste Ris-Orangis (91130) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Ris-Orangis (91130). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Service rapide d\'enlèvement d\'épave à Ris-Orangis (91130) dans tout Ris-Orangis',
      subtitle: 'Besoin d\'un épaviste à Ris-Orangis (91130) ? Enlèvement gratuit de votre VHU dans tout Ris-Orangis.',
      badge: 'Ris-Orangis (91130)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Ris-Orangis',
      content: 'Votre terrain à Ris-Orangis retrouvera son aspect d\'origine après l\'enlèvement de cette épave. Nous nous déplaçons gratuitement jusqu\'à vous, même dans les zones moins denses du département. Notre équipe à Ris-Orangis assure un service professionnel d\'enlèvement gratuit en zone rurale. Les informations recueillies permettent de dimensionner l\'intervention au plus juste. Nous organisons le passage à Ris-Orangis avec une logistique adaptée aux grands terrains.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Ris-Orangis, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Essonne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'L\'organisation logistique prévoit un transfert vers un professionnel agréé pour le traitement de ces véhicules. Les opérations de recyclage sont réalisées dans le respect des normes environnementales établies. Les différents opérateurs interviennent en synergie pour la réalisation des opérations requises.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Ris-Orangis',
      intro: 'Notre service gratuit à Ris-Orangis couvre toutes les zones, du bourg aux hameaux périphériques. Pour Ris-Orangis, une préparation sur mesure est réalisée selon vos indications. Le secteur 91130 de Ris-Orangis est couvert sans supplément de prix par notre service d\'enlèvement gratuit de véhicules hors d\'usage. Les routes et chemins autour de Ris-Orangis sont parcourus régulièrement par nos véhicules.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Ris-Orangis',
      questions: [
        { q: 'L\'intervention à Ris-Orangis est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Ris-Orangis sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Ris-Orangis',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
