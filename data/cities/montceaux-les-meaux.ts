import { PageData } from '../types'

export const montceauxLesMeauxData: PageData = {
  slug: 'montceaux-les-meaux',
  entityType: 'City',
  metaTitle: 'Épaviste Montceaux-lès-Meaux (77470) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Montceaux-lès-Meaux (77470). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Votre épaviste de secteur à Montceaux-lès-Meaux (77470) pour enlèvement à Montceaux-lès-Meaux',
      subtitle: 'Débarrassez votre épave à Montceaux-lès-Meaux (77470) sans frais. Notre service couvre tout le secteur de Montceaux-lès-Meaux.',
      badge: 'Montceaux-lès-Meaux (77470)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Montceaux-lès-Meaux',
      content: 'Votre propriété à Montceaux-lès-Meaux est encombrée par un véhicule hors d\'usage ? Nous intervenons. Dans la campagne de Montceaux-lès-Meaux, nous intervenons sans frais de déplacement supplémentaires. Le déplacement à Montceaux-lès-Meaux est inclus dans notre service, sans supplément kilométrique. Les informations transmises permettent d\'anticiper les besoins techniques et humains. Le passage est organisé pour vous offrir un enlèvement sans contrainte, même à Montceaux-lès-Meaux.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'L\'enlèvement d\'un véhicule hors d\'usage à Montceaux-lès-Meaux implique une stricte conformité réglementaire. Voici les éléments à préparer. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le véhicule est acheminé vers un partenaire disposant des compétences pour le traitement de fin de vie. La réglementation encadrant les véhicules hors d\'usage est respectée par les intervenants agréés. Chaque étape est confiée à un professionnel adapté, de l\'enlèvement jusqu\'à la valorisation finale.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Montceaux-lès-Meaux',
      intro: 'Notre équipe se rend dans chaque quartier de Montceaux-lès-Meaux pour les enlèvements programmés. La préparation du retrait à Montceaux-lès-Meaux inclut une évaluation des conditions d\'intervention. Le code postal 77470 est intégré dans notre tournée d\'enlèvement régulière à Montceaux-lès-Meaux, ce qui garantit une intervention rapide. Au-delà des limites de Montceaux-lès-Meaux, notre service continue dans les secteurs alentour.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Montceaux-lès-Meaux',
      questions: [
        { q: 'L\'intervention à Montceaux-lès-Meaux est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Montceaux-lès-Meaux sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Montceaux-lès-Meaux',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
