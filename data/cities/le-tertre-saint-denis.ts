import { PageData } from '../types'

export const leTertreSaintDenisData: PageData = {
  slug: 'le-tertre-saint-denis',
  entityType: 'City',
  metaTitle: 'Épaviste Le Tertre-Saint-Denis (78980) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Le Tertre-Saint-Denis (78980). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Service professionnel d\'enlèvement VHU à Le Tertre-Saint-Denis (78980) dans tout Le Tertre-Saint-Denis',
      subtitle: 'À Le Tertre-Saint-Denis (78980) : notre équipe retire gratuitement votre vieux véhicule dans tout Le Tertre-Saint-Denis.',
      badge: 'Le Tertre-Saint-Denis (78980)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Le Tertre-Saint-Denis',
      content: 'Vous habitez à Le Tertre-Saint-Denis et une épave vous encombre depuis des mois ? Agissez gratuitement. Nous nous déplaçons gratuitement jusqu\'à vous, même dans les zones moins denses du département. Nous organisons à Le Tertre-Saint-Denis des interventions adaptées aux grandes propriétés et aux écarts. Les informations communiquées au moment de la demande facilitent la préparation du retrait. Notre connaissance des zones rurales garantit une intervention efficace à Le Tertre-Saint-Denis.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Le Tertre-Saint-Denis soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Yvelines sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'L\'organisation logistique prévoit un transfert vers un professionnel agréé pour le traitement de ces véhicules. Les opérations prévues par la réglementation et le recyclage y sont assurés dans les filières adaptées. Les professionnels se relaient pour couvrir l\'ensemble des phases du processus réglementaire.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Le Tertre-Saint-Denis',
      intro: 'La commune de Le Tertre-Saint-Denis est intégralement couverte par notre service gratuit d\'enlèvement. L\'intervention à Le Tertre-Saint-Denis fait l\'objet d\'une préparation approfondie en amont. Notre équipe couvre le secteur postal 78980 avec une logistique dédiée. Les habitants de Le Tertre-Saint-Denis peuvent compter sur notre présence régulière dans ce code postal. Les communes autour de Le Tertre-Saint-Denis sont également parcourues par nos dépanneuses.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Le Tertre-Saint-Denis',
      questions: [
        { q: 'L\'intervention à Le Tertre-Saint-Denis est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Le Tertre-Saint-Denis sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Le Tertre-Saint-Denis',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
