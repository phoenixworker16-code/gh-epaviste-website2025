import { PageData } from '../types'

export const gretzArmainvilliersData: PageData = {
  slug: 'gretz-armainvilliers',
  entityType: 'City',
  metaTitle: 'Épaviste Gretz-Armainvilliers (77220) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Gretz-Armainvilliers (77220). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Enlèvement gratuit de carcasse à Gretz-Armainvilliers (77220) - Service Gretz-Armainvilliers',
      subtitle: 'Pour Gretz-Armainvilliers (77220) : retrait gratuit de votre épave avec remise des documents à Gretz-Armainvilliers.',
      badge: 'Gretz-Armainvilliers (77220)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Gretz-Armainvilliers',
      content: 'À Gretz-Armainvilliers, vous avez une épave qui ne bouge plus depuis longtemps sur votre propriété ? Les propriétés rurales de Gretz-Armainvilliers sont desservies par notre service sans supplément. À Gretz-Armainvilliers, notre logistique rurale permet de retirer les épaves même en terrain accidenté. L\'organisation du retrait est préparée conjointement avec le propriétaire du véhicule. L\'équipe dépêchée à Gretz-Armainvilliers connaît les spécificités des propriétés rurales.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Gretz-Armainvilliers, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Après l\'intervention, la prise en charge est relayée à un partenaire technique habilité. Cette organisation garantit une prise en charge conforme et une valorisation dans les filières prévues. L\'organisation prévoit une articulation claire entre les différentes étapes du processus.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Gretz-Armainvilliers',
      intro: 'Tous les habitants de Gretz-Armainvilliers peuvent bénéficier de notre service d\'enlèvement à domicile. Le dispositif mis en place pour Gretz-Armainvilliers est adapté à chaque situation particulière. Pour le secteur 77220, nos équipes interviennent régulièrement et connaissent parfaitement les accès et particularités de Gretz-Armainvilliers. Les habitants des environs de Gretz-Armainvilliers peuvent aussi faire appel à notre service.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Gretz-Armainvilliers',
      questions: [
        { q: 'L\'intervention à Gretz-Armainvilliers est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Gretz-Armainvilliers sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Gretz-Armainvilliers',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
