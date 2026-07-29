import { PageData } from '../types'

export const nemoursData: PageData = {
  slug: 'nemours',
  entityType: 'City',
  metaTitle: 'Épaviste Nemours (77140) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Nemours (77140). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Votre épaviste à Nemours pour enlèvement gratuit de VHU dans le 77140',
      subtitle: 'Service de retrait d\'épave à Nemours (77140). Gratuit et sans contrainte pour les habitants de Nemours.',
      badge: 'Nemours (77140)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Nemours',
      content: 'Votre propriété à Nemours est encombrée par un véhicule hors d\'usage ? Nous intervenons. Nous nous déplaçons gratuitement jusqu\'à vous, même dans les zones moins denses du département. Notre équipe à Nemours assure un service professionnel d\'enlèvement gratuit en zone rurale. Les conditions d\'accès sont vérifiées avant le départ pour garantir une intervention sans accroc. L\'enlèvement à Nemours bénéficie d\'une organisation adaptée à l\'environnement rural.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'L\'enlèvement d\'un véhicule hors d\'usage à Nemours implique une stricte conformité réglementaire. Voici les éléments à préparer. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le véhicule est pris en charge par un partenaire technique pour la suite des opérations réglementaires. Le dispositif réglementaire est suivi par les différents opérateurs tout au long du parcours. Les opérateurs compétents interviennent à tour de rôle pour couvrir l\'ensemble du processus.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Nemours',
      intro: 'À Nemours, la prise en charge de votre épave se fait quel que soit l\'endroit exact. Avant l\'intervention à Nemours, le professionnel analyse les accès et prépare son équipement. Notre service dessert quotidiennement le secteur 77140 de Nemours avec des équipes spécialisées dans l\'enlèvement d\'épaves. Les habitants des environs proches de Nemours peuvent compter sur notre service.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Nemours',
      questions: [
        { q: 'L\'intervention à Nemours est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Nemours sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Nemours',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
