import { PageData } from '../types'

export const crevecurEnBrieData: PageData = {
  slug: 'crevecur-en-brie',
  entityType: 'City',
  metaTitle: 'Épaviste Crèvecœur-en-Brie (77610) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Crèvecœur-en-Brie (77610). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Service de retrait d\'épave à Crèvecœur-en-Brie sans frais dans tout Crèvecœur-en-Brie (77610)',
      subtitle: 'À Crèvecœur-en-Brie (77610) : débarras auto gratuit avec prise en charge complète de votre épave.',
      badge: 'Crèvecœur-en-Brie (77610)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Crèvecœur-en-Brie',
      content: 'Redonnez de l\'espace à votre terrain à Crèvecœur-en-Brie en confiant cette épave à notre service. Les distances en zone rurale ne sont pas un problème pour notre service d\'enlèvement. Les exploitants agricoles de Crèvecœur-en-Brie nous confient leurs épaves pour un traitement réglementaire. Le passage est planifié selon les indications reçues sur l\'emplacement exact du véhicule. Notre expérience des interventions en zone rurale garantit un service de qualité à Crèvecœur-en-Brie.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Crèvecœur-en-Brie, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'La prestation comprend l\'orientation du véhicule vers un interlocuteur compétent pour les étapes à venir. Le suivi réglementaire est confié aux professionnels spécialisés dans cette prise en charge. Chaque intervenant intervient dans son domaine de compétence selon le planning établi.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Crèvecœur-en-Brie',
      intro: 'Les équipes affectées à Crèvecœur-en-Brie connaissent parfaitement chaque secteur de la commune. Nous organisons le passage à Crèvecœur-en-Brie avec une préparation minutieuse de l\'itinéraire. Pour le secteur 77610, nos équipes interviennent régulièrement et connaissent parfaitement les accès et particularités de Crèvecœur-en-Brie. Les communes situées à proximité de Crèvecœur-en-Brie peuvent bénéficier d\'un enlèvement.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Crèvecœur-en-Brie',
      questions: [
        { q: 'L\'intervention à Crèvecœur-en-Brie est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Crèvecœur-en-Brie sont entièrement gratuits.' },
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
      title: 'Prendre rendez-vous pour votre épave à Crèvecœur-en-Brie',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
