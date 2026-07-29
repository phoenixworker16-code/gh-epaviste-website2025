import { PageData } from '../types'

export const laBrosseMontceauxData: PageData = {
  slug: 'la-brosse-montceaux',
  entityType: 'City',
  metaTitle: 'Épaviste La Brosse-Montceaux (77940) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à La Brosse-Montceaux (77940). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Épaviste professionnel à La Brosse-Montceaux (77940) pour votre VHU à La Brosse-Montceaux',
      subtitle: 'Service d\'enlèvement à La Brosse-Montceaux (77940) : retrait gratuit de votre VHU par notre équipe à La Brosse-Montceaux.',
      badge: 'La Brosse-Montceaux (77940)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à La Brosse-Montceaux',
      content: 'À La Brosse-Montceaux, vous avez une épave qui ne bouge plus depuis longtemps sur votre propriété ? Nous nous déplaçons gratuitement jusqu\'à vous, même dans les zones moins denses du département. Les exploitants agricoles de La Brosse-Montceaux nous confient leurs épaves pour un traitement réglementaire. L\'organisation du retrait tient compte de l\'emplacement du véhicule, de son état et des conditions d\'accès. Notre expérience des interventions en zone rurale garantit un service de qualité à La Brosse-Montceaux.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'L\'enlèvement d\'un véhicule hors d\'usage à La Brosse-Montceaux implique une stricte conformité réglementaire. Voici les éléments à préparer. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Après la prise en charge initiale, le véhicule est confié à un partenaire technique spécialisé. Le cadre réglementaire est respecté à chaque étape par les professionnels habilités. Cette coordination permet d\'orienter le véhicule vers l\'interlocuteur compétent pour les étapes suivantes.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur La Brosse-Montceaux',
      intro: 'Depuis le centre historique jusqu\'aux zones d\'activité de La Brosse-Montceaux, notre service est disponible. Le dispositif mis en place pour La Brosse-Montceaux est adapté à chaque situation particulière. La zone 77940 fait partie de notre secteur d\'intervention prioritaire. Nous organisons des passages réguliers dans cette partie de La Brosse-Montceaux. Notre couverture géographique dépasse La Brosse-Montceaux pour inclure les communes avoisinantes.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à La Brosse-Montceaux',
      questions: [
        { q: 'L\'intervention à La Brosse-Montceaux est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à La Brosse-Montceaux sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à La Brosse-Montceaux',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
