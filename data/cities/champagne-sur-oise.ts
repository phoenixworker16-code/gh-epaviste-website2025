import { PageData } from '../types'

export const champagneSurOiseData: PageData = {
  slug: 'champagne-sur-oise',
  entityType: 'City',
  metaTitle: 'Épaviste Champagne-sur-Oise (95660) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Champagne-sur-Oise (95660). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
  relatedServicesSlugs: [
    'enlevement-epave-parking-souterrain',
    'enlevement-voiture-en-panne',
    'enlevement-voiture-sans-carte-grise'
  ],
  relatedCitiesSlugs: [
    'enlevement-epave-val-d-oise'
  ],
  blocks: [
    {
      type: 'Hero',
      title: 'Épaviste gratuit Champagne-sur-Oise intervention rapide dans le 95660 de Champagne-sur-Oise',
      subtitle: 'Épaviste à Champagne-sur-Oise - Intervention gratuite pour retirer votre VHU dans le 95660 à Champagne-sur-Oise.',
      badge: 'Champagne-sur-Oise (95660)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Champagne-sur-Oise',
      content: 'Redonnez de l\'espace à votre terrain à Champagne-sur-Oise en confiant cette épave à notre service. À Champagne-sur-Oise, même dans les lieux-dits et les hameaux, nous retirons votre épave gratuitement. À Champagne-sur-Oise, nous proposons un enlèvement gratuit même dans les zones les plus isolées. La demande permet de préciser les contraintes de stationnement et les documents disponibles avant l\'intervention. Notre équipe à Champagne-sur-Oise est équipée de véhicules adaptés aux chemins ruraux.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Champagne-sur-Oise soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Val-d\'Oise sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'L\'organisation prévoit la remise du véhicule à un professionnel spécialisé dans la filière réglementée. Les obligations applicables aux véhicules hors d\'usage sont respectées tout au long du processus. Les professionnels impliqués assurent chacun la partie du processus relevant de leur compétence.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Champagne-sur-Oise',
      intro: 'La tournée de nos dépanneuses couvre Champagne-sur-Oise en intégralité chaque semaine. L\'organisation du passage à Champagne-sur-Oise tient compte des particularités annoncées. Notre équipe couvre le secteur postal 95660 avec une logistique dédiée. Les habitants de Champagne-sur-Oise peuvent compter sur notre présence régulière dans ce code postal. Au départ de Champagne-sur-Oise, nos équipes couvrent un vaste secteur géographique.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Champagne-sur-Oise',
      questions: [
        { q: 'L\'intervention à Champagne-sur-Oise est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Champagne-sur-Oise sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Champagne-sur-Oise',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
