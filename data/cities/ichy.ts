import { PageData } from '../types'

export const ichyData: PageData = {
  slug: 'ichy',
  entityType: 'City',
  metaTitle: 'Épaviste Ichy (77890) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Ichy (77890). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Débarrassez-vous de votre épave à Ichy gratuitement autour de Ichy',
      subtitle: 'Intervention à Ichy (77890) : retrait gratuit de votre épave par des professionnels à Ichy.',
      badge: 'Ichy (77890)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Ichy',
      content: 'Dans la campagne de Ichy, un véhicule hors d\'usage peut être retiré sans aucun frais. Vivre à la campagne à Ichy ne signifie pas renoncer à un service d\'enlèvement professionnel. Le service à Ichy est conçu pour les zones agricoles et les habitations isolées. Un contact est établi avant le passage pour confirmer les modalités de l\'intervention. Les détails de l\'intervention à Ichy sont confirmés en amont pour une coordination parfaite.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'L\'enlèvement d\'un véhicule hors d\'usage à Ichy implique une stricte conformité réglementaire. Voici les éléments à préparer. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'La prise en charge inclut l\'acheminement vers un professionnel partenaire habilité pour les véhicules hors d\'usage. Le dispositif réglementaire est suivi par les différents opérateurs tout au long du parcours. Les différents rôles sont répartis entre les professionnels intervenant dans le processus.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Ichy',
      intro: 'Notre périmètre d\'enlèvement inclut l\'ensemble de Ichy sans limitation géographique. À Ichy, l\'intervention est minutieusement préparée pour éviter tout imprévu. Pour le secteur 77890, nos équipes interviennent régulièrement et connaissent parfaitement les accès et particularités de Ichy. Les voies d\'accès et les secteurs autour de Ichy font partie de notre circuit.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Ichy',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Ichy est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Ichy sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Ichy',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
