import { PageData } from '../types'

export const villeneuveSaintDenisData: PageData = {
  slug: 'villeneuve-saint-denis',
  entityType: 'City',
  metaTitle: 'Épaviste Villeneuve-Saint-Denis (77174) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Villeneuve-Saint-Denis (77174). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Solution enlèvement d\'épave sans frais à Villeneuve-Saint-Denis (77174) pour Villeneuve-Saint-Denis',
      subtitle: 'À Villeneuve-Saint-Denis (77174), nous organisons l\'enlèvement gratuit de votre épave partout dans Villeneuve-Saint-Denis.',
      badge: 'Villeneuve-Saint-Denis (77174)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Villeneuve-Saint-Denis',
      content: 'À Villeneuve-Saint-Denis, nous retirons gratuitement les épaves même dans les zones les plus reculées. Vivre à la campagne à Villeneuve-Saint-Denis ne signifie pas renoncer à un service d\'enlèvement professionnel. Notre service à Villeneuve-Saint-Denis garantit un retrait gratuit où que vous soyez dans la commune. Le passage est planifié selon les indications reçues sur l\'emplacement exact du véhicule. Nous prévoyons le passage à Villeneuve-Saint-Denis en fonction des conditions météo et d\'accès.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'L\'enlèvement d\'un véhicule hors d\'usage à Villeneuve-Saint-Denis implique une stricte conformité réglementaire. Voici les éléments à préparer. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Après retrait, le véhicule est pris en relais par un opérateur de la filière de recyclage. La réglementation en vigueur est suivie par l\'ensemble des intervenants de la filière. Les professionnels habilités prennent le relais selon le planning établi lors de l\'enlèvement.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Villeneuve-Saint-Denis',
      intro: 'Nous retirons les épaves dans chaque rue et chaque quartier de Villeneuve-Saint-Denis. L\'intervention à Villeneuve-Saint-Denis est programmée après avoir pris connaissance de votre situation. Les habitants du 77174 à Villeneuve-Saint-Denis bénéficient d\'un passage régulier de nos équipes et d\'une prise en charge adaptée à ce secteur. Les communes situées à proximité de Villeneuve-Saint-Denis peuvent bénéficier d\'un enlèvement.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Villeneuve-Saint-Denis',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Villeneuve-Saint-Denis est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Villeneuve-Saint-Denis sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Villeneuve-Saint-Denis',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
