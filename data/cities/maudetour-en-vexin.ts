import { PageData } from '../types'

export const maudetourEnVexinData: PageData = {
  slug: 'maudetour-en-vexin',
  entityType: 'City',
  metaTitle: 'Épaviste Maudétour-en-Vexin (95420) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Maudétour-en-Vexin (95420). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Débarrassez votre véhicule hors d\'usage à Maudétour-en-Vexin (95420) - Épaviste Maudétour-en-Vexin',
      subtitle: 'À Maudétour-en-Vexin (95420) : faites enlever votre épave gratuitement par des professionnels dans tout Maudétour-en-Vexin.',
      badge: 'Maudétour-en-Vexin (95420)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Maudétour-en-Vexin',
      content: 'Redonnez de l\'espace à votre terrain à Maudétour-en-Vexin en confiant cette épave à notre service. À la campagne, à Maudétour-en-Vexin, une épave qui rouille sur un terrain est fréquente mais pas une fatalité. Notre service rural à Maudétour-en-Vexin garantit un retrait professionnel sans contrainte de distance. Un contact est établi avant le passage pour confirmer les modalités de l\'intervention. L\'organisation de l\'enlèvement à Maudétour-en-Vexin tient compte des distances et de l\'accessibilité rurale.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Maudétour-en-Vexin soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Val-d\'Oise sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le véhicule est acheminé vers un professionnel autorisé à intervenir dans cette filière spécifique. La réglementation en vigueur est suivie par l\'ensemble des intervenants de la filière. Les partenaires se répartissent les opérations selon leur domaine d\'expertise respectif.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Maudétour-en-Vexin',
      intro: 'Tous les points de la commune de Maudétour-en-Vexin sont desservis, même les zones les moins denses. Avant de se déplacer à Maudétour-en-Vexin, l\'équipe vérifie les accès et prépare le matériel adapté. La zone 95420 fait partie de notre secteur d\'intervention prioritaire. Nous organisons des passages réguliers dans cette partie de Maudétour-en-Vexin. Les communes proches de Maudétour-en-Vexin sont incluses dans notre zone d\'intervention.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Maudétour-en-Vexin',
      questions: [
        { q: 'L\'intervention à Maudétour-en-Vexin est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Maudétour-en-Vexin sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Maudétour-en-Vexin',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
