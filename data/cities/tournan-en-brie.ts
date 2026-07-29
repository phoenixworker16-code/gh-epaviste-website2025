import { PageData } from '../types'

export const tournanEnBrieData: PageData = {
  slug: 'tournan-en-brie',
  entityType: 'City',
  metaTitle: 'Épaviste Tournan-en-Brie (77220) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Tournan-en-Brie (77220). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Solution enlèvement épave Tournan-en-Brie (77220) - Prise en charge Tournan-en-Brie',
      subtitle: 'Votre épaviste à Tournan-en-Brie (77220) : intervention gratuite et rapide pour votre VHU dans Tournan-en-Brie.',
      badge: 'Tournan-en-Brie (77220)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Tournan-en-Brie',
      content: 'Dans la campagne de Tournan-en-Brie, un véhicule hors d\'usage peut être retiré sans aucun frais. Dans les secteurs agricoles de Tournan-en-Brie, nous retirons les épaves sans endommager les terrains. Les exploitants agricoles de Tournan-en-Brie nous confient leurs épaves pour un traitement réglementaire. Le dispositif logistique est adapté à chaque situation pour garantir une intervention de qualité. Chaque détail de l\'enlèvement à Tournan-en-Brie est pensé pour une expérience sans tracas.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Tournan-en-Brie soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'L\'organisation logistique prévoit un transfert vers un professionnel agréé pour le traitement de ces véhicules. La réglementation encadrant les véhicules hors d\'usage est respectée par les intervenants agréés. Le processus est conçu pour assurer une prise en charge complète sans rupture de service.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Tournan-en-Brie',
      intro: 'Nous retirons les épaves dans chaque rue et chaque quartier de Tournan-en-Brie. L\'intervention à Tournan-en-Brie est programmée après avoir pris connaissance de votre situation. Notre service dessert quotidiennement le secteur 77220 de Tournan-en-Brie avec des équipes spécialisées dans l\'enlèvement d\'épaves. Les zones limitrophes de Tournan-en-Brie peuvent aussi profiter de notre service d\'enlèvement.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Tournan-en-Brie',
      questions: [
        { q: 'L\'intervention à Tournan-en-Brie est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Tournan-en-Brie sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Tournan-en-Brie',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
