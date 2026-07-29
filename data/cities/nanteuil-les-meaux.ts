import { PageData } from '../types'

export const nanteuilLesMeauxData: PageData = {
  slug: 'nanteuil-les-meaux',
  entityType: 'City',
  metaTitle: 'Épaviste Nanteuil-lès-Meaux (77100) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Nanteuil-lès-Meaux (77100). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Service épaviste Nanteuil-lès-Meaux (77100) - Intervention rapide à Nanteuil-lès-Meaux',
      subtitle: 'Pour Nanteuil-lès-Meaux (77100) : retrait gratuit de votre épave avec remise des documents à Nanteuil-lès-Meaux.',
      badge: 'Nanteuil-lès-Meaux (77100)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Nanteuil-lès-Meaux',
      content: 'Dans la campagne de Nanteuil-lès-Meaux, un véhicule hors d\'usage peut être retiré sans aucun frais. À la campagne, à Nanteuil-lès-Meaux, une épave qui rouille sur un terrain est fréquente mais pas une fatalité. Le déplacement à Nanteuil-lès-Meaux est inclus dans notre service, sans supplément kilométrique. Les précisions apportées en amont aident à préparer le matériel et l\'équipe adaptés. Les modalités d\'accès à Nanteuil-lès-Meaux sont vérifiées avant le départ pour une intervention réussie.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Nanteuil-lès-Meaux soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Après l\'intervention, la prise en charge est relayée à un partenaire technique habilité. Les différentes phases de traitement sont réalisées sous le contrôle des opérateurs autorisés. L\'organisation prévoit une articulation claire entre les différentes étapes du processus.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Nanteuil-lès-Meaux',
      intro: 'Même dans les secteurs les plus excentrés de Nanteuil-lès-Meaux, nous organisons l\'enlèvement. À Nanteuil-lès-Meaux, nous veillons à ce que tous les aspects logistiques soient anticipés. Pour le secteur 77100, nos équipes interviennent régulièrement et connaissent parfaitement les accès et particularités de Nanteuil-lès-Meaux. Nous étendons notre intervention au-delà de Nanteuil-lès-Meaux pour couvrir un large secteur.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Nanteuil-lès-Meaux',
      questions: [
        { q: 'L\'intervention à Nanteuil-lès-Meaux est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Nanteuil-lès-Meaux sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Nanteuil-lès-Meaux',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
