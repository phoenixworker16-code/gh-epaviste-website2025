import { PageData } from '../types'

export const betonBazochesData: PageData = {
  slug: 'beton-bazoches',
  entityType: 'City',
  metaTitle: 'Épaviste Beton-Bazoches (77320) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Beton-Bazoches (77320). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Service épaviste Beton-Bazoches (77320) - Intervention rapide à Beton-Bazoches',
      subtitle: 'Service gratuit d\'épaviste à Beton-Bazoches (77320). Votre véhicule hors d\'usage retiré à Beton-Bazoches.',
      badge: 'Beton-Bazoches (77320)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Beton-Bazoches',
      content: 'Situé à Beton-Bazoches, votre véhicule hors d\'usage encombre votre terrain ou votre cour ? À Beton-Bazoches, même dans les lieux-dits et les hameaux, nous retirons votre épave gratuitement. Nous retirons gratuitement votre épave à Beton-Bazoches avec du matériel adapté aux terrains ruraux. La logistique est organisée pour garantir une intervention efficace et sans attente. Le rendez-vous à Beton-Bazoches est programmé avec une logistique adaptée aux routes et chemins.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Beton-Bazoches, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'L\'organisation comprend un relais vers un établissement habilité pour la suite des opérations. Le respect des textes en vigueur est garanti par l\'intervention de professionnels habilités. La continuité du traitement est assurée par une organisation structurée entre les partenaires.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Beton-Bazoches',
      intro: 'Les équipes affectées à Beton-Bazoches connaissent parfaitement chaque secteur de la commune. Les informations fournies sur la situation à Beton-Bazoches permettent de préparer l\'intervention. Pour le secteur 77320, nos équipes interviennent régulièrement et connaissent parfaitement les accès et particularités de Beton-Bazoches. Les axes secondaires et les hameaux près de Beton-Bazoches sont inclus dans notre périmètre.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Beton-Bazoches',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Beton-Bazoches est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Beton-Bazoches sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Beton-Bazoches',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
