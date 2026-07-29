import { PageData } from '../types'

export const augersEnBrieData: PageData = {
  slug: 'augers-en-brie',
  entityType: 'City',
  metaTitle: 'Épaviste Augers-en-Brie (77560) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Augers-en-Brie (77560). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Retrait gratuit de carcasse automobile à Augers-en-Brie (77560) dans le 77560',
      subtitle: 'Intervention à Augers-en-Brie (77560) : retrait gratuit de votre épave par des professionnels à Augers-en-Brie.',
      badge: 'Augers-en-Brie (77560)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Augers-en-Brie',
      content: 'Redonnez de l\'espace à votre terrain à Augers-en-Brie en confiant cette épave à notre service. À Augers-en-Brie, l\'éloignement des centres urbains n\'empêche pas un enlèvement professionnel. Notre équipe à Augers-en-Brie est équipée de véhicules adaptés aux chemins ruraux. Un échange préalable permet de prévoir le matériel approprié et le créneau de passage. Nous prévoyons le passage à Augers-en-Brie en fonction des conditions météo et d\'accès.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Augers-en-Brie, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'La prestation comprend l\'orientation du véhicule vers un interlocuteur compétent pour les étapes à venir. Les obligations environnementales sont satisfaites par les partenaires de la filière. Les partenaires se répartissent les opérations selon leur domaine d\'expertise respectif.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Augers-en-Brie',
      intro: 'Vous avez une épave à Augers-en-Brie ? Notre équipe se déplace gratuitement où qu\'elle soit. Avant de se déplacer à Augers-en-Brie, l\'équipe vérifie les accès et prépare le matériel adapté. Les habitants du 77560 à Augers-en-Brie bénéficient d\'un passage régulier de nos équipes et d\'une prise en charge adaptée à ce secteur. Notre rayonnement autour de Augers-en-Brie s\'étend sur plusieurs kilomètres à la ronde.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Augers-en-Brie',
      questions: [
        { q: 'L\'intervention à Augers-en-Brie est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Augers-en-Brie sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Augers-en-Brie',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
