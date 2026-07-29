import { PageData } from '../types'

export const moissonData: PageData = {
  slug: 'moisson',
  entityType: 'City',
  metaTitle: 'Épaviste Moisson (78840) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Moisson (78840). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Retrait épave gratuit Moisson sans frais dans le secteur Moisson (78840)',
      subtitle: 'Votre épaviste à Moisson (78840) : intervention gratuite et rapide pour votre VHU dans Moisson.',
      badge: 'Moisson (78840)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Moisson',
      content: 'Un véhicule hors d\'usage oublié dans votre propriété à Moisson peut être retiré sans frais. Même à Moisson, au bout d\'un chemin, notre dépanneuse peut accéder à votre épave. Le service à Moisson est conçu pour les zones agricoles et les habitations isolées. Un échange téléphonique permet de finaliser l\'organisation avant le passage. Notre équipe à Moisson est équipée de véhicules adaptés aux chemins ruraux.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'L\'enlèvement d\'un véhicule hors d\'usage à Moisson implique une stricte conformité réglementaire. Voici les éléments à préparer. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Yvelines sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le véhicule est remis à un professionnel compétent pour assurer la continuité du traitement réglementaire. Le traitement du véhicule suit les procédures imposées par la réglementation en vigueur. Cette coordination permet d\'orienter le véhicule vers l\'interlocuteur compétent pour les étapes suivantes.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Moisson',
      intro: 'Notre dispositif à Moisson assure un enlèvement gratuit dans tous les secteurs sans exception. L\'organisation du passage à Moisson tient compte des particularités annoncées. Pour le secteur 78840, nos équipes interviennent régulièrement et connaissent parfaitement les accès et particularités de Moisson. Les communes proches de Moisson sont incluses dans notre zone d\'intervention.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Moisson',
      questions: [
        { q: 'L\'intervention à Moisson est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Moisson sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Moisson',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
