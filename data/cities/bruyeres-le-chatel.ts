import { PageData } from '../types'

export const bruyeresLeChatelData: PageData = {
  slug: 'bruyeres-le-chatel',
  entityType: 'City',
  metaTitle: 'Épaviste Bruyères-le-Châtel (91680) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Bruyères-le-Châtel (91680). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
  relatedServicesSlugs: [
    'enlevement-epave-parking-souterrain',
    'enlevement-voiture-en-panne',
    'enlevement-voiture-sans-carte-grise'
  ],
  relatedCitiesSlugs: [
    'enlevement-epave-essonne'
  ],
  blocks: [
    {
      type: 'Hero',
      title: 'Faire enlever son VHU à Bruyères-le-Châtel par un professionnel dans le 91680 de Bruyères-le-Châtel',
      subtitle: 'Enlèvement épave Bruyères-le-Châtel (91680) : service gratuit pour votre VHU dans tout le secteur de Bruyères-le-Châtel.',
      badge: 'Bruyères-le-Châtel (91680)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Bruyères-le-Châtel',
      content: 'Votre propriété à Bruyères-le-Châtel est encombrée par un véhicule hors d\'usage ? Nous intervenons. À Bruyères-le-Châtel, l\'éloignement des centres urbains n\'empêche pas un enlèvement professionnel. Notre équipe à Bruyères-le-Châtel assure un service professionnel d\'enlèvement gratuit en zone rurale. La logistique est organisée pour garantir une intervention efficace et sans attente. Notre expérience des interventions en zone rurale garantit un service de qualité à Bruyères-le-Châtel.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Bruyères-le-Châtel soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Essonne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'La continuité du parcours est assurée par un partenaire spécialisé dans la filière concernée. La conformité du traitement est assurée par le respect des procédures en vigueur. Le partenaire compétent prend ensuite le relais pour les étapes qui relèvent de sa responsabilité.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Bruyères-le-Châtel',
      intro: 'Toutes les rues de Bruyères-le-Châtel sont couvertes, quel que soit le type d\'habitation. Pour un retrait à Bruyères-le-Châtel, notre équipe se tient prête à intervenir au créneau convenu. Le secteur 91680 de Bruyères-le-Châtel est couvert sans supplément de prix par notre service d\'enlèvement gratuit de véhicules hors d\'usage. Les communes qui entourent Bruyères-le-Châtel profitent également de notre service gratuit.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Bruyères-le-Châtel',
      questions: [
        { q: 'L\'intervention à Bruyères-le-Châtel est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Bruyères-le-Châtel sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Bruyères-le-Châtel',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
