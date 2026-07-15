# Gate Phase 4.1 — Rapport de Validation Finale

**Date :** 2026-07-14
**Branche :** seo-phase-4.2 (issue de seo-v4-optimisation @ 457979f)
**Batch :** phase4-1
**Communes :** 20
**Mode :** READ-ONLY — aucun fichier modifié

---

## 1. Pipeline

| Gate | Résultat |
|------|----------|
| Generate Batch (20/20) | ✅ PASS |
| Similarity Report | ✅ PASS |
| Coverage Report | ✅ PASS |
| Metadata Uniqueness | ✅ PASS |
| Internal Links | ✅ PASS |
| Sitemap | ✅ PASS |
| Compatibility (C01→C05) | ✅ PASS |
| Duplicate Auditor | ✅ PASS |

---

## 2. Similarité (Jaccard)

| Métrique | Valeur |
|----------|--------|
| Similarité maximale | **61.9 %** |
| Seuil WARNING | 65 % |
| Seuil FAIL | 80 % |
| Paires conformes (< 65 %) | **190 / 190 (100 %)** |
| Paires WARNING | 0 |
| Paires FAIL | 0 |

Paire la plus proche : `meaux ↔ cergy` (61.9 %)

---

## 3. Distribution des profils

| Profil | Communes |
|--------|----------|
| hyper-centre | 1 |
| grande-ville | 12 |
| banlieue-dense | 4 |
| rurale | 3 |
| **Total** | **20** |

---

## 4. Coverage — Métriques éditoriales par commune

| Commune | Mots | H2 | H3 | FAQ | Tableau | CTA | Liens internes |
|---------|------|----|----|-----|---------|-----|----------------|
| paris | 370 | 7 | 6 | 4 | 1 | 1 | 4 |
| chelles | 333 | 7 | 6 | 4 | 1 | 1 | 4 |
| fontainebleau | 330 | 7 | 6 | 4 | 1 | 1 | 4 |
| meaux | 363 | 7 | 6 | 4 | 1 | 1 | 4 |
| melun | 367 | 7 | 6 | 4 | 1 | 1 | 4 |
| poissy | 323 | 7 | 6 | 4 | 1 | 1 | 4 |
| versailles | 321 | 7 | 6 | 4 | 1 | 1 | 4 |
| massy | 361 | 7 | 6 | 4 | 1 | 1 | 4 |
| antony | 316 | 7 | 5 | 3 | 1 | 1 | 4 |
| boulogne-billancourt | 368 | 7 | 6 | 4 | 1 | 1 | 4 |
| courbevoie | 315 | 7 | 5 | 3 | 1 | 1 | 4 |
| issy-les-moulineaux | 299 | 7 | 5 | 3 | 1 | 1 | 4 |
| nanterre | 367 | 7 | 6 | 4 | 1 | 1 | 4 |
| drancy | 322 | 7 | 5 | 3 | 1 | 1 | 4 |
| saint-denis | 322 | 7 | 6 | 4 | 1 | 1 | 4 |
| creteil | 366 | 7 | 6 | 4 | 1 | 1 | 4 |
| ivry-sur-seine | 357 | 7 | 6 | 4 | 1 | 1 | 4 |
| vitry-sur-seine | 364 | 7 | 6 | 4 | 1 | 1 | 4 |
| argenteuil | 351 | 7 | 6 | 4 | 1 | 1 | 4 |
| cergy | 370 | 7 | 6 | 4 | 1 | 1 | 4 |

**Longueur moyenne :** 341 mots (contenu éditorial brut, hors blocs statiques PageBuilder)
**Longueur min :** 299 mots (issy-les-moulineaux)
**Longueur max :** 370 mots (paris, cergy)

> Note : le Coverage Report mesure le contenu éditorial des blocs variables uniquement.
> La page rendue complète par PageBuilder (blocs statiques inclus) atteint 1200–1800 mots,
> confirmé par le SEO Auditor (100/100 sur toutes les communes auditées).

---

## 5. Legal Audit

| Commune | Score | Verdict |
|---------|-------|---------|
| paris | 100/100 | ✅ PASS |
| saint-denis | 100/100 | ✅ PASS |
| versailles | 100/100 | ✅ PASS |
| meaux | 100/100 | ✅ PASS |
| massy | 100/100 | ✅ PASS |
| boulogne-billancourt | 100/100 | ✅ PASS |
| courbevoie | 100/100 | ✅ PASS |
| nanterre | 100/100 | ✅ PASS |
| creteil | 100/100 | ✅ PASS |
| drancy | 100/100 | ✅ PASS |
| antony | 100/100 | ✅ PASS |
| argenteuil | 100/100 | ✅ PASS |
| chelles | 100/100 | ✅ PASS |
| fontainebleau | 100/100 | ✅ PASS |
| issy-les-moulineaux | 100/100 | ✅ PASS |
| ivry-sur-seine | 100/100 | ✅ PASS |
| melun | 100/100 | ✅ PASS |
| poissy | 100/100 | ✅ PASS |
| vitry-sur-seine | 100/100 | ✅ PASS |
| cergy | 100/100 | ✅ PASS |

**Résumé :** 20/20 PASS — Score 100/100 — 0 WARNING — 0 ERROR
Formulations interdites éliminées : "Bienvenue à...", "Nous intervenons dans toute la commune...", vocabulaire VHU/agrément.

---

## 6. Métadonnées

| Métrique | Résultat |
|----------|----------|
| Doublons détectés | 0 |
| Statut | ✅ PASS |

---

## 7. Hashes éditoriaux (SHA-256 tronqué)

| Commune | Hash |
|---------|------|
| paris | ef429a823341 |
| saint-denis | 4fc6dd20c9a7 |
| versailles | c84e81c08014 |
| meaux | 9cbb16fec553 |
| massy | 50b1effb5750 |
| boulogne-billancourt | 3d068b5ccc86 |
| courbevoie | 365f2e25dcd1 |
| nanterre | 7b23f801ea07 |
| creteil | 1f07cf7e64da |
| drancy | b42b984edd85 |
| antony | 162221e57c16 |
| argenteuil | 78a8df9cdc6d |
| chelles | f1ab9d1db59b |
| fontainebleau | 7be56755c719 |
| issy-les-moulineaux | 2113a780d94e |
| ivry-sur-seine | 84fd6f189365 |
| melun | 851f28d33c85 |
| poissy | 93c8a44a19dd |
| vitry-sur-seine | 4d4905509ed0 |
| cergy | 52dac76f07a6 |

**Unicité :** 20/20 hashes distincts ✅

---

## 8. Qualité du code

| Commande | Résultat |
|----------|----------|
| npm run lint | ✅ PASS |
| npx tsc --noEmit | ✅ PASS |
| npm run build | ✅ PASS (58 pages) |

---

## 9. Verdict global

| Dimension | Statut |
|-----------|--------|
| Pipeline complet | ✅ PASS |
| Similarité < 65 % | ✅ PASS (max 61.9 %) |
| Legal 100/100 | ✅ PASS |
| Métadonnées uniques | ✅ PASS |
| Hashes éditoriaux uniques | ✅ PASS |
| Lint / TypeScript / Build | ✅ PASS |

**GATE PHASE 4.1 : ✅ VALIDÉ**

---

## 10. Référence pour non-régression

Ce rapport constitue la référence officielle du batch phase4-1.
Toute modification future du pipeline, du PageBuilder ou des variants devra produire des résultats
identiques ou supérieurs sur ces 20 communes.

Commit de référence : `457979f` (branche `seo-v4-optimisation`)

---

*Généré le 2026-07-14 — READ-ONLY — aucun fichier modifié*
