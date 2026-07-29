import { PageData } from '../types'

export const blandyData: PageData = {
  slug: 'blandy',
  entityType: 'City',
  metaTitle: 'Épaviste Blandy (77115) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Blandy (77115). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Service professionnel d\'enlèvement VHU à Blandy (77115) dans tout Blandy',
      subtitle: 'Débarrassez votre épave à Blandy gratuitement. Notre équipe intervient dans tout le 77115 de Blandy.',
      badge: 'Blandy (77115)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Blandy',
      content: 'Votre terrain à Blandy retrouvera son aspect d\'origine après l\'enlèvement de cette épave. Nous nous déplaçons gratuitement jusqu\'à vous, même dans les zones moins denses du département. Notre service à Blandy garantit un retrait gratuit où que vous soyez dans la commune. La demande permet d\'identifier les informations nécessaires avant le déplacement. Le rendez-vous à Blandy est organisé pour minimiser les déplacements superflus.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Blandy soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Après l\'enlèvement, un professionnel partenaire prend le relais pour les opérations ultérieures. Les différentes opérations sont soumises au respect des règles applicables à la filière. Les opérateurs successifs interviennent chacun selon leurs compétences et habilitations.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Blandy',
      intro: 'Aucun quartier de Blandy n\'est exclu : nous intervenons partout dans la commune. À Blandy, l\'organisation du retrait s\'adapte aux circonstances décrites. Notre équipe couvre le secteur postal 77115 avec une logistique dédiée. Les habitants de Blandy peuvent compter sur notre présence régulière dans ce code postal. Notre dispositif autour de Blandy permet d\'intervenir dans une zone élargie.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Blandy',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Blandy est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Blandy sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Blandy',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
