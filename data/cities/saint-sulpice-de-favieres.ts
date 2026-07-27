import { PageData } from '../types'

export const saintSulpiceDeFavieresData: PageData = {
  slug: 'saint-sulpice-de-favieres',
  entityType: 'City',
  metaTitle: 'Épaviste Saint-Sulpice-de-Favières (91910) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Saint-Sulpice-de-Favières (91910). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Service épaviste Saint-Sulpice-de-Favières (91910) - Intervention rapide à Saint-Sulpice-de-Favières',
      subtitle: 'Nous enlevons les épaves à Saint-Sulpice-de-Favières (91910). Prestation gratuite incluant remorquage à Saint-Sulpice-de-Favières.',
      badge: 'Saint-Sulpice-de-Favières (91910)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Saint-Sulpice-de-Favières',
      content: 'Les zones rurales autour de Saint-Sulpice-de-Favières sont intégralement couvertes par notre service gratuit. Dans les secteurs agricoles de Saint-Sulpice-de-Favières, nous retirons les épaves sans endommager les terrains. Le retrait gratuit de votre épave à Saint-Sulpice-de-Favières est organisé avec des équipements tout-terrain. Un échange préalable permet de prévoir le matériel approprié et le créneau de passage. Les modalités de l\'intervention à Saint-Sulpice-de-Favières sont conçues pour les propriétés rurales.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'L\'enlèvement d\'un véhicule hors d\'usage à Saint-Sulpice-de-Favières implique une stricte conformité réglementaire. Voici les éléments à préparer. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Essonne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'La prise en charge prévoit le transfert du véhicule vers un opérateur partenaire habilité à traiter les véhicules hors d\'usage. Le partenaire assure les formalités et l\'orientation du véhicule vers les filières réglementaires appropriées. Les opérateurs successifs interviennent chacun selon leurs compétences et habilitations.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Saint-Sulpice-de-Favières',
      intro: 'Que vous habitiez le centre ou la périphérie de Saint-Sulpice-de-Favières, nous venons retirer votre véhicule. Le rendez-vous pour Saint-Sulpice-de-Favières est fixé après un échange sur les conditions d\'accès. Le secteur 91910 de Saint-Sulpice-de-Favières est couvert sans supplément de prix par notre service d\'enlèvement gratuit de véhicules hors d\'usage. Les axes secondaires et les hameaux près de Saint-Sulpice-de-Favières sont inclus dans notre périmètre.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Saint-Sulpice-de-Favières',
      questions: [
        { q: 'L\'intervention à Saint-Sulpice-de-Favières est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Saint-Sulpice-de-Favières sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Saint-Sulpice-de-Favières',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
