import { PageData } from '../types'

export const jutignyData: PageData = {
  slug: 'jutigny',
  entityType: 'City',
  metaTitle: 'Épaviste Jutigny (77650) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Jutigny (77650). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Retrait gratuit de carcasse automobile à Jutigny (77650) dans le 77650',
      subtitle: 'À Jutigny (77650), notre équipe enlève gratuitement votre épave où qu\'elle soit.',
      badge: 'Jutigny (77650)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Jutigny',
      content: 'À Jutigny, vous avez une épave qui ne bouge plus depuis longtemps sur votre propriété ? Vivre à la campagne à Jutigny ne signifie pas renoncer à un service d\'enlèvement professionnel. Notre équipe à Jutigny est équipée de véhicules adaptés aux chemins ruraux. La préparation du retrait inclut une vérification des accès et des contraintes éventuelles. Notre service à Jutigny tient compte de l\'environnement rural et de ses contraintes.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'L\'enlèvement d\'un véhicule hors d\'usage à Jutigny implique une stricte conformité réglementaire. Voici les éléments à préparer. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'L\'organisation mise en place prévoit un relais vers un opérateur partenaire pour les phases suivantes. Cette organisation garantit une prise en charge conforme et une valorisation dans les filières prévues. La continuité entre l\'enlèvement et le traitement est assurée par une organisation cadrée.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Jutigny',
      intro: 'L\'enlèvement à Jutigny est organisé sans considération de zone ou de quartier. Chaque enlèvement à Jutigny est préparé en étudiant les accès et les contraintes locales. Les habitants du 77650 à Jutigny bénéficient d\'un passage régulier de nos équipes et d\'une prise en charge adaptée à ce secteur. Les alentours de Jutigny sont intégrés à notre tournée d\'enlèvement régulière.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Jutigny',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Jutigny est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Jutigny sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Jutigny',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
