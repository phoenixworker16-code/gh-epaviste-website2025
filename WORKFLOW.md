# WORKFLOW.md

# Workflow officiel

Toutes les modifications doivent suivre exactement cet ordre.

Aucune étape ne peut être ignorée.

---

## ÉTAPE 0 — Lecture

Lire obligatoirement :

1. AI_RULES.md
2. PROJECT_CONTEXT.md
3. WORKFLOW.md
4. HANDOVER.md
5. CURRENT_TASK.md

Puis identifier le dernier STOP validé.

---

## ÉTAPE 1 — Analyse

- Comprendre la tâche demandée.
- Identifier uniquement les fichiers concernés.
- Ne jamais modifier des fichiers non concernés.

---

## ÉTAPE 2 — Développement

Modifier uniquement les fichiers nécessaires.

Ne jamais créer de doublons.

Toujours corriger la cause racine.

---

## ÉTAPE 3 — Vérifications techniques

Exécuter obligatoirement :

```bash
npm run lint
```

```bash
npx tsc --noEmit
```

```bash
npm run build
```

Si une commande échoue :

STOP.

Aucune autre étape.

---

## ÉTAPE 4 — Validation SEO

Exécuter :

```bash
npm run validate-batch
```

Le rapport doit notamment vérifier :

- Build
- Routes
- Sitemap
- Robots
- Canonical
- Meta Description
- Meta Robots
- OpenGraph
- Twitter Card
- JSON-LD
- H1
- Images ALT
- Liens internes
- Routes fantômes
- Erreurs 404

Si un contrôle échoue :

STOP.

---

## ÉTAPE 5 — Contrôle qualité

Les audits doivent être validés :

- Legal Auditor
- SEO Auditor
- Duplicate Auditor

Aucun FAIL autorisé.

---

## ÉTAPE 6 — Déploiement

Une fois toutes les validations réussies :

- git status
- git diff --stat
- Commit
- Push GitHub
- Déploiement Vercel

---

## ÉTAPE 7 — Validation en production

Après le déploiement :

Vérifier :

- Site en ligne
- Sitemap.xml
- Robots.txt
- Pages principales
- Pages générées
- Google Rich Results Test
- PageSpeed Insights
- Google Search Console (si nécessaire)

Si une erreur est détectée :

Retour à l'ÉTAPE 2.

---

## ÉTAPE 8 — Génération par batch

Pour les communes :

1. Générer un batch (80 à 100 communes maximum).
2. Exécuter :

```bash
npm run validate-batch
```

3. Vérifier les résultats.
4. Commit.
5. Push.
6. Déploiement.
7. Contrôle en production.

Seulement ensuite commencer le batch suivant.

---

# Principe

Ne jamais commencer un nouveau batch tant que le précédent n'est pas entièrement validé.

Une phase = un batch validé.

Aucune génération massive sans validation intermédiaire.