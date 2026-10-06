# HANDOVER.md

# Transmission de session

Ce document permet à un nouvel assistant IA de reprendre le projet à partir de l'état documenté de la dernière session.

Il ne définit pas les règles générales du projet, la hiérarchie documentaire, ni la procédure d'exécution.

* `AI_RULES.md` définit les règles fondamentales et la hiérarchie documentaire.
* `PROJECT_CONTEXT.md` décrit le contexte général du projet.
* `CURRENT_TASK.md` définit la mission et l'état courant.
* `docs/DECISIONS.md` contient les décisions validées.
* `docs/WORKFLOW.md` définit la procédure d'exécution.
* `HANDOVER.md` fournit uniquement le contexte pratique nécessaire à la reprise d'une session.

En cas de contradiction, appliquer la hiérarchie définie dans `AI_RULES.md`.

---

# Dernière mise à jour

À compléter après chaque session importante.

Date : 2026-09-30

Session : Phase 4.3 validée — Attente d'indexation et validation externe

Assistant : Antigravity

---

# Dernier STOP validé

**STOP — Ne pas lancer la Phase 4.4.**

Ne pas générer de nouvelles communes.

Ne pas lancer le Batch 80.

Attendre la validation des vérifications externes prévues et la fin de la période d'observation définie dans `CURRENT_TASK.md`.

---

# Phase en cours

**PAUSE STRATÉGIQUE**

La Phase 4.3 est terminée.

Le site actuel, comprenant environ 176 URLs, est en attente d'indexation et de validation externe avant toute reprise de la génération massive des communes.

L'état courant doit toujours être vérifié dans `CURRENT_TASK.md` avant toute nouvelle action.

---

# Dernière action réalisée

* Révision, ajout et correction du Schema.org.
* Validation du système de données structurées JSON-LD.
* Validation technique locale du projet.
* Validation du Pipeline V4 sur la commune de référence Levallois-Perret.
* Mise à jour des documents de gouvernance afin de maintenir la génération massive en pause jusqu'au feu vert défini dans `CURRENT_TASK.md`.

---

# Vérifications techniques documentées

Les commandes suivantes ont été déclarées comme validées lors de la Phase 4.3 :

* [x] `npm run lint`
* [x] `npx tsc --noEmit`
* [x] `npm run build`
* [x] `npm run validate-batch`

Ces validations doivent être considérées comme vérifiées uniquement lorsqu'une preuve ou un rapport correspondant est disponible conformément aux règles de `AI_RULES.md`.

---

# Vérifications externes

Les vérifications externes doivent être distinguées des validations techniques locales.

* [ ] Vérification de la production Vercel
* [ ] Vérification du `sitemap.xml` en production
* [ ] Vérification du `robots.txt` en production
* [ ] Vérification Google Search Console
* [ ] Vérification Google Rich Results Test
* [ ] Vérification Google PageSpeed Insights
* [ ] Validation de la fiche Google Business Profile

Les cases ci-dessus ne doivent être cochées qu'après vérification effective.

---

# Prochaine reprise

Lorsqu'une reprise sera autorisée par `CURRENT_TASK.md` :

1. Relire obligatoirement `AI_RULES.md`.
2. Relire `PROJECT_CONTEXT.md`.
3. Relire `CURRENT_TASK.md`.
4. Relire `docs/DECISIONS.md`.
5. Relire `docs/WORKFLOW.md`.
6. Identifier le dernier STOP et les validations disponibles.
7. Vérifier les éventuelles modifications intervenues depuis la dernière session.
8. Exécuter uniquement la mission autorisée par `CURRENT_TASK.md`.
9. Respecter les validations et STOP définis dans `docs/WORKFLOW.md`.

Aucune génération de commune ne doit être lancée uniquement sur la base de ce document.

---

# Reprise future du SEO local

Lorsque la reprise de la génération des communes sera explicitement autorisée :

* les communes devront être générées par lots conformément au Workflow ;
* le premier lot devra respecter la limite définie par les documents de gouvernance ;
* chaque lot devra être soumis aux validations obligatoires ;
* un échec d'un audit obligatoire entraîne un **STOP** ;
* aucune génération supplémentaire ne doit être lancée avant validation du lot précédent.

Le Batch 80 reste une étape future et ne constitue pas une autorisation actuelle.

---

# Problèmes ouverts

Aucun problème technique bloquant n'est actuellement documenté dans ce fichier.

L'absence de problème technique ne signifie pas que les vérifications externes sont terminées.

L'état réel doit être confirmé à partir des preuves disponibles et de `CURRENT_TASK.md`.

---

# Décisions importantes à préserver

* GH Épaviste n'est pas présenté comme détenteur d'un agrément VHU.
* Les véhicules sont pris en charge via des partenaires disposant des agréments nécessaires.
* La génération massive des communes ne doit pas être effectuée en une seule opération.
* Les futures générations devront respecter le Pipeline V4 validé.
* Levallois-Perret constitue la référence de qualité du Pipeline V4.
* Les Golden Files et Snapshots sont protégés par les règles de `AI_RULES.md`.
* Toute évolution importante doit respecter `docs/DECISIONS.md`.
* Toute exécution doit respecter `docs/WORKFLOW.md`.

---

# À ne pas refaire sans autorisation

Les éléments suivants ont déjà été réalisés ou validés dans le cadre des phases précédentes :

* Infrastructure SEO On-Page
* Implémentation du système Schema.org
* Pipeline V4
* PageBuilder V4
* Validateur `validate-batch.js`
* Validation de la commune de référence Levallois-Perret

Ne pas recommencer ces travaux sans demande explicite, nouvelle mission ou preuve indiquant qu'une révision est nécessaire.

---

# Références importantes

Référence qualité V4 :

`Levallois-Perret`

Snapshot de référence :

`reports/reference-html/levallois-perret.html`

Rapport Legal Auditor :

`reports/legal-report.json`

Rapport SEO Auditor :

`reports/seo-report.json`

Documentation principale :

`AI_RULES.md`

`PROJECT_CONTEXT.md`

`CURRENT_TASK.md`

`docs/DECISIONS.md`

`docs/WORKFLOW.md`

---

# Règle finale de reprise

Ce document ne donne jamais à lui seul l'autorisation de poursuivre une phase.

Avant toute action, l'assistant doit déterminer :

1. quelle est la mission actuelle ;
2. quel est le dernier STOP ;
3. quelles validations sont réellement prouvées ;
4. quelle commande ou action est réellement autorisée ensuite.

En cas d'incertitude, de contradiction ou de preuve insuffisante :

**STOP**

Aucune modification ou génération ne doit être effectuée avant résolution de l'incertitude.
