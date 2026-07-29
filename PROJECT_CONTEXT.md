# PROJECT_CONTEXT.md

# Entreprise

Nom : GH Épaviste

Site : gh-epaviste.fr

Repository : github.com/phoenixworker16-code/gh-epaviste-website2025

Téléphone : 07 53 12 07 93

Email : contact@gh-epaviste.fr

Zone d'intervention : Île-de-France

Statut :

Entreprise d'enlèvement d'épaves.

GH Épaviste n'est pas un centre VHU agréé.

Les véhicules sont confiés à des partenaires disposant de l'agrément VHU.

Départements :

- 75
- 77
- 78
- 91
- 92
- 93
- 94
- 95

# Stack technique

- Next.js 14 App Router
- TypeScript
- TailwindCSS
- Vercel
- OVH DNS
- JSON-LD
- React
- pnpm
- GitHub
- Google Search Console
- PageSpeed Insights

# Architecture

- Pipeline V4
- PageBuilder
- Data Builder
- Profiles
- Variants
- Local Data
- Golden Files
- Snapshots
- SEO Auditor
- Legal Auditor
- Duplicate Auditor
- Similarity Reporter
- InternalLinking
- BreadcrumbJsonLd
- Schema.org
- Sitemap Generator
- validate-batch.js

# Infrastructure

Hosting : Vercel

DNS : OVH

Base de données : Aucune

Les formulaires sont envoyés directement via Resend vers :

contact@gh-epaviste.fr

Aucun stockage PostgreSQL.

Aucun Prisma.

Déploiement :

GitHub → Vercel (déploiement automatique à chaque push sur la branche principale)

# État technique

Le projet est basé sur un pipeline automatisé de génération de pages SEO locales.

Chaque génération est suivie d'une validation automatique (build, audits, validate-batch) avant tout commit et déploiement.

Les composants principaux sont :

- Pipeline V4
- PageBuilder
- InternalLinking
- BreadcrumbJsonLd
- validate-batch.js

Le fonctionnement détaillé du pipeline est documenté dans WORKFLOW.md.

# Source de vérité

Ordre des documents de référence :

1. AI_RULES.md
2. PROJECT_CONTEXT.md
3. WORKFLOW.md
4. HANDOVER.md
5. CURRENT_TASK.md

CURRENT_TASK.md décrit toujours la tâche en cours.

HANDOVER.md contient le contexte de la dernière session.

WORKFLOW.md décrit le pipeline de développement.

AI_RULES.md est prioritaire sur tous les autres documents.

# État actuel du projet

Le socle technique SEO est considéré comme validé.

Les éléments suivants sont terminés :

- Sitemap
- Robots.txt
- Canonical
- Open Graph
- Twitter Cards
- Breadcrumb Schema
- WebSite Schema
- Organization
- LocalBusiness
- FAQ Schema
- Article Schema
- hreflang
- validate-batch.js
- Validation des routes
- Validation des liens internes
- Validation SEO automatique

Le développement suit une stratégie de génération incrémentale : un batch est généré, validé, testé, puis seulement ensuite le batch suivant est lancé.

La prochaine grande étape du projet est la génération progressive des pages de communes par batchs, avec validation complète après chaque lot.
