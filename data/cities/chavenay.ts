import { PageData } from '../types'

export const chavenayData: PageData = {
  slug: 'chavenay',
  entityType: 'City',
  metaTitle: 'Épaviste Chavenay (78450) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Chavenay (78450). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Débarras automobile Chavenay (78450) dans toute l\'agglomération Chavenay',
      subtitle: 'Service de retrait d\'épave à Chavenay (78450). Gratuit et sans contrainte pour les habitants de Chavenay.',
      badge: 'Chavenay (78450)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Chavenay',
      content: 'Dans la campagne autour de Chavenay, débarrassez-vous gratuitement de votre épave. Dans la campagne de Chavenay, nous intervenons sans frais de déplacement supplémentaires. À Chavenay, l\'enlèvement gratuit comprend le déplacement jusqu\'à votre propriété. Le rendez-vous est organisé à partir de la situation du véhicule et des conditions d\'accès indiquées. Notre expérience des interventions en zone rurale garantit un service de qualité à Chavenay.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Chavenay, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Yvelines sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'L\'organisation intègre un transfert vers un prestataire compétent pour la filière des véhicules usagés. Les opérateurs veillent au respect des exigences réglementaires tout au long du processus. La continuité du traitement est assurée par une organisation structurée entre les partenaires.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Chavenay',
      intro: 'À Chavenay, notre dispositif d\'intervention permet de couvrir toute la commune efficacement. Le rendez-vous pour Chavenay est défini en fonction des éléments communiqués lors du contact. Pour le secteur 78450, nos équipes interviennent régulièrement et connaissent parfaitement les accès et particularités de Chavenay. Les zones industrielles et résidentielles autour de Chavenay sont comprises.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Chavenay',
      questions: [
        { q: 'L\'intervention à Chavenay est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Chavenay sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Chavenay',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
