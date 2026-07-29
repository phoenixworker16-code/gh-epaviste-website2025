import { PageData } from '../types'

export const lePlessisLuzarchesData: PageData = {
  slug: 'le-plessis-luzarches',
  entityType: 'City',
  metaTitle: 'Épaviste Le Plessis-Luzarches (95270) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Le Plessis-Luzarches (95270). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
  relatedServicesSlugs: [
    'enlevement-epave-parking-souterrain',
    'enlevement-voiture-en-panne',
    'enlevement-voiture-sans-carte-grise'
  ],
  relatedCitiesSlugs: [
    'val-d-oise'
  ],
  blocks: [
    {
      type: 'Hero',
      title: 'Solution enlèvement épave Le Plessis-Luzarches (95270) - Prise en charge Le Plessis-Luzarches',
      subtitle: 'Service d\'enlèvement à Le Plessis-Luzarches (95270) : retrait gratuit de votre VHU par notre équipe à Le Plessis-Luzarches.',
      badge: 'Le Plessis-Luzarches (95270)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Le Plessis-Luzarches',
      content: 'Redonnez de l\'espace à votre terrain à Le Plessis-Luzarches en confiant cette épave à notre service. Vivre à la campagne à Le Plessis-Luzarches ne signifie pas renoncer à un service d\'enlèvement professionnel. À Le Plessis-Luzarches, nous venons jusqu\'à votre propriété rurale sans frais supplémentaires. La planification de l\'intervention s\'appuie sur les éléments communiqués lors de la demande. Nous adaptons notre intervention à Le Plessis-Luzarches en fonction de la configuration des lieux.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Le Plessis-Luzarches, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Val-d\'Oise sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Après enlèvement, la prise en charge est transmise à un opérateur spécialisé dans la filière automobile. Les différentes phases de traitement sont réalisées sous le contrôle des opérateurs autorisés. Les intervenants se coordonnent pour assurer la continuité du traitement réglementaire.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Le Plessis-Luzarches',
      intro: 'Si votre épave se trouve à Le Plessis-Luzarches, notre équipe peut intervenir sans contrainte de zone. À Le Plessis-Luzarches, l\'organisation du retrait s\'adapte aux circonstances décrites. Notre service dessert quotidiennement le secteur 95270 de Le Plessis-Luzarches avec des équipes spécialisées dans l\'enlèvement d\'épaves. Les axes secondaires et les hameaux près de Le Plessis-Luzarches sont inclus dans notre périmètre.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Le Plessis-Luzarches',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Le Plessis-Luzarches est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Le Plessis-Luzarches sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Le Plessis-Luzarches',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
