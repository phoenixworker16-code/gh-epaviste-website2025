import { PageData } from '../types'

export const mantesLaJolieData: PageData = {
  slug: 'mantes-la-jolie',
  entityType: 'City',
  metaTitle: 'Épaviste Mantes-la-Jolie (78200) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Mantes-la-Jolie (78200). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
  relatedServicesSlugs: [
    'enlevement-epave-parking-souterrain',
    'enlevement-voiture-en-panne',
    'enlevement-voiture-sans-carte-grise'
  ],
  relatedCitiesSlugs: [
    'enlevement-epave-yvelines'
  ],
  blocks: [
    {
      type: 'Hero',
      title: 'Débarrassez votre véhicule hors d\'usage à Mantes-la-Jolie (78200) - Épaviste Mantes-la-Jolie',
      subtitle: 'Besoin d\'un épaviste à Mantes-la-Jolie (78200) ? Enlèvement gratuit de votre VHU dans tout Mantes-la-Jolie.',
      badge: 'Mantes-la-Jolie (78200)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Mantes-la-Jolie',
      content: 'Dans le secteur rural de Mantes-la-Jolie, nous nous déplaçons gratuitement pour enlever votre épave. À Mantes-la-Jolie, faire retirer une épave de son terrain, c\'est aussi valoriser sa propriété. À Mantes-la-Jolie, nous proposons un enlèvement gratuit même dans les zones les plus isolées. Le dispositif logistique est adapté à chaque situation pour garantir une intervention de qualité. Notre service à Mantes-la-Jolie tient compte de l\'environnement rural et de ses contraintes.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Mantes-la-Jolie soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Yvelines sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'La prise en charge prévoit le transfert du véhicule vers un opérateur partenaire habilité à traiter les véhicules hors d\'usage. Les différentes opérations sont soumises au respect des règles applicables à la filière. La coordination entre les opérateurs garantit la continuité du traitement réglementaire.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Mantes-la-Jolie',
      intro: 'Aucun quartier de Mantes-la-Jolie n\'est exclu : nous intervenons partout dans la commune. L\'équipe dépêchée à Mantes-la-Jolie connaît à l\'avance les conditions d\'accès au véhicule. Notre service dessert quotidiennement le secteur 78200 de Mantes-la-Jolie avec des équipes spécialisées dans l\'enlèvement d\'épaves. Les habitants des environs proches de Mantes-la-Jolie peuvent compter sur notre service.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Mantes-la-Jolie',
      questions: [
        { q: 'L\'intervention à Mantes-la-Jolie est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Mantes-la-Jolie sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Mantes-la-Jolie',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
