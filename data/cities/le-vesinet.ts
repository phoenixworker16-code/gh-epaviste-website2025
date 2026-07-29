import { PageData } from '../types'

export const leVesinetData: PageData = {
  slug: 'le-vesinet',
  entityType: 'City',
  metaTitle: 'Épaviste Le Vésinet (78110) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Le Vésinet (78110). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Faire retirer son vieux véhicule à Le Vésinet (78110) - Enlèvement Le Vésinet',
      subtitle: 'À Le Vésinet (78110) : débarras auto gratuit avec prise en charge complète de votre épave.',
      badge: 'Le Vésinet (78110)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Le Vésinet',
      content: 'À Le Vésinet, notre équipe se déplace jusque dans les hameaux pour retirer les épaves. Dans les secteurs ruraux autour de Le Vésinet, l\'accès à un service d\'enlèvement est simplifié. À Le Vésinet, nous venons jusqu\'à votre propriété rurale sans frais supplémentaires. Les modalités logistiques sont ajustées selon les particularités de chaque intervention. Le rendez-vous à Le Vésinet est organisé pour minimiser les déplacements superflus.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'L\'enlèvement d\'un véhicule hors d\'usage à Le Vésinet implique une stricte conformité réglementaire. Voici les éléments à préparer. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Yvelines sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le transfert est assuré vers un exploitant partenaire autorisé à recevoir les véhicules hors d\'usage. Les formalités requises sont accomplies par les partenaires compétents dans la filière. Cette répartition des rôles assure une continuité entre l\'enlèvement et les opérations réglementaires ultérieures.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Le Vésinet',
      intro: 'Pour un enlèvement à Le Vésinet, notre logistique couvre tous les secteurs sans exception. L\'organisation du passage à Le Vésinet tient compte des particularités annoncées. Notre service dessert quotidiennement le secteur 78110 de Le Vésinet avec des équipes spécialisées dans l\'enlèvement d\'épaves. À partir du secteur de Le Vésinet, nous desservons également les zones avoisinantes.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Le Vésinet',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Le Vésinet est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Le Vésinet sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Le Vésinet',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
