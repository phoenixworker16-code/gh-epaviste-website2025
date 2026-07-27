import { PageData } from '../types'

export const lisleAdamData: PageData = {
  slug: 'lisle-adam',
  entityType: 'City',
  metaTitle: 'Épaviste L\'Isle-Adam (95290) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à L\'Isle-Adam (95290). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Débarrassez-vous de votre épave à L\'Isle-Adam gratuitement autour de L\'Isle-Adam',
      subtitle: 'Solution enlèvement épave à L\'Isle-Adam (95290). Intervention rapide et gratuite dans le 95290 de L\'Isle-Adam.',
      badge: 'L\'Isle-Adam (95290)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à L\'Isle-Adam',
      content: 'Dans le secteur rural de L\'Isle-Adam, nous nous déplaçons gratuitement pour enlever votre épave. Votre propriété à L\'Isle-Adam est accessible à nos dépanneuses pour un enlèvement gratuit. Nous intervenons à L\'Isle-Adam pour un enlèvement gratuit, même dans les lieux difficilement accessibles. Les conditions d\'accès sont vérifiées avant le départ pour garantir une intervention sans accroc. Notre équipe connaît les spécificités des zones rurales autour de L\'Isle-Adam pour une intervention adaptée.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis L\'Isle-Adam, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Val-d\'Oise sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Une fois le véhicule pris en charge, il est transféré vers un opérateur partenaire qualifié. L\'ensemble des acteurs respecte les dispositions réglementaires encadrant cette activité. Les démarches sont préparées afin que le relais vers le partenaire soit effectué dans le cadre prévu.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur L\'Isle-Adam',
      intro: 'La zone d\'intervention à L\'Isle-Adam comprend aussi bien les voies principales que les impasses. Nous préparons l\'enlèvement à L\'Isle-Adam avec le souci du détail pour une exécution parfaite. Notre service dessert quotidiennement le secteur 95290 de L\'Isle-Adam avec des équipes spécialisées dans l\'enlèvement d\'épaves. Les habitants des environs de L\'Isle-Adam peuvent aussi faire appel à notre service.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à L\'Isle-Adam',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à L\'Isle-Adam est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à L\'Isle-Adam sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à L\'Isle-Adam',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
