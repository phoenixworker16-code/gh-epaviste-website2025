# V4_REFERENCE.md

# Référence Génération Massive V4 — Commune Levallois-Perret

Ce document constitue la référence technique et de non-régression du Pipeline V4 validé sur la commune de Levallois-Perret.

Il documente la validation de bout en bout de l'architecture V4, du PageBuilder et des auditeurs associés.

Cette référence sert de modèle de qualité pour les futures pages locales générées avec le Pipeline V4.

> **Important :**
> Ce document décrit une validation de référence historique.
> Il ne constitue pas à lui seul une autorisation de lancer une nouvelle génération de communes.
>
> L'état courant du projet et l'autorisation éventuelle de poursuivre une phase sont définis par `CURRENT_TASK.md`, conformément à la hiérarchie documentaire définie dans `AI_RULES.md`.

---

# 1. Versions & Architecture

Les versions suivantes constituent les versions validées de la référence V4.

Toute évolution structurelle ultérieure du PageBuilder, des auditeurs ou des règles SEO devra être explicitement documentée et versionnée conformément aux règles du projet.

- **Architecture :** Next.js 14 App Router + PageBuilder
- **Version du PageBuilder :** V4 — HTML sémantique
- **Version Legal Auditor :** v2.0
- **Version SEO Auditor :** v1.0.0
- **Version SEO Rules (`seo-rules.json`) :** v1.0.0
- **Commune de référence :** Levallois-Perret
- **Fichier de référence :** `data/cities/levallois-perret.ts`

Ces versions constituent la configuration de référence ayant servi à la validation documentée dans ce fichier.

Toute modification ultérieure devra faire l'objet d'une validation de non-régression avant d'être considérée comme une nouvelle référence.

---

# 2. Métriques SEO & Contenu

La page de la commune de Levallois-Perret a été générée via le moteur PageBuilder V4 et utilisée comme référence de validation.

Les métriques documentées lors de cette validation sont les suivantes :

| Élément | Comptage | Exigence — Règles v1.0.0 |
|---|---:|---:|
| **Mots** | 1710 | ≥ 1200 et ≤ 1800 |
| **Balise `<main>`** | 1 | 1 |
| **Balise `<h1>`** | 1 | 1 |
| **Balises `<h2>`** | 8 | ≥ 6 |
| **Balises `<h3>`** | 13 | ≥ 10 |
| **Questions FAQ** | 6 | ≥ 5 |
| **Appels à l'action (CTA)** | 9 | ≥ 1 |
| **Listes `<ul>`** | 2 | ≥ 1 |
| **Tableaux `<table>`** | 1 | ≥ 1 |
| **Maillage interne** | > 30 | ≥ 4 |

Le score documenté lors de cette validation est :

**SEO Auditor : 100/100**

Ces valeurs constituent les résultats de la validation de référence et ne doivent pas être modifiées rétroactivement sans preuve ou nouveau rapport d'audit.

---

# 3. Structure Sémantique et JSON-LD

La référence V4 utilise une structure HTML5 sémantique destinée à assurer une structure claire, accessible et exploitable par les moteurs de recherche.

## Structure HTML

La page de référence utilise notamment :

- `<main>` pour le contenu principal ;
- `<table>` lorsque des données tabulaires sont réellement présentées ;
- `<details>` / `<summary>` pour la présentation des questions et réponses FAQ lorsque cette structure est utilisée par le PageBuilder.

Les éléments HTML doivent rester sémantiquement justifiés.

Il est interdit d'ajouter une balise uniquement pour satisfaire artificiellement un compteur d'audit.

## Données structurées JSON-LD

Les types documentés dans la référence comprennent :

- `Service`
- `LocalBusiness`
- `Organization`
- `FAQPage`
- `BreadcrumbList`

Toute modification du système JSON-LD doit respecter les règles SEO, juridiques et techniques du projet.

Les données structurées ne doivent jamais contenir d'information inventée ou juridiquement incorrecte.

---

# 4. Résultats des Audits

