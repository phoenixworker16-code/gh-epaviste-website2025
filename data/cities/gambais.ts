import { PageData } from '../types'

export const gambaisData: PageData = {
  slug: 'gambais',
  entityType: 'City',
  metaTitle: 'Épaviste Gambais (78950) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Gambais (78950). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Service d\'enlèvement 100% gratuit à Gambais (78950) pour les habitants de Gambais',
      subtitle: 'Retrait gratuit de votre véhicule hors d\'usage à Gambais (78950). Service professionnel à Gambais.',
      badge: 'Gambais (78950)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Gambais',
      content: 'Les zones rurales autour de Gambais sont intégralement couvertes par notre service gratuit. Les zones rurales autour de Gambais sont intégralement couvertes par notre service. Les exploitants agricoles de Gambais nous confient leurs épaves pour un traitement réglementaire. Les modalités logistiques sont ajustées selon les particularités de chaque intervention. Les modalités de l\'intervention à Gambais sont conçues pour les propriétés rurales.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'L\'enlèvement d\'un véhicule hors d\'usage à Gambais implique une stricte conformité réglementaire. Voici les éléments à préparer. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Yvelines sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Après retrait, le véhicule est pris en relais par un opérateur de la filière de recyclage. Le traitement du véhicule suit les procédures imposées par la réglementation en vigueur. Les responsabilités de chaque intervenant sont distinguées dès l\'organisation de l\'enlèvement.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Gambais',
      intro: 'Nous venons chercher votre épave à Gambais, même dans les endroits difficilement accessibles. À Gambais, l\'intervention est minutieusement préparée pour éviter tout imprévu. Le secteur 78950 de Gambais est couvert sans supplément de prix par notre service d\'enlèvement gratuit de véhicules hors d\'usage. Les communes proches de Gambais sont incluses dans notre zone d\'intervention.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Gambais',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Gambais est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Gambais sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Gambais',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
