import { PageData } from '../types'

export const ozouerLeVoulgisData: PageData = {
  slug: 'ozouer-le-voulgis',
  entityType: 'City',
  metaTitle: 'Épaviste Ozouer-le-Voulgis (77390) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Ozouer-le-Voulgis (77390). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Service rapide d\'enlèvement d\'épave à Ozouer-le-Voulgis (77390) dans tout Ozouer-le-Voulgis',
      subtitle: 'Solution enlèvement épave à Ozouer-le-Voulgis (77390). Intervention rapide et gratuite dans le 77390 de Ozouer-le-Voulgis.',
      badge: 'Ozouer-le-Voulgis (77390)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Ozouer-le-Voulgis',
      content: 'Dans la campagne de Ozouer-le-Voulgis, un véhicule hors d\'usage peut être retiré sans aucun frais. À Ozouer-le-Voulgis, l\'éloignement des centres urbains n\'empêche pas un enlèvement professionnel. Nous intervenons à Ozouer-le-Voulgis pour un enlèvement gratuit, même dans les lieux difficilement accessibles. Le dispositif logistique est adapté à chaque situation pour garantir une intervention de qualité. L\'intervention à Ozouer-le-Voulgis est préparée avec soin pour garantir votre satisfaction.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Ozouer-le-Voulgis, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le véhicule est pris en charge par un partenaire technique pour la suite des opérations réglementaires. Le recyclage et les démarches administratives sont pris en charge par les filières compétentes. La continuité du traitement est assurée par une organisation structurée entre les partenaires.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Ozouer-le-Voulgis',
      intro: 'Toutes les rues de Ozouer-le-Voulgis sont couvertes, quel que soit le type d\'habitation. À Ozouer-le-Voulgis, l\'intervention est minutieusement préparée pour éviter tout imprévu. Notre service dessert quotidiennement le secteur 77390 de Ozouer-le-Voulgis avec des équipes spécialisées dans l\'enlèvement d\'épaves. Au départ de Ozouer-le-Voulgis, nos équipes couvrent un vaste secteur géographique.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Ozouer-le-Voulgis',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Ozouer-le-Voulgis est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Ozouer-le-Voulgis sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Ozouer-le-Voulgis',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
