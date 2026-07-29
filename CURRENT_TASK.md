# CURRENT_TASK.md

# Tâche actuelle

Ce document est la seule source de vérité concernant la tâche en cours.

L'assistant ne doit jamais commencer une autre phase tant que celle-ci n'est pas validée.

---

Phase :

En attente d'indexation et validation Google (Phase 4.3 terminée).

État :

**EN PAUSE STRATÉGIQUE.** Ne générer aucune nouvelle page.

---

Objectif

Vérifier la bonne santé SEO en production sur le long terme avant de générer massivement le Batch 80 communes. Laisser le temps à Google de crawler et d'indexer la structure actuelle (176 URLs).

---

Tâches terminées

- [x] Optimisations SEO (H1, Meta, etc.)
- [x] Injection et correction de l'intégralité du Schema.org (JSON-LD)
- [x] Validation technique locale (lint, tsc, build, validate-batch) 100% PASS ✅
- [x] Phase 4.3 officiellement terminée

---

Tâches en cours (Côté Utilisateur)

- [ ] Déploiement GitHub / Vercel
- [ ] Soumission du sitemap.xml dans Google Search Console
- [ ] Vérification sans erreurs dans Rich Results Test
- [ ] Vérification Google PageSpeed Insights (Mobile & Desktop)
- [ ] Création et validation de la fiche Google Business Profile
- [ ] Attendre quelques semaines pour indexation

---

STOP

Ne pas lancer la Phase 4.4.

Ne pas commencer la génération des communes.

Ne pas commencer le Batch 80.

Aucune nouvelle page ne doit être générée tant que les vérifications externes (Google Search Console, PageSpeed, Rich Results) ne sont pas concluantes et que la période d'observation n'est pas écoulée.

---

Prochaine étape

Lorsque le feu vert sera donné par l'utilisateur (après indexation Google) :

1. Ajouter l'URL Google Business Profile dans le `sameAs` des schémas `LocalBusiness` / `Organization`.
2. Reprendre la génération des communes en procédant par **lots de 80** maximum (Batch 80) et avec une pause de vérification d'indexation entre chaque lot.

---

Ne jamais modifier

- Architecture
- Pipeline V4
- PageBuilder
- Golden Files
- Snapshots
- Routing
- SEO validé