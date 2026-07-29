import { PageData } from '../types'

export const laGenevrayeData: PageData = {
  slug: 'la-genevraye',
  entityType: 'City',
  metaTitle: 'Épaviste La Genevraye (77690) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à La Genevraye (77690). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Service rapide d\'enlèvement d\'épave à La Genevraye (77690) dans tout La Genevraye',
      subtitle: 'Service de retrait d\'épave à La Genevraye (77690). Gratuit et sans contrainte pour les habitants de La Genevraye.',
      badge: 'La Genevraye (77690)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à La Genevraye',
      content: 'Votre propriété rurale à La Genevraye n\'a pas besoin de cette épave : faites-la enlever. À la campagne, à La Genevraye, une épave qui rouille sur un terrain est fréquente mais pas une fatalité. Nous intervenons à La Genevraye pour un enlèvement gratuit, même dans les lieux difficilement accessibles. Le créneau d\'intervention est déterminé en tenant compte de vos disponibilités. Notre service à La Genevraye tient compte de l\'environnement rural et de ses contraintes.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à La Genevraye soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Un opérateur partenaire réceptionne le véhicule pour les opérations suivantes. Les opérateurs veillent au respect des exigences réglementaires tout au long du processus. Le processus est organisé de manière à respecter les obligations à chaque phase du parcours.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur La Genevraye',
      intro: 'Pour un enlèvement à La Genevraye, notre logistique couvre tous les secteurs sans exception. Nous organisons le passage à La Genevraye avec une préparation minutieuse de l\'itinéraire. La zone 77690 fait partie de notre secteur d\'intervention prioritaire. Nous organisons des passages réguliers dans cette partie de La Genevraye. Autour de La Genevraye, notre dispositif d\'intervention s\'étend aux zones péri-urbaines.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à La Genevraye',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à La Genevraye est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à La Genevraye sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à La Genevraye',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
