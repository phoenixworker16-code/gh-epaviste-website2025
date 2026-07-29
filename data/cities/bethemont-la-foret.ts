import { PageData } from '../types'

export const bethemontLaForetData: PageData = {
  slug: 'bethemont-la-foret',
  entityType: 'City',
  metaTitle: 'Épaviste Béthemont-la-Forêt (95840) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Béthemont-la-Forêt (95840). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
  relatedServicesSlugs: [
    'enlevement-epave-parking-souterrain',
    'enlevement-voiture-en-panne',
    'enlevement-voiture-sans-carte-grise'
  ],
  relatedCitiesSlugs: [
    'val-d-oise'
  ],
  blocks: [
    {
      type: 'Hero',
      title: 'Enlèvement épave sans papier à Béthemont-la-Forêt (95840) dans tout le 95840',
      subtitle: 'À Béthemont-la-Forêt (95840), nous organisons l\'enlèvement gratuit de votre épave partout dans Béthemont-la-Forêt.',
      badge: 'Béthemont-la-Forêt (95840)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Béthemont-la-Forêt',
      content: 'Votre vieux véhicule à Béthemont-la-Forêt prend la poussière et vous voulez vous en séparer ? Dans l\'environnement rural de Béthemont-la-Forêt, nous intervenons avec discrétion et efficacité. À Béthemont-la-Forêt, nous venons jusqu\'à votre propriété rurale sans frais supplémentaires. Les informations transmises permettent d\'anticiper les besoins techniques et humains. Nous prévoyons le passage à Béthemont-la-Forêt en fonction des conditions météo et d\'accès.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Béthemont-la-Forêt soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Val-d\'Oise sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'L\'enlèvement terminé, le transfert est organisé vers un professionnel de la filière réglementée. L\'ensemble des acteurs respecte les dispositions réglementaires encadrant cette activité. Chaque phase est prise en charge par le professionnel compétent pour ce type d\'opération.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Béthemont-la-Forêt',
      intro: 'Le service d\'enlèvement gratuit couvre l\'intégralité de la commune de Béthemont-la-Forêt. Le rendez-vous pour Béthemont-la-Forêt est défini en fonction des éléments communiqués lors du contact. Notre service dessert quotidiennement le secteur 95840 de Béthemont-la-Forêt avec des équipes spécialisées dans l\'enlèvement d\'épaves. Si vous résidez près de Béthemont-la-Forêt, notre service d\'enlèvement est également accessible.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Béthemont-la-Forêt',
      questions: [
        { q: 'L\'intervention à Béthemont-la-Forêt est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Béthemont-la-Forêt sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Béthemont-la-Forêt',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
