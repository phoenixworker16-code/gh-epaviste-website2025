import { PageData } from '../types'

export const chanteloupEnBrieData: PageData = {
  slug: 'chanteloup-en-brie',
  entityType: 'City',
  metaTitle: 'Épaviste Chanteloup-en-Brie (77600) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Chanteloup-en-Brie (77600). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Solution enlèvement d\'épave sans frais à Chanteloup-en-Brie (77600) pour Chanteloup-en-Brie',
      subtitle: 'À Chanteloup-en-Brie (77600) : solution complète d\'enlèvement d\'épave gratuite pour les habitants de Chanteloup-en-Brie.',
      badge: 'Chanteloup-en-Brie (77600)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Chanteloup-en-Brie',
      content: 'Votre vieux véhicule à Chanteloup-en-Brie prend la poussière et vous voulez vous en séparer ? Les habitants des zones rurales de Chanteloup-en-Brie nous font confiance pour un service fiable. À Chanteloup-en-Brie, nous proposons un enlèvement gratuit même dans les zones les plus isolées. Le dispositif logistique est adapté à chaque situation pour garantir une intervention de qualité. Le rendez-vous à Chanteloup-en-Brie est organisé pour minimiser les déplacements superflus.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Chanteloup-en-Brie soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le véhicule est remis à un partenaire spécialisé pour la suite de son traitement réglementaire. La conformité aux textes réglementaires est vérifiée par les opérateurs compétents. La progression du véhicule dans la filière est suivie par les différents opérateurs concernés.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Chanteloup-en-Brie',
      intro: 'Les propriétaires à Chanteloup-en-Brie peuvent compter sur notre service dans toute la commune. Avant l\'enlèvement à Chanteloup-en-Brie, les informations pratiques sont échangées avec le propriétaire. Pour le secteur 77600, nos équipes interviennent régulièrement et connaissent parfaitement les accès et particularités de Chanteloup-en-Brie. À partir du secteur de Chanteloup-en-Brie, nous desservons également les zones avoisinantes.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Chanteloup-en-Brie',
      questions: [
        { q: 'L\'intervention à Chanteloup-en-Brie est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Chanteloup-en-Brie sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Chanteloup-en-Brie',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
