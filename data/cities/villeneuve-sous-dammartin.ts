import { PageData } from '../types'

export const villeneuveSousDammartinData: PageData = {
  slug: 'villeneuve-sous-dammartin',
  entityType: 'City',
  metaTitle: 'Épaviste Villeneuve-sous-Dammartin (77230) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Villeneuve-sous-Dammartin (77230). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Retrait auto hors d\'usage Villeneuve-sous-Dammartin (77230) dans le département 77230',
      subtitle: 'Votre véhicule hors d\'usage à Villeneuve-sous-Dammartin (77230) ? Enlèvement gratuit partout dans Villeneuve-sous-Dammartin.',
      badge: 'Villeneuve-sous-Dammartin (77230)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Villeneuve-sous-Dammartin',
      content: 'Dans la campagne de Villeneuve-sous-Dammartin, un véhicule hors d\'usage peut être retiré sans aucun frais. À Villeneuve-sous-Dammartin, même dans les lieux-dits et les hameaux, nous retirons votre épave gratuitement. Nous organisons à Villeneuve-sous-Dammartin des interventions adaptées aux grandes propriétés et aux écarts. La logistique est organisée pour garantir une intervention efficace et sans attente. Les modalités de l\'intervention à Villeneuve-sous-Dammartin sont conçues pour les propriétés rurales.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'L\'enlèvement d\'un véhicule hors d\'usage à Villeneuve-sous-Dammartin implique une stricte conformité réglementaire. Voici les éléments à préparer. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Après l\'enlèvement, le véhicule est acheminé vers une installation partenaire autorisée pour les opérations de fin de vie. Les étapes de traitement sont encadrées par les dispositions légales en vigueur. Le dispositif mis en place précise le rôle de chaque intervenant dans la chaîne de traitement.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Villeneuve-sous-Dammartin',
      intro: 'La commune de Villeneuve-sous-Dammartin est intégralement couverte par notre service gratuit d\'enlèvement. À Villeneuve-sous-Dammartin, le professionnel confirme avec vous les modalités avant de se déplacer. Notre service dessert quotidiennement le secteur 77230 de Villeneuve-sous-Dammartin avec des équipes spécialisées dans l\'enlèvement d\'épaves. Au départ de Villeneuve-sous-Dammartin, nos équipes couvrent un vaste secteur géographique.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Villeneuve-sous-Dammartin',
      questions: [
        { q: 'L\'intervention à Villeneuve-sous-Dammartin est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Villeneuve-sous-Dammartin sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Villeneuve-sous-Dammartin',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
