import { PageData } from '../types'

export const villiersSaintGeorgesData: PageData = {
  slug: 'villiers-saint-georges',
  entityType: 'City',
  metaTitle: 'Épaviste Villiers-Saint-Georges (77560) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Villiers-Saint-Georges (77560). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Débarras d\'épave automobile à Villiers-Saint-Georges (77560) par épaviste à Villiers-Saint-Georges',
      subtitle: 'Enlèvement d\'épave Villiers-Saint-Georges (77560) : service rapide et gratuit pour votre VHU dans tout Villiers-Saint-Georges.',
      badge: 'Villiers-Saint-Georges (77560)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Villiers-Saint-Georges',
      content: 'À Villiers-Saint-Georges, nous retirons gratuitement les épaves même dans les zones les plus reculées. À Villiers-Saint-Georges, faire retirer une épave de son terrain, c\'est aussi valoriser sa propriété. À Villiers-Saint-Georges, même dans les secteurs isolés, notre équipe se déplace gratuitement. La logistique est organisée pour garantir une intervention efficace et sans attente. Nous adaptons notre intervention à Villiers-Saint-Georges en fonction de la configuration des lieux.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'L\'enlèvement d\'un véhicule hors d\'usage à Villiers-Saint-Georges implique une stricte conformité réglementaire. Voici les éléments à préparer. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'L\'organisation mise en place prévoit un relais vers un opérateur partenaire pour les phases suivantes. La conformité du traitement est assurée par le respect des procédures en vigueur. La continuité entre l\'enlèvement et le traitement est assurée par une organisation cadrée.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Villiers-Saint-Georges',
      intro: 'Les équipes affectées à Villiers-Saint-Georges connaissent parfaitement chaque secteur de la commune. Un créneau d\'enlèvement à Villiers-Saint-Georges vous est proposé selon vos disponibilités. Les demandes pour le 77560 de Villiers-Saint-Georges sont traitées en priorité par notre équipe qui connaît bien ce secteur. Au départ de Villiers-Saint-Georges, nos équipes couvrent un vaste secteur géographique.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Villiers-Saint-Georges',
      questions: [
        { q: 'L\'intervention à Villiers-Saint-Georges est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Villiers-Saint-Georges sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Villiers-Saint-Georges',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
