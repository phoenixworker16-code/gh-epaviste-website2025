import { PageData } from '../types'

export const savinsData: PageData = {
  slug: 'savins',
  entityType: 'City',
  metaTitle: 'Épaviste Savins (77650) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Savins (77650). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Retrait d\'épave par professionnel agréé à Savins (77650) dans tout Savins',
      subtitle: 'Votre véhicule hors d\'usage à Savins (77650) ? Enlèvement gratuit partout dans Savins.',
      badge: 'Savins (77650)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Savins',
      content: 'À Savins, même les épaves situées sur des terrains difficiles sont prises en charge. À Savins, même dans les lieux-dits et les hameaux, nous retirons votre épave gratuitement. Notre service à Savins garantit un retrait gratuit où que vous soyez dans la commune. La coordination avec le propriétaire permet de caler le meilleur créneau pour l\'enlèvement. Nous organisons le passage à Savins avec une logistique adaptée aux grands terrains.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Savins soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le véhicule est dirigé vers un prestataire spécialisé dans le traitement des véhicules en fin de vie. Les opérateurs veillent au respect des exigences réglementaires tout au long du processus. La transition entre les intervenants est organisée pour garantir la continuité du service.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Savins',
      intro: 'L\'enlèvement gratuit de votre épave est organisé sur l\'ensemble du territoire de Savins. Nous organisons le passage à Savins avec une préparation minutieuse de l\'itinéraire. Les demandes pour le 77650 de Savins sont traitées en priorité par notre équipe qui connaît bien ce secteur. Les habitants des environs proches de Savins peuvent compter sur notre service.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Savins',
      questions: [
        { q: 'L\'intervention à Savins est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Savins sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Savins',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
