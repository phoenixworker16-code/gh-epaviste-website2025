import { PageData } from '../types'

export const fontainsData: PageData = {
  slug: 'fontains',
  entityType: 'City',
  metaTitle: 'Épaviste Fontains (77370) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Fontains (77370). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Service professionnel d\'enlèvement VHU à Fontains (77370) dans tout Fontains',
      subtitle: 'Pour Fontains et ses environs (77370), nous retirons gratuitement votre épave à Fontains.',
      badge: 'Fontains (77370)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Fontains',
      content: 'Votre vieux véhicule à Fontains prend la poussière et vous voulez vous en séparer ? Dans les zones reculées de Fontains, nous adaptons notre matériel pour un retrait sans difficulté. Notre équipe à Fontains connaît les spécificités des propriétés rurales et agricoles. Le passage est planifié selon les indications reçues sur l\'emplacement exact du véhicule. Notre équipe à Fontains est équipée de véhicules adaptés aux chemins ruraux.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Fontains, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'La prestation d\'enlèvement intègre le transfert vers un opérateur compétent pour la suite du parcours. La traçabilité des opérations est assurée par les professionnels intervenant dans la filière. Les différents rôles sont répartis entre les professionnels intervenant dans le processus.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Fontains',
      intro: 'Que votre épave soit à Fontains dans un parking, une rue ou un garage, nous l\'enlevons. Les modalités pratiques de l\'enlèvement à Fontains sont calées en amont avec vous. Notre service dessert quotidiennement le secteur 77370 de Fontains avec des équipes spécialisées dans l\'enlèvement d\'épaves. À partir du secteur de Fontains, nous desservons également les zones avoisinantes.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Fontains',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Fontains est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Fontains sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Fontains',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
