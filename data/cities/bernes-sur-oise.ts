import { PageData } from '../types'

export const bernesSurOiseData: PageData = {
  slug: 'bernes-sur-oise',
  entityType: 'City',
  metaTitle: 'Épaviste Bernes-sur-Oise (95340) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Bernes-sur-Oise (95340). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Débarrassez-vous de votre épave à Bernes-sur-Oise gratuitement autour de Bernes-sur-Oise',
      subtitle: 'Épave à Bernes-sur-Oise ? Intervention gratuite dans le secteur 95340 de Bernes-sur-Oise sous 24-48h.',
      badge: 'Bernes-sur-Oise (95340)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Bernes-sur-Oise',
      content: 'Nous venons à Bernes-sur-Oise avec du matériel adapté aux accès ruraux pour l\'enlèvement gratuit. Dans la campagne de Bernes-sur-Oise, nous intervenons sans frais de déplacement supplémentaires. Le retrait gratuit de votre épave à Bernes-sur-Oise est organisé avec des équipements tout-terrain. La demande permet d\'identifier les informations nécessaires avant le déplacement. Notre équipe connaît les spécificités des zones rurales autour de Bernes-sur-Oise pour une intervention adaptée.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Bernes-sur-Oise soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Val-d\'Oise sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'L\'organisation intègre un transfert vers un prestataire compétent pour la filière des véhicules usagés. Les opérations sont menées dans le respect des dispositions légales et réglementaires applicables. La coordination des professionnels garantit l\'efficacité du traitement réglementaire.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Bernes-sur-Oise',
      intro: 'Tous les points de la commune de Bernes-sur-Oise sont desservis, même les zones les moins denses. Les détails d\'accès pour Bernes-sur-Oise sont examinés avant le départ de l\'équipe. Le secteur 95340 de Bernes-sur-Oise est couvert sans supplément de prix par notre service d\'enlèvement gratuit de véhicules hors d\'usage. Notre couverture géographique dépasse Bernes-sur-Oise pour inclure les communes avoisinantes.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Bernes-sur-Oise',
      questions: [
        { q: 'L\'intervention à Bernes-sur-Oise est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Bernes-sur-Oise sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Bernes-sur-Oise',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
