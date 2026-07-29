import { PageData } from '../types'

export const thorignySurMarneData: PageData = {
  slug: 'thorigny-sur-marne',
  entityType: 'City',
  metaTitle: 'Épaviste Thorigny-sur-Marne (77400) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Thorigny-sur-Marne (77400). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Débarrassez votre véhicule hors d\'usage à Thorigny-sur-Marne (77400) - Épaviste Thorigny-sur-Marne',
      subtitle: 'Retrait de VHU à Thorigny-sur-Marne (77400) : un service gratuit et rapide pour tout Thorigny-sur-Marne et ses environs.',
      badge: 'Thorigny-sur-Marne (77400)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Thorigny-sur-Marne',
      content: 'Votre propriété rurale à Thorigny-sur-Marne n\'a pas besoin de cette épave : faites-la enlever. Dans les secteurs ruraux autour de Thorigny-sur-Marne, l\'accès à un service d\'enlèvement est simplifié. Notre équipe à Thorigny-sur-Marne est équipée de véhicules adaptés aux chemins ruraux. Les informations transmises permettent d\'anticiper les besoins techniques et humains. Notre connaissance des zones rurales garantit une intervention efficace à Thorigny-sur-Marne.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Thorigny-sur-Marne soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le véhicule est dirigé vers un opérateur partenaire compétent dans le domaine du recyclage automobile. Les opérations de valorisation sont réalisées dans des conditions conformes à la réglementation. La répartition des tâches entre les partenaires est définie dès l\'organisation de l\'enlèvement.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Thorigny-sur-Marne',
      intro: 'Tous les points de la commune de Thorigny-sur-Marne sont desservis, même les zones les moins denses. Notre logistique à Thorigny-sur-Marne est dimensionnée pour répondre à chaque type de demande. Notre service dessert quotidiennement le secteur 77400 de Thorigny-sur-Marne avec des équipes spécialisées dans l\'enlèvement d\'épaves. Les communes autour de Thorigny-sur-Marne sont également parcourues par nos dépanneuses.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Thorigny-sur-Marne',
      questions: [
        { q: 'L\'intervention à Thorigny-sur-Marne est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Thorigny-sur-Marne sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Thorigny-sur-Marne',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
