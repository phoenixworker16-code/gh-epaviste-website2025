import { PageData } from '../types'

export const saacySurMarneData: PageData = {
  slug: 'saacy-sur-marne',
  entityType: 'City',
  metaTitle: 'Épaviste Saâcy-sur-Marne (77730) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Saâcy-sur-Marne (77730). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Votre épaviste de secteur à Saâcy-sur-Marne (77730) pour enlèvement à Saâcy-sur-Marne',
      subtitle: 'Faites retirer votre épave à Saâcy-sur-Marne gratuitement. Notre équipe intervient dans le 77730 de Saâcy-sur-Marne.',
      badge: 'Saâcy-sur-Marne (77730)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Saâcy-sur-Marne',
      content: 'Situé à Saâcy-sur-Marne, votre véhicule hors d\'usage encombre votre terrain ou votre cour ? Nous nous déplaçons gratuitement jusqu\'à vous, même dans les zones moins denses du département. Notre équipe à Saâcy-sur-Marne est équipée de véhicules adaptés aux chemins ruraux. L\'organisation du retrait est préparée conjointement avec le propriétaire du véhicule. Le rendez-vous à Saâcy-sur-Marne est programmé avec une logistique adaptée aux routes et chemins.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Saâcy-sur-Marne soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le dispositif inclut un acheminement vers un professionnel disposant des habilitations requises. Les obligations environnementales sont satisfaites par les partenaires de la filière. Les professionnels habilités prennent le relais selon le planning établi lors de l\'enlèvement.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Saâcy-sur-Marne',
      intro: 'Nous retirons les épaves dans chaque rue et chaque quartier de Saâcy-sur-Marne. L\'organisation du passage à Saâcy-sur-Marne tient compte des particularités annoncées. Le secteur 77730 de Saâcy-sur-Marne est couvert sans supplément de prix par notre service d\'enlèvement gratuit de véhicules hors d\'usage. Nous ne nous limitons pas à Saâcy-sur-Marne : les communes alentour sont aussi desservies.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Saâcy-sur-Marne',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Saâcy-sur-Marne est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Saâcy-sur-Marne sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Saâcy-sur-Marne',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
