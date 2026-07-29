import { PageData } from '../types'

export const jouarsPontchartrainData: PageData = {
  slug: 'jouars-pontchartrain',
  entityType: 'City',
  metaTitle: 'Épaviste Jouars-Pontchartrain (78760) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Jouars-Pontchartrain (78760). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Votre solution d\'enlèvement d\'épave à Jouars-Pontchartrain (78760) - Épaviste Jouars-Pontchartrain',
      subtitle: 'Enlèvement d\'épave Jouars-Pontchartrain (78760) : service rapide et gratuit pour votre VHU dans tout Jouars-Pontchartrain.',
      badge: 'Jouars-Pontchartrain (78760)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Jouars-Pontchartrain',
      content: 'Vous avez une vieille voiture qui rouille dans un champ à Jouars-Pontchartrain ? Nous l\'enlevons gratuitement. Dans l\'environnement rural de Jouars-Pontchartrain, nous intervenons avec discrétion et efficacité. Nous organisons à Jouars-Pontchartrain des interventions adaptées aux grandes propriétés et aux écarts. La logistique est organisée pour garantir une intervention efficace et sans attente. Le rendez-vous à Jouars-Pontchartrain est organisé pour minimiser les déplacements superflus.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Jouars-Pontchartrain, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Yvelines sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le véhicule est remis à un professionnel compétent pour assurer la continuité du traitement réglementaire. La traçabilité du parcours est assurée conformément aux obligations en vigueur. Les responsabilités sont clairement établies entre les opérateurs de la chaîne de traitement.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Jouars-Pontchartrain',
      intro: 'Même dans les secteurs les plus excentrés de Jouars-Pontchartrain, nous organisons l\'enlèvement. Pour un retrait à Jouars-Pontchartrain, notre équipe se tient prête à intervenir au créneau convenu. Le secteur 78760 de Jouars-Pontchartrain est couvert sans supplément de prix par notre service d\'enlèvement gratuit de véhicules hors d\'usage. Les habitants des environs proches de Jouars-Pontchartrain peuvent compter sur notre service.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Jouars-Pontchartrain',
      questions: [
        { q: 'L\'intervention à Jouars-Pontchartrain est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Jouars-Pontchartrain sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Jouars-Pontchartrain',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
