import { PageData } from '../types'

export const villiersSousGrezData: PageData = {
  slug: 'villiers-sous-grez',
  entityType: 'City',
  metaTitle: 'Épaviste Villiers-sous-Grez (77760) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Villiers-sous-Grez (77760). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Débarras automobile Villiers-sous-Grez (77760) dans toute l\'agglomération Villiers-sous-Grez',
      subtitle: 'Épaviste gratuit à Villiers-sous-Grez (77760) : intervention dans tout Villiers-sous-Grez pour votre véhicule hors d\'usage.',
      badge: 'Villiers-sous-Grez (77760)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Villiers-sous-Grez',
      content: 'Dans le secteur rural de Villiers-sous-Grez, nous nous déplaçons gratuitement pour enlever votre épave. Dans l\'environnement rural de Villiers-sous-Grez, nous intervenons avec discrétion et efficacité. À Villiers-sous-Grez, nous venons jusqu\'à votre propriété rurale sans frais supplémentaires. La coordination avec le propriétaire permet de caler le meilleur créneau pour l\'enlèvement. Nous organisons le passage à Villiers-sous-Grez avec une logistique adaptée aux grands terrains.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Villiers-sous-Grez soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le véhicule est orienté vers un opérateur de la filière autorisée dès la fin de l\'enlèvement. Les étapes de traitement sont encadrées par les dispositions légales en vigueur. Le partenaire compétent prend ensuite le relais pour les étapes qui relèvent de sa responsabilité.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Villiers-sous-Grez',
      intro: 'Si votre épave se trouve à Villiers-sous-Grez, notre équipe peut intervenir sans contrainte de zone. Les modalités pratiques de l\'enlèvement à Villiers-sous-Grez sont calées en amont avec vous. Notre service dessert quotidiennement le secteur 77760 de Villiers-sous-Grez avec des équipes spécialisées dans l\'enlèvement d\'épaves. Notre zone de couverture s\'articule autour de Villiers-sous-Grez et de ses environs.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Villiers-sous-Grez',
      questions: [
        { q: 'L\'intervention à Villiers-sous-Grez est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Villiers-sous-Grez sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Villiers-sous-Grez',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
