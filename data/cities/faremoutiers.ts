import { PageData } from '../types'

export const faremoutiersData: PageData = {
  slug: 'faremoutiers',
  entityType: 'City',
  metaTitle: 'Épaviste Faremoutiers (77515) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Faremoutiers (77515). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Retrait et recyclage de votre épave à Faremoutiers (77515) - Service Faremoutiers',
      subtitle: 'Épaviste à Faremoutiers - Intervention gratuite pour retirer votre VHU dans le 77515 à Faremoutiers.',
      badge: 'Faremoutiers (77515)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Faremoutiers',
      content: 'Un véhicule hors d\'usage oublié dans votre propriété à Faremoutiers peut être retiré sans frais. Les habitants des zones rurales de Faremoutiers nous font confiance pour un service fiable. À Faremoutiers, même dans les secteurs isolés, notre équipe se déplace gratuitement. Le rendez-vous est organisé à partir de la situation du véhicule et des conditions d\'accès indiquées. Nous prévoyons le passage à Faremoutiers en fonction des conditions météo et d\'accès.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Faremoutiers soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le véhicule retiré est confié à un partenaire autorisé à réaliser les opérations de recyclage. La prise en charge respecte les dispositions réglementaires applicables aux véhicules hors d\'usage. L\'enchaînement des étapes est planifié pour respecter les délais et les obligations réglementaires.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Faremoutiers',
      intro: 'Vous avez une épave à Faremoutiers ? Notre équipe se déplace gratuitement où qu\'elle soit. Les modalités d\'intervention à Faremoutiers sont adaptées à l\'emplacement signalé du véhicule. Les demandes pour le 77515 de Faremoutiers sont traitées en priorité par notre équipe qui connaît bien ce secteur. Les habitants des environs de Faremoutiers peuvent aussi faire appel à notre service.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Faremoutiers',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Faremoutiers est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Faremoutiers sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Faremoutiers',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
