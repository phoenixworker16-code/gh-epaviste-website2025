import { PageData } from '../types'

export const rochefortEnYvelinesData: PageData = {
  slug: 'rochefort-en-yvelines',
  entityType: 'City',
  metaTitle: 'Épaviste Rochefort-en-Yvelines (78730) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Rochefort-en-Yvelines (78730). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
  relatedServicesSlugs: [
    'enlevement-epave-parking-souterrain',
    'enlevement-voiture-en-panne',
    'enlevement-voiture-sans-carte-grise'
  ],
  relatedCitiesSlugs: [
    'yvelines'
  ],
  blocks: [
    {
      type: 'Hero',
      title: 'Service d\'enlèvement 100% gratuit à Rochefort-en-Yvelines (78730) pour les habitants de Rochefort-en-Yvelines',
      subtitle: 'Service d\'enlèvement d\'épave à Rochefort-en-Yvelines (78730) : gratuit, rapide et professionnel à Rochefort-en-Yvelines.',
      badge: 'Rochefort-en-Yvelines (78730)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Rochefort-en-Yvelines',
      content: 'À Rochefort-en-Yvelines, même les épaves situées sur des terrains difficiles sont prises en charge. Vivre à la campagne à Rochefort-en-Yvelines ne signifie pas renoncer à un service d\'enlèvement professionnel. À Rochefort-en-Yvelines, l\'enlèvement gratuit comprend le déplacement jusqu\'à votre propriété. Le passage est planifié selon les indications reçues sur l\'emplacement exact du véhicule. Les modalités d\'accès à Rochefort-en-Yvelines sont vérifiées avant le départ pour une intervention réussie.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Rochefort-en-Yvelines soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Yvelines sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le véhicule retiré rejoint une installation partenaire disposant des autorisations d\'exploitation. Les partenaires assurent le respect des obligations liées à la prise en charge de ces véhicules. Le suivi du parcours permet au propriétaire de connaître les différentes étapes réalisées.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Rochefort-en-Yvelines',
      intro: 'Nous nous déplaçons dans tous les secteurs de Rochefort-en-Yvelines pour un enlèvement gratuit. À Rochefort-en-Yvelines, nous veillons à ce que tous les aspects logistiques soient anticipés. Les demandes pour le 78730 de Rochefort-en-Yvelines sont traitées en priorité par notre équipe qui connaît bien ce secteur. Notre couverture géographique dépasse Rochefort-en-Yvelines pour inclure les communes avoisinantes.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Rochefort-en-Yvelines',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Rochefort-en-Yvelines est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Rochefort-en-Yvelines sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Rochefort-en-Yvelines',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
