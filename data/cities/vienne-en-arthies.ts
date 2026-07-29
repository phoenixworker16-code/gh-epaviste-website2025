import { PageData } from '../types'

export const vienneEnArthiesData: PageData = {
  slug: 'vienne-en-arthies',
  entityType: 'City',
  metaTitle: 'Épaviste Vienne-en-Arthies (95510) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Vienne-en-Arthies (95510). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
  relatedServicesSlugs: [
    'enlevement-epave-parking-souterrain',
    'enlevement-voiture-en-panne',
    'enlevement-voiture-sans-carte-grise'
  ],
  relatedCitiesSlugs: [
    'enlevement-epave-val-d-oise'
  ],
  blocks: [
    {
      type: 'Hero',
      title: 'Débarrassez votre épave à Vienne-en-Arthies (95510) gratuitement dans tout Vienne-en-Arthies',
      subtitle: 'À Vienne-en-Arthies (95510) : notre équipe retire gratuitement votre vieux véhicule dans tout Vienne-en-Arthies.',
      badge: 'Vienne-en-Arthies (95510)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Vienne-en-Arthies',
      content: 'Redonnez de l\'espace à votre terrain à Vienne-en-Arthies en confiant cette épave à notre service. Les propriétés rurales de Vienne-en-Arthies sont desservies par notre service sans supplément. Le déplacement à Vienne-en-Arthies est inclus dans notre service, sans supplément kilométrique. La demande permet d\'identifier les informations nécessaires avant le déplacement. Les détails de l\'intervention à Vienne-en-Arthies sont confirmés en amont pour une coordination parfaite.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Vienne-en-Arthies, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Val-d\'Oise sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'L\'enlèvement réalisé, le transfert vers un établissement partenaire compétent est assuré. Les étapes ultérieures sont réalisées par les professionnels compétents, conformément au cadre applicable. La chaîne de prise en charge est structurée pour respecter les exigences applicables à chaque étape.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Vienne-en-Arthies',
      intro: 'Tous les habitants de Vienne-en-Arthies peuvent bénéficier de notre service d\'enlèvement à domicile. Le dispositif mis en place pour Vienne-en-Arthies est adapté à chaque situation particulière. Le secteur 95510 de Vienne-en-Arthies est couvert sans supplément de prix par notre service d\'enlèvement gratuit de véhicules hors d\'usage. Nous ne nous limitons pas à Vienne-en-Arthies : les communes alentour sont aussi desservies.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Vienne-en-Arthies',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Vienne-en-Arthies est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Vienne-en-Arthies sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Vienne-en-Arthies',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
