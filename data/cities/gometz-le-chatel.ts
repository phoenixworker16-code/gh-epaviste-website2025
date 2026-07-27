import { PageData } from '../types'

export const gometzLeChatelData: PageData = {
  slug: 'gometz-le-chatel',
  entityType: 'City',
  metaTitle: 'Épaviste Gometz-le-Châtel (91940) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Gometz-le-Châtel (91940). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
  relatedServicesSlugs: [
    'enlevement-epave-parking-souterrain',
    'enlevement-voiture-en-panne',
    'enlevement-voiture-sans-carte-grise'
  ],
  relatedCitiesSlugs: [
    'enlevement-epave-essonne'
  ],
  blocks: [
    {
      type: 'Hero',
      title: 'Retrait d\'épave professionnel à Gometz-le-Châtel (91940) pour votre VHU à Gometz-le-Châtel',
      subtitle: 'Besoin d\'un épaviste à Gometz-le-Châtel (91940) ? Enlèvement gratuit de votre VHU dans tout Gometz-le-Châtel.',
      badge: 'Gometz-le-Châtel (91940)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Gometz-le-Châtel',
      content: 'Redonnez de l\'espace à votre terrain à Gometz-le-Châtel en confiant cette épave à notre service. À Gometz-le-Châtel, l\'éloignement des centres urbains n\'empêche pas un enlèvement professionnel. Le déplacement à Gometz-le-Châtel est inclus dans notre service, sans supplément kilométrique. L\'organisation du retrait tient compte de l\'emplacement du véhicule, de son état et des conditions d\'accès. Chaque détail de l\'enlèvement à Gometz-le-Châtel est pensé pour une expérience sans tracas.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'L\'enlèvement d\'un véhicule hors d\'usage à Gometz-le-Châtel implique une stricte conformité réglementaire. Voici les éléments à préparer. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Essonne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le véhicule est acheminé vers un professionnel autorisé à intervenir dans cette filière spécifique. Le respect des textes en vigueur est garanti par l\'intervention de professionnels habilités. Le processus est organisé de manière à respecter les obligations à chaque phase du parcours.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Gometz-le-Châtel',
      intro: 'Notre dispositif à Gometz-le-Châtel assure un enlèvement gratuit dans tous les secteurs sans exception. Le planning d\'intervention à Gometz-le-Châtel intègre les contraintes horaires du propriétaire. Notre service dessert quotidiennement le secteur 91940 de Gometz-le-Châtel avec des équipes spécialisées dans l\'enlèvement d\'épaves. Les axes routiers menant à Gometz-le-Châtel sont régulièrement empruntés par nos équipes.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Gometz-le-Châtel',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Gometz-le-Châtel est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Gometz-le-Châtel sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Gometz-le-Châtel',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
