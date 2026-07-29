import { PageData } from '../types'

export const jagnySousBoisData: PageData = {
  slug: 'jagny-sous-bois',
  entityType: 'City',
  metaTitle: 'Épaviste Jagny-sous-Bois (95850) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Jagny-sous-Bois (95850). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
  relatedServicesSlugs: [
    'enlevement-epave-parking-souterrain',
    'enlevement-voiture-en-panne',
    'enlevement-voiture-sans-carte-grise'
  ],
  relatedCitiesSlugs: [
    'enlevement-epave-val-d-oise'
  ],
  blocks: [
    {
      type: 'Hero',
      title: 'Faire enlever son VHU à Jagny-sous-Bois par un professionnel dans le 95850 de Jagny-sous-Bois',
      subtitle: 'Jagny-sous-Bois (95850) : enlèvement gratuit de votre épave à Jagny-sous-Bois par notre équipe.',
      badge: 'Jagny-sous-Bois (95850)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Jagny-sous-Bois',
      content: 'À Jagny-sous-Bois, vous avez une épave qui ne bouge plus depuis longtemps sur votre propriété ? Dans les zones reculées de Jagny-sous-Bois, nous adaptons notre matériel pour un retrait sans difficulté. À Jagny-sous-Bois, nous proposons un enlèvement gratuit même dans les zones les plus isolées. La logistique est organisée pour garantir une intervention efficace et sans attente. Le passage est organisé pour vous offrir un enlèvement sans contrainte, même à Jagny-sous-Bois.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Jagny-sous-Bois soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Val-d\'Oise sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Après enlèvement, la prise en charge est transmise à un opérateur spécialisé dans la filière automobile. Le traitement est effectué dans le respect des obligations environnementales en vigueur. Le dispositif assure une répartition claire des tâches entre les différents partenaires.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Jagny-sous-Bois',
      intro: 'Vous avez une épave à Jagny-sous-Bois ? Notre équipe se déplace gratuitement où qu\'elle soit. Un créneau d\'enlèvement à Jagny-sous-Bois vous est proposé selon vos disponibilités. Pour le secteur 95850, nos équipes interviennent régulièrement et connaissent parfaitement les accès et particularités de Jagny-sous-Bois. Les localités voisines de Jagny-sous-Bois peuvent aussi solliciter notre intervention.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Jagny-sous-Bois',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Jagny-sous-Bois est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Jagny-sous-Bois sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Jagny-sous-Bois',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
