import { PageData } from '../types'

export const orgerusData: PageData = {
  slug: 'orgerus',
  entityType: 'City',
  metaTitle: 'Épaviste Orgerus (78910) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Orgerus (78910). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
  relatedServicesSlugs: [
    'enlevement-epave-parking-souterrain',
    'enlevement-voiture-en-panne',
    'enlevement-voiture-sans-carte-grise'
  ],
  relatedCitiesSlugs: [
    'enlevement-epave-yvelines'
  ],
  blocks: [
    {
      type: 'Hero',
      title: 'Débarrassez votre épave à Orgerus (78910) gratuitement dans tout Orgerus',
      subtitle: 'Orgerus (78910) : enlèvement gratuit de votre épave à Orgerus par notre équipe.',
      badge: 'Orgerus (78910)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Orgerus',
      content: 'Dans la campagne de Orgerus, un véhicule hors d\'usage peut être retiré sans aucun frais. À Orgerus, une épave oubliée dans un pré peut être retirée sans que vous ayez à bouger. Le déplacement à Orgerus est inclus dans notre service, sans supplément kilométrique. Un échange téléphonique permet de finaliser l\'organisation avant le passage. L\'intervention à Orgerus est préparée avec soin pour garantir votre satisfaction.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'L\'enlèvement d\'un véhicule hors d\'usage à Orgerus implique une stricte conformité réglementaire. Voici les éléments à préparer. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Yvelines sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'La prise en charge inclut l\'acheminement vers un professionnel partenaire habilité pour les véhicules hors d\'usage. La fin de vie du véhicule est gérée conformément aux procédures réglementaires établies. Les opérateurs compétents interviennent à tour de rôle pour couvrir l\'ensemble du processus.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Orgerus',
      intro: 'Les interventions à Orgerus sont possibles aussi bien sur voie publique que sur propriété privée. Chaque demande d\'enlèvement à Orgerus reçoit une organisation personnalisée. Les demandes pour le 78910 de Orgerus sont traitées en priorité par notre équipe qui connaît bien ce secteur. Nous étendons notre intervention au-delà de Orgerus pour couvrir un large secteur.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Orgerus',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Orgerus est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Orgerus sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Orgerus',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
