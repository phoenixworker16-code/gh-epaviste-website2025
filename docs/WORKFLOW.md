# WORKFLOW.md

# Workflow officiel

Ce document définit l'ordre opérationnel officiel du projet GH Épaviste.

Toutes les modifications doivent suivre ce workflow.

Aucune étape applicable à la tâche ne doit être ignorée.

Les règles générales et les interdictions sont définies dans :

* `AI_RULES.md`

Le présent document définit principalement **l'ordre d'exécution** des travaux.

---

# PARTIE I — PRINCIPES DU WORKFLOW

## 1. Ordre obligatoire

Le cycle général est :

```text
LECTURE
↓
ANALYSE
↓
DÉVELOPPEMENT
↓
VALIDATION TECHNIQUE
↓
VALIDATION SEO SI APPLICABLE
↓
CONTRÔLE QUALITÉ SI APPLICABLE
↓
CHANGELOG SI NÉCESSAIRE
↓
VALIDATION
↓
GIT
↓
DÉPLOIEMENT SI AUTORISÉ
↓
VALIDATION PRODUCTION
↓
STOP / VALIDATION
↓
PHASE SUIVANTE
```

Aucune phase suivante ne doit commencer avant la validation de la phase précédente.

---

## 2. Une phase = une mission

Une phase correspond à une mission clairement définie.

Une mission doit avoir :

* un objectif ;
* un périmètre ;
* des fichiers concernés ;
* des contrôles applicables ;
* un point STOP ;
* une validation.

Une phase validée ne doit pas être recommencée sans demande explicite ou nécessité démontrée.

---

## 3. Une mission = une validation

Chaque mission doit aboutir à une validation identifiable.

Une validation peut être :

* technique ;
* SEO ;
* qualité ;
* fonctionnelle ;
* production ;
* ou une combinaison de plusieurs contrôles selon la nature de la mission.

Le passage à la mission suivante n'est autorisé qu'après validation de la mission actuelle.

---

## 4. STOP

Un `STOP` constitue un point de contrôle obligatoire.

Un STOP peut être déclenché notamment par :

* une commande en échec ;
* un audit en échec ;
* une donnée inconnue ;
* une contradiction documentaire ;
* une erreur juridique ;
* une erreur SEO ;
* une erreur de build ;
* une erreur de production ;
* une ambiguïté ;
* une absence de validation requise.

Lorsqu'un STOP est déclenché :

```text
STOP
↓
Afficher le problème
↓
Afficher les preuves disponibles
↓
Identifier la cause si elle est démontrée
↓
Proposer la solution applicable
↓
Attendre la validation ou clarification requise
```

Aucune étape suivante ne doit être exécutée automatiquement après un STOP.

---

# PARTIE II — INITIALISATION DE SESSION

## 5. ÉTAPE 0 — Lecture

Avant toute modification, lire les documents nécessaires au contexte.

Documents fondamentaux :

1. `AI_RULES.md`
2. `PROJECT_CONTEXT.md`
3. `CURRENT_TASK.md`
4. `HANDOVER.md`
5. `docs/WORKFLOW.md`

Puis consulter les documents spécialisés nécessaires à la tâche, notamment :

* `docs/DECISIONS.md`
* `docs/DESIGN_SYSTEM.md`
* `docs/RESPONSIVE_SPEC.md`
* `docs/UX_UI_MASTER_SPEC.md`
* `docs/COMPONENT_GUIDELINES.md`
* `docs/QUALITY_GATE.md`
* `docs/QUALITY_SCORE.md`
* `docs/DESIGN_AUDIT_TEMPLATE.md`
* `docs/CONVERSION_OPTIMIZATION.md`
* `docs/PROJECT_ROADMAP.md`
* `V4_REFERENCE.md`

La documentation obligatoire et les règles de priorité sont définies dans `AI_RULES.md`.

Ne jamais recopier inutilement le contenu de ces documents.

---

## 6. Identifier l'état actuel du projet

Après lecture :

1. identifier la tâche actuelle ;
2. lire `CURRENT_TASK.md` ;
3. identifier le dernier STOP validé ;
4. vérifier l'état actuel du projet ;
5. identifier la prochaine action prévue ;
6. vérifier qu'aucune phase déjà validée n'est recommencée.

