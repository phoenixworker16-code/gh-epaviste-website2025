import { PageData } from '../types'

export const laGarenneColombesData: PageData = {
  slug: 'la-garenne-colombes',
  entityType: 'City',
  metaTitle: 'Épaviste La Garenne-Colombes (92250) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à La Garenne-Colombes (92250). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
  relatedServicesSlugs: [
    'enlevement-epave-parking-souterrain',
    'enlevement-voiture-en-panne',
    'enlevement-voiture-sans-carte-grise'
  ],
  relatedCitiesSlugs: [
    'enlevement-epave-hauts-de-seine'
  ],
  blocks: [
    {
      type: 'Hero',
      title: 'Retrait auto hors d\'usage La Garenne-Colombes (92250) dans le département 92250',
      subtitle: 'Pour La Garenne-Colombes (92250) : retrait gratuit de votre épave avec remise des documents à La Garenne-Colombes.',
      badge: 'La Garenne-Colombes (92250)',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur La Garenne-Colombes',
      intro: 'Nous retirons les épaves dans chaque rue et chaque quartier de La Garenne-Colombes. Le planning d\'intervention à La Garenne-Colombes intègre les contraintes horaires du propriétaire. Le secteur 92250 de La Garenne-Colombes est couvert sans supplément de prix par notre service d\'enlèvement gratuit de véhicules hors d\'usage. Notre rayon d\'action ne se limite pas à La Garenne-Colombes mais s\'étend aux alentours.',
      zones: [
        { name: 'Zones pavillonnaires', delay: 'Sous 24h', specificities: 'Enlèvement au domicile ou dans votre allée privée.' },
        { name: 'Centre-ville & Axes principaux', delay: '24h', specificities: 'Retrait d\'épave sur voie publique.' },
        { name: 'Secteurs d\'activité', delay: 'Sur RDV', specificities: 'Intervention en zone commerciale.' }
      ],
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à La Garenne-Colombes',
      content: 'Dans une commune résidentielle dense comme La Garenne-Colombes, une épave dérange tout le quartier. Dans les quartiers populaires de La Garenne-Colombes, une épave gêne la circulation des piétons et des véhicules. Nous retirons gratuitement votre épave à La Garenne-Colombes dans tous les quartiers, même les plus denses. Les informations communiquées au moment de la demande facilitent la préparation du retrait. Les créneaux proposés tiennent compte des heures d\'affluence à La Garenne-Colombes.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'L\'enlèvement d\'un véhicule hors d\'usage à La Garenne-Colombes implique une stricte conformité réglementaire. Voici les éléments à préparer. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Hauts-de-Seine sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'L\'organisation comprend un relais vers un établissement habilité pour la suite des opérations. Les opérations sont menées dans le respect des dispositions légales et réglementaires applicables. Les opérateurs successifs interviennent chacun selon leurs compétences et habilitations.',
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à La Garenne-Colombes',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Intervenez-vous rapidement en cas de véhicule gênant la circulation à La Garenne-Colombes ?', a: 'Oui, nous priorisons les situations urgentes en petite couronne. Contactez-nous pour un créneau adapté.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à La Garenne-Colombes est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à La Garenne-Colombes sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à La Garenne-Colombes',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
