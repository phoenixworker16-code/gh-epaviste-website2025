import { PageData } from '../types'

export const bussySaintGeorgesData: PageData = {
  slug: 'bussy-saint-georges',
  entityType: 'City',
  metaTitle: 'Épaviste Bussy-Saint-Georges (77600) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Bussy-Saint-Georges (77600). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Service d\'enlèvement d\'épave à Bussy-Saint-Georges (77600) - Intervention Bussy-Saint-Georges',
      subtitle: 'Votre épaviste à Bussy-Saint-Georges (77600) : intervention gratuite et rapide pour votre VHU dans Bussy-Saint-Georges.',
      badge: 'Bussy-Saint-Georges (77600)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Bussy-Saint-Georges',
      content: 'À Bussy-Saint-Georges, même les épaves situées sur des terrains difficiles sont prises en charge. Notre équipe est habituée aux accès ruraux à Bussy-Saint-Georges et intervient dans les meilleures conditions. Notre service rural à Bussy-Saint-Georges garantit un retrait professionnel sans contrainte de distance. Le programme d\'intervention est défini avec le propriétaire pour une prise en charge optimale. Notre connaissance des zones rurales garantit une intervention efficace à Bussy-Saint-Georges.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'L\'enlèvement d\'un véhicule hors d\'usage à Bussy-Saint-Georges implique une stricte conformité réglementaire. Voici les éléments à préparer. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'La remise du véhicule à un opérateur spécialisé est prévue dans l\'organisation du service. Le cadre réglementaire est respecté à chaque étape par les professionnels habilités. Le transfert est organisé avec un partenaire spécialisé dans les procédures applicables aux véhicules hors d\'usage.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Bussy-Saint-Georges',
      intro: 'Aucun quartier de Bussy-Saint-Georges n\'est exclu : nous intervenons partout dans la commune. Les contraintes spécifiques à Bussy-Saint-Georges sont intégrées dans l\'organisation du retrait. La zone 77600 fait partie de notre secteur d\'intervention prioritaire. Nous organisons des passages réguliers dans cette partie de Bussy-Saint-Georges. Si vous résidez près de Bussy-Saint-Georges, notre service d\'enlèvement est également accessible.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Bussy-Saint-Georges',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Bussy-Saint-Georges est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Bussy-Saint-Georges sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Bussy-Saint-Georges',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