Un nouvel agent doit pouvoir reprendre le travail à partir de cet état sans reconstruire le projet depuis zéro.

---

# PARTIE III — ANALYSE ET PRÉPARATION

## 7. ÉTAPE 1 — Analyse

Avant toute modification :

* comprendre la tâche demandée ;
* identifier l'objectif exact ;
* identifier le périmètre ;
* identifier uniquement les fichiers concernés ;
* identifier les dépendances éventuelles ;
* identifier les validations nécessaires ;
* identifier le STOP attendu.

Ne jamais modifier un fichier qui n'est pas nécessaire à la mission.

---

## 8. Définition du périmètre

Le périmètre doit être déterminé avant le développement.

Le périmètre doit préciser :

```text
OBJECTIF
↓
FICHIERS CONCERNÉS
↓
MODIFICATIONS AUTORISÉES
↓
VALIDATIONS REQUISES
↓
STOP
```

Si le périmètre est ambigu :

```text
STOP
```

Aucune modification ne doit être effectuée avant clarification.

---

# PARTIE IV — DÉVELOPPEMENT

## 9. ÉTAPE 2 — Développement

Modifier uniquement les fichiers nécessaires à la mission.

Pendant le développement :

* réutiliser l'existant lorsqu'il est adapté ;
* ne pas créer de doublons ;
* corriger la cause racine ;
* préserver l'architecture existante ;
* respecter les documents spécialisés applicables ;
* ne pas modifier le périmètre de la mission.

Les règles détaillées de développement sont définies dans `AI_RULES.md`.

---

## 10. Réutilisation de l'existant

Avant de créer :

* un fichier ;
* un script ;
* une commande ;
* un composant ;
* une interface ;
* une fonction ;
* un système ;

vérifier d'abord si un élément équivalent existe déjà.

Si un élément existant est adapté :

```text
RÉUTILISER
```

Ne pas créer de doublon.

---

## 11. Cause racine

Lorsqu'une erreur est rencontrée :

```text
Erreur
↓
Analyse
↓
Cause racine
↓
Correction
↓
Régénération si nécessaire
↓
Validation
```

Ne jamais corriger uniquement un fichier généré lorsque la cause se trouve dans :

* un générateur ;
* un template ;
* une configuration ;
* une source ;
* une logique commune.

Les règles détaillées de Root Cause Analysis sont définies dans `AI_RULES.md`.

---

# PARTIE V — VALIDATION TECHNIQUE

## 12. ÉTAPE 3 — Vérifications techniques

Les contrôles techniques applicables doivent être exécutés avant validation.

Pour une modification de code nécessitant la validation complète :

```bash
npm run lint
```

```bash
npx tsc --noEmit
```

```bash
npm run build
```

Les commandes doivent être exécutées réellement.

Aucune réussite ne doit être annoncée sans preuve de l'exécution.

---

## 13. Échec technique

Si une commande applicable échoue :

```text
STOP
```

Afficher :

* commande exécutée ;
* sortie réelle ;
* erreur ;
* contexte ;
* cause connue ou probable clairement distinguée ;
* solution proposée.

Aucune étape suivante ne doit être exécutée avant la résolution et la validation nécessaires.

---

# PARTIE VI — VALIDATION SEO

## 14. ÉTAPE 4 — Validation SEO

Cette étape s'applique aux modifications ayant un impact SEO ou aux phases SEO.

Exécuter :

```bash
npm run validate-batch
```

Lorsque cette commande est applicable.

Le contrôle doit notamment vérifier :

* Build ;
* Routes ;
* Sitemap ;
* Robots ;
* Canonical ;
* Meta Description ;
* Meta Robots ;
* OpenGraph ;
* Twitter Card ;
* JSON-LD ;
* H1 ;
* Images ALT ;
* Liens internes ;
* Routes fantômes ;
* Erreurs 404.

---

## 15. Échec SEO

Si un contrôle SEO échoue :

```text
STOP
```

Aucune nouvelle génération de contenu ne doit commencer.

Aucun commit ou push ne doit être effectué tant que la validation requise n'est pas obtenue.

---

# PARTIE VII — CONTRÔLE QUALITÉ

