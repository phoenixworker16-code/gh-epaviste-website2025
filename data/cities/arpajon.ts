import { PageData } from '../types'

export const arpajonData: PageData = {
  slug: 'arpajon',
  entityType: 'City',
  metaTitle: 'Épaviste Arpajon (91290) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Arpajon (91290). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Enlèvement VHU Arpajon - Prise en charge totale à Arpajon (91290)',
      subtitle: 'Épaviste gratuit à Arpajon (91290) : intervention dans tout Arpajon pour votre véhicule hors d\'usage.',
      badge: 'Arpajon (91290)',
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Arpajon',
      content: 'Situé à Arpajon, votre véhicule hors d\'usage encombre votre terrain ou votre cour ? Dans les secteurs ruraux autour de Arpajon, l\'accès à un service d\'enlèvement est simplifié. Notre équipe à Arpajon est équipée de véhicules adaptés aux chemins ruraux. La planification de l\'intervention s\'appuie sur les éléments communiqués lors de la demande. Notre expérience des interventions en zone rurale garantit un service de qualité à Arpajon.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'L\'enlèvement d\'un véhicule hors d\'usage à Arpajon implique une stricte conformité réglementaire. Voici les éléments à préparer. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Essonne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le transfert vers l\'opérateur compétent est planifié dès la confirmation de l\'enlèvement. Les opérations prévues par la réglementation et le recyclage y sont assurés dans les filières adaptées. Chaque étape est confiée à un professionnel adapté, de l\'enlèvement jusqu\'à la valorisation finale.',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Arpajon',
      intro: 'La commune de Arpajon est intégralement couverte par notre service gratuit d\'enlèvement. Le dispositif mis en place pour Arpajon est adapté à chaque situation particulière. Pour le secteur 91290, nos équipes interviennent régulièrement et connaissent parfaitement les accès et particularités de Arpajon. Notre dispositif autour de Arpajon permet d\'intervenir dans une zone élargie.',
      zones: [
        { name: 'Bourg et centre', delay: 'Sous 48h', specificities: 'Intervention programmée avec vous.' },
        { name: 'Lieux-dits et extérieurs', delay: 'Sur RDV', specificities: 'Accès terrain privé ou chemin rural.' },
        { name: 'Hameaux et secteurs isolés', delay: '48h', specificities: 'Matériel adapté aux voies non goudronnées.' }
      ],
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Arpajon',
      questions: [
        { q: 'L\'intervention à Arpajon est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Arpajon sont entièrement gratuits.' },
        { q: 'Délivrez-vous le certificat de destruction immédiatement ?', a: 'Oui, nous vous remettons le certificat de cession pour destruction en main propre le jour de l\'enlèvement.' },
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
      title: 'Prendre rendez-vous pour votre épave à Arpajon',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
