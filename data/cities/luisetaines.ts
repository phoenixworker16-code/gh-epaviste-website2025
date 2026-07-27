import { PageData } from '../types'

export const luisetainesData: PageData = {
  slug: 'luisetaines',
  entityType: 'City',
  metaTitle: 'Épaviste Luisetaines (77520) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Luisetaines (77520). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Faites enlever votre vieille voiture à Luisetaines gratuitement dans tout Luisetaines',
      subtitle: 'Pour Luisetaines et ses environs (77520), nous retirons gratuitement votre épave à Luisetaines.',
      badge: 'Luisetaines (77520)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Luisetaines',
      content: 'Votre propriété rurale à Luisetaines n\'a pas besoin de cette épave : faites-la enlever. À Luisetaines, même dans les lieux-dits et les hameaux, nous retirons votre épave gratuitement. À Luisetaines, l\'enlèvement gratuit comprend le déplacement jusqu\'à votre propriété. La coordination avec le propriétaire permet de caler le meilleur créneau pour l\'enlèvement. Le passage est organisé pour vous offrir un enlèvement sans contrainte, même à Luisetaines.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Luisetaines, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le transfert est organisé avec un professionnel de la filière autorisée pour ces opérations. Les obligations déclaratives sont remplies par les opérateurs compétents de la filière. La continuité du traitement est assurée par une organisation structurée entre les partenaires.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Luisetaines',
      intro: 'Notre dispositif à Luisetaines assure un enlèvement gratuit dans tous les secteurs sans exception. L\'équipe dépêchée à Luisetaines connaît à l\'avance les conditions d\'accès au véhicule. Le secteur 77520 de Luisetaines est couvert sans supplément de prix par notre service d\'enlèvement gratuit de véhicules hors d\'usage. Si vous résidez près de Luisetaines, notre service d\'enlèvement est également accessible.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Luisetaines',
      questions: [
        { q: 'L\'intervention à Luisetaines est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Luisetaines sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Luisetaines',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