## 16. ÉTAPE 5 — Contrôle qualité

Les audits applicables doivent être exécutés selon la nature de la mission.

Pour une mission concernant des pages SEO locales, les contrôles comprennent notamment :

* Legal Auditor ;
* SEO Auditor ;
* Duplicate Auditor.

Aucun `FAIL` applicable à la mission n'est autorisé avant validation.

Les exigences détaillées sont définies dans :

```text
docs/QUALITY_GATE.md
```

et, lorsque nécessaire :

```text
docs/QUALITY_SCORE.md
```

---

## 17. Contrôle juridique

Toute modification de contenu ayant une portée juridique ou commerciale doit respecter les règles définies dans :

```text
AI_RULES.md
```

et les documents de référence applicables.

Toute incertitude juridique non résolue :

```text
STOP
```

---

# PARTIE VIII — DOCUMENTATION ET CHANGELOG

## 18. CHANGELOG

Une modification importante doit être documentée dans :

```text
docs/CHANGELOG.md
```

Notamment pour :

* nouvelles fonctionnalités ;
* changements d'architecture ;
* corrections SEO importantes ;
* modifications de sécurité ;
* modifications UX/UI importantes.

Une modification soumise à l'obligation de documentation ne doit pas être considérée comme complète tant que cette documentation n'est pas effectuée.

---

# PARTIE IX — VALIDATION AVANT GIT

## 19. Validation de la mission

Avant commit :

* les contrôles applicables doivent être réussis ;
* aucun FAIL non résolu ne doit subsister ;
* les modifications doivent rester dans le périmètre ;
* le CHANGELOG doit être mis à jour lorsqu'il est requis ;
* le point STOP prévu doit être atteint.

---

## 20. ÉTAT GIT

Avant toute modification :

```bash
git status
```

```bash
git diff --stat
```

Après modification :

```bash
git status
```

```bash
git diff --stat
```

Le diff doit être contrôlé avant commit.

Aucun fichier non concerné ne doit être inclus volontairement dans la modification.

---

# PARTIE X — DÉPLOIEMENT

## 21. ÉTAPE 6 — Déploiement

Le déploiement intervient uniquement lorsque :

* les validations applicables sont réussies ;
* aucun STOP actif ne subsiste ;
* le périmètre est validé ;
* le commit est autorisé ;
* le déploiement est autorisé par le workflow de la phase.

Ordre :

```text
Validation
↓
git status
↓
git diff --stat
↓
Commit
↓
Push GitHub
↓
Déploiement Vercel
```

---

## 22. Aucun déploiement après un FAIL

Si une validation obligatoire échoue :

```text
STOP
```

Ne pas :

* commit ;
* push ;
* déployer ;

tant que la condition de validation n'est pas satisfaite.

---

# PARTIE XI — VALIDATION EN PRODUCTION

## 23. ÉTAPE 7 — Validation production

Après déploiement, vérifier les éléments concernés par la modification.

Selon la mission :

* site en ligne ;
* Sitemap.xml ;
* Robots.txt ;
* pages principales ;
* pages générées ;
* routes concernées ;
* Google Rich Results Test ;
* PageSpeed Insights ;
* Google Search Console si nécessaire.

Les contrôles doivent être adaptés au périmètre de la modification.

---

## 24. Erreur en production

Si une erreur est détectée :

```text
STOP
```

Ne pas revenir automatiquement à l'ÉTAPE 2.

D'abord :

1. constater l'erreur ;
2. recueillir les preuves ;
3. identifier la cause ;
4. déterminer l'étape appropriée ;
5. obtenir la validation nécessaire ;
6. reprendre le workflow à l'étape autorisée.

Une erreur de production ne doit jamais être contournée par une nouvelle modification non analysée.

---

# PARTIE XII — GÉNÉRATION PAR BATCH

## 25. ÉTAPE 8 — Génération par batch

Pour la génération de communes :

```text
GÉNÉRER UN BATCH
↓
VALIDER LE BATCH
↓
AUDITER
↓
COMMIT
↓
PUSH
↓
DÉPLOYER
↓
VALIDER EN PRODUCTION
↓
VALIDER LE BATCH
↓
COMMENCER LE BATCH SUIVANT
```

