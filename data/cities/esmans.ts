import { PageData } from '../types'

export const esmansData: PageData = {
  slug: 'esmans',
  entityType: 'City',
  metaTitle: 'Épaviste Esmans (77940) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Esmans (77940). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Retrait de véhicule hors d\'usage à Esmans (77940) dans le 77940',
      subtitle: 'Pour tout Esmans (77940) : enlèvement gratuit et professionnel de votre véhicule hors d\'usage.',
      badge: 'Esmans (77940)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Esmans',
      content: 'Votre propriété à Esmans est encombrée par un véhicule hors d\'usage ? Nous intervenons. Dans l\'environnement rural de Esmans, nous intervenons avec discrétion et efficacité. Profitez d\'un débarras d\'épave professionnel et écologique, avec une prise en charge complète du remorquage au recyclage. Le rendez-vous est organisé à partir de la situation du véhicule et des conditions d\'accès indiquées. Les modalités d\'accès à Esmans sont vérifiées avant le départ pour une intervention réussie.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Esmans soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le véhicule est remis à un partenaire spécialisé pour la suite de son traitement réglementaire. Les formalités réglementaires sont accomplies dans les conditions prévues par la législation. La coordination entre les opérateurs garantit la continuité du traitement réglementaire.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Esmans',
      intro: 'Notre dispositif à Esmans assure un enlèvement gratuit dans tous les secteurs sans exception. Notre équipe à Esmans coordonne le passage avec vous pour une intervention sans accroc. Les habitants du 77940 à Esmans bénéficient d\'un passage régulier de nos équipes et d\'une prise en charge adaptée à ce secteur. Les communes qui entourent Esmans profitent également de notre service gratuit.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Esmans',
      questions: [
        { q: 'L\'intervention à Esmans est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Esmans sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Esmans',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
