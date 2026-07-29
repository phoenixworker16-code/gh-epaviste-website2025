import { PageData } from '../types'

export const parayVieillePosteData: PageData = {
  slug: 'paray-vieille-poste',
  entityType: 'City',
  metaTitle: 'Épaviste Paray-Vieille-Poste (91550) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Paray-Vieille-Poste (91550). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Débarrassez votre véhicule hors d\'usage à Paray-Vieille-Poste (91550) - Épaviste Paray-Vieille-Poste',
      subtitle: 'Votre véhicule hors d\'usage à Paray-Vieille-Poste (91550) ? Enlèvement gratuit partout dans Paray-Vieille-Poste.',
      badge: 'Paray-Vieille-Poste (91550)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Paray-Vieille-Poste',
      content: 'À Paray-Vieille-Poste, vous avez une épave qui ne bouge plus depuis longtemps sur votre propriété ? Dans les secteurs agricoles de Paray-Vieille-Poste, nous retirons les épaves sans endommager les terrains. Les exploitants agricoles de Paray-Vieille-Poste nous confient leurs épaves pour un traitement réglementaire. L\'équipe adapte sa préparation en fonction du type de véhicule et de son emplacement. L\'enlèvement à Paray-Vieille-Poste bénéficie d\'une organisation adaptée à l\'environnement rural.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'L\'enlèvement d\'un véhicule hors d\'usage à Paray-Vieille-Poste implique une stricte conformité réglementaire. Voici les éléments à préparer. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Essonne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'La suite des opérations est confiée à un établissement partenaire habilité dans la filière automobile. Les opérations sont menées dans le respect des dispositions légales et réglementaires applicables. Le propriétaire conserve ainsi une information claire sur le parcours réglementaire du véhicule.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Paray-Vieille-Poste',
      intro: 'Depuis le centre historique jusqu\'aux zones d\'activité de Paray-Vieille-Poste, notre service est disponible. L\'équipe dépêchée à Paray-Vieille-Poste connaît à l\'avance les conditions d\'accès au véhicule. Le code postal 91550 est intégré dans notre tournée d\'enlèvement régulière à Paray-Vieille-Poste, ce qui garantit une intervention rapide. Notre dispositif autour de Paray-Vieille-Poste permet d\'intervenir dans une zone élargie.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Paray-Vieille-Poste',
      questions: [
        { q: 'L\'intervention à Paray-Vieille-Poste est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Paray-Vieille-Poste sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Paray-Vieille-Poste',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