---

## 26. Taille des batches

La génération doit être limitée à :

```text
80 à 100 communes maximum par batch
```

sauf décision explicitement validée modifiant cette règle pour une phase particulière.

Aucune génération massive ne doit contourner le système de validation intermédiaire.

---

## 27. Validation d'un batch

Après chaque génération de communes :

```bash
npm run build
```

puis :

```bash
npm run validate-batch
```

Les résultats doivent être vérifiés.

Les audits applicables doivent ensuite être exécutés.

---

## 28. Échec d'un batch

Si `validate-batch` échoue :

```text
STOP
```

Ne pas :

* créer le batch suivant ;
* commit ;
* push ;
* poursuivre la génération.

Attendre la résolution et la validation nécessaires.

---

## 29. Batch suivant

Le batch suivant ne peut commencer que lorsque le précédent est entièrement validé.

Règle obligatoire :

> Ne jamais commencer un nouveau batch tant que le précédent n'est pas entièrement validé.

---

# PARTIE XIII — PHASES SEO IMPORTANTES

## 30. Modifications SEO critiques

Les modifications importantes concernant notamment :

* sitemap ;
* robots ;
* canonical ;
* redirects ;

doivent être vérifiées en production avant toute nouvelle génération de contenu.

Ordre :

```text
Modification SEO
↓
Validation technique
↓
Validation SEO
↓
Déploiement
↓
Contrôle production
↓
Validation
↓
Nouvelle génération de contenu
```

---

# PARTIE XIV — CHECKLIST OPÉRATIONNELLE

## 31. Avant modification

```text
[ ] AI_RULES.md lu
[ ] PROJECT_CONTEXT.md lu
[ ] CURRENT_TASK.md lu
[ ] HANDOVER.md lu
[ ] docs/WORKFLOW.md lu
[ ] Documents spécialisés nécessaires lus
[ ] Dernier STOP identifié
[ ] Tâche comprise
[ ] Périmètre défini
[ ] Fichiers concernés identifiés
```

---

## 32. Pendant modification

```text
[ ] Seulement les fichiers nécessaires sont modifiés
[ ] Aucun doublon créé
[ ] Existant réutilisé lorsque possible
[ ] Cause racine traitée
[ ] Architecture respectée
[ ] Règles documentaires respectées
```

---

## 33. Avant validation

```text
[ ] Lint exécuté si applicable
[ ] TypeScript exécuté si applicable
[ ] Build exécuté si applicable
[ ] validate-batch exécuté si applicable
[ ] Audits applicables exécutés
[ ] Aucun FAIL non résolu
[ ] CHANGELOG mis à jour si nécessaire
[ ] git status vérifié
[ ] git diff --stat vérifié
```

---

## 34. Avant déploiement

```text
[ ] Validation de la mission obtenue
[ ] Aucun STOP actif
[ ] Commit autorisé
[ ] Push autorisé
[ ] Déploiement autorisé
```

---

## 35. Après déploiement

```text
[ ] Site vérifié
[ ] Routes concernées vérifiées
[ ] Sitemap vérifié si concerné
[ ] Robots vérifié si concerné
[ ] Pages concernées vérifiées
[ ] SEO production vérifié si concerné
[ ] Performance vérifiée si concernée
[ ] Validation production obtenue
```

---

# PARTIE XV — PRINCIPE FINAL

## 36. Règle fondamentale

Le workflow officiel est :

```text
LECTURE
↓
ANALYSE
↓
DÉVELOPPEMENT
↓
VALIDATION
↓
STOP
↓
GIT
↓
DÉPLOIEMENT
↓
PRODUCTION
↓
VALIDATION
↓
PHASE SUIVANTE
```

Pour les communes :

```text
BATCH
↓
BUILD
↓
VALIDATE-BATCH
↓
AUDITS
↓
GIT
↓
DÉPLOIEMENT
↓
PRODUCTION
↓
VALIDATION
↓
BATCH SUIVANT
```

Principe obligatoire :

> **Une phase = une mission = une validation.**

> **Aucune génération massive sans validation intermédiaire.**

> **Aucun nouveau batch avant validation complète du précédent.**

> **Un STOP doit être respecté avant toute reprise.**
