import { PageData } from '../types'

export const moussyLeNeufData: PageData = {
  slug: 'moussy-le-neuf',
  entityType: 'City',
  metaTitle: 'Épaviste Moussy-le-Neuf (77230) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Moussy-le-Neuf (77230). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Faites enlever votre vieille voiture à Moussy-le-Neuf gratuitement dans tout Moussy-le-Neuf',
      subtitle: 'Débarrassez votre épave à Moussy-le-Neuf gratuitement. Notre équipe intervient dans tout le 77230 de Moussy-le-Neuf.',
      badge: 'Moussy-le-Neuf (77230)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Moussy-le-Neuf',
      content: 'Vous habitez à Moussy-le-Neuf et une épave vous encombre depuis des mois ? Agissez gratuitement. Les chemins ruraux de Moussy-le-Neuf ne sont pas un obstacle pour nos équipes équipées. Notre service à Moussy-le-Neuf garantit un retrait gratuit où que vous soyez dans la commune. Un échange téléphonique permet de finaliser l\'organisation avant le passage. Les détails de l\'intervention à Moussy-le-Neuf sont confirmés en amont pour une coordination parfaite.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Moussy-le-Neuf, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'La prestation comprend l\'orientation du véhicule vers un interlocuteur compétent pour les étapes à venir. Le respect des textes en vigueur est garanti par l\'intervention de professionnels habilités. La continuité entre l\'enlèvement et le traitement est assurée par une organisation cadrée.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Moussy-le-Neuf',
      intro: 'Depuis le centre historique jusqu\'aux zones d\'activité de Moussy-le-Neuf, notre service est disponible. Pour un retrait à Moussy-le-Neuf, le professionnel se prépare en fonction des indications reçues. Notre service dessert quotidiennement le secteur 77230 de Moussy-le-Neuf avec des équipes spécialisées dans l\'enlèvement d\'épaves. Les communes situées à proximité de Moussy-le-Neuf peuvent bénéficier d\'un enlèvement.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Moussy-le-Neuf',
      questions: [
        { q: 'L\'intervention à Moussy-le-Neuf est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Moussy-le-Neuf sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Moussy-le-Neuf',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
