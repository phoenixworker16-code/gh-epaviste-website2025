import { PageData } from '../types'

export const villiersLeMahieuData: PageData = {
  slug: 'villiers-le-mahieu',
  entityType: 'City',
  metaTitle: 'Épaviste Villiers-le-Mahieu (78770) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Villiers-le-Mahieu (78770). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Retrait de épave sans frais à Villiers-le-Mahieu (78770) - Service pour Villiers-le-Mahieu',
      subtitle: 'À Villiers-le-Mahieu (78770) : solution complète d\'enlèvement d\'épave gratuite pour les habitants de Villiers-le-Mahieu.',
      badge: 'Villiers-le-Mahieu (78770)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Villiers-le-Mahieu',
      content: 'Situé à Villiers-le-Mahieu, votre véhicule hors d\'usage encombre votre terrain ou votre cour ? À Villiers-le-Mahieu, une épave oubliée dans un pré peut être retirée sans que vous ayez à bouger. Le déplacement à Villiers-le-Mahieu est inclus dans notre service, sans supplément kilométrique. Les modalités logistiques sont ajustées selon les particularités de chaque intervention. Notre équipe à Villiers-le-Mahieu est équipée de véhicules adaptés aux chemins ruraux.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Villiers-le-Mahieu soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Yvelines sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Après enlèvement, la prise en charge est transmise à un opérateur spécialisé dans la filière automobile. Les différentes opérations sont soumises au respect des règles applicables à la filière. Les partenaires coordonnent leurs interventions pour assurer la complétude du traitement.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Villiers-le-Mahieu',
      intro: 'Que votre épave soit à Villiers-le-Mahieu dans un parking, une rue ou un garage, nous l\'enlevons. Les modalités d\'intervention à Villiers-le-Mahieu sont adaptées à l\'emplacement signalé du véhicule. Le code postal 78770 est intégré dans notre tournée d\'enlèvement régulière à Villiers-le-Mahieu, ce qui garantit une intervention rapide. Notre couverture géographique dépasse Villiers-le-Mahieu pour inclure les communes avoisinantes.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Villiers-le-Mahieu',
      questions: [
        { q: 'L\'intervention à Villiers-le-Mahieu est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Villiers-le-Mahieu sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Villiers-le-Mahieu',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
