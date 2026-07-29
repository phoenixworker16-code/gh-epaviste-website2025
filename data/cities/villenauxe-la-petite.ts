import { PageData } from '../types'

export const villenauxeLaPetiteData: PageData = {
  slug: 'villenauxe-la-petite',
  entityType: 'City',
  metaTitle: 'Épaviste Villenauxe-la-Petite (77480) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Villenauxe-la-Petite (77480). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Votre solution d\'enlèvement d\'épave à Villenauxe-la-Petite (77480) - Épaviste Villenauxe-la-Petite',
      subtitle: 'Enlèvement d\'épave Villenauxe-la-Petite (77480) : service rapide et gratuit pour votre VHU dans tout Villenauxe-la-Petite.',
      badge: 'Villenauxe-la-Petite (77480)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Villenauxe-la-Petite',
      content: 'À Villenauxe-la-Petite, nous intervenons même sur les chemins non goudronnés pour retirer votre épave. Notre équipe est habituée aux accès ruraux à Villenauxe-la-Petite et intervient dans les meilleures conditions. Notre équipe à Villenauxe-la-Petite connaît les spécificités des propriétés rurales et agricoles. Un échange téléphonique permet de finaliser l\'organisation avant le passage. Notre équipe connaît les spécificités des zones rurales autour de Villenauxe-la-Petite pour une intervention adaptée.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Villenauxe-la-Petite, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Une fois retiré, le véhicule est orienté vers une installation partenaire compétente dans la filière de recyclage. Le respect des textes en vigueur est garanti par l\'intervention de professionnels habilités. La coordination des professionnels garantit l\'efficacité du traitement réglementaire.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Villenauxe-la-Petite',
      intro: 'Aucun quartier de Villenauxe-la-Petite n\'est exclu : nous intervenons partout dans la commune. À Villenauxe-la-Petite, l\'organisation du retrait s\'adapte aux circonstances décrites. Le secteur 77480 de Villenauxe-la-Petite est couvert sans supplément de prix par notre service d\'enlèvement gratuit de véhicules hors d\'usage. Nous ne nous limitons pas à Villenauxe-la-Petite : les communes alentour sont aussi desservies.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Villenauxe-la-Petite',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Villenauxe-la-Petite est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Villenauxe-la-Petite sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Villenauxe-la-Petite',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
