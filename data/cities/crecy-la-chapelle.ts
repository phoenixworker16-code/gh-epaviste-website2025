import { PageData } from '../types'

export const crecyLaChapelleData: PageData = {
  slug: 'crecy-la-chapelle',
  entityType: 'City',
  metaTitle: 'Épaviste Crécy-la-Chapelle (77580) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Crécy-la-Chapelle (77580). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
  relatedServicesSlugs: [
    'enlevement-epave-parking-souterrain',
    'enlevement-voiture-en-panne',
    'enlevement-voiture-sans-carte-grise'
  ],
  relatedCitiesSlugs: [
    'seine-et-marne'
  ],
  blocks: [
    {
      type: 'Hero',
      title: 'Service d\'enlèvement 100% gratuit à Crécy-la-Chapelle (77580) pour les habitants de Crécy-la-Chapelle',
      subtitle: 'Pour tout Crécy-la-Chapelle (77580) : enlèvement gratuit et professionnel de votre véhicule hors d\'usage.',
      badge: 'Crécy-la-Chapelle (77580)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Crécy-la-Chapelle',
      content: 'Votre vieux véhicule à Crécy-la-Chapelle prend la poussière et vous voulez vous en séparer ? Dans la campagne de Crécy-la-Chapelle, nous intervenons sans frais de déplacement supplémentaires. À Crécy-la-Chapelle, nous venons jusqu\'à votre propriété rurale sans frais supplémentaires. La logistique est organisée pour garantir une intervention efficace et sans attente. Nous prévoyons le passage à Crécy-la-Chapelle en fonction des conditions météo et d\'accès.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Crécy-la-Chapelle, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'L\'organisation du service prévoit l\'orientation systématique vers un professionnel habilité. Les différentes étapes réglementaires sont assurées par les partenaires habilités. Le propriétaire bénéficie d\'un suivi transparent des différentes phases de prise en charge.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Crécy-la-Chapelle',
      intro: 'Le retrait de votre épave à Crécy-la-Chapelle est possible où qu\'elle se trouve sur la commune. L\'intervention à Crécy-la-Chapelle fait l\'objet d\'une préparation approfondie en amont. Les demandes pour le 77580 de Crécy-la-Chapelle sont traitées en priorité par notre équipe qui connaît bien ce secteur. Au-delà de Crécy-la-Chapelle, nous intervenons aussi dans les secteurs voisins.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Crécy-la-Chapelle',
      questions: [
        { q: 'L\'intervention à Crécy-la-Chapelle est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Crécy-la-Chapelle sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Crécy-la-Chapelle',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
