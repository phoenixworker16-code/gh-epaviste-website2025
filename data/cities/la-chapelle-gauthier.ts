import { PageData } from '../types'

export const laChapelleGauthierData: PageData = {
  slug: 'la-chapelle-gauthier',
  entityType: 'City',
  metaTitle: 'Épaviste La Chapelle-Gauthier (77720) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à La Chapelle-Gauthier (77720). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Enlèvement épave La Chapelle-Gauthier (77720) - Service gratuit à La Chapelle-Gauthier',
      subtitle: 'Votre épaviste à La Chapelle-Gauthier (77720) : intervention gratuite et rapide pour votre VHU dans La Chapelle-Gauthier.',
      badge: 'La Chapelle-Gauthier (77720)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à La Chapelle-Gauthier',
      content: 'Dans le secteur rural de La Chapelle-Gauthier, nous nous déplaçons gratuitement pour enlever votre épave. Les chemins ruraux de La Chapelle-Gauthier ne sont pas un obstacle pour nos équipes équipées. Le retrait gratuit de votre épave à La Chapelle-Gauthier est organisé avec des équipements tout-terrain. La préparation du passage vise à éviter les déplacements inutiles et les difficultés d\'accès. Les distances jusqu\'à La Chapelle-Gauthier sont anticipées dans notre organisation logistique.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis La Chapelle-Gauthier, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'L\'enlèvement réalisé, le transfert vers un établissement partenaire compétent est assuré. Les professionnels engagés respectent le cadre légal applicable à cette catégorie de véhicules. Le propriétaire est informé du déroulement et des étapes successives de la prise en charge.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur La Chapelle-Gauthier',
      intro: 'Si votre épave se trouve à La Chapelle-Gauthier, notre équipe peut intervenir sans contrainte de zone. L\'intervention à La Chapelle-Gauthier est programmée après avoir pris connaissance de votre situation. La zone 77720 fait partie de notre secteur d\'intervention prioritaire. Nous organisons des passages réguliers dans cette partie de La Chapelle-Gauthier. Les communes situées à proximité de La Chapelle-Gauthier peuvent bénéficier d\'un enlèvement.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à La Chapelle-Gauthier',
      questions: [
        { q: 'L\'intervention à La Chapelle-Gauthier est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à La Chapelle-Gauthier sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à La Chapelle-Gauthier',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
