import { PageData } from '../types'

export const ozoirLaFerriereData: PageData = {
  slug: 'ozoir-la-ferriere',
  entityType: 'City',
  metaTitle: 'Épaviste Ozoir-la-Ferrière (77330) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Ozoir-la-Ferrière (77330). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Débarrassez votre épave à Ozoir-la-Ferrière (77330) gratuitement dans tout Ozoir-la-Ferrière',
      subtitle: 'Retrait VHU à Ozoir-la-Ferrière (77330) : prise en charge totale et gratuite de votre épave à Ozoir-la-Ferrière.',
      badge: 'Ozoir-la-Ferrière (77330)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Ozoir-la-Ferrière',
      content: 'Un véhicule hors d\'usage oublié dans votre propriété à Ozoir-la-Ferrière peut être retiré sans frais. Vivre à la campagne à Ozoir-la-Ferrière ne signifie pas renoncer à un service d\'enlèvement professionnel. Le déplacement à Ozoir-la-Ferrière est inclus dans notre service, sans supplément kilométrique. La demande permet d\'identifier les informations nécessaires avant le déplacement. Notre équipe connaît les spécificités des zones rurales autour de Ozoir-la-Ferrière pour une intervention adaptée.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Ozoir-la-Ferrière, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'L\'enlèvement est suivi d\'un acheminement vers une structure partenaire autorisée à recevoir ce type de véhicule. Les opérations de recyclage sont réalisées dans le respect des normes environnementales établies. Les différents rôles sont répartis entre les professionnels intervenant dans le processus.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Ozoir-la-Ferrière',
      intro: 'Grâce à notre organisation, Ozoir-la-Ferrière est entièrement desservie pour l\'enlèvement d\'épaves. L\'intervention à Ozoir-la-Ferrière est programmée après avoir pris connaissance de votre situation. Pour le secteur 77330, nos équipes interviennent régulièrement et connaissent parfaitement les accès et particularités de Ozoir-la-Ferrière. Les communes situées à proximité de Ozoir-la-Ferrière peuvent bénéficier d\'un enlèvement.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Ozoir-la-Ferrière',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Ozoir-la-Ferrière est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Ozoir-la-Ferrière sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Ozoir-la-Ferrière',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
