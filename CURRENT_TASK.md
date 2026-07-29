# CURRENT_TASK.md

# Tâche actuelle

Ce document est la seule source de vérité concernant la tâche en cours.

L'assistant ne doit jamais commencer une autre phase tant que celle-ci n'est pas validée.

---

Phase :

4.3 validée localement / Transition vers 4.4

État :

En attente de validation finale en production (Déploiement Vercel, Search Console, PageSpeed).

---

Objectif

Vérifier la bonne santé SEO en production avant de générer massivement le Batch 80 communes.

---

Tâches terminées

- [x] Correction des slugs des départements
- [x] Correction du sitemap
- [x] Correction des routes internes
- [x] Correction des liens 404
- [x] Validation du build
- [x] Création de validate-batch.js
- [x] Création de test-jsonld.js
- [x] Vérifier test-jsonld.js
- [x] Vérifier validate-batch.js et intégration stricte des erreurs (H1 multiples)
- [x] Correction des balises H1 vides dans les pages statiques
- [x] Validation technique locale (lint, tsc, build, validate-batch) 100% PASS ✅

---

Tâches en cours

- [ ] Déploiement GitHub
- [ ] Déploiement Vercel
- [ ] Vérification robots.txt en prod
- [ ] Vérification sitemap.xml en prod
- [ ] Vérification Google Search Console
- [ ] Vérification PageSpeed Insights

---

STOP

Ne pas commencer la génération des communes.

Ne pas commencer le Batch 80.

Attendre que l'utilisateur déploie en production, vérifie sur la Google Search Console et PageSpeed, et donne le feu vert.

---

Prochaine étape

L'utilisateur doit effectuer :

- Commit
- Push GitHub
- Déploiement Vercel

Ensuite seulement (après validation en prod) :

Commencer le Batch 80 communes.

---

Ne jamais modifier

- Architecture
- Pipeline V4
- PageBuilder
- Golden Files
- Snapshots
- Routing
- SEO validé