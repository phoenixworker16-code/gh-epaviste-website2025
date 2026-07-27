import { PageData } from '../types'

export const crouySurOurcqData: PageData = {
  slug: 'crouy-sur-ourcq',
  entityType: 'City',
  metaTitle: 'Épaviste Crouy-sur-Ourcq (77840) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Crouy-sur-Ourcq (77840). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Faire retirer son vieux véhicule à Crouy-sur-Ourcq (77840) - Enlèvement Crouy-sur-Ourcq',
      subtitle: 'Crouy-sur-Ourcq (77840) : enlèvement gratuit de votre épave à Crouy-sur-Ourcq par notre équipe.',
      badge: 'Crouy-sur-Ourcq (77840)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Crouy-sur-Ourcq',
      content: 'Redonnez de l\'espace à votre terrain à Crouy-sur-Ourcq en confiant cette épave à notre service. Nous nous déplaçons gratuitement jusqu\'à vous, même dans les zones moins denses du département. À Crouy-sur-Ourcq, notre logistique rurale permet de retirer les épaves même en terrain accidenté. L\'organisation du retrait tient compte de l\'emplacement du véhicule, de son état et des conditions d\'accès. L\'intervention à Crouy-sur-Ourcq est préparée avec soin pour garantir votre satisfaction.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Crouy-sur-Ourcq soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Dès l\'enlèvement réalisé, le transfert vers l\'installation partenaire appropriée est programmé. Les opérations sont menées dans le respect des dispositions légales et réglementaires applicables. La coordination des professionnels garantit l\'efficacité du traitement réglementaire.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Crouy-sur-Ourcq',
      intro: 'Notre service gratuit à Crouy-sur-Ourcq couvre toutes les zones, du bourg aux hameaux périphériques. À Crouy-sur-Ourcq, l\'organisation du retrait s\'adapte aux circonstances décrites. Notre équipe couvre le secteur postal 77840 avec une logistique dédiée. Les habitants de Crouy-sur-Ourcq peuvent compter sur notre présence régulière dans ce code postal. Les zones industrielles et résidentielles autour de Crouy-sur-Ourcq sont comprises.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Crouy-sur-Ourcq',
      questions: [
        { q: 'L\'intervention à Crouy-sur-Ourcq est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Crouy-sur-Ourcq sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Crouy-sur-Ourcq',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
