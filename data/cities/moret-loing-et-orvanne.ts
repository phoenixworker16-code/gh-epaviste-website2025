import { PageData } from '../types'

export const moretLoingEtOrvanneData: PageData = {
  slug: 'moret-loing-et-orvanne',
  entityType: 'City',
  metaTitle: 'Épaviste Moret-Loing-et-Orvanne (77250) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Moret-Loing-et-Orvanne (77250). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Votre épaviste de secteur à Moret-Loing-et-Orvanne (77250) pour enlèvement à Moret-Loing-et-Orvanne',
      subtitle: 'Enlèvement gratuit dans le 77250 à Moret-Loing-et-Orvanne. Débarras professionnel de votre épave à Moret-Loing-et-Orvanne.',
      badge: 'Moret-Loing-et-Orvanne (77250)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Moret-Loing-et-Orvanne',
      content: 'Situé à Moret-Loing-et-Orvanne, votre véhicule hors d\'usage encombre votre terrain ou votre cour ? Les habitants des zones rurales de Moret-Loing-et-Orvanne nous font confiance pour un service fiable. Le déplacement à Moret-Loing-et-Orvanne est inclus dans notre service, sans supplément kilométrique. Le programme d\'intervention est défini avec le propriétaire pour une prise en charge optimale. Le passage est organisé pour vous offrir un enlèvement sans contrainte, même à Moret-Loing-et-Orvanne.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'L\'enlèvement d\'un véhicule hors d\'usage à Moret-Loing-et-Orvanne implique une stricte conformité réglementaire. Voici les éléments à préparer. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'La suite des opérations est confiée à un établissement partenaire habilité dans la filière automobile. La prise en charge respecte les dispositions réglementaires applicables aux véhicules hors d\'usage. La progression du véhicule dans la filière est suivie par les différents opérateurs concernés.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Moret-Loing-et-Orvanne',
      intro: 'Le service d\'enlèvement gratuit couvre l\'intégralité de la commune de Moret-Loing-et-Orvanne. L\'intervention à Moret-Loing-et-Orvanne est programmée après avoir pris connaissance de votre situation. Les habitants du 77250 à Moret-Loing-et-Orvanne bénéficient d\'un passage régulier de nos équipes et d\'une prise en charge adaptée à ce secteur. Si vous résidez près de Moret-Loing-et-Orvanne, notre service d\'enlèvement est également accessible.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Moret-Loing-et-Orvanne',
      questions: [
        { q: 'L\'intervention à Moret-Loing-et-Orvanne est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Moret-Loing-et-Orvanne sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Moret-Loing-et-Orvanne',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
