import { PageData } from '../types'

export const cormeillesEnVexinData: PageData = {
  slug: 'cormeilles-en-vexin',
  entityType: 'City',
  metaTitle: 'Épaviste Cormeilles-en-Vexin (95830) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Cormeilles-en-Vexin (95830). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
  relatedServicesSlugs: [
    'enlevement-epave-parking-souterrain',
    'enlevement-voiture-en-panne',
    'enlevement-voiture-sans-carte-grise'
  ],
  relatedCitiesSlugs: [
    'val-d-oise'
  ],
  blocks: [
    {
      type: 'Hero',
      title: 'Débarras auto gratuit à Cormeilles-en-Vexin (95830) - Intervention dans le 95830',
      subtitle: 'Enlèvement d\'épave Cormeilles-en-Vexin (95830) : service rapide et gratuit pour votre VHU dans tout Cormeilles-en-Vexin.',
      badge: 'Cormeilles-en-Vexin (95830)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Cormeilles-en-Vexin',
      content: 'Dans la campagne de Cormeilles-en-Vexin, un véhicule hors d\'usage peut être retiré sans aucun frais. Les distances en zone rurale ne sont pas un problème pour notre service d\'enlèvement. Nous intervenons à Cormeilles-en-Vexin sur les terrains les plus difficiles d\'accès. Le créneau est confirmé après vérification des éléments utiles à la prise en charge. L\'intervention à Cormeilles-en-Vexin est préparée avec soin pour garantir votre satisfaction.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'L\'enlèvement d\'un véhicule hors d\'usage à Cormeilles-en-Vexin implique une stricte conformité réglementaire. Voici les éléments à préparer. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Val-d\'Oise sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le transfert vers l\'opérateur compétent est planifié dès la confirmation de l\'enlèvement. Le recyclage est effectué dans le respect des filières autorisées et des normes applicables. Les professionnels impliqués travaillent en coordination pour la bonne fin des opérations.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Cormeilles-en-Vexin',
      intro: 'L\'ensemble des zones résidentielles, commerciales et industrielles de Cormeilles-en-Vexin est couvert. Pour Cormeilles-en-Vexin, une préparation sur mesure est réalisée selon vos indications. Notre équipe couvre le secteur postal 95830 avec une logistique dédiée. Les habitants de Cormeilles-en-Vexin peuvent compter sur notre présence régulière dans ce code postal. Les axes routiers menant à Cormeilles-en-Vexin sont régulièrement empruntés par nos équipes.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Cormeilles-en-Vexin',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Cormeilles-en-Vexin est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Cormeilles-en-Vexin sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Cormeilles-en-Vexin',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
