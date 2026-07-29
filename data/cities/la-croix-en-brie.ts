import { PageData } from '../types'

export const laCroixEnBrieData: PageData = {
  slug: 'la-croix-en-brie',
  entityType: 'City',
  metaTitle: 'Épaviste La Croix-en-Brie (77370) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à La Croix-en-Brie (77370). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Service d\'enlèvement 100% gratuit à La Croix-en-Brie (77370) pour les habitants de La Croix-en-Brie',
      subtitle: 'Enlèvement gratuit VHU à La Croix-en-Brie (77370). Prenez rendez-vous, on s\'occupe de votre épave à La Croix-en-Brie.',
      badge: 'La Croix-en-Brie (77370)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à La Croix-en-Brie',
      content: 'Un véhicule hors d\'usage oublié dans votre propriété à La Croix-en-Brie peut être retiré sans frais. À La Croix-en-Brie, l\'éloignement des centres urbains n\'empêche pas un enlèvement professionnel. Le retrait gratuit de votre épave à La Croix-en-Brie est organisé avec des équipements tout-terrain. Un échange téléphonique permet de finaliser l\'organisation avant le passage. Le rendez-vous à La Croix-en-Brie est programmé avec une logistique adaptée aux routes et chemins.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'L\'enlèvement d\'un véhicule hors d\'usage à La Croix-en-Brie implique une stricte conformité réglementaire. Voici les éléments à préparer. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'La prestation prévoit l\'orientation du véhicule vers un interlocuteur compétent pour la fin de vie. Le partenaire assure les formalités et l\'orientation du véhicule vers les filières réglementaires appropriées. Chaque phase est prise en charge par le professionnel compétent pour ce type d\'opération.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur La Croix-en-Brie',
      intro: 'Les équipes affectées à La Croix-en-Brie connaissent parfaitement chaque secteur de la commune. À La Croix-en-Brie, l\'organisation du retrait s\'adapte aux circonstances décrites. La zone 77370 fait partie de notre secteur d\'intervention prioritaire. Nous organisons des passages réguliers dans cette partie de La Croix-en-Brie. Nous étendons notre intervention au-delà de La Croix-en-Brie pour couvrir un large secteur.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à La Croix-en-Brie',
      questions: [
        { q: 'L\'intervention à La Croix-en-Brie est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à La Croix-en-Brie sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à La Croix-en-Brie',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
