import { PageData } from '../types'

export const tessancourtSurAubetteData: PageData = {
  slug: 'tessancourt-sur-aubette',
  entityType: 'City',
  metaTitle: 'Épaviste Tessancourt-sur-Aubette (78250) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Tessancourt-sur-Aubette (78250). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Faire retirer son vieux véhicule à Tessancourt-sur-Aubette (78250) - Enlèvement Tessancourt-sur-Aubette',
      subtitle: 'Débarras auto Tessancourt-sur-Aubette (78250) : notre équipe enlève gratuitement votre épave à Tessancourt-sur-Aubette.',
      badge: 'Tessancourt-sur-Aubette (78250)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Tessancourt-sur-Aubette',
      content: 'Vous habitez à Tessancourt-sur-Aubette et une épave vous encombre depuis des mois ? Agissez gratuitement. Dans l\'environnement rural de Tessancourt-sur-Aubette, nous intervenons avec discrétion et efficacité. Le service à Tessancourt-sur-Aubette est conçu pour les zones agricoles et les habitations isolées. La planification de l\'intervention s\'appuie sur les éléments communiqués lors de la demande. Nous organisons le passage à Tessancourt-sur-Aubette avec une logistique adaptée aux grands terrains.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Tessancourt-sur-Aubette, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Yvelines sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'L\'enlèvement est suivi d\'un acheminement vers une structure partenaire autorisée à recevoir ce type de véhicule. La traçabilité des opérations est assurée par les professionnels intervenant dans la filière. Le propriétaire est tenu informé des différentes étapes par les intervenants successifs.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Tessancourt-sur-Aubette',
      intro: 'Aucun quartier de Tessancourt-sur-Aubette n\'est exclu : nous intervenons partout dans la commune. L\'équipe dépêchée à Tessancourt-sur-Aubette connaît à l\'avance les conditions d\'accès au véhicule. La zone 78250 fait partie de notre secteur d\'intervention prioritaire. Nous organisons des passages réguliers dans cette partie de Tessancourt-sur-Aubette. Les voies d\'accès et les secteurs autour de Tessancourt-sur-Aubette font partie de notre circuit.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Tessancourt-sur-Aubette',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Tessancourt-sur-Aubette est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Tessancourt-sur-Aubette sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Tessancourt-sur-Aubette',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
