import { PageData } from '../types'

export const gironvilleSurEssonneData: PageData = {
  slug: 'gironville-sur-essonne',
  entityType: 'City',
  metaTitle: 'Épaviste Gironville-sur-Essonne (91720) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Gironville-sur-Essonne (91720). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
  relatedServicesSlugs: [
    'enlevement-epave-parking-souterrain',
    'enlevement-voiture-en-panne',
    'enlevement-voiture-sans-carte-grise'
  ],
  relatedCitiesSlugs: [
    'enlevement-epave-essonne'
  ],
  blocks: [
    {
      type: 'Hero',
      title: 'Retrait et recyclage de votre épave à Gironville-sur-Essonne (91720) - Service Gironville-sur-Essonne',
      subtitle: 'Faites retirer votre épave à Gironville-sur-Essonne gratuitement. Notre équipe intervient dans le 91720 de Gironville-sur-Essonne.',
      badge: 'Gironville-sur-Essonne (91720)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Gironville-sur-Essonne',
      content: 'À Gironville-sur-Essonne, vous avez une épave qui ne bouge plus depuis longtemps sur votre propriété ? À Gironville-sur-Essonne, une épave oubliée dans un pré peut être retirée sans que vous ayez à bouger. Profitez d\'un débarras d\'épave professionnel et écologique, avec une prise en charge complète du remorquage au recyclage. L\'équipe adapte sa préparation en fonction du type de véhicule et de son emplacement. Notre expérience des interventions en zone rurale garantit un service de qualité à Gironville-sur-Essonne.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'L\'enlèvement d\'un véhicule hors d\'usage à Gironville-sur-Essonne implique une stricte conformité réglementaire. Voici les éléments à préparer. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Essonne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'La prestation comprend l\'orientation du véhicule vers un interlocuteur compétent pour les étapes à venir. L\'ensemble des opérations est réalisé dans les conditions fixées par la réglementation. La coordination des professionnels garantit l\'efficacité du traitement réglementaire.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Gironville-sur-Essonne',
      intro: 'Les équipes affectées à Gironville-sur-Essonne connaissent parfaitement chaque secteur de la commune. La préparation du retrait à Gironville-sur-Essonne inclut une évaluation des conditions d\'intervention. Les habitants du 91720 à Gironville-sur-Essonne bénéficient d\'un passage régulier de nos équipes et d\'une prise en charge adaptée à ce secteur. Les routes et chemins autour de Gironville-sur-Essonne sont parcourus régulièrement par nos véhicules.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Gironville-sur-Essonne',
      questions: [
        { q: 'L\'intervention à Gironville-sur-Essonne est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Gironville-sur-Essonne sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Gironville-sur-Essonne',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
