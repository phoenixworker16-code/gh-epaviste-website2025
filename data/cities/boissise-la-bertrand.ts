import { PageData } from '../types'

export const boissiseLaBertrandData: PageData = {
  slug: 'boissise-la-bertrand',
  entityType: 'City',
  metaTitle: 'Épaviste Boissise-la-Bertrand (77350) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Boissise-la-Bertrand (77350). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Retrait gratuit de carcasse automobile à Boissise-la-Bertrand (77350) dans le 77350',
      subtitle: 'À Boissise-la-Bertrand (77350) : débarras auto gratuit avec prise en charge complète de votre épave.',
      badge: 'Boissise-la-Bertrand (77350)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Boissise-la-Bertrand',
      content: 'Les zones rurales autour de Boissise-la-Bertrand sont intégralement couvertes par notre service gratuit. À la campagne, à Boissise-la-Bertrand, une épave qui rouille sur un terrain est fréquente mais pas une fatalité. À Boissise-la-Bertrand, l\'enlèvement gratuit comprend le déplacement jusqu\'à votre propriété. Le rendez-vous est organisé à partir de la situation du véhicule et des conditions d\'accès indiquées. Notre expérience des interventions en zone rurale garantit un service de qualité à Boissise-la-Bertrand.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Boissise-la-Bertrand, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le véhicule retiré est orienté vers une structure partenaire disposant des autorisations nécessaires. La conformité aux textes réglementaires est vérifiée par les opérateurs compétents. Les partenaires coordonnent leurs interventions pour assurer la complétude du traitement.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Boissise-la-Bertrand',
      intro: 'Pour les habitants de Boissise-la-Bertrand, l\'enlèvement d\'épave est gratuit dans toute la commune. Notre logistique à Boissise-la-Bertrand est dimensionnée pour répondre à chaque type de demande. Les demandes pour le 77350 de Boissise-la-Bertrand sont traitées en priorité par notre équipe qui connaît bien ce secteur. Les habitants des environs proches de Boissise-la-Bertrand peuvent compter sur notre service.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Boissise-la-Bertrand',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Boissise-la-Bertrand est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Boissise-la-Bertrand sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Boissise-la-Bertrand',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