## 4.1 Compilation technique

**TypeScript / Lint / Build : PASS**

La référence a été soumise aux validations techniques prévues dans le Pipeline V4.

Le build Next.js a été déclaré reproductible lors de cette validation.

Toute nouvelle modification doit refaire les validations obligatoires correspondant à son périmètre avant d'être considérée comme validée.

---

## 4.2 Legal Auditor

**Legal Auditor v2.0 : PASS**

**Score documenté : 100/100**

La référence a été validée concernant les règles juridiques et notamment les contraintes relatives à la présentation de l'activité et aux notions VHU / agrément.

La validation juridique ne doit jamais être interprétée comme l'attribution d'un agrément à GH Épaviste.

GH Épaviste ne doit pas être présenté comme détenteur d'un agrément VHU ni comme exploitant d'un centre VHU.

Les véhicules sont pris en charge conformément au positionnement juridique défini dans `AI_RULES.md` et `PROJECT_CONTEXT.md`.

---

## 4.3 SEO Auditor

**SEO Auditor v1.0.0 : PASS**

**Score documenté : 100/100**

**Temps documenté : < 3000 ms**

La validation comprenait notamment :

- structure HTML ;
- présence et validité des éléments attendus ;
- données structurées JSON-LD ;
- présence de `@context` ;
- présence des `@type` attendus ;
- vérification des propriétés obligatoires ;
- absence d'erreur de parsing JSON-LD.

Les résultats détaillés doivent être conservés dans les rapports d'audit correspondants lorsqu'ils sont disponibles.

---

## 4.4 Rapports de référence

Les rapports associés à la validation sont documentés aux emplacements suivants :

- `reports/legal-report.json`
- `reports/seo-report.json`
- `reports/reference-html/levallois-perret.html`

Le fichier HTML constitue le snapshot de référence utilisé pour les contrôles de non-régression.

Ces fichiers doivent être considérés comme des éléments de preuve lorsqu'ils sont effectivement présents dans le projet.

La présente référence ne doit pas prétendre qu'un rapport, snapshot ou autre élément de preuve existe si celui-ci n'est pas effectivement disponible.

---

# 5. Règles de Non-Régression

Toute modification future apportée notamment à :

- `PageBuilder` ;
- `app/[slug]/page.tsx` ;
- aux composants structurels utilisés par le PageBuilder ;
- au système JSON-LD ;
- aux règles SEO ayant un impact sur le rendu ;

doit faire l'objet d'une vérification de non-régression lorsque son périmètre le justifie.

Lorsqu'une modification concerne la structure ou le rendu de la page, elle doit notamment être comparée à la référence :

`reports/reference-html/levallois-perret.html`

Toute différence significative constatée dans :

- le DOM ;
- la hiérarchie HTML ;
- les métadonnées ;
- les données structurées ;
- la structure des blocs ;

doit être comprise et justifiée.

Une différence n'est pas automatiquement un échec lorsqu'elle résulte d'une évolution intentionnelle et autorisée.

Toute évolution intentionnelle doit toutefois être documentée conformément aux règles du projet.

---

# 6. Rôle de la Référence Levallois-Perret

**Levallois-Perret constitue la référence de qualité du Pipeline V4 pour les pages locales.**

Les futures communes générées avec le Pipeline V4 doivent respecter les conventions validées sur cette référence, notamment :

- l'architecture générale ;
- les blocs fonctionnels ;
- la hiérarchie HTML ;
- les conventions SEO ;
- les conventions juridiques ;
- les principes de maillage interne ;
- les règles de qualité du contenu.

Cette référence sert à prévenir les régressions et les variations structurelles non justifiées.

Elle ne signifie pas que chaque commune doit posséder un contenu textuellement identique.

Les données locales, le contenu éditorial et les éléments propres à chaque commune doivent rester adaptés à la commune concernée et respecter les règles de similarité du projet.

Toute exception structurelle ou technique doit être explicitement justifiée et autorisée conformément aux règles du projet.

---

