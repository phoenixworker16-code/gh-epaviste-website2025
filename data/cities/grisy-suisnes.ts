import { PageData } from '../types'

export const grisySuisnesData: PageData = {
  slug: 'grisy-suisnes',
  entityType: 'City',
  metaTitle: 'Épaviste Grisy-Suisnes (77166) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Grisy-Suisnes (77166). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Enlèvement épave sans papier à Grisy-Suisnes (77166) dans tout le 77166',
      subtitle: 'Débarrassez votre épave à Grisy-Suisnes (77166) sans frais. Notre service couvre tout le secteur de Grisy-Suisnes.',
      badge: 'Grisy-Suisnes (77166)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Grisy-Suisnes',
      content: 'Situé à Grisy-Suisnes, votre véhicule hors d\'usage encombre votre terrain ou votre cour ? Même à Grisy-Suisnes, au bout d\'un chemin, notre dépanneuse peut accéder à votre épave. Le déplacement à Grisy-Suisnes est inclus dans notre service, sans supplément kilométrique. Les informations transmises permettent d\'anticiper les besoins techniques et humains. Les distances jusqu\'à Grisy-Suisnes sont anticipées dans notre organisation logistique.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'L\'enlèvement d\'un véhicule hors d\'usage à Grisy-Suisnes implique une stricte conformité réglementaire. Voici les éléments à préparer. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le véhicule est dirigé vers un prestataire spécialisé dans le traitement des véhicules en fin de vie. La fin de vie du véhicule est traitée dans le respect des filières autorisées. Le processus est conçu pour assurer une prise en charge complète sans rupture de service.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Grisy-Suisnes',
      intro: 'Toutes les rues de Grisy-Suisnes sont couvertes, quel que soit le type d\'habitation. Le planning d\'intervention à Grisy-Suisnes intègre les contraintes horaires du propriétaire. Notre service dessert quotidiennement le secteur 77166 de Grisy-Suisnes avec des équipes spécialisées dans l\'enlèvement d\'épaves. Nous ne nous limitons pas à Grisy-Suisnes : les communes alentour sont aussi desservies.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Grisy-Suisnes',
      questions: [
        { q: 'L\'intervention à Grisy-Suisnes est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Grisy-Suisnes sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Grisy-Suisnes',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
