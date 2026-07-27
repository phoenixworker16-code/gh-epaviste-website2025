import { PageData } from '../types'

export const fontenaySousBoisData: PageData = {
  slug: 'fontenay-sous-bois',
  entityType: 'City',
  metaTitle: 'Épaviste Fontenay-sous-Bois (94120) | Enlèvement Épave Gratuit 24h',
  metaDescription: 'Service gratuit d\'enlèvement d\'épaves à Fontenay-sous-Bois (94120). Prise en charge de VHU avec certificat de destruction officiel. Intervention rapide.',
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
      title: 'Débarras automobile Fontenay-sous-Bois (94120) dans toute l\'agglomération Fontenay-sous-Bois',
      subtitle: 'Pour Fontenay-sous-Bois (94120) : retrait gratuit de votre épave avec remise des documents à Fontenay-sous-Bois.',
      badge: 'Fontenay-sous-Bois (94120)',
    },
    {
      type: 'LocalCoverage',
      title: 'Couverture d\'intervention sur Fontenay-sous-Bois',
      intro: 'À Fontenay-sous-Bois, la prise en charge de votre épave se fait quel que soit l\'endroit exact. À Fontenay-sous-Bois, le professionnel confirme avec vous les modalités avant de se déplacer. Pour le secteur 94120, nos équipes interviennent régulièrement et connaissent parfaitement les accès et particularités de Fontenay-sous-Bois. Les axes secondaires et les hameaux près de Fontenay-sous-Bois sont inclus dans notre périmètre.',
      zones: [
        { name: 'Zones pavillonnaires', delay: 'Sous 24h', specificities: 'Enlèvement au domicile ou dans votre allée privée.' },
        { name: 'Centre-ville & Axes principaux', delay: '24h', specificities: 'Retrait d\'épave sur voie publique.' },
        { name: 'Secteurs d\'activité', delay: 'Sur RDV', specificities: 'Intervention en zone commerciale.' }
      ],
    },
    {
      type: 'Introduction',
      title: 'Votre épaviste de confiance à Fontenay-sous-Bois',
      content: 'Les rues étroites de Fontenay-sous-Bois ne sont pas un endroit pour laisser un véhicule hors d\'usage. Dans une commune dense comme Fontenay-sous-Bois, chaque mètre de voirie compte pour le stationnement. Le service à Fontenay-sous-Bois est optimisé pour une intervention rapide en zone urbaine dense. Un échange téléphonique permet de finaliser l\'organisation avant le passage. Chaque intervention à Fontenay-sous-Bois est préparée avec minutie pour éviter les imprévus.',
    },
    {
      type: 'DocsPreparation',
      title: 'Pièces à fournir pour l\'enlèvement',
      intro: 'Afin que le retrait de votre épave à Fontenay-sous-Bois soit rapide et légal, un dossier complet est exigé. Préparez votre carte grise (originale barrée), un certificat de non-gage datant de moins de 15 jours, et la pièce d\'identité du propriétaire.',
      specialCase: 'Si vous avez égaré la carte grise, une déclaration de perte effectuée en gendarmerie ou préfecture du département Val-de-Marne sera indispensable.',
    },
    {
      type: 'VhuCompliance',
      title: 'Traitement réglementaire et recyclage',
      content: 'Le véhicule est pris en charge par un partenaire technique pour la suite des opérations réglementaires. Cette organisation garantit une prise en charge conforme et une valorisation dans les filières prévues. La progression du véhicule dans la filière est suivie par les différents opérateurs concernés.',
    },
    {
      type: 'FaqLocal',
      title: 'Questions fréquentes sur l\'enlèvement à Fontenay-sous-Bois',
      questions: [
        { q: 'Le véhicule doit-il être en état de rouler pour être enlevé ?', a: 'Non, nous prenons en charge les véhicules immobilisés, sans roues, sans batterie ou fortement endommagés.' },
        { q: 'Quel est le délai habituel entre la demande et l\'enlèvement ?', a: 'En général, nous intervenons sous 24 à 48h après confirmation du rendez-vous et vérification des documents.' },
        { q: 'Prenez-vous en charge les motos et utilitaires en plus des voitures ?', a: 'Oui, nous enlevons gratuitement tout type de véhicule hors d\'usage : voiture, moto, scooter, camionnette ou utilitaire.' },
        { q: 'Que se passe-t-il si je n\'ai plus la carte grise de mon véhicule ?', a: 'Une déclaration de perte ou de vol effectuée en préfecture ou gendarmerie suffit. Nous vous guidons dans cette démarche.' },
        { q: 'Intervenez-vous rapidement en cas de véhicule gênant la circulation à Fontenay-sous-Bois ?', a: 'Oui, nous priorisons les situations urgentes en petite couronne. Contactez-nous pour un créneau adapté.' },
        { q: 'Mon véhicule est accidenté sur la voie publique, pouvez-vous le retirer ?', a: 'Absolument, nous intervenons sur la voie publique à condition que vous soyez présent avec les documents requis.' },
        { q: 'Quels documents obtenez-vous le jour de l\'enlèvement ?', a: 'Vous recevez un justificatif de prise en charge le jour même, ainsi que tous les documents attestant de la bonne fin de l\'opération.' },
        { q: 'L\'intervention à Fontenay-sous-Bois est-elle soumise à des frais de déplacement ?', a: 'Non, si votre véhicule est complet, l\'enlèvement et le déplacement jusqu\'à Fontenay-sous-Bois sont entièrement gratuits.' }
      ],
    },
    {
      type: 'Cta',
      title: 'Prendre rendez-vous pour votre épave à Fontenay-sous-Bois',
      subtitle: 'Contactez-nous pour planifier l\'enlèvement gratuit et légal de votre véhicule.',
    }
  ]
}
