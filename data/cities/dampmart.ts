import { PageData } from '../types'

export const dampmartData: PageData = {
  slug: 'dampmart',
  entityType: 'City',
  metaTitle: 'Épaviste Dampmart (77400) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Dampmart (77400). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
  relatedServicesSlugs: [
    'enlevement-epave-parking-souterrain',
    'enlevement-voiture-en-panne',
    'enlevement-voiture-sans-carte-grise'
  ],
  relatedCitiesSlugs: [
    'enlevement-epave-seine-et-marne'
  ],
  blocks: [
    {
      type: 'Hero',
      title: 'Débarrassez-vous de votre épave à Dampmart gratuitement autour de Dampmart',
      subtitle: 'Enlèvement d\'épave Dampmart (77400) : service rapide et gratuit pour votre VHU dans tout Dampmart.',
      badge: 'Dampmart (77400)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Dampmart',
      content: 'Votre vieux véhicule à Dampmart prend la poussière et vous voulez vous en séparer ? Nous nous déplaçons gratuitement jusqu\'à vous, même dans les zones moins denses du département. À Dampmart, nous proposons un enlèvement gratuit même dans les zones les plus isolées. Le dispositif logistique est adapté à chaque situation pour garantir une intervention de qualité. Les modalités de l\'intervention à Dampmart sont conçues pour les propriétés rurales.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Dampmart, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le relais est assuré par un opérateur habilité qui prend en charge les étapes réglementaires. Le respect des textes en vigueur est garanti par l\'intervention de professionnels habilités. Les rôles de chacun sont documentés pour garantir la traçabilité du parcours du véhicule.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Dampmart',
      intro: 'L\'enlèvement à Dampmart est organisé sans considération de zone ou de quartier. Notre équipe adapte sa logistique à Dampmart en fonction de chaque configuration. Le code postal 77400 est intégré dans notre tournée d\'enlèvement régulière à Dampmart, ce qui garantit une intervention rapide. Nous étendons notre intervention au-delà de Dampmart pour couvrir un large secteur.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Dampmart',
      questions: [
        { q: 'L\'intervention à Dampmart est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Dampmart sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Dampmart',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
