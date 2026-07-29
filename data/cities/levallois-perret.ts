import { PageData } from '../types'

export const levalloisPerretData: PageData = {
  slug: 'levallois-perret',
  entityType: 'City',
  metaTitle: 'Épaviste Levallois-Perret (92300) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Levallois-Perret (92300). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
  relatedServicesSlugs: [
    'enlevement-epave-parking-souterrain',
    'enlevement-voiture-en-panne',
    'enlevement-voiture-sans-carte-grise'
  ],
  relatedCitiesSlugs: [
    'hauts-de-seine'
  ],
  blocks: [
    {
      type: 'Hero',
      title: 'Faire retirer son vieux véhicule à Levallois-Perret (92300) - Enlèvement Levallois-Perret',
      subtitle: 'Solution enlèvement épave à Levallois-Perret (92300). Intervention rapide et gratuite dans le 92300 de Levallois-Perret.',
      badge: 'Levallois-Perret (92300)',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Levallois-Perret',
      intro: 'Nous nous déplaçons dans tous les secteurs de Levallois-Perret pour un enlèvement gratuit. L\'organisation du passage à Levallois-Perret tient compte des particularités annoncées. Notre service dessert quotidiennement le secteur 92300 de Levallois-Perret avec des équipes spécialisées dans l\'enlèvement d\'épaves. Autour de Levallois-Perret, notre dispositif d\'intervention s\'étend aux zones péri-urbaines. C\'est le cas notamment vers Clichy et Neuilly-sur-Seine.',
      zones: [
        { name: 'Zones pavillonnaires', delay: 'Sous 24h', specificities: 'Enlèvement au domicile ou dans votre allée privée.' },
        { name: 'Centre-ville & Axes principaux', delay: '24h', specificities: 'Retrait d\'épave sur voie publique.' },
        { name: 'Secteurs d\'activité', delay: 'Sur RDV', specificities: 'Intervention en zone commerciale.' }
      ],
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Levallois-Perret',
      content: 'Vous souhaitez vous débarrasser gratuitement de votre vieux véhicule à Levallois-Perret ? Un véhicule hors d\'usage à Levallois-Perret attire l\'attention et peut dégrader l\'image du quartier. Nous disposons à Levallois-Perret de dépanneuses adaptées aux rues étroites et au trafic dense. Un créneau vous est proposé en fonction des informations communiquées sur le véhicule. Les contraintes urbaines de Levallois-Perret sont gérées par notre équipe expérimentée. Que ce soit du côté de Rue Trézel ou ailleurs, nous intervenons gratuitement.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'L\'enlèvement d\'un véhicule hors d\'usage à Levallois-Perret implique une stricte conformité réglementaire. Voici les éléments à préparer. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Hauts-de-Seine sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le transfert est assuré vers un exploitant partenaire autorisé à recevoir les véhicules hors d\'usage. Les formalités administratives liées à la fin de vie sont accomplies par les opérateurs compétents. La progression du véhicule dans la filière est suivie par les différents opérateurs concernés.',
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Levallois-Perret',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Intervenez-vous rapidement en cas de véhicule gênant la circulation à Levallois-Perret ?', a: 'Oui, nous priorisons les situations urgentes en petite couronne. Contactez-nous pour un créneau adapté.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Levallois-Perret est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Levallois-Perret sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Levallois-Perret',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
