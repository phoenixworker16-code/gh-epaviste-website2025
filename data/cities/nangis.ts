import { PageData } from '../types'

export const nangisData: PageData = {
  slug: 'nangis',
  entityType: 'City',
  metaTitle: 'Épaviste Nangis (77370) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Nangis (77370). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Enlèvement voiture hors d\'usage Nangis (77370) - Service Nangis',
      subtitle: 'Épave à Nangis ? Intervention gratuite dans le secteur 77370 de Nangis sous 24-48h.',
      badge: 'Nangis (77370)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Nangis',
      content: 'Dans la campagne autour de Nangis, débarrassez-vous gratuitement de votre épave. Notre équipe est habituée aux accès ruraux à Nangis et intervient dans les meilleures conditions. Nous organisons à Nangis des interventions adaptées aux grandes propriétés et aux écarts. Les informations communiquées au moment de la demande facilitent la préparation du retrait. L\'intervention à Nangis est préparée avec soin pour garantir votre satisfaction.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Nangis soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le relais est assuré par un opérateur habilité qui prend en charge les étapes réglementaires. La conformité aux textes réglementaires est vérifiée par les opérateurs compétents. La chaîne de traitement est conçue pour assurer une prise en charge sans interruption.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Nangis',
      intro: 'Où que soit garé votre véhicule à Nangis, notre dépanneuse peut accéder pour le retirer. Les contraintes spécifiques à Nangis sont intégrées dans l\'organisation du retrait. La zone 77370 fait partie de notre secteur d\'intervention prioritaire. Nous organisons des passages réguliers dans cette partie de Nangis. Notre couverture géographique dépasse Nangis pour inclure les communes avoisinantes.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Nangis',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Nangis est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Nangis sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Nangis',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
