import { PageData } from '../types'

export const vairesSurMarneData: PageData = {
  slug: 'vaires-sur-marne',
  entityType: 'City',
  metaTitle: 'Épaviste Vaires-sur-Marne (77360) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Vaires-sur-Marne (77360). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Enlèvement voiture hors d\'usage Vaires-sur-Marne (77360) - Service Vaires-sur-Marne',
      subtitle: 'Nous enlevons les épaves à Vaires-sur-Marne (77360). Prestation gratuite incluant remorquage à Vaires-sur-Marne.',
      badge: 'Vaires-sur-Marne (77360)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Vaires-sur-Marne',
      content: 'À Vaires-sur-Marne, nous retirons gratuitement les épaves même dans les zones les plus reculées. Dans les secteurs ruraux autour de Vaires-sur-Marne, l\'accès à un service d\'enlèvement est simplifié. Nous intervenons à Vaires-sur-Marne sur les terrains les plus difficiles d\'accès. La coordination avec le propriétaire permet de caler le meilleur créneau pour l\'enlèvement. L\'organisation de l\'enlèvement à Vaires-sur-Marne tient compte des distances et de l\'accessibilité rurale.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'L\'enlèvement d\'un véhicule hors d\'usage à Vaires-sur-Marne implique une stricte conformité réglementaire. Voici les éléments à préparer. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'L\'enlèvement réalisé, le transfert vers un établissement partenaire compétent est assuré. Les opérateurs impliqués appliquent les règles en vigueur pour le traitement de ces véhicules. Les professionnels habilités prennent le relais selon le planning établi lors de l\'enlèvement.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Vaires-sur-Marne',
      intro: 'La tournée de nos dépanneuses couvre Vaires-sur-Marne en intégralité chaque semaine. L\'intervention à Vaires-sur-Marne fait l\'objet d\'une préparation approfondie en amont. Les demandes pour le 77360 de Vaires-sur-Marne sont traitées en priorité par notre équipe qui connaît bien ce secteur. Notre couverture géographique dépasse Vaires-sur-Marne pour inclure les communes avoisinantes.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Vaires-sur-Marne',
      questions: [
        { q: 'L\'intervention à Vaires-sur-Marne est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Vaires-sur-Marne sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Vaires-sur-Marne',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
