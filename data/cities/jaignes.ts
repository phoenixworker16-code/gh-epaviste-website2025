import { PageData } from '../types'

export const jaignesData: PageData = {
  slug: 'jaignes',
  entityType: 'City',
  metaTitle: 'Épaviste Jaignes (77440) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Jaignes (77440). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Débarras d\'épave automobile à Jaignes (77440) par épaviste à Jaignes',
      subtitle: 'Débarrassez votre épave à Jaignes (77440) sans frais. Notre service couvre tout le secteur de Jaignes.',
      badge: 'Jaignes (77440)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Jaignes',
      content: 'Un véhicule hors d\'usage oublié dans votre propriété à Jaignes peut être retiré sans frais. À la campagne, à Jaignes, une épave qui rouille sur un terrain est fréquente mais pas une fatalité. Nous organisons à Jaignes des interventions adaptées aux grandes propriétés et aux écarts. La logistique est organisée pour garantir une intervention efficace et sans attente. L\'équipe dépêchée à Jaignes connaît les spécificités des propriétés rurales.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'L\'enlèvement d\'un véhicule hors d\'usage à Jaignes implique une stricte conformité réglementaire. Voici les éléments à préparer. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Après enlèvement, la prise en charge est transmise à un opérateur spécialisé dans la filière automobile. Les professionnels habilités assurent le respect des procédures imposées par la réglementation. Les partenaires se répartissent les opérations selon leur domaine d\'expertise respectif.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Jaignes',
      intro: 'Tous les points de la commune de Jaignes sont desservis, même les zones les moins denses. Les détails d\'accès pour Jaignes sont examinés avant le départ de l\'équipe. Notre service dessert quotidiennement le secteur 77440 de Jaignes avec des équipes spécialisées dans l\'enlèvement d\'épaves. Les axes secondaires et les hameaux près de Jaignes sont inclus dans notre périmètre.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Jaignes',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Jaignes est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Jaignes sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Jaignes',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