# 7. Relation avec les Golden Files et Snapshots

Levallois-Perret constitue la **référence de qualité V4 pour les pages locales**.

Les Golden Files officiels du projet conservent leur rôle propre conformément aux règles définies dans `AI_RULES.md`.

Le snapshot :

`reports/reference-html/levallois-perret.html`

constitue la référence HTML de non-régression associée à Levallois-Perret.

Un snapshot absent constitue un **FAIL** lorsqu'il est exigé par le processus de validation.

Un snapshot ne doit jamais être recréé ou mis à jour automatiquement afin de faire disparaître un échec.

La création ou la mise à jour d'un snapshot doit correspondre à une évolution intentionnelle, documentée et explicitement autorisée.

La mise à jour d'un snapshot ne constitue jamais, à elle seule, la correction d'un échec.

---

# 8. Checklist de Validation de la Référence V4

Les éléments suivants correspondent à la validation historique de la référence Levallois-Perret :

- [x] L'URL `/epaviste-gratuit-levallois-perret` s'affiche correctement dans le navigateur.
- [x] Absence d'erreurs React constatées lors de la validation.
- [x] Absence d'erreurs d'hydratation constatées lors de la validation.
- [x] Absence d'erreurs console constatées lors de la validation.
- [x] Le Legal Auditor est au vert.
- [x] Le SEO Auditor est au vert.
- [x] La structure HTML attendue est présente.
- [x] Les données structurées JSON-LD sont présentes et validées.
- [x] Le pipeline de build Next.js a été exécuté sans erreur lors de la validation.
- [x] Le snapshot HTML de référence a été généré.
- [x] Le tag Git `v4-reference` a été posé.

Ces cases documentent la validation historique de la référence.

Elles ne constituent pas une checklist d'autorisation pour lancer une nouvelle génération.

---

# 9. Utilisation de cette Référence lors d'une Future Génération

La présente référence ne remplace pas le workflow officiel.

Toute future génération doit respecter les règles de `AI_RULES.md` et suivre le workflow officiel défini dans :

`docs/WORKFLOW.md`

L'état opérationnel et l'autorisation de poursuivre une mission sont définis par :

`CURRENT_TASK.md`

La référence Levallois-Perret doit être utilisée pour les contrôles de non-régression lorsque le périmètre de la mission le nécessite.

Les validations et audits obligatoires doivent être exécutés conformément au workflow et aux documents spécialisés applicables.

Aucune génération ne doit être lancée uniquement parce que cette référence est validée.

---

# 10. Statut de la Référence

**Statut de la référence V4 : VALIDÉE**

La validation historique concerne notamment :

- le PageBuilder V4 ;
- la structure de la page de référence ;
- les conventions SEO ;
- les conventions juridiques ;
- les audits associés ;
- le snapshot HTML de référence ;
- le principe de non-régression.

**Cette validation ne constitue pas une autorisation actuelle de génération massive.**

L'état opérationnel actuel du projet est défini par `CURRENT_TASK.md`.

Toute décision de reprise ou de poursuite d'une phase doit respecter la hiérarchie documentaire définie dans `AI_RULES.md` ainsi que le workflow officiel.

---

# 11. Conclusion

L'architecture **PageBuilder V4**, les auditeurs associés et la commune de référence **Levallois-Perret** constituent une base technique validée pour les futures générations de pages locales.

Levallois-Perret sert de référence de qualité et de non-régression.

Toute future évolution doit respecter notamment :

- `AI_RULES.md`
- `PROJECT_CONTEXT.md`
- `CURRENT_TASK.md`
- `docs/DECISIONS.md`
- `docs/WORKFLOW.md`

En cas de contradiction, la hiérarchie définie dans `AI_RULES.md` s'applique.

La validation de cette référence ne permet pas, à elle seule, de lancer une nouvelle phase.

**Une génération future ne pourra commencer que lorsque `CURRENT_TASK.md` et les règles de gouvernance applicables l'autoriseront explicitement et que toutes les validations prévues par le Workflow seront respectées.**