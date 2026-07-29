import { PageData } from '../types'

export const rolleboiseData: PageData = {
  slug: 'rolleboise',
  entityType: 'City',
  metaTitle: 'Épaviste Rolleboise (78270) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Rolleboise (78270). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Faire enlever son VHU à Rolleboise par un professionnel dans le 78270 de Rolleboise',
      subtitle: 'Pour Rolleboise et ses environs (78270), nous retirons gratuitement votre épave à Rolleboise.',
      badge: 'Rolleboise (78270)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Rolleboise',
      content: 'Les zones rurales autour de Rolleboise sont intégralement couvertes par notre service gratuit. Votre propriété à Rolleboise est accessible à nos dépanneuses pour un enlèvement gratuit. À Rolleboise, nous proposons un enlèvement gratuit même dans les zones les plus isolées. La logistique est organisée pour garantir une intervention efficace et sans attente. Nous organisons le passage à Rolleboise avec une logistique adaptée aux grands terrains.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'L\'enlèvement d\'un véhicule hors d\'usage à Rolleboise implique une stricte conformité réglementaire. Voici les éléments à préparer. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Yvelines sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le véhicule est pris en charge par un partenaire technique pour la suite des opérations réglementaires. Les opérations sont menées dans le respect des dispositions légales et réglementaires applicables. Les professionnels impliqués assurent chacun la partie du processus relevant de leur compétence.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Rolleboise',
      intro: 'Nous nous déplaçons dans tous les secteurs de Rolleboise pour un enlèvement gratuit. Pour Rolleboise, l\'équipe se renseigne sur les spécificités d\'accès avant le départ. Les demandes pour le 78270 de Rolleboise sont traitées en priorité par notre équipe qui connaît bien ce secteur. À partir de Rolleboise, nos dépanneuses rayonnent dans un large secteur géographique.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Rolleboise',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Rolleboise est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Rolleboise sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Rolleboise',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
