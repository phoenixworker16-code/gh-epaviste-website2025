import { PageData } from '../types'

export const savignyLeTempleData: PageData = {
  slug: 'savigny-le-temple',
  entityType: 'City',
  metaTitle: 'Épaviste Savigny-le-Temple (77176) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Savigny-le-Temple (77176). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Débarras d\'épave automobile à Savigny-le-Temple (77176) par épaviste à Savigny-le-Temple',
      subtitle: 'Débarrassez votre épave à Savigny-le-Temple (77176) sans frais. Notre service couvre tout le secteur de Savigny-le-Temple.',
      badge: 'Savigny-le-Temple (77176)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Savigny-le-Temple',
      content: 'À Savigny-le-Temple, notre équipe se déplace jusque dans les hameaux pour retirer les épaves. Dans l\'environnement rural de Savigny-le-Temple, nous intervenons avec discrétion et efficacité. Nous organisons à Savigny-le-Temple des interventions adaptées aux grandes propriétés et aux écarts. La préparation logistique intègre les spécificités de chaque demande d\'enlèvement. Notre connaissance des zones rurales garantit une intervention efficace à Savigny-le-Temple.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Savigny-le-Temple, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Après enlèvement, la prise en charge est transmise à un opérateur spécialisé dans la filière automobile. Le partenaire assure les formalités et l\'orientation du véhicule vers les filières réglementaires appropriées. La coordination des acteurs garantit le respect des procédures à chaque étape du parcours.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Savigny-le-Temple',
      intro: 'Nous nous déplaçons dans tous les secteurs de Savigny-le-Temple pour un enlèvement gratuit. Le dispositif mis en place pour Savigny-le-Temple est adapté à chaque situation particulière. Les demandes pour le 77176 de Savigny-le-Temple sont traitées en priorité par notre équipe qui connaît bien ce secteur. Les routes et chemins autour de Savigny-le-Temple sont parcourus régulièrement par nos véhicules.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Savigny-le-Temple',
      questions: [
        { q: 'L\'intervention à Savigny-le-Temple est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Savigny-le-Temple sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Savigny-le-Temple',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
