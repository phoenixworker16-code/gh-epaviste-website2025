import { PageData } from '../types'

export const orvilliersData: PageData = {
  slug: 'orvilliers',
  entityType: 'City',
  metaTitle: 'Épaviste Orvilliers (78910) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Orvilliers (78910). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Faire enlever son VHU à Orvilliers par un professionnel dans le 78910 de Orvilliers',
      subtitle: 'Service d\'enlèvement à Orvilliers (78910) : retrait gratuit de votre VHU par notre équipe à Orvilliers.',
      badge: 'Orvilliers (78910)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Orvilliers',
      content: 'Situé à Orvilliers, votre véhicule hors d\'usage encombre votre terrain ou votre cour ? Les propriétés rurales de Orvilliers sont desservies par notre service sans supplément. Nous intervenons à Orvilliers sur les terrains les plus difficiles d\'accès. La demande permet de préciser les contraintes de stationnement et les documents disponibles avant l\'intervention. Le passage est organisé pour vous offrir un enlèvement sans contrainte, même à Orvilliers.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'L\'enlèvement d\'un véhicule hors d\'usage à Orvilliers implique une stricte conformité réglementaire. Voici les éléments à préparer. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Yvelines sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'L\'organisation comprend un relais vers un établissement habilité pour la suite des opérations. Les opérateurs impliqués appliquent les règles en vigueur pour le traitement de ces véhicules. Le transfert est organisé avec un partenaire spécialisé dans les procédures applicables aux véhicules hors d\'usage.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Orvilliers',
      intro: 'Grâce à notre organisation, Orvilliers est entièrement desservie pour l\'enlèvement d\'épaves. Nous organisons le passage à Orvilliers avec une préparation minutieuse de l\'itinéraire. Notre service dessert quotidiennement le secteur 78910 de Orvilliers avec des équipes spécialisées dans l\'enlèvement d\'épaves. À partir de Orvilliers, nos dépanneuses rayonnent dans un large secteur géographique.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Orvilliers',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Orvilliers est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Orvilliers sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Orvilliers',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
