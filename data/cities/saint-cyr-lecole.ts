import { PageData } from '../types'

export const saintCyrLecoleData: PageData = {
  slug: 'saint-cyr-lecole',
  entityType: 'City',
  metaTitle: 'Épaviste Saint-Cyr-l\'École (78210) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Saint-Cyr-l\'École (78210). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
  relatedServicesSlugs: [
    'enlevement-epave-parking-souterrain',
    'enlevement-voiture-en-panne',
    'enlevement-voiture-sans-carte-grise'
  ],
  relatedCitiesSlugs: [
    'yvelines'
  ],
  blocks: [
    {
      type: 'Hero',
      title: 'Votre épaviste de secteur à Saint-Cyr-l\'École (78210) pour enlèvement à Saint-Cyr-l\'École',
      subtitle: 'Solution enlèvement épave à Saint-Cyr-l\'École (78210). Intervention rapide et gratuite dans le 78210 de Saint-Cyr-l\'École.',
      badge: 'Saint-Cyr-l\'École (78210)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Saint-Cyr-l\'École',
      content: 'À Saint-Cyr-l\'École, nous intervenons même sur les chemins non goudronnés pour retirer votre épave. À Saint-Cyr-l\'École, faire retirer une épave de son terrain, c\'est aussi valoriser sa propriété. Les exploitants agricoles de Saint-Cyr-l\'École nous confient leurs épaves pour un traitement réglementaire. L\'équipe prépare son intervention à partir des détails fournis lors de la prise de contact. Les distances jusqu\'à Saint-Cyr-l\'École sont anticipées dans notre organisation logistique.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Saint-Cyr-l\'École, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Yvelines sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le dispositif inclut un acheminement vers un professionnel disposant des habilitations requises. Le respect des textes en vigueur est garanti par l\'intervention de professionnels habilités. La coordination entre les opérateurs garantit la continuité du traitement réglementaire.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Saint-Cyr-l\'École',
      intro: 'Nous intervenons à Saint-Cyr-l\'École dans tous les secteurs, y compris dans les zones à accès difficile. Pour Saint-Cyr-l\'École, l\'équipe se renseigne sur les spécificités d\'accès avant le départ. Le secteur 78210 de Saint-Cyr-l\'École est couvert sans supplément de prix par notre service d\'enlèvement gratuit de véhicules hors d\'usage. Les axes routiers menant à Saint-Cyr-l\'École sont régulièrement empruntés par nos équipes.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Saint-Cyr-l\'École',
      questions: [
        { q: 'L\'intervention à Saint-Cyr-l\'École est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Saint-Cyr-l\'École sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Saint-Cyr-l\'École',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
