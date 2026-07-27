import { PageData } from '../types'

export const dammartinEnServeData: PageData = {
  slug: 'dammartin-en-serve',
  entityType: 'City',
  metaTitle: 'Épaviste Dammartin-en-Serve (78111) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Dammartin-en-Serve (78111). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Débarras auto gratuit à Dammartin-en-Serve (78111) - Intervention dans le 78111',
      subtitle: 'Épaviste professionnel à Dammartin-en-Serve (78111) : enlèvement gratuit de votre VHU dans tout Dammartin-en-Serve.',
      badge: 'Dammartin-en-Serve (78111)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Dammartin-en-Serve',
      content: 'À Dammartin-en-Serve, notre équipe se déplace jusque dans les hameaux pour retirer les épaves. Les habitants des zones rurales de Dammartin-en-Serve nous font confiance pour un service fiable. Le service à Dammartin-en-Serve est conçu pour les zones agricoles et les habitations isolées. La préparation logistique intègre les spécificités de chaque demande d\'enlèvement. Les distances jusqu\'à Dammartin-en-Serve sont anticipées dans notre organisation logistique.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Dammartin-en-Serve soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Yvelines sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'L\'enlèvement terminé, le transfert est organisé vers un professionnel de la filière réglementée. Les opérations de valorisation sont réalisées dans des conditions conformes à la réglementation. L\'organisation prévoit une articulation claire entre les différentes étapes du processus.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Dammartin-en-Serve',
      intro: 'Notre service gratuit à Dammartin-en-Serve couvre toutes les zones, du bourg aux hameaux périphériques. Le planning d\'intervention à Dammartin-en-Serve intègre les contraintes horaires du propriétaire. Notre service dessert quotidiennement le secteur 78111 de Dammartin-en-Serve avec des équipes spécialisées dans l\'enlèvement d\'épaves. Nous ne nous limitons pas à Dammartin-en-Serve : les communes alentour sont aussi desservies.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Dammartin-en-Serve',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Dammartin-en-Serve est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Dammartin-en-Serve sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Dammartin-en-Serve',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
