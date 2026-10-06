# PROJECT_CONTEXT.md

# Entreprise

Nom : GH Épaviste

Site : gh-epaviste.fr

Repository : github.com/phoenixworker16-code/gh-epaviste-website2025

Téléphone : 07 53 12 07 93

Email : [contact@gh-epaviste.fr](mailto:contact@gh-epaviste.fr)

Zone d'intervention : Île-de-France

Statut :

Entreprise d'enlèvement d'épaves.

GH Épaviste n'est pas un centre VHU agréé.

Les véhicules sont confiés à des partenaires disposant de l'agrément VHU.

Départements :

* 75
* 77
* 78
* 91
* 92
* 93
* 94
* 95

# Stack technique

* Next.js 14 App Router
* TypeScript
* TailwindCSS
* Vercel
* OVH DNS
* JSON-LD
* React
* pnpm
* GitHub
* Google Search Console
* PageSpeed Insights

# Architecture

* Pipeline V4
* PageBuilder
* Data Builder
* Profiles
* Variants
* Local Data
* Golden Files
* Snapshots
* SEO Auditor
* Legal Auditor
* Duplicate Auditor
* Similarity Reporter
* InternalLinking
* BreadcrumbJsonLd
* Schema.org
* Sitemap Generator
* validate-batch.js

# Infrastructure

Hosting : Vercel

DNS : OVH

Base de données : Aucune

Les formulaires sont envoyés directement via Resend vers :

[contact@gh-epaviste.fr](mailto:contact@gh-epaviste.fr)

Aucun stockage PostgreSQL.

Aucun Prisma.

Déploiement :

GitHub → Vercel (déploiement automatique à chaque push sur la branche principale)

# État technique

Le projet est basé sur un pipeline automatisé de génération de pages SEO locales.

Chaque génération est suivie d'une validation automatique (build, audits, validate-batch) avant tout commit et déploiement.

Les composants principaux sont :

* Pipeline V4
* PageBuilder
* InternalLinking
* BreadcrumbJsonLd
* validate-batch.js

Le fonctionnement détaillé du pipeline est documenté dans `docs/WORKFLOW.md`.

# Source de vérité

La hiérarchie des documents du projet est définie exclusivement dans `AI_RULES.md`, section 55.

`PROJECT_CONTEXT.md` décrit le contexte général du projet et ne définit pas une hiérarchie concurrente.

`CURRENT_TASK.md` décrit la mission et l'état courant.

`docs/WORKFLOW.md` décrit la procédure d'exécution.

`HANDOVER.md` contient les informations nécessaires à la reprise d'une session.

En cas de contradiction entre documents, appliquer la hiérarchie définie dans `AI_RULES.md`.

# État actuel du projet

Le socle technique SEO est considéré comme validé.

Les éléments suivants sont terminés :

* Sitemap
* Robots.txt
* Canonical
* Open Graph
* Twitter Cards
* Breadcrumb Schema
* WebSite Schema
* Organization
* LocalBusiness
* FAQ Schema
* Article Schema
* hreflang
* validate-batch.js
* Validation des routes
* Validation des liens internes
* Validation SEO automatique

Le développement suit une stratégie de génération incrémentale : un batch est généré, validé, testé, puis seulement ensuite le batch suivant peut être lancé.

À l'état actuel, la génération de nouvelles communes est en pause stratégique.

La Phase 4.3 est terminée et le projet est en attente d'indexation et de validation Google avant toute reprise de la génération massive des communes.

Les conditions de reprise et la prochaine action sont définies exclusivement dans `CURRENT_TASK.md`.
