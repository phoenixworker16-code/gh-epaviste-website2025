import { PageData } from '../types'

export const yvelinesData: PageData = {
  slug: 'yvelines',
  entityType: 'Department',
  metaTitle: "Épaviste Yvelines (78) | Enlèvement d'Épave Gratuit",
  metaDescription: "Enlèvement gratuit de votre épave dans toutes les Yvelines (78). Service rapide de Versailles à Mantes-la-Jolie. Accompagnement démarches. 07 53 12 07 93.",
  relatedServicesSlugs: [
    "enlevement-voiture-en-panne",
    "enlevement-vehicule-hybride",
    "demarches-administratives-vhu"
  ],
  relatedCitiesSlugs: [
    "versailles", "saint-germain-en-laye", "poissy", "mantes-la-jolie", "rambouillet"
  ],
  blocks: [
    {
      type: 'Hero',
      title: "Votre Épaviste de confiance dans les Yvelines (78)",
      subtitle: "Service d'enlèvement d'épaves sans frais pour libérer vos parkings et jardins dans le 78.",
      badge: "Département 78 - Yvelines"
    },
    {
      type: 'Introduction',
      title: "Proximité et efficacité dans le 78",
      content: "De la vallée de la Seine (Poissy, Mantes-la-Jolie) aux villes résidentielles de l'Est (Versailles, Saint-Germain-en-Laye), jusqu'aux communes forestières du sud (Rambouillet), les Yvelines offrent des environnements très variés. L'enlèvement d'une épave ne nécessite pas les mêmes équipements selon qu'elle se trouve dans le box exigu d'une résidence versaillaise ou dans une propriété boisée de la vallée de Chevreuse.\n\nC'est pour cela que GH Épaviste met à votre disposition une flotte diversifiée. Nous retirons gratuitement tout type de véhicule (hors d'usage, calciné, accidenté, ou en panne définitive)."
    },
    {
      type: 'Copropriety',
      title: "Intervention en copropriété et résidences fermées",
      content: "Les Yvelines comptent de nombreuses résidences privées sécurisées. Les véhicules dits 'ventouses' y sont un vrai problème pour les syndics de copropriété. Nous vous accompagnons en vous indiquant les démarches à suivre (mise en demeure) et nous intervenons gratuitement dès réception du mandat ou de la demande du propriétaire, en respectant les horaires de tranquillité de la résidence."
    },
    {
      type: 'DocsPreparation',
      title: "Préparez la destruction administrative",
      intro: "La cession d'un VHU nécessite la rédaction du Cerfa n°15776*02. Nous le remplissons ensemble sur place. Vous devrez fournir :",
      specialCase: "Si le véhicule appartient à une entreprise (véhicule de flotte ou utilitaire), vous devez ajouter un Kbis de moins de 3 mois et la pièce d'identité du gérant."
    },
    {
      type: 'LocalCoverage',
      title: "Réactivité sur le territoire Yvelinois",
      intro: "Nous couvrons l'ensemble du département 78 grâce à nos positions proches des axes A13 et A12.",
      zones: [
        {
          name: "Secteur Est (Versailles, Vélizy, Saint-Quentin-en-Yvelines)",
          delay: "Intervention sous 24h",
          specificities: "Desserte rapide via la N12 et l'A86. Interventions en sous-sol très fréquentes."
        },
        {
          name: "Secteur Nord (Saint-Germain, Poissy, Conflans)",
          delay: "Intervention sous 24h",
          specificities: "Axe de l'A13 et N13."
        },
        {
          name: "Secteur Ouest & Sud (Mantes, Rambouillet, Plaisir)",
          delay: "Sous 24h à 48h",
          specificities: "Déplacements organisés pour desservir la grande couronne yvelinoise."
        }
      ]
    },
    {
      type: 'VhuCompliance',
      title: "Sécurisation et traitement VHU réglementaire",
      content: "Un véhicule en panne ou accidenté ne peut pas être abandonné. Il s'agit d'un déchet dangereux. GH Épaviste n'est pas un centre de destruction, mais le collecteur professionnel qui acheminera votre véhicule vers un **centre VHU partenaire agréé** par l'État (agrément PR). C'est la seule procédure qui aboutira à l'émission d'un certificat de destruction légal pour la préfecture et l'ANTS."
    },
    {
      type: 'FaqLocal',
      title: "Foire Aux Questions - Yvelines",
      questions: [
        {
          q: "Ma voiture a été déclarée VEI (Véhicule Économiquement Irréparable) par l'expert après un accident sur l'A13, que faire ?",
          a: "Si vous conservez le véhicule, vous pouvez faire appel à nous. Nous le remorquerons vers notre centre VHU partenaire qui se chargera de sa destruction."
        },
        {
          q: "Intervenez-vous si la voiture est garée en pente raide ?",
          a: "Oui. Précisez-le lors de l'appel, nous enverrons une dépanneuse dotée d'un treuil à grande capacité pour assurer un chargement sécurisé."
        },
        {
          q: "Dois-je résilier mon assurance avant votre passage ?",
          a: "Non. Attendez de signer le certificat de cession avec nous. Ce document vous permettra de justifier de la cession auprès de votre assurance."
        }
      ]
    },
    {
      type: 'Cta',
      title: "Besoin d'un épaviste rapide dans les Yvelines ?",
      subtitle: "Contactez-nous pour une évaluation gratuite et une prise de rendez-vous immédiate."
    }
  ]
}
