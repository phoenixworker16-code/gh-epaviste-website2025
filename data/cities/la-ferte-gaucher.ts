import { PageData } from '../types'

export const laFerteGaucherData: PageData = {
  slug: 'la-ferte-gaucher',
  entityType: 'City',
  metaTitle: 'Épaviste La Ferté-Gaucher (77320) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à La Ferté-Gaucher (77320). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
  relatedServicesSlugs: [
    'enlevement-epave-parking-souterrain',
    'enlevement-voiture-en-panne',
    'enlevement-voiture-sans-carte-grise'
  ],
  relatedCitiesSlugs: [
    'seine-et-marne'
  ],
  blocks: [
    {
      type: 'Hero',
      title: 'Service de retrait d\'épave à La Ferté-Gaucher sans frais dans tout La Ferté-Gaucher (77320)',
      subtitle: 'Retrait VHU à La Ferté-Gaucher (77320) : prise en charge totale et gratuite de votre épave à La Ferté-Gaucher.',
      badge: 'La Ferté-Gaucher (77320)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à La Ferté-Gaucher',
      content: 'Dans le secteur rural de La Ferté-Gaucher, nous nous déplaçons gratuitement pour enlever votre épave. Dans les zones reculées de La Ferté-Gaucher, nous adaptons notre matériel pour un retrait sans difficulté. Le retrait gratuit de votre épave à La Ferté-Gaucher est organisé avec des équipements tout-terrain. Les modalités logistiques sont ajustées selon les particularités de chaque intervention. Notre équipe connaît les spécificités des zones rurales autour de La Ferté-Gaucher pour une intervention adaptée.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'L\'enlèvement d\'un véhicule hors d\'usage à La Ferté-Gaucher implique une stricte conformité réglementaire. Voici les éléments à préparer. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le relais est assuré par un opérateur habilité qui prend en charge les étapes réglementaires. La fin de vie du véhicule est traitée dans le respect des filières autorisées. Cette coordination permet d\'orienter le véhicule vers l\'interlocuteur compétent pour les étapes suivantes.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur La Ferté-Gaucher',
      intro: 'Que vous habitiez le centre ou la périphérie de La Ferté-Gaucher, nous venons retirer votre véhicule. L\'intervention à La Ferté-Gaucher fait l\'objet d\'une préparation approfondie en amont. Notre équipe couvre le secteur postal 77320 avec une logistique dédiée. Les habitants de La Ferté-Gaucher peuvent compter sur notre présence régulière dans ce code postal. Les zones industrielles et résidentielles autour de La Ferté-Gaucher sont comprises.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à La Ferté-Gaucher',
      questions: [
        { q: 'L\'intervention à La Ferté-Gaucher est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à La Ferté-Gaucher sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à La Ferté-Gaucher',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
