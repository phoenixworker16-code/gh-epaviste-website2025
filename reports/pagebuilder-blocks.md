# Cartographie des Blocs (PageBuilder)

Cette cartographie recense tous les blocs disponibles pour la génération, tels que définis dans `types.ts` et rendus par `PageBuilder.tsx`.

## 1. Hero
- **Interface :** `HeroBlock` (`title`, `subtitle`, `badge?`, `bgType?`)
- **Composant :** `HeroBlockComponent`
- **Rendu HTML :** Section noire (`bg-black`), titre H1 très large, sous-titre, deux boutons CTA (Formulaire + Téléphone).
- **Contraintes métier :** Premier élément de la page. Le badge contient généralement le nom de la ville et le code postal.

## 2. Introduction
- **Interface :** `IntroductionBlock` (`title`, `content`)
- **Composant :** `IntroductionBlockComponent`
- **Rendu HTML :** Section blanche simple avec un liseré jaune sur le titre H2. Texte formaté via `whitespace-pre-wrap`.
- **Contraintes métier :** Texte dense pour le contexte local (SEO).

## 3. ZfeAlert
- **Interface :** `ZfeAlertBlock` (`title`, `content`, `level`)
- **Composant :** `ZfeAlertBlockComponent`
- **Rendu HTML :** Boîte d'alerte colorée (rouge si warning, bleu si info) avec icône `ShieldAlert`.
- **Contraintes métier :** Utilisé pour prévenir des restrictions Crit'Air / ZFE.

## 4. UndergroundParking
- **Interface :** `UndergroundParkingBlock` (`title`, `content`, `maxHeight?`)
- **Composant :** `UndergroundParkingBlockComponent`
- **Rendu HTML :** Fond gris clair, icône de bâtiment, mention spéciale optionnelle si une hauteur maximum est spécifiée (`maxHeight`).
- **Contraintes métier :** Souvent indispensable pour les villes très urbaines (Paris, Hauts-de-Seine).

## 5. DocsPreparation
- **Interface :** `DocsPreparationBlock` (`title`, `intro`, `specialCase?`)
- **Composant :** `DocsPreparationBlockComponent`
- **Rendu HTML :** Liste des 3 documents obligatoires (Carte grise, CNI, Non-gage) mis en avant dans des cartes grises. Encadré ambré si `specialCase` est présent.
- **Contraintes métier :** Standardisation des démarches administratives.

## 6. TipsAndMistakes
- **Interface :** `TipsAndMistakesBlock` (`title`, `tips`, `mistakes`)
- **Composant :** `TipsAndMistakesBlockComponent`
- **Rendu HTML :** Deux colonnes. À gauche les "Bonnes pratiques" en vert, à droite les "Erreurs fréquentes" en rouge.
- **Contraintes métier :** Apporte de la réassurance au client.

## 7. LocalCoverage
- **Interface :** `LocalCoverageBlock` (`title`, `intro`, `zones`)
- **Composant :** `LocalCoverageBlockComponent`
- **Rendu HTML :** Tableau responsive listant la zone, le délai d'intervention et les spécificités locales.
- **Contraintes métier :** Démontre l'expertise locale par quartier.

## 8. Copropriety
- **Interface :** `CoproprietyBlock` (`title`, `content`)
- **Composant :** `CoproprietyBlockComponent`
- **Rendu HTML :** Encadré discret sur fond ardoise (`slate`) pour les spécificités des syndics.
- **Contraintes métier :** Vise particulièrement les villes de grande couronne ou avec beaucoup de résidences privées.

## 9. VhuCompliance
- **Interface :** `VhuComplianceBlock` (`title`, `content`)
- **Composant :** `VhuComplianceBlockComponent`
- **Rendu HTML :** Bandeau ambré confirmant l'agrément VHU.
- **Contraintes métier :** Réassurance légale indispensable.

## 10. VehicleTypes
- **Interface :** `VehicleTypesBlock` (`title`, `accepted`)
- **Composant :** `VehicleTypesBlockComponent`
- **Rendu HTML :** Nuage de tags/pilules gris listant les véhicules acceptés (Auto, Moto, Utilitaire, etc.).
- **Contraintes métier :** Clarifie ce qui est pris en charge.

## 11. FaqLocal
- **Interface :** `FaqLocalBlock` (`title`, `questions`)
- **Composant :** `FaqLocalBlockComponent`
- **Rendu HTML :** Accordéon (éléments `<details>`) avec questions/réponses.
- **JSON-LD :** Génère un bloc script `application/ld+json` de type `FAQPage` pour le SEO.
- **Contraintes métier :** Très important pour le maillage sémantique Google.

## 12. Cta
- **Interface :** `CtaBlock` (`title`, `subtitle`)
- **Composant :** `CtaBlockComponent`
- **Rendu HTML :** Large bandeau jaune de fin de page invitant à la conversion.
- **Contraintes métier :** Doit toujours clore la page.
