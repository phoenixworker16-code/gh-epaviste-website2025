import { PageData } from '../types'

export const roinvilleData: PageData = {
  slug: 'roinville',
  entityType: 'City',
  metaTitle: 'Épaviste Roinville (91410) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Roinville (91410). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Service de retrait d\'épave à Roinville sans frais dans tout Roinville (91410)',
      subtitle: 'Enlèvement gratuit dans le 91410 à Roinville. Débarras professionnel de votre épave à Roinville.',
      badge: 'Roinville (91410)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Roinville',
      content: 'Redonnez de l\'espace à votre terrain à Roinville en confiant cette épave à notre service. À la campagne, à Roinville, une épave qui rouille sur un terrain est fréquente mais pas une fatalité. À Roinville, nous retirons les épaves des champs, prés et chemins sans difficulté. L\'organisation du retrait tient compte de l\'emplacement du véhicule, de son état et des conditions d\'accès. Nous adaptons notre intervention à Roinville en fonction de la configuration des lieux.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Roinville soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Essonne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Après l\'intervention, la prise en charge est relayée à un partenaire technique habilité. Les formalités requises sont accomplies par les partenaires compétents dans la filière. Le processus est organisé de manière à respecter les obligations à chaque phase du parcours.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Roinville',
      intro: 'À Roinville, nous pouvons retirer votre véhicule hors d\'usage en tout point du territoire. Les contraintes spécifiques à Roinville sont intégrées dans l\'organisation du retrait. Notre équipe couvre le secteur postal 91410 avec une logistique dédiée. Les habitants de Roinville peuvent compter sur notre présence régulière dans ce code postal. Les zones industrielles et résidentielles autour de Roinville sont comprises.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Roinville',
      questions: [
        { q: 'L\'intervention à Roinville est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Roinville sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Roinville',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
