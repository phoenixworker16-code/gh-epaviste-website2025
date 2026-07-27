import { PageData } from '../types'

export const germignyLevequeData: PageData = {
  slug: 'germigny-leveque',
  entityType: 'City',
  metaTitle: 'Épaviste Germigny-l\'Évêque (77910) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Germigny-l\'Évêque (77910). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Débarras véhicule hors d\'usage Germigny-l\'Évêque (77910) - Épaviste Germigny-l\'Évêque',
      subtitle: 'Besoin d\'un épaviste à Germigny-l\'Évêque (77910) ? Enlèvement gratuit de votre VHU dans tout Germigny-l\'Évêque.',
      badge: 'Germigny-l\'Évêque (77910)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Germigny-l\'Évêque',
      content: 'Votre vieux véhicule à Germigny-l\'Évêque prend la poussière et vous voulez vous en séparer ? Les chemins ruraux de Germigny-l\'Évêque ne sont pas un obstacle pour nos équipes équipées. Le service à Germigny-l\'Évêque est conçu pour les zones agricoles et les habitations isolées. L\'organisation du retrait tient compte de l\'emplacement du véhicule, de son état et des conditions d\'accès. L\'équipe dépêchée à Germigny-l\'Évêque connaît les spécificités des propriétés rurales.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Germigny-l\'Évêque, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'L\'enlèvement terminé, le transfert est organisé vers un professionnel de la filière réglementée. Les obligations environnementales sont satisfaites par les partenaires de la filière. Le propriétaire bénéficie d\'un suivi transparent des différentes phases de prise en charge.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Germigny-l\'Évêque',
      intro: 'Notre équipe se rend dans chaque quartier de Germigny-l\'Évêque pour les enlèvements programmés. À Germigny-l\'Évêque, le professionnel confirme avec vous les modalités avant de se déplacer. Notre service dessert quotidiennement le secteur 77910 de Germigny-l\'Évêque avec des équipes spécialisées dans l\'enlèvement d\'épaves. Les communes proches de Germigny-l\'Évêque sont incluses dans notre zone d\'intervention.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Germigny-l\'Évêque',
      questions: [
        { q: 'L\'intervention à Germigny-l\'Évêque est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Germigny-l\'Évêque sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Germigny-l\'Évêque',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
