import { PageData } from '../types'

export const villeneuveLeComteData: PageData = {
  slug: 'villeneuve-le-comte',
  entityType: 'City',
  metaTitle: 'Épaviste Villeneuve-le-Comte (77174) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Villeneuve-le-Comte (77174). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Débarras d\'épave automobile à Villeneuve-le-Comte (77174) par épaviste à Villeneuve-le-Comte',
      subtitle: 'Service d\'enlèvement à Villeneuve-le-Comte (77174) : retrait gratuit de votre VHU par notre équipe à Villeneuve-le-Comte.',
      badge: 'Villeneuve-le-Comte (77174)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Villeneuve-le-Comte',
      content: 'Dans le secteur rural de Villeneuve-le-Comte, nous nous déplaçons gratuitement pour enlever votre épave. Les propriétés rurales de Villeneuve-le-Comte sont desservies par notre service sans supplément. Nous organisons à Villeneuve-le-Comte des interventions adaptées aux grandes propriétés et aux écarts. Un échange préalable permet de prévoir le matériel approprié et le créneau de passage. Notre connaissance des zones rurales garantit une intervention efficace à Villeneuve-le-Comte.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'L\'enlèvement d\'un véhicule hors d\'usage à Villeneuve-le-Comte implique une stricte conformité réglementaire. Voici les éléments à préparer. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Après l\'enlèvement, le véhicule est acheminé vers une installation partenaire autorisée pour les opérations de fin de vie. La prise en charge respecte les dispositions réglementaires applicables aux véhicules hors d\'usage. Chaque phase est prise en charge par le professionnel compétent pour ce type d\'opération.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Villeneuve-le-Comte',
      intro: 'À Villeneuve-le-Comte, la prise en charge de votre épave se fait quel que soit l\'endroit exact. Le rendez-vous pour Villeneuve-le-Comte est fixé après un échange sur les conditions d\'accès. La zone 77174 fait partie de notre secteur d\'intervention prioritaire. Nous organisons des passages réguliers dans cette partie de Villeneuve-le-Comte. Les communes qui entourent Villeneuve-le-Comte profitent également de notre service gratuit.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Villeneuve-le-Comte',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Villeneuve-le-Comte est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Villeneuve-le-Comte sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Villeneuve-le-Comte',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
