import { PageData } from '../types'

export const lesChapellesBourbonData: PageData = {
  slug: 'les-chapelles-bourbon',
  entityType: 'City',
  metaTitle: 'Épaviste Les Chapelles-Bourbon (77610) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Les Chapelles-Bourbon (77610). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Enlèvement VHU Les Chapelles-Bourbon - Prise en charge totale à Les Chapelles-Bourbon (77610)',
      subtitle: 'Votre épave à Les Chapelles-Bourbon retirée gratuitement. Intervention rapide dans le 77610 à Les Chapelles-Bourbon.',
      badge: 'Les Chapelles-Bourbon (77610)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Les Chapelles-Bourbon',
      content: 'À Les Chapelles-Bourbon, nous retirons gratuitement les épaves même dans les zones les plus reculées. Dans les secteurs agricoles de Les Chapelles-Bourbon, nous retirons les épaves sans endommager les terrains. Nous organisons à Les Chapelles-Bourbon des interventions adaptées aux grandes propriétés et aux écarts. La demande permet d\'identifier les informations nécessaires avant le déplacement. Le passage est organisé pour vous offrir un enlèvement sans contrainte, même à Les Chapelles-Bourbon.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Les Chapelles-Bourbon soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le véhicule est acheminé vers un partenaire disposant des compétences pour le traitement de fin de vie. Les différentes obligations sont remplies par les professionnels intervenant dans la chaîne de traitement. Les intervenants se coordonnent pour assurer la continuité du traitement réglementaire.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Les Chapelles-Bourbon',
      intro: 'Aucun quartier de Les Chapelles-Bourbon n\'est exclu : nous intervenons partout dans la commune. La préparation du retrait à Les Chapelles-Bourbon inclut une évaluation des conditions d\'intervention. Le code postal 77610 est intégré dans notre tournée d\'enlèvement régulière à Les Chapelles-Bourbon, ce qui garantit une intervention rapide. Les habitants des environs de Les Chapelles-Bourbon peuvent aussi faire appel à notre service.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Les Chapelles-Bourbon',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Les Chapelles-Bourbon est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Les Chapelles-Bourbon sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Les Chapelles-Bourbon',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
