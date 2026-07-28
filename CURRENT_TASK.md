# CURRENT TASK

Phase : 4.3

État : En attente de validation production

Objectif :

Corriger les problèmes SEO techniques détectés lors de l'audit.

Tâches :

- [x] Corriger la génération des départements dans le sitemap (slugify automatique)
- [x] Corriger le slug Val-d'Oise (val-doise → val-d-oise)
- [x] Stabiliser lastModified (constante 2026-07-28)
- [x] Vérifier canonical et Open Graph des 8 départements
- [x] Valider le build (0 erreur, 1320 pages)
- [ ] Déployer sur Vercel
- [ ] Vérifier les HTTP 200 du sitemap en production
- [ ] Vérifier robots.txt
- [ ] Vérifier l'absence d'erreurs dans Google Search Console

STOP :

Attendre la validation de la production avant de commencer le Batch 80 communes.

Prochaine étape (après validation) :

Batch 80 communes → audit complet → batch 200 communes → audit complet → génération catalogue complet.

Ne pas modifier :

- architecture
- PageBuilder
- pipeline
- Golden Files
- Snapshots
- stratégie d'indexation (communes majeures indexables, autres en noindex follow)
