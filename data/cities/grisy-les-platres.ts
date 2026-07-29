import { PageData } from '../types'

export const grisyLesPlatresData: PageData = {
  slug: 'grisy-les-platres',
  entityType: 'City',
  metaTitle: 'Épaviste Grisy-les-Plâtres (95810) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Grisy-les-Plâtres (95810). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
  relatedServicesSlugs: [
    'enlevement-epave-parking-souterrain',
    'enlevement-voiture-en-panne',
    'enlevement-voiture-sans-carte-grise'
  ],
  relatedCitiesSlugs: [
    'val-d-oise'
  ],
  blocks: [
    {
      type: 'Hero',
      title: 'Retrait de épave sans frais à Grisy-les-Plâtres (95810) - Service pour Grisy-les-Plâtres',
      subtitle: 'À Grisy-les-Plâtres (95810) : notre équipe retire gratuitement votre vieux véhicule dans tout Grisy-les-Plâtres.',
      badge: 'Grisy-les-Plâtres (95810)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Grisy-les-Plâtres',
      content: 'Redonnez de l\'espace à votre terrain à Grisy-les-Plâtres en confiant cette épave à notre service. À Grisy-les-Plâtres, même dans les lieux-dits et les hameaux, nous retirons votre épave gratuitement. Nous intervenons à Grisy-les-Plâtres pour un enlèvement gratuit, même dans les lieux difficilement accessibles. L\'organisation du retrait tient compte de l\'emplacement du véhicule, de son état et des conditions d\'accès. Notre connaissance des zones rurales garantit une intervention efficace à Grisy-les-Plâtres.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Grisy-les-Plâtres, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Val-d\'Oise sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le parcours du véhicule comprend une étape chez un partenaire habilité pour la suite du traitement. Le traitement est effectué dans le respect des obligations environnementales en vigueur. Chaque étape est confiée à un professionnel adapté, de l\'enlèvement jusqu\'à la valorisation finale.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Grisy-les-Plâtres',
      intro: 'L\'enlèvement à Grisy-les-Plâtres est organisé sans considération de zone ou de quartier. Chaque enlèvement à Grisy-les-Plâtres est préparé en étudiant les accès et les contraintes locales. Le code postal 95810 est intégré dans notre tournée d\'enlèvement régulière à Grisy-les-Plâtres, ce qui garantit une intervention rapide. Nous étendons notre intervention au-delà de Grisy-les-Plâtres pour couvrir un large secteur.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Grisy-les-Plâtres',
      questions: [
        { q: 'L\'intervention à Grisy-les-Plâtres est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Grisy-les-Plâtres sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Grisy-les-Plâtres',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
