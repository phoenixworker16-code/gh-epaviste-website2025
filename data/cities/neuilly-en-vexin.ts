import { PageData } from '../types'

export const neuillyEnVexinData: PageData = {
  slug: 'neuilly-en-vexin',
  entityType: 'City',
  metaTitle: 'Épaviste Neuilly-en-Vexin (95640) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Neuilly-en-Vexin (95640). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Service d\'enlèvement 100% gratuit à Neuilly-en-Vexin (95640) pour les habitants de Neuilly-en-Vexin',
      subtitle: 'Intervention à Neuilly-en-Vexin (95640) : retrait gratuit de votre épave par des professionnels à Neuilly-en-Vexin.',
      badge: 'Neuilly-en-Vexin (95640)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Neuilly-en-Vexin',
      content: 'Dans la campagne de Neuilly-en-Vexin, un véhicule hors d\'usage peut être retiré sans aucun frais. À Neuilly-en-Vexin, même dans les lieux-dits et les hameaux, nous retirons votre épave gratuitement. À Neuilly-en-Vexin, nous retirons les épaves des champs, prés et chemins sans difficulté. Le programme d\'intervention est défini avec le propriétaire pour une prise en charge optimale. Notre équipe à Neuilly-en-Vexin est équipée de véhicules adaptés aux chemins ruraux.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'L\'enlèvement d\'un véhicule hors d\'usage à Neuilly-en-Vexin implique une stricte conformité réglementaire. Voici les éléments à préparer. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Val-d\'Oise sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'La prise en charge prévoit le transfert du véhicule vers un opérateur partenaire habilité à traiter les véhicules hors d\'usage. Les opérations de valorisation sont réalisées dans des conditions conformes à la réglementation. Les responsabilités sont clairement établies entre les opérateurs de la chaîne de traitement.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Neuilly-en-Vexin',
      intro: 'La tournée de nos dépanneuses couvre Neuilly-en-Vexin en intégralité chaque semaine. L\'équipe dépêchée à Neuilly-en-Vexin connaît à l\'avance les conditions d\'accès au véhicule. Les habitants du 95640 à Neuilly-en-Vexin bénéficient d\'un passage régulier de nos équipes et d\'une prise en charge adaptée à ce secteur. Les voies d\'accès et les secteurs autour de Neuilly-en-Vexin font partie de notre circuit.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Neuilly-en-Vexin',
      questions: [
        { q: 'L\'intervention à Neuilly-en-Vexin est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Neuilly-en-Vexin sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Neuilly-en-Vexin',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
