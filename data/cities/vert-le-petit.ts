import { PageData } from '../types'

export const vertLePetitData: PageData = {
  slug: 'vert-le-petit',
  entityType: 'City',
  metaTitle: 'Épaviste Vert-le-Petit (91710) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Vert-le-Petit (91710). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Enlèvement épave sans papier à Vert-le-Petit (91710) dans tout le 91710',
      subtitle: 'À Vert-le-Petit (91710) : débarras auto gratuit avec prise en charge complète de votre épave.',
      badge: 'Vert-le-Petit (91710)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Vert-le-Petit',
      content: 'Situé à Vert-le-Petit, votre véhicule hors d\'usage encombre votre terrain ou votre cour ? Dans les secteurs agricoles de Vert-le-Petit, nous retirons les épaves sans endommager les terrains. Notre équipe à Vert-le-Petit connaît les spécificités des propriétés rurales et agricoles. Les informations transmises permettent d\'anticiper les besoins techniques et humains. Notre expérience des interventions en zone rurale garantit un service de qualité à Vert-le-Petit.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'L\'enlèvement d\'un véhicule hors d\'usage à Vert-le-Petit implique une stricte conformité réglementaire. Voici les éléments à préparer. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Essonne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le véhicule est dirigé vers un opérateur partenaire compétent dans le domaine du recyclage automobile. Les différentes étapes réglementaires sont assurées par les partenaires habilités. Le parcours du véhicule est défini dès la prise de rendez-vous avec les professionnels concernés.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Vert-le-Petit',
      intro: 'Nous nous déplaçons dans tous les secteurs de Vert-le-Petit pour un enlèvement gratuit. À Vert-le-Petit, le professionnel confirme avec vous les modalités avant de se déplacer. Notre service dessert quotidiennement le secteur 91710 de Vert-le-Petit avec des équipes spécialisées dans l\'enlèvement d\'épaves. Au départ de Vert-le-Petit, nos équipes couvrent un vaste secteur géographique.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Vert-le-Petit',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Vert-le-Petit est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Vert-le-Petit sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Vert-le-Petit',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
