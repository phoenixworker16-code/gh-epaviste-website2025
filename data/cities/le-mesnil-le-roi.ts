import { PageData } from '../types'

export const leMesnilLeRoiData: PageData = {
  slug: 'le-mesnil-le-roi',
  entityType: 'City',
  metaTitle: 'Épaviste Le Mesnil-le-Roi (78600) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Le Mesnil-le-Roi (78600). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Votre épaviste à Le Mesnil-le-Roi pour enlèvement gratuit de VHU dans le 78600',
      subtitle: 'Pour Le Mesnil-le-Roi et ses environs (78600), nous retirons gratuitement votre épave à Le Mesnil-le-Roi.',
      badge: 'Le Mesnil-le-Roi (78600)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Le Mesnil-le-Roi',
      content: 'Dans le secteur rural de Le Mesnil-le-Roi, nous nous déplaçons gratuitement pour enlever votre épave. Les chemins ruraux de Le Mesnil-le-Roi ne sont pas un obstacle pour nos équipes équipées. Notre équipe à Le Mesnil-le-Roi est équipée de véhicules adaptés aux chemins ruraux. Le rendez-vous est organisé à partir de la situation du véhicule et des conditions d\'accès indiquées. Notre équipe à Le Mesnil-le-Roi est équipée de véhicules adaptés aux chemins ruraux.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'L\'enlèvement d\'un véhicule hors d\'usage à Le Mesnil-le-Roi implique une stricte conformité réglementaire. Voici les éléments à préparer. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Yvelines sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'La prestation d\'enlèvement intègre le transfert vers un opérateur compétent pour la suite du parcours. Les opérations de fin de vie sont réalisées en conformité avec le cadre légal établi. Chaque intervenant intervient dans son domaine de compétence selon le planning établi.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Le Mesnil-le-Roi',
      intro: 'Tous les habitants de Le Mesnil-le-Roi peuvent bénéficier de notre service d\'enlèvement à domicile. Les modalités d\'intervention à Le Mesnil-le-Roi sont adaptées à l\'emplacement signalé du véhicule. Les demandes pour le 78600 de Le Mesnil-le-Roi sont traitées en priorité par notre équipe qui connaît bien ce secteur. Nous ne nous limitons pas à Le Mesnil-le-Roi : les communes alentour sont aussi desservies.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Le Mesnil-le-Roi',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Le Mesnil-le-Roi est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Le Mesnil-le-Roi sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Le Mesnil-le-Roi',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
