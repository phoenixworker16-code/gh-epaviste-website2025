import { PageData } from '../types'

export const buresSurYvetteData: PageData = {
  slug: 'bures-sur-yvette',
  entityType: 'City',
  metaTitle: 'Épaviste Bures-sur-Yvette (91440) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Bures-sur-Yvette (91440). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Retrait d\'épave par professionnel agréé à Bures-sur-Yvette (91440) dans tout Bures-sur-Yvette',
      subtitle: 'Besoin d\'un épaviste à Bures-sur-Yvette (91440) ? Enlèvement gratuit de votre VHU dans tout Bures-sur-Yvette.',
      badge: 'Bures-sur-Yvette (91440)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Bures-sur-Yvette',
      content: 'Dans la campagne autour de Bures-sur-Yvette, débarrassez-vous gratuitement de votre épave. Même à Bures-sur-Yvette, au bout d\'un chemin, notre dépanneuse peut accéder à votre épave. Le service à Bures-sur-Yvette est conçu pour les zones agricoles et les habitations isolées. L\'organisation du retrait tient compte de l\'emplacement du véhicule, de son état et des conditions d\'accès. Le rendez-vous à Bures-sur-Yvette est organisé pour minimiser les déplacements superflus.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'L\'enlèvement d\'un véhicule hors d\'usage à Bures-sur-Yvette implique une stricte conformité réglementaire. Voici les éléments à préparer. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Essonne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le véhicule est conduit vers un professionnel partenaire après l\'enlèvement. Les obligations environnementales sont satisfaites par les partenaires de la filière. Le transfert est organisé avec un partenaire spécialisé dans les procédures applicables aux véhicules hors d\'usage.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Bures-sur-Yvette',
      intro: 'Même dans les secteurs les plus excentrés de Bures-sur-Yvette, nous organisons l\'enlèvement. Chaque enlèvement à Bures-sur-Yvette est préparé en étudiant les accès et les contraintes locales. Le code postal 91440 est intégré dans notre tournée d\'enlèvement régulière à Bures-sur-Yvette, ce qui garantit une intervention rapide. Autour de Bures-sur-Yvette, notre dispositif d\'intervention s\'étend aux zones péri-urbaines.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Bures-sur-Yvette',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Bures-sur-Yvette est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Bures-sur-Yvette sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Bures-sur-Yvette',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
