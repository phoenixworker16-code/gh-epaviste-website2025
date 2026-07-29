import { PageData } from '../types'

export const noisyRudignonData: PageData = {
  slug: 'noisy-rudignon',
  entityType: 'City',
  metaTitle: 'Épaviste Noisy-Rudignon (77940) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Noisy-Rudignon (77940). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Retrait d\'épave par professionnel agréé à Noisy-Rudignon (77940) dans tout Noisy-Rudignon',
      subtitle: 'Solution enlèvement épave à Noisy-Rudignon (77940). Intervention rapide et gratuite dans le 77940 de Noisy-Rudignon.',
      badge: 'Noisy-Rudignon (77940)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Noisy-Rudignon',
      content: 'Dans le secteur rural de Noisy-Rudignon, nous nous déplaçons gratuitement pour enlever votre épave. Dans les secteurs ruraux autour de Noisy-Rudignon, l\'accès à un service d\'enlèvement est simplifié. Nous organisons à Noisy-Rudignon des interventions adaptées aux grandes propriétés et aux écarts. L\'équipe adapte sa préparation en fonction du type de véhicule et de son emplacement. Les modalités d\'accès à Noisy-Rudignon sont vérifiées avant le départ pour une intervention réussie.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Noisy-Rudignon, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'La prise en charge prévoit le transfert du véhicule vers un opérateur partenaire habilité à traiter les véhicules hors d\'usage. La réglementation encadrant les véhicules hors d\'usage est respectée par les intervenants agréés. L\'organisation des différentes phases permet un traitement complet dans le respect des règles.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Noisy-Rudignon',
      intro: 'Depuis le centre historique jusqu\'aux zones d\'activité de Noisy-Rudignon, notre service est disponible. Les particularités de l\'emplacement à Noisy-Rudignon sont prises en compte dans l\'organisation. Les demandes pour le 77940 de Noisy-Rudignon sont traitées en priorité par notre équipe qui connaît bien ce secteur. Autour de Noisy-Rudignon, notre dispositif d\'intervention s\'étend aux zones péri-urbaines.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Noisy-Rudignon',
      questions: [
        { q: 'L\'intervention à Noisy-Rudignon est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Noisy-Rudignon sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Noisy-Rudignon',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
