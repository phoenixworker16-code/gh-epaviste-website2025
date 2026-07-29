import { PageData } from '../types'

export const oinvilleSurMontcientData: PageData = {
  slug: 'oinville-sur-montcient',
  entityType: 'City',
  metaTitle: 'Épaviste Oinville-sur-Montcient (78250) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Oinville-sur-Montcient (78250). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Débarras véhicule hors d\'usage Oinville-sur-Montcient (78250) - Épaviste Oinville-sur-Montcient',
      subtitle: 'Enlèvement épave Oinville-sur-Montcient (78250) : service gratuit pour votre VHU dans tout le secteur de Oinville-sur-Montcient.',
      badge: 'Oinville-sur-Montcient (78250)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Oinville-sur-Montcient',
      content: 'Un véhicule abandonné sur votre terrain à Oinville-sur-Montcient vous gêne au quotidien ? Notre équipe est habituée aux accès ruraux à Oinville-sur-Montcient et intervient dans les meilleures conditions. À Oinville-sur-Montcient, nous proposons un enlèvement gratuit même dans les zones les plus isolées. Les modalités logistiques sont ajustées selon les particularités de chaque intervention. Les modalités d\'accès à Oinville-sur-Montcient sont vérifiées avant le départ pour une intervention réussie.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'L\'enlèvement d\'un véhicule hors d\'usage à Oinville-sur-Montcient implique une stricte conformité réglementaire. Voici les éléments à préparer. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Yvelines sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le véhicule est remis à un professionnel compétent pour assurer la continuité du traitement réglementaire. Les opérations de valorisation sont réalisées dans des conditions conformes à la réglementation. Le transfert est organisé avec un partenaire spécialisé dans les procédures applicables aux véhicules hors d\'usage.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Oinville-sur-Montcient',
      intro: 'Où que soit garé votre véhicule à Oinville-sur-Montcient, notre dépanneuse peut accéder pour le retirer. Avant de se déplacer à Oinville-sur-Montcient, l\'équipe vérifie les accès et prépare le matériel adapté. Notre service dessert quotidiennement le secteur 78250 de Oinville-sur-Montcient avec des équipes spécialisées dans l\'enlèvement d\'épaves. Les habitants des environs de Oinville-sur-Montcient peuvent aussi faire appel à notre service.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Oinville-sur-Montcient',
      questions: [
        { q: 'L\'intervention à Oinville-sur-Montcient est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Oinville-sur-Montcient sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Oinville-sur-Montcient',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
