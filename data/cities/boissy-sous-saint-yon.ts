import { PageData } from '../types'

export const boissySousSaintYonData: PageData = {
  slug: 'boissy-sous-saint-yon',
  entityType: 'City',
  metaTitle: 'Épaviste Boissy-sous-Saint-Yon (91790) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Boissy-sous-Saint-Yon (91790). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
  relatedServicesSlugs: [
    'enlevement-epave-parking-souterrain',
    'enlevement-voiture-en-panne',
    'enlevement-voiture-sans-carte-grise'
  ],
  relatedCitiesSlugs: [
    'enlevement-epave-essonne'
  ],
  blocks: [
    {
      type: 'Hero',
      title: 'Retrait et recyclage de votre épave à Boissy-sous-Saint-Yon (91790) - Service Boissy-sous-Saint-Yon',
      subtitle: 'Faites retirer votre épave à Boissy-sous-Saint-Yon gratuitement. Notre équipe intervient dans le 91790 de Boissy-sous-Saint-Yon.',
      badge: 'Boissy-sous-Saint-Yon (91790)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Boissy-sous-Saint-Yon',
      content: 'Votre propriété rurale à Boissy-sous-Saint-Yon n\'a pas besoin de cette épave : faites-la enlever. Les zones rurales autour de Boissy-sous-Saint-Yon sont intégralement couvertes par notre service. Notre service rural à Boissy-sous-Saint-Yon garantit un retrait professionnel sans contrainte de distance. Un créneau vous est proposé en fonction des informations communiquées sur le véhicule. Les détails de l\'intervention à Boissy-sous-Saint-Yon sont confirmés en amont pour une coordination parfaite.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Boissy-sous-Saint-Yon soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Essonne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'La continuité du parcours est assurée par un partenaire spécialisé dans la filière concernée. La conformité du traitement est assurée par le respect des procédures en vigueur. Le propriétaire bénéficie d\'un suivi transparent des différentes phases de prise en charge.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Boissy-sous-Saint-Yon',
      intro: 'Notre périmètre d\'enlèvement inclut l\'ensemble de Boissy-sous-Saint-Yon sans limitation géographique. Le planning d\'intervention à Boissy-sous-Saint-Yon intègre les contraintes horaires du propriétaire. Notre service dessert quotidiennement le secteur 91790 de Boissy-sous-Saint-Yon avec des équipes spécialisées dans l\'enlèvement d\'épaves. Les communes autour de Boissy-sous-Saint-Yon sont également parcourues par nos dépanneuses.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Boissy-sous-Saint-Yon',
      questions: [
        { q: 'L\'intervention à Boissy-sous-Saint-Yon est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Boissy-sous-Saint-Yon sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Boissy-sous-Saint-Yon',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
