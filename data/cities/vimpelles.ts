import { PageData } from '../types'

export const vimpellesData: PageData = {
  slug: 'vimpelles',
  entityType: 'City',
  metaTitle: 'Épaviste Vimpelles (77520) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Vimpelles (77520). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Enlèvement épave Vimpelles (77520) - Service gratuit à Vimpelles',
      subtitle: 'Débarrassez votre épave à Vimpelles (77520) sans frais. Notre service couvre tout le secteur de Vimpelles.',
      badge: 'Vimpelles (77520)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Vimpelles',
      content: 'Les zones rurales autour de Vimpelles sont intégralement couvertes par notre service gratuit. Vivre à la campagne à Vimpelles ne signifie pas renoncer à un service d\'enlèvement professionnel. Notre service rural à Vimpelles garantit un retrait professionnel sans contrainte de distance. Les modalités logistiques sont ajustées selon les particularités de chaque intervention. L\'organisation de l\'enlèvement à Vimpelles tient compte des distances et de l\'accessibilité rurale.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Vimpelles soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'L\'organisation prévoit la remise du véhicule à un professionnel spécialisé dans la filière réglementée. Les professionnels habilités assurent le respect des procédures imposées par la réglementation. Cette répartition des rôles assure une continuité entre l\'enlèvement et les opérations réglementaires ultérieures.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Vimpelles',
      intro: 'La tournée de nos dépanneuses couvre Vimpelles en intégralité chaque semaine. Avant l\'intervention à Vimpelles, le professionnel analyse les accès et prépare son équipement. Les demandes pour le 77520 de Vimpelles sont traitées en priorité par notre équipe qui connaît bien ce secteur. Les communes qui entourent Vimpelles profitent également de notre service gratuit.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Vimpelles',
      questions: [
        { q: 'L\'intervention à Vimpelles est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Vimpelles sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Vimpelles',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
