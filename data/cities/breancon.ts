import { PageData } from '../types'

export const breanconData: PageData = {
  slug: 'breancon',
  entityType: 'City',
  metaTitle: 'Épaviste Bréançon (95640) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Bréançon (95640). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Enlèvement VHU Bréançon - Prise en charge totale à Bréançon (95640)',
      subtitle: 'Votre épaviste à Bréançon (95640) : intervention gratuite et rapide pour votre VHU dans Bréançon.',
      badge: 'Bréançon (95640)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Bréançon',
      content: 'Vous avez une vieille voiture qui rouille dans un champ à Bréançon ? Nous l\'enlevons gratuitement. À Bréançon, faire retirer une épave de son terrain, c\'est aussi valoriser sa propriété. À Bréançon, nous venons jusqu\'à votre propriété rurale sans frais supplémentaires. Les informations transmises permettent d\'anticiper les besoins techniques et humains. Les détails de l\'intervention à Bréançon sont confirmés en amont pour une coordination parfaite.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Bréançon, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Val-d\'Oise sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'La continuité du parcours est assurée par un partenaire spécialisé dans la filière concernée. Les opérations de fin de vie sont réalisées en conformité avec le cadre légal établi. Les étapes sont enchaînées de manière organisée pour un parcours cohérent du véhicule.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Bréançon',
      intro: 'À Bréançon, la prise en charge de votre épave se fait quel que soit l\'endroit exact. La logistique à Bréançon est adaptée au type de véhicule et à son environnement. Les habitants du 95640 à Bréançon bénéficient d\'un passage régulier de nos équipes et d\'une prise en charge adaptée à ce secteur. Les habitants des environs de Bréançon peuvent aussi faire appel à notre service.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Bréançon',
      questions: [
        { q: 'L\'intervention à Bréançon est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Bréançon sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Bréançon',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
