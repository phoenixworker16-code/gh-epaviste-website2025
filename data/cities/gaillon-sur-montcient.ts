import { PageData } from '../types'

export const gaillonSurMontcientData: PageData = {
  slug: 'gaillon-sur-montcient',
  entityType: 'City',
  metaTitle: 'Épaviste Gaillon-sur-Montcient (78250) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Gaillon-sur-Montcient (78250). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Service d\'enlèvement d\'épave à Gaillon-sur-Montcient (78250) - Intervention Gaillon-sur-Montcient',
      subtitle: 'Votre épaviste à Gaillon-sur-Montcient (78250) : intervention gratuite et rapide pour votre VHU dans Gaillon-sur-Montcient.',
      badge: 'Gaillon-sur-Montcient (78250)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Gaillon-sur-Montcient',
      content: 'Votre propriété rurale à Gaillon-sur-Montcient n\'a pas besoin de cette épave : faites-la enlever. À Gaillon-sur-Montcient, l\'éloignement des centres urbains n\'empêche pas un enlèvement professionnel. Notre équipe à Gaillon-sur-Montcient assure un service professionnel d\'enlèvement gratuit en zone rurale. L\'équipe prépare son intervention à partir des détails fournis lors de la prise de contact. Le rendez-vous à Gaillon-sur-Montcient est programmé avec une logistique adaptée aux routes et chemins.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Gaillon-sur-Montcient soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Yvelines sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le relais est assuré par un opérateur habilité qui prend en charge les étapes réglementaires. Le suivi réglementaire est confié aux professionnels spécialisés dans cette prise en charge. Le processus est conçu pour assurer une prise en charge complète sans rupture de service.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Gaillon-sur-Montcient',
      intro: 'Notre équipe se rend dans chaque quartier de Gaillon-sur-Montcient pour les enlèvements programmés. Avant de se déplacer à Gaillon-sur-Montcient, l\'équipe vérifie les accès et prépare le matériel adapté. Le secteur 78250 de Gaillon-sur-Montcient est couvert sans supplément de prix par notre service d\'enlèvement gratuit de véhicules hors d\'usage. Les communes autour de Gaillon-sur-Montcient sont également parcourues par nos dépanneuses.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Gaillon-sur-Montcient',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Gaillon-sur-Montcient est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Gaillon-sur-Montcient sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Gaillon-sur-Montcient',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
