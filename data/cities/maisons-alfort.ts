import { PageData } from '../types'

export const maisonsAlfortData: PageData = {
  slug: 'maisons-alfort',
  entityType: 'City',
  metaTitle: 'Épaviste Maisons-Alfort (94700) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Maisons-Alfort (94700). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
  relatedServicesSlugs: [
    'enlevement-epave-parking-souterrain',
    'enlevement-voiture-en-panne',
    'enlevement-voiture-sans-carte-grise'
  ],
  relatedCitiesSlugs: [
    'enlevement-epave-val-de-marne'
  ],
  blocks: [
    {
      type: 'Hero',
      title: 'Service épaviste Maisons-Alfort (94700) - Intervention rapide à Maisons-Alfort',
      subtitle: 'Faites retirer votre épave à Maisons-Alfort gratuitement. Notre équipe intervient dans le 94700 de Maisons-Alfort.',
      badge: 'Maisons-Alfort (94700)',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Maisons-Alfort',
      intro: 'Notre équipe se rend dans chaque quartier de Maisons-Alfort pour les enlèvements programmés. À Maisons-Alfort, nous veillons à ce que tous les aspects logistiques soient anticipés. Le secteur 94700 de Maisons-Alfort est couvert sans supplément de prix par notre service d\'enlèvement gratuit de véhicules hors d\'usage. Notre rayonnement autour de Maisons-Alfort s\'étend sur plusieurs kilomètres à la ronde.',
      zones: [
        { name: 'Zones pavillonnaires', delay: 'Sous 24h', specificities: 'Enlèvement au domicile ou dans votre allée privée.' },
        { name: 'Centre-ville & Axes principaux', delay: '24h', specificities: 'Retrait d\'épave sur voie publique.' },
        { name: 'Secteurs d\'activité', delay: 'Sur RDV', specificities: 'Intervention en zone commerciale.' }
      ],
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Maisons-Alfort',
      content: 'Votre voiture ne roule plus à Maisons-Alfort et vous voulez une intervention rapide ? Un véhicule hors d\'usage à Maisons-Alfort attire l\'attention et peut dégrader l\'image du quartier. Le retrait à Maisons-Alfort bénéficie de notre expérience des interventions en milieu dense. La demande permet d\'identifier les informations nécessaires avant le déplacement. Les contraintes urbaines de Maisons-Alfort sont gérées par notre équipe expérimentée.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Pour procéder au remorquage gratuit depuis Maisons-Alfort, notre chauffeur aura besoin des documents originaux du véhicule. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Val-de-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'La continuité du parcours est assurée par un partenaire spécialisé dans la filière concernée. Les obligations applicables aux véhicules hors d\'usage sont respectées tout au long du processus. Chaque étape est confiée à un professionnel adapté, de l\'enlèvement jusqu\'à la valorisation finale.',
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Maisons-Alfort',
      questions: [
        { q: 'L\'intervention à Maisons-Alfort est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Maisons-Alfort sont entièrement gratuits.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Intervenez-vous rapidement en cas de véhicule gênant la circulation à Maisons-Alfort ?', a: 'Oui, nous priorisons les situations urgentes en petite couronne. Contactez-nous pour un créneau adapté.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Maisons-Alfort',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
