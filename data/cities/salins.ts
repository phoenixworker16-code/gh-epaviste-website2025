import { PageData } from '../types'

export const salinsData: PageData = {
  slug: 'salins',
  entityType: 'City',
  metaTitle: 'Épaviste Salins (77148) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Salins (77148). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Retrait de épave sans frais à Salins (77148) - Service pour Salins',
      subtitle: 'Épaviste à Salins - Intervention gratuite pour retirer votre VHU dans le 77148 à Salins.',
      badge: 'Salins (77148)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Salins',
      content: 'Votre propriété rurale à Salins n\'a pas besoin de cette épave : faites-la enlever. À Salins, faire retirer une épave de son terrain, c\'est aussi valoriser sa propriété. Nous retirons gratuitement votre épave à Salins avec du matériel adapté aux terrains ruraux. Un créneau vous est proposé en fonction des informations communiquées sur le véhicule. Les modalités d\'accès à Salins sont vérifiées avant le départ pour une intervention réussie.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Salins soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Seine-et-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Après l\'intervention, la prise en charge est relayée à un partenaire technique habilité. Les opérations de fin de vie sont réalisées en conformité avec le cadre légal établi. Chaque intervenant intervient dans son domaine de compétence selon le planning établi.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Salins',
      intro: 'À Salins, nous pouvons retirer votre véhicule hors d\'usage en tout point du territoire. Chaque enlèvement à Salins est préparé en étudiant les accès et les contraintes locales. Notre équipe couvre le secteur postal 77148 avec une logistique dédiée. Les habitants de Salins peuvent compter sur notre présence régulière dans ce code postal. Notre couverture géographique dépasse Salins pour inclure les communes avoisinantes.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Salins',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Venez-vous chercher une épave dans un champ ou un terrain difficile ?', a: 'Oui, nous sommes équipés de treuils puissants permettant d\'extraire des véhicules enlisés ou sur des terrains non goudronnés.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Salins est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Salins sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Salins',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
