import { PageData } from '../types'

export const varreddesData: PageData = {
  slug: 'varreddes',
  entityType: 'City',
  metaTitle: 'Épaviste Varreddes (77910) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Varreddes (77910). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Débarras d\'épave automobile à Varreddes (77910) par épaviste à Varreddes',
      subtitle: 'Solution enlèvement épave à Varreddes (77910). Intervention rapide et gratuite dans le 77910 de Varreddes.',
      badge: 'Varreddes (77910)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Varreddes',
      content: 'Votre terrain à Varreddes retrouvera son aspect d\'origine après l\'enlèvement de cette épave. Notre équipe est habituée aux accès ruraux à Varreddes et intervient dans les meilleures conditions. Nous retirons gratuitement votre épave à Varreddes avec du matériel adapté aux terrains ruraux. Le créneau d\'intervention est déterminé en tenant compte de vos disponibilités. Notre service à Varreddes tient compte de l\'environnement rural et de ses contraintes.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Varreddes soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le transfert vers un partenaire compétent est organisé dès l\'enlèvement terminé. Les partenaires assurent le respect des obligations liées à la prise en charge de ces véhicules. Les opérateurs compétents interviennent à tour de rôle pour couvrir l\'ensemble du processus.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Varreddes',
      intro: 'L\'enlèvement gratuit de votre épave est organisé sur l\'ensemble du territoire de Varreddes. L\'équipe dépêchée à Varreddes connaît à l\'avance les conditions d\'accès au véhicule. Notre service dessert quotidiennement le secteur 77910 de Varreddes avec des équipes spécialisées dans l\'enlèvement d\'épaves. Notre couverture géographique dépasse Varreddes pour inclure les communes avoisinantes.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Varreddes',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Varreddes est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Varreddes sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Varreddes',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
