import { PageData } from '../types'

export const mareilEnFranceData: PageData = {
  slug: 'mareil-en-france',
  entityType: 'City',
  metaTitle: 'Épaviste Mareil-en-France (95850) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Mareil-en-France (95850). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
  relatedServicesSlugs: [
    'enlevement-epave-parking-souterrain',
    'enlevement-voiture-en-panne',
    'enlevement-voiture-sans-carte-grise'
  ],
  relatedCitiesSlugs: [
    'enlevement-epave-val-d-oise'
  ],
  blocks: [
    {
      type: 'Hero',
      title: 'Service épaviste Mareil-en-France (95850) - Intervention rapide à Mareil-en-France',
      subtitle: 'Retrait de VHU à Mareil-en-France (95850) : un service gratuit et rapide pour tout Mareil-en-France et ses environs.',
      badge: 'Mareil-en-France (95850)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Mareil-en-France',
      content: 'À Mareil-en-France, vous avez une épave qui ne bouge plus depuis longtemps sur votre propriété ? Dans la campagne de Mareil-en-France, nous intervenons sans frais de déplacement supplémentaires. À Mareil-en-France, nous proposons un enlèvement gratuit même dans les zones les plus isolées. La coordination avec le propriétaire permet de caler le meilleur créneau pour l\'enlèvement. Les modalités de l\'intervention à Mareil-en-France sont conçues pour les propriétés rurales.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'L\'enlèvement d\'un véhicule hors d\'usage à Mareil-en-France implique une stricte conformité réglementaire. Voici les éléments à préparer. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Val-d\'Oise sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Dès l\'enlèvement réalisé, le transfert vers l\'installation partenaire appropriée est programmé. Les obligations applicables aux véhicules hors d\'usage sont respectées tout au long du processus. La coordination des acteurs garantit le respect des procédures à chaque étape du parcours.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Mareil-en-France',
      intro: 'Aucun quartier de Mareil-en-France n\'est exclu : nous intervenons partout dans la commune. Notre équipe adapte sa logistique à Mareil-en-France en fonction de chaque configuration. Les demandes pour le 95850 de Mareil-en-France sont traitées en priorité par notre équipe qui connaît bien ce secteur. Notre zone de couverture s\'articule autour de Mareil-en-France et de ses environs.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Mareil-en-France',
      questions: [
        { q: 'L\'intervention à Mareil-en-France est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Mareil-en-France sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Mareil-en-France',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
