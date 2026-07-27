import { PageData } from '../types'

export const montereauSurLeJardData: PageData = {
  slug: 'montereau-sur-le-jard',
  entityType: 'City',
  metaTitle: 'Épaviste Montereau-sur-le-Jard (77950) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Montereau-sur-le-Jard (77950). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Enlèvement gratuit de votre épave à Montereau-sur-le-Jard (77950) dans tout Montereau-sur-le-Jard',
      subtitle: 'Intervention à Montereau-sur-le-Jard (77950) : retrait gratuit de votre épave par des professionnels à Montereau-sur-le-Jard.',
      badge: 'Montereau-sur-le-Jard (77950)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Montereau-sur-le-Jard',
      content: 'Situé à Montereau-sur-le-Jard, votre véhicule hors d\'usage encombre votre terrain ou votre cour ? Dans les secteurs agricoles de Montereau-sur-le-Jard, nous retirons les épaves sans endommager les terrains. À Montereau-sur-le-Jard, nous venons jusqu\'à votre propriété rurale sans frais supplémentaires. Les conditions d\'accès sont vérifiées avant le départ pour garantir une intervention sans accroc. Nous adaptons notre intervention à Montereau-sur-le-Jard en fonction de la configuration des lieux.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Montereau-sur-le-Jard soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Après retrait, le véhicule est pris en relais par un opérateur de la filière de recyclage. La traçabilité des opérations est assurée par les professionnels intervenant dans la filière. Les responsabilités sont clairement établies entre les opérateurs de la chaîne de traitement.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Montereau-sur-le-Jard',
      intro: 'À Montereau-sur-le-Jard, nous pouvons retirer votre véhicule hors d\'usage en tout point du territoire. Un créneau d\'enlèvement à Montereau-sur-le-Jard vous est proposé selon vos disponibilités. Le secteur 77950 de Montereau-sur-le-Jard est couvert sans supplément de prix par notre service d\'enlèvement gratuit de véhicules hors d\'usage. Les habitants des environs proches de Montereau-sur-le-Jard peuvent compter sur notre service.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Montereau-sur-le-Jard',
      questions: [
        { q: 'L\'intervention à Montereau-sur-le-Jard est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Montereau-sur-le-Jard sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Montereau-sur-le-Jard',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
