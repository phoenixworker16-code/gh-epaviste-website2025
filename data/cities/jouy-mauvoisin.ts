import { PageData } from '../types'

export const jouyMauvoisinData: PageData = {
  slug: 'jouy-mauvoisin',
  entityType: 'City',
  metaTitle: 'Épaviste Jouy-Mauvoisin (78200) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Jouy-Mauvoisin (78200). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Épaviste gratuit Jouy-Mauvoisin intervention rapide dans le 78200 de Jouy-Mauvoisin',
      subtitle: 'Votre épaviste à Jouy-Mauvoisin (78200) : intervention gratuite et rapide pour votre VHU dans Jouy-Mauvoisin.',
      badge: 'Jouy-Mauvoisin (78200)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Jouy-Mauvoisin',
      content: 'Un véhicule abandonné sur votre terrain à Jouy-Mauvoisin vous gêne au quotidien ? Dans les zones reculées de Jouy-Mauvoisin, nous adaptons notre matériel pour un retrait sans difficulté. À Jouy-Mauvoisin, notre logistique rurale permet de retirer les épaves même en terrain accidenté. Les informations communiquées au moment de la demande facilitent la préparation du retrait. Notre expérience des interventions en zone rurale garantit un service de qualité à Jouy-Mauvoisin.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Jouy-Mauvoisin, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Yvelines sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'La prestation d\'enlèvement intègre le transfert vers un opérateur compétent pour la suite du parcours. Le recyclage est effectué dans le respect des filières autorisées et des normes applicables. L\'enchaînement des étapes est planifié pour respecter les délais et les obligations réglementaires.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Jouy-Mauvoisin',
      intro: 'Notre équipe intervient dans toute l\'agglomération de Jouy-Mauvoisin pour retirer votre épave gratuitement. L\'organisation du passage à Jouy-Mauvoisin tient compte des particularités annoncées. Notre équipe couvre le secteur postal 78200 avec une logistique dédiée. Les habitants de Jouy-Mauvoisin peuvent compter sur notre présence régulière dans ce code postal. Les axes routiers menant à Jouy-Mauvoisin sont régulièrement empruntés par nos équipes.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Jouy-Mauvoisin',
      questions: [
        { q: 'L\'intervention à Jouy-Mauvoisin est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Jouy-Mauvoisin sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Jouy-Mauvoisin',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
