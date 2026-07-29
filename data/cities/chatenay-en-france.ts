import { PageData } from '../types'

export const chatenayEnFranceData: PageData = {
  slug: 'chatenay-en-france',
  entityType: 'City',
  metaTitle: 'Épaviste Châtenay-en-France (95190) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Châtenay-en-France (95190). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
  relatedServicesSlugs: [
    'enlevement-epave-parking-souterrain',
    'enlevement-voiture-en-panne',
    'enlevement-voiture-sans-carte-grise'
  ],
  relatedCitiesSlugs: [
    'val-d-oise'
  ],
  blocks: [
    {
      type: 'Hero',
      title: 'Votre épaviste à Châtenay-en-France pour enlèvement gratuit de VHU dans le 95190',
      subtitle: 'Votre épaviste à Châtenay-en-France (95190) : intervention gratuite et rapide pour votre VHU dans Châtenay-en-France.',
      badge: 'Châtenay-en-France (95190)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Châtenay-en-France',
      content: 'Un véhicule abandonné sur votre terrain à Châtenay-en-France vous gêne au quotidien ? Les chemins ruraux de Châtenay-en-France ne sont pas un obstacle pour nos équipes équipées. Notre équipe à Châtenay-en-France est équipée de véhicules adaptés aux chemins ruraux. L\'organisation du retrait est préparée conjointement avec le propriétaire du véhicule. Notre expérience des interventions en zone rurale garantit un service de qualité à Châtenay-en-France.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Châtenay-en-France soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Val-d\'Oise sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le transfert vers l\'opérateur compétent est planifié dès la confirmation de l\'enlèvement. Le traitement est effectué dans le respect des obligations environnementales en vigueur. La chaîne de prise en charge est structurée pour respecter les exigences applicables à chaque étape.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Châtenay-en-France',
      intro: 'Pour un enlèvement à Châtenay-en-France, notre logistique couvre tous les secteurs sans exception. À Châtenay-en-France, le professionnel confirme avec vous les modalités avant de se déplacer. La zone 95190 fait partie de notre secteur d\'intervention prioritaire. Nous organisons des passages réguliers dans cette partie de Châtenay-en-France. Les localités voisines de Châtenay-en-France peuvent aussi solliciter notre intervention.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Châtenay-en-France',
      questions: [
        { q: 'L\'intervention à Châtenay-en-France est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Châtenay-en-France sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Châtenay-en-France',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
