import { PageData } from '../types'

export const vernouilletData: PageData = {
  slug: 'vernouillet',
  entityType: 'City',
  metaTitle: 'Épaviste Vernouillet (78540) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Vernouillet (78540). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
  relatedServicesSlugs: [
    'enlevement-epave-parking-souterrain',
    'enlevement-voiture-en-panne',
    'enlevement-voiture-sans-carte-grise'
  ],
  relatedCitiesSlugs: [
    'enlevement-epave-yvelines'
  ],
  blocks: [
    {
      type: 'Hero',
      title: 'Débarrassez-vous de votre épave à Vernouillet gratuitement autour de Vernouillet',
      subtitle: 'À Vernouillet (78540), nous organisons l\'enlèvement gratuit de votre épave partout dans Vernouillet.',
      badge: 'Vernouillet (78540)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Vernouillet',
      content: 'Un véhicule abandonné sur votre terrain à Vernouillet vous gêne au quotidien ? Les zones rurales autour de Vernouillet sont intégralement couvertes par notre service. Notre équipe à Vernouillet connaît les spécificités des propriétés rurales et agricoles. Un créneau vous est proposé en fonction des informations communiquées sur le véhicule. Le rendez-vous à Vernouillet est programmé avec une logistique adaptée aux routes et chemins.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Vernouillet, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Yvelines sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le parcours du véhicule comprend une étape chez un partenaire habilité pour la suite du traitement. L\'ensemble des opérations est réalisé dans les conditions fixées par la réglementation. La coordination des acteurs garantit le respect des procédures à chaque étape du parcours.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Vernouillet',
      intro: 'Nous intervenons à Vernouillet dans tous les secteurs, y compris dans les zones à accès difficile. À Vernouillet, le professionnel confirme avec vous les modalités avant de se déplacer. Le secteur 78540 de Vernouillet est couvert sans supplément de prix par notre service d\'enlèvement gratuit de véhicules hors d\'usage. Les zones industrielles et résidentielles autour de Vernouillet sont comprises.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Vernouillet',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Vernouillet est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Vernouillet sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Vernouillet',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
