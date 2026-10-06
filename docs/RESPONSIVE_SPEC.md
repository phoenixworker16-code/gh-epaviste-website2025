# ==========================================================
# RESPONSIVE_SPEC.md
# CHAPITRE 1
# VISION MOBILE FIRST
# ==========================================================

# Objectif

Ce document définit les standards Responsive officiels de GH Épaviste.

Le Responsive n'est pas considéré comme une adaptation graphique.

Il constitue une philosophie de conception.

Toutes les interfaces doivent offrir une expérience optimale, quel que soit l'appareil utilisé.

Le smartphone est la référence principale.

Toutes les autres plateformes héritent de cette qualité.

---

# Philosophie

Nous ne concevons pas des interfaces pour des écrans.

Nous concevons des interfaces pour des personnes.

Le Responsive consiste à adapter l'expérience aux conditions réelles d'utilisation.

Chaque utilisateur doit pouvoir comprendre, naviguer et agir rapidement, quel que soit son appareil.

---

# Pourquoi Mobile First ?

Les données d'usage montrent que la majorité des visiteurs de GH Épaviste consulteront le site depuis un smartphone.

Le développement suit donc la logique suivante :

Smartphone

↓

Tablette

↓

Desktop

Jamais l'inverse.

Le Desktop est un enrichissement de l'expérience Mobile.

Il n'est jamais le point de départ.

---

# Contexte spécifique GH ÉPAVISTE

Les utilisateurs peuvent consulter le site :

• sur le bord d'une route ;

• devant un véhicule en panne ;

• avec une seule main ;

• sous une forte luminosité ;

• avec une connexion mobile variable ;

• dans une situation d'urgence.

Chaque interface doit rester utilisable dans ces conditions.

---

# Les cinq objectifs du Responsive

1.

Compréhension immédiate

Le visiteur comprend le service en quelques secondes.

---

2.

Navigation intuitive

Les éléments importants sont faciles à trouver.

---

3.

Interaction rapide

Les CTA sont accessibles sans effort.

Les formulaires sont simples à compléter.

---

4.

Lisibilité

Les textes restent confortables à lire.

Le contraste est élevé.

La hiérarchie visuelle est claire.

---

5.

Performance

Le Responsive ne doit jamais dégrader les performances.

Chaque appareil reçoit une expérience adaptée.

---

# Principes fondamentaux

Les assistants IA doivent toujours privilégier :

✔ la simplicité ;

✔ la lisibilité ;

✔ les grands espaces tactiles ;

✔ des composants cohérents ;

✔ un parcours utilisateur fluide.

Ils évitent :

✘ les interfaces surchargées ;

✘ les menus complexes ;

✘ les CTA difficiles à atteindre ;

✘ les textes trop petits ;

✘ les effets visuels qui ralentissent la navigation.

---

# Définition d'une interface responsive réussie

Une interface est considérée comme responsive lorsqu'elle :

• reste compréhensible sans zoom ;

• ne nécessite aucun défilement horizontal ;

• respecte les zones tactiles minimales ;

• conserve une hiérarchie visuelle claire ;

• reste performante sur réseau mobile ;

• offre une expérience cohérente sur Android, iPhone, tablette et desktop.

---

# Priorités permanentes

Les assistants IA appliquent toujours les priorités suivantes :

1. Comprendre le besoin utilisateur.

↓

2. Concevoir pour smartphone.

↓

3. Garantir l'accessibilité.

↓

4. Préserver les performances.

↓

5. Adapter progressivement aux écrans plus larges.

---

# Objectif qualité

Toute interface développée dans GH Épaviste doit être pensée comme si elle allait être utilisée immédiatement par un client sur smartphone.

Le Responsive n'est jamais une étape finale.

Il est présent dès la première maquette, dès le premier composant et dès la première ligne de code.

# Fin du Chapitre 1

# ==========================================================
# RESPONSIVE_SPEC.md
# CHAPITRE 2
# DEVICE PHILOSOPHY
# ==========================================================

# Objectif

Le Device Philosophy Framework définit la manière dont GH Épaviste adapte son interface aux différents appareils.

Chaque catégorie d'appareil possède :

• ses contraintes ;

• ses usages ;

• ses comportements ;

• ses attentes.

Le Responsive ne consiste pas à modifier des dimensions.

Il consiste à adapter l'expérience utilisateur.

---

# Philosophie générale

Tous les appareils sont importants.

Cependant, ils ne sont pas prioritaires au même niveau.

La priorité officielle est :

Android

↓

iPhone

↓

Tablette

↓

Desktop

↓

UltraWide

↓

TV / Écrans très larges

Cette hiérarchie reflète les usages attendus du produit.

---

# Android

Android constitue la plateforme de référence.

Les assistants IA doivent considérer Android comme le premier environnement de conception.

Les interfaces doivent fonctionner aussi bien sur :

• Samsung Galaxy

• Google Pixel

• Xiaomi

• Oppo

• OnePlus

• Realme

• Motorola

• Honor

• Vivo

Les appareils Android présentent une grande diversité de tailles, de performances et de densités d'écran.

Les interfaces doivent rester robustes sur cette diversité.

---

# Principes Android

Les composants doivent :

✔ rester rapides ;

✔ fonctionner sur des appareils d'entrée de gamme ;

✔ éviter les animations lourdes ;

✔ limiter les effets graphiques coûteux ;

✔ conserver une excellente lisibilité.

Le Responsive doit privilégier la stabilité.

---

# iPhone

Les appareils Apple offrent une expérience plus homogène.

Les assistants IA doivent néanmoins prendre en compte :

• iPhone SE

• iPhone Standard

• iPhone Plus

• iPhone Pro

• iPhone Pro Max

Les interfaces doivent respecter les zones sécurisées (Safe Areas), la Dynamic Island et les gestes système.

---

# Principes iPhone

Les composants doivent :

✔ respecter les marges système ;

✔ éviter les interactions proches des bords ;

✔ garantir une parfaite lisibilité ;

✔ conserver une excellente fluidité.

---

# Tablettes

Une tablette n'est pas un smartphone agrandi.

Une tablette n'est pas non plus un ordinateur.

Elle constitue une catégorie intermédiaire.

Les interfaces doivent exploiter intelligemment l'espace disponible.

---

# Principes Tablette

Les assistants IA peuvent :

introduire une seconde colonne,

augmenter les marges,

élargir les cartes,

mais sans casser la simplicité du parcours.

---

# Desktop

Le Desktop apporte davantage d'espace.

Il ne doit jamais ajouter de complexité.

Le contenu gagne en respiration.

La navigation devient plus confortable.

Les interactions restent cohérentes avec la version mobile.

---

# Principes Desktop

Le Desktop permet :

des grilles plus larges,

des Hero en deux colonnes,

des cartes plus aérées,

des illustrations supplémentaires,

sans modifier la logique de navigation.

---

# UltraWide

Les écrans UltraWide ne doivent jamais étirer artificiellement les contenus.

Les interfaces restent centrées.

La largeur de lecture reste confortable.

Les marges augmentent progressivement.

---

# TV et grands écrans

Même si ces appareils ne constituent pas une cible principale, les interfaces doivent rester stables.

Le produit ne doit jamais "casser" sur un très grand écran.

---

# Densité de pixels (DPR)

Les assistants IA doivent concevoir des interfaces indépendantes de la densité de pixels.

Les ressources graphiques doivent rester nettes sur :

• écran standard ;

• Retina ;

• OLED ;

• AMOLED ;

• écrans haute résolution.

Les icônes vectorielles sont privilégiées.

---

# Orientation Portrait

Le mode portrait constitue la référence.

Toutes les interfaces doivent être optimisées pour cette orientation.

---

# Orientation Paysage

Le mode paysage est pris en charge.

Cependant, il ne doit jamais devenir la référence de conception.

Les composants doivent simplement rester utilisables.

---

# Appareils anciens

Les interfaces doivent rester utilisables sur des appareils plus anciens.

Les assistants IA évitent :

• les effets graphiques coûteux ;

• les dépendances inutiles ;

• les composants trop complexes.

---

# Appareils récents

Les appareils récents bénéficient naturellement :

d'animations plus fluides,

d'images plus détaillées,

de meilleures performances,

sans créer d'écart fonctionnel avec les appareils plus modestes.

---

# Continuité d'expérience

Changer d'appareil ne doit jamais désorienter l'utilisateur.

Le visiteur doit retrouver :

la même logique,

les mêmes composants,

les mêmes couleurs,

les mêmes CTA,

les mêmes comportements.

L'expérience évolue.

Elle ne change pas.

---

# Adaptation intelligente

Les assistants IA adaptent :

la disposition,

les espacements,

les tailles,

les colonnes,

les médias,

sans modifier la logique métier.

---

# Cas spécifique GH ÉPAVISTE

Les visiteurs utilisent souvent leur téléphone :

• dans la rue ;

• près de leur véhicule ;

• avec une seule main ;

• dans des conditions de luminosité variables.

Le produit doit privilégier :

la rapidité,

la simplicité,

la lisibilité,

l'accès immédiat au téléphone,

l'accès immédiat au formulaire.

---

# Device Quality Score

Android ................. /10

iPhone .................. /10

Tablette ................ /10

Desktop ................. /10

UltraWide ............... /10

Portrait ................ /10

Paysage ................. /10

Lisibilité .............. /10

Performance ............. /10

Cohérence ............... /10

Score minimal :

95 /100

---

# Validation

Avant chaque mise en production :

✔ Android validé.

✔ iPhone validé.

✔ Tablette validée.

✔ Desktop validé.

✔ Orientation portrait validée.

✔ Orientation paysage validée.

✔ Safe Areas respectées.

✔ Aucun composant cassé.

✔ Score ≥ 95/100.

---

# Principe final

Chaque appareil possède ses propres contraintes.

Notre objectif n'est pas de créer plusieurs produits.

Notre objectif est d'offrir une seule expérience cohérente, optimisée intelligemment pour chaque appareil.

L'utilisateur ne doit jamais avoir l'impression d'utiliser une version "adaptée".

Il doit avoir l'impression que le produit a été conçu spécialement pour son appareil.

# Fin du Chapitre 2

# ==========================================================
# RESPONSIVE_SPEC.md
# CHAPITRE 3
# OFFICIAL BREAKPOINTS
# BREAKPOINT INTELLIGENCE FRAMEWORK
# ==========================================================

# Objectif

Les breakpoints définissent la manière dont l'interface évolue entre les différentes tailles d'écran.

Ils ne servent pas uniquement à modifier des dimensions.

Ils permettent d'améliorer progressivement l'expérience utilisateur.

Chaque breakpoint possède un objectif précis.

---

# Philosophie

Le Responsive ne consiste pas à casser une interface.

Il consiste à accompagner sa croissance.

Chaque nouvelle largeur d'écran offre davantage d'espace.

Cet espace doit améliorer le confort.

Jamais augmenter la complexité.

---

# Principe fondamental

Les assistants IA ne doivent jamais se demander :

"Quelle largeur possède cet écran ?"

Ils doivent se demander :

"Comment utiliser intelligemment l'espace supplémentaire ?"

---

# Breakpoints officiels

XS

0 → 479 px

Petits smartphones.

Objectif :

Maximum de simplicité.

Une seule colonne.

CTA très visibles.

---

SM

480 → 767 px

Smartphones standards.

Objectif :

Expérience mobile complète.

Espacements légèrement augmentés.

Lecture plus confortable.

---

MD

768 → 1023 px

Tablettes Portrait.

Objectif :

Commencer à exploiter l'espace supplémentaire.

Possibilité d'utiliser deux colonnes lorsque cela améliore la compréhension.

---

LG

1024 → 1279 px

Tablettes Paysage.

Petits ordinateurs.

Objectif :

Navigation plus respirante.

Colonnes supplémentaires lorsque cela est pertinent.

---

XL

1280 → 1535 px

Desktop standard.

Objectif :

Confort maximal.

Largeur de lecture contrôlée.

Hero enrichi.

---

2XL

1536 px et plus

Grands écrans.

UltraWide.

Objectif :

Conserver une excellente lisibilité.

Ne jamais étirer excessivement le contenu.

---

# Ce qui peut évoluer

À chaque breakpoint, les assistants IA peuvent adapter :

• les marges ;

• les espacements ;

• le nombre de colonnes ;

• la taille des cartes ;

• les illustrations ;

• la disposition du Hero ;

• la navigation ;

• les galeries ;

• les médias.

---

# Ce qui ne change jamais

Quel que soit le breakpoint :

✔ l'identité visuelle ;

✔ la hiérarchie du contenu ;

✔ les couleurs ;

✔ la logique métier ;

✔ les CTA principaux ;

✔ les parcours utilisateurs ;

✔ les messages importants.

L'utilisateur retrouve toujours le même produit.

---

# Évolution progressive

Les modifications entre deux breakpoints doivent rester progressives.

Les interfaces ne doivent jamais :

changer brutalement,

déplacer les CTA de manière imprévisible,

modifier totalement la navigation.

---

# Colonnes

XS

1 colonne.

---

SM

1 colonne.

---

MD

1 ou 2 colonnes.

---

LG

2 colonnes.

---

XL

2 ou 3 colonnes selon le contexte.

---

2XL

Maximum 3 colonnes pour le contenu principal.

La lisibilité reste prioritaire.

---

# Largeur de lecture

Les paragraphes ne doivent jamais devenir trop larges.

Objectif recommandé :

60 à 80 caractères par ligne.

Le confort de lecture prévaut sur l'utilisation maximale de l'écran.

---

# Hero

XS

Empilement vertical.

Titre.

Texte.

CTA.

Illustration.

---

SM

Même structure avec davantage d'espace.

---

MD

Deux colonnes possibles si cela améliore la compréhension.

---

XL

Hero enrichi.

Illustrations plus grandes.

Sans retarder l'accès au CTA.

---

# Header

XS

Menu Hamburger.

---

SM

Menu Hamburger.

---

MD

Hamburger ou menu hybride selon les besoins.

---

LG+

Navigation horizontale.

CTA visible.

---

# Footer

Le Footer conserve toujours :

les coordonnées,

les liens essentiels,

les informations légales.

Seule leur disposition évolue.

---

# Cartes

Les cartes s'adaptent progressivement.

Elles ne changent jamais totalement de comportement.

Leur logique reste identique.

---

# Formulaires

Mobile

Une colonne.

---

Tablette

Une ou deux colonnes si cela améliore la saisie.

---

Desktop

Disposition élargie.

Jamais compliquée.

---

# Images

Les images utilisent :

des tailles adaptatives,

des dimensions fluides,

des ratios cohérents.

Les images ne sont jamais agrandies inutilement.

---

# Typographie fluide

Les assistants IA privilégient les tailles adaptatives.

Utiliser des fonctions fluides comme :

clamp()

afin d'éviter les ruptures brutales.

La taille des textes évolue progressivement avec l'écran.

---

# Espacements fluides

Les marges augmentent progressivement.

Les espacements suivent la grille officielle du Design System.

Aucun changement brutal.

---

# Composants fluides

Les composants grandissent naturellement.

Ils ne changent pas totalement d'apparence entre deux breakpoints.

---

# Orientation

Portrait

Référence officielle.

---

Paysage

Support complet.

La logique reste identique.

---

# Anti-patterns

Les assistants IA ne doivent jamais :

❌ créer un breakpoint uniquement pour corriger un bug ;

❌ masquer du contenu important sur mobile ;

❌ déplacer un CTA de manière imprévisible ;

❌ créer des interfaces totalement différentes selon les appareils ;

❌ utiliser des largeurs fixes.

---

# Responsive Intelligence

Avant chaque adaptation, les assistants IA se demandent :

Cet espace supplémentaire améliore-t-il réellement l'expérience ?

↓

Cette nouvelle colonne est-elle utile ?

↓

Le contenu reste-t-il immédiatement compréhensible ?

↓

Le smartphone conserve-t-il la priorité ?

↓

La navigation reste-t-elle identique ?

---

# Cas spécifique GH ÉPAVISTE

Les visiteurs recherchent principalement :

un numéro de téléphone,

un formulaire,

des informations rapides,

une intervention.

Ces éléments restent prioritaires sur tous les breakpoints.

Ils ne changent jamais de logique.

---

# Breakpoint Quality Score

Fluidité .................... /10

Lisibilité ................. /10

Colonnes ................... /10

Hero ....................... /10

Navigation ................. /10

Cartes ..................... /10

Formulaires ............... /10

Typographie ............... /10

Responsive global ......... /10

Respect Mobile First ...... /10

Score minimal :

95 /100

---

# Validation

Avant chaque Release :

✔ Aucun saut brutal entre les breakpoints.

✔ Hero cohérent.

✔ Navigation cohérente.

✔ Colonnes adaptées.

✔ Typographie fluide.

✔ CTA toujours visibles.

✔ Lecture confortable.

✔ Aucun scroll horizontal.

✔ Aucun composant cassé.

✔ Score ≥ 95/100.

---

# Principe final

Les breakpoints ne servent pas à adapter une interface.

Ils servent à améliorer progressivement l'expérience utilisateur.

Chaque pixel supplémentaire doit rendre le produit plus confortable.

Jamais plus compliqué.

Le Responsive de GH Épaviste repose sur une évolution continue, cohérente et centrée sur l'utilisateur.

# Fin du Chapitre 3

# ==========================================================
# RESPONSIVE_SPEC.md
# CHAPITRE 4
# LAYOUT SYSTEM
# ==========================================================

# Objectif

Le Layout System définit l'organisation spatiale de toutes les pages de GH Épaviste.

Il garantit une expérience cohérente, lisible et équilibrée sur tous les appareils.

Le Layout n'est pas un simple assemblage de blocs.

Il constitue la structure invisible qui guide naturellement l'œil de l'utilisateur.

---

# Philosophie

Le contenu est roi.

Le Layout existe pour mettre en valeur le contenu.

Jamais l'inverse.

Un excellent Layout est presque invisible.

L'utilisateur ne remarque pas la structure.

Il comprend naturellement où regarder.

---

# Les cinq piliers

Le Layout repose sur cinq principes fondamentaux :

• Cohérence

• Simplicité

• Alignement

• Respiration

• Hiérarchie

Toutes les pages doivent respecter ces cinq principes.

---

# Structure officielle

Toutes les pages suivent la structure suivante :

Header

↓

Hero

↓

Sections de contenu

↓

CTA principal

↓

FAQ (si applicable)

↓

Footer

Cette structure ne doit être modifiée qu'en cas de besoin clairement justifié.

---

# Largeur maximale du contenu

Le contenu principal ne doit jamais occuper toute la largeur d'un grand écran.

Largeur recommandée :

1100 à 1280 px.

Au-delà, la lecture devient moins confortable.

---

# Conteneurs

Chaque section est placée dans un conteneur.

Les conteneurs assurent :

• un alignement constant ;

• des marges homogènes ;

• une largeur de lecture maîtrisée.

Les conteneurs ne changent pas arbitrairement d'une page à l'autre.

---

# Sections

Chaque section possède :

un début clair,

un contenu identifié,

une fin lisible.

Les sections ne doivent jamais se mélanger visuellement.

---

# Alignement

Les éléments importants suivent un même axe.

Les titres.

Les paragraphes.

Les boutons.

Les listes.

Les cartes.

L'alignement crée la stabilité visuelle.

---

# Hiérarchie verticale

Chaque page suit une progression logique :

Titre principal

↓

Description

↓

Éléments de confiance

↓

Contenu

↓

Appel à l'action

↓

Informations complémentaires

L'utilisateur ne doit jamais chercher la prochaine étape.

---

# Grille

Le Layout repose sur une grille régulière.

Les colonnes sont construites à partir du Design System.

Le nombre de colonnes peut évoluer.

La logique reste identique.

---

# Colonnes

Mobile :

1 colonne.

---

Tablette :

1 à 2 colonnes.

---

Desktop :

2 à 3 colonnes.

---

UltraWide :

Le contenu reste centré.

Les colonnes supplémentaires ne sont ajoutées que si elles apportent une réelle valeur.

---

# Espaces blancs

Les espaces blancs ne sont jamais considérés comme des espaces perdus.

Ils améliorent :

la lecture,

la compréhension,

la respiration,

la confiance.

Les IA ne doivent jamais chercher à "remplir" tous les espaces.

---

# Rythme visuel

Chaque section possède un rythme cohérent.

Le visiteur doit ressentir une progression naturelle.

Les alternances entre textes, cartes, illustrations et CTA créent ce rythme.

---

# Zones prioritaires

Les informations suivantes bénéficient toujours de la meilleure visibilité :

• numéro de téléphone ;

• CTA principal ;

• Hero ;

• formulaire ;

• preuves de confiance.

---

# Zones secondaires

Les informations secondaires sont placées après les informations essentielles.

Exemples :

mentions complémentaires,

contenu détaillé,

FAQ longue,

liens additionnels.

---

# Largeur de lecture

Les paragraphes restent dans une largeur confortable.

Objectif :

60 à 80 caractères par ligne.

Une largeur excessive réduit le confort de lecture.

---

# Pleine largeur

Les sections pleine largeur sont réservées :

au Hero,

à certaines illustrations,

à quelques séparateurs visuels,

ou à des sections exceptionnelles.

Le contenu textuel reste toujours contenu dans une largeur maîtrisée.

---

# Symétrie

Le Layout recherche un équilibre général.

Une symétrie parfaite n'est pas obligatoire.

En revanche, l'équilibre visuel est indispensable.

---

# Continuité

Les transitions entre sections sont fluides.

L'utilisateur ne doit jamais avoir l'impression de changer complètement de page au sein d'un même écran.

---

# Exceptions

Les exceptions sont autorisées uniquement lorsqu'elles améliorent clairement :

la compréhension,

la conversion,

ou l'expérience utilisateur.

Une exception ne devient jamais une nouvelle règle.

---

# Cas spécifique GH ÉPAVISTE

Les pages de services et les pages de communes doivent partager le même squelette.

Le visiteur doit reconnaître immédiatement :

• le Hero ;

• les CTA ;

• les blocs d'informations ;

• la FAQ ;

• le Footer.

Cette cohérence facilite la navigation et renforce la confiance.

---

# Layout Quality Score

Structure ................. /10

Alignement ............... /10

Respiration .............. /10

Hiérarchie ............... /10

Lisibilité ............... /10

Colonnes ................. /10

Espaces blancs ........... /10

Cohérence ................ /10

Responsive ............... /10

Conversion ............... /10

Score minimal :

96 /100

---

# Validation

Avant chaque Release :

✔ Alignement cohérent.

✔ Conteneurs homogènes.

✔ Largeur de lecture confortable.

✔ Aucun élément collé aux bords.

✔ Espaces blancs suffisants.

✔ Colonnes équilibrées.

✔ CTA bien positionnés.

✔ Sections clairement séparées.

✔ Hero immédiatement identifiable.

✔ Score ≥ 96/100.

---

# Principe final

Le Layout n'est pas un décor.

Il guide le regard.

Il réduit l'effort cognitif.

Il crée la confiance.

Chaque section doit conduire naturellement l'utilisateur vers la suivante, jusqu'à l'action finale.

Un excellent Layout est celui que l'utilisateur ne remarque jamais, mais qui lui permet de comprendre instantanément où regarder et quoi faire.

# Fin du Chapitre 4

# ==========================================================
# RESPONSIVE_SPEC.md
# CHAPITRE 5
# GRID SYSTEM
# ==========================================================

# Objectif

Le Grid System constitue la structure invisible qui organise l'ensemble des contenus de GH Épaviste.

Toutes les pages utilisent la même logique de grille afin de garantir :

• cohérence ;

• lisibilité ;

• équilibre ;

• évolutivité.

La grille est un outil de conception.

Elle ne doit jamais être perçue par l'utilisateur.

---

# Philosophie

La grille ne sert pas à remplir l'écran.

Elle sert à organiser l'information.

Chaque élément possède une place logique.

Chaque alignement possède une raison.

Chaque espace participe à la compréhension.

---

# Principe fondamental

Les assistants IA ne placent jamais les éléments "à l'œil".

Ils utilisent toujours la grille officielle.

Une grille cohérente produit une interface cohérente.

---

# Colonnes officielles

## Mobile

1 colonne

Le contenu est entièrement vertical.

La lecture est linéaire.

---

## Petite tablette

2 colonnes possibles.

Uniquement si cela améliore réellement la compréhension.

---

## Grande tablette

2 colonnes.

Certaines sections peuvent rester sur une seule colonne.

---

## Desktop

12 colonnes logiques.

Les composants utilisent généralement :

• 12/12

• 6/12

• 4/12

• 3/12

Les fractions irrégulières sont évitées.

---

## UltraWide

Toujours basé sur la même grille.

La largeur augmente.

La logique ne change jamais.

---

# Marges externes

Les marges latérales évoluent progressivement.

XS :

16 px

---

SM :

20 px

---

MD :

24 px

---

LG :

32 px

---

XL :

40 px

---

2XL :

48 à 64 px

---

# Gouttières (Gutters)

Les espaces entre colonnes restent constants.

Valeur recommandée :

24 px

Ils ne doivent jamais varier arbitrairement.

---

# Alignement horizontal

Tous les composants importants partagent le même axe :

• Titres

• Paragraphes

• CTA

• Cartes

• Icônes

L'alignement réduit la charge cognitive.

---

# Alignement vertical

Les éléments suivent une progression régulière.

Chaque section commence sur une ligne claire.

Chaque groupe conserve une respiration constante.

---

# Distribution des blocs

La grille répartit naturellement :

Hero

↓

Informations

↓

Services

↓

Arguments de confiance

↓

FAQ

↓

CTA

↓

Footer

Le parcours reste toujours logique.

---

# Largeurs recommandées

Texte :

60 à 80 caractères par ligne.

---

Cartes :

Jamais trop étroites.

Jamais excessivement larges.

---

Images :

Toujours proportionnées.

Jamais déformées.

---

# Règle des multiples

Toutes les dimensions suivent les Design Tokens.

Les espacements utilisent exclusivement les multiples définis dans le Design System.

Exemples :

4

8

12

16

24

32

40

48

64

80

96

128

Les valeurs arbitraires sont interdites.

---

# Alignement des CTA

Les boutons principaux suivent toujours le même axe que :

le titre,

le texte,

les cartes,

les formulaires.

Le CTA ne "flotte" jamais seul.

---

# Sections asymétriques

Une asymétrie est autorisée lorsqu'elle améliore :

la lecture,

la hiérarchie,

ou l'impact visuel.

Elle reste volontaire.

Jamais accidentelle.

---

# Grilles imbriquées

Les grilles secondaires sont autorisées.

Cependant elles doivent rester compatibles avec la grille principale.

Une grille ne doit jamais casser une autre grille.

---

# Adaptation Responsive

La grille évolue progressivement.

Les colonnes disparaissent.

Les blocs s'empilent.

La logique reste identique.

L'utilisateur ne ressent jamais de rupture.

---

# Cas spécifique GH ÉPAVISTE

Les pages communes utilisent exactement la même grille que :

les pages services,

les guides,

les pages département,

la page d'accueil.

Cette homogénéité facilite :

la navigation,

la mémorisation,

la confiance.

---

# Best Practices

✔ Utiliser une grille constante.

✔ Aligner les contenus principaux.

✔ Respecter les Design Tokens.

✔ Préserver une lecture confortable.

✔ Garder des marges régulières.

✔ Utiliser les colonnes uniquement lorsqu'elles apportent un bénéfice.

✔ Centrer le contenu principal sur les grands écrans.

---

# Anti-Patterns

❌ Colonnes de largeur aléatoire.

❌ Éléments non alignés.

❌ Marges différentes entre deux pages similaires.

❌ Cartes de tailles incohérentes.

❌ Largeurs fixes qui cassent sur mobile.

❌ Texte occupant toute la largeur d'un écran UltraWide.

❌ Mélanger plusieurs systèmes de grille.

❌ Ajouter une nouvelle grille pour une seule page.

---

# Grid Quality Score

Alignement .............. /10

Colonnes ............... /10

Marges ................. /10

Gouttières ............. /10

Lisibilité ............. /10

Responsive ............. /10

Homogénéité ............ /10

Design Tokens .......... /10

Évolutivité ............ /10

Cohérence .............. /10

Score minimal :

96 /100

---

# Validation

Avant chaque Release :

✔ Tous les composants suivent la grille officielle.

✔ Les colonnes restent cohérentes.

✔ Les marges sont homogènes.

✔ Les espacements respectent les Design Tokens.

✔ Aucun composant ne casse la grille.

✔ Les CTA sont alignés.

✔ Les cartes utilisent les mêmes proportions.

✔ Score ≥ 96/100.

---

# Principe final

La grille est le langage silencieux du produit.

Elle n'attire pas l'attention.

Elle guide naturellement le regard, crée un rythme visuel cohérent et permet aux utilisateurs de comprendre instantanément où se trouvent les informations importantes.

Une excellente grille ne se remarque pas.

Elle se ressent.

# Fin du Chapitre 5

# ==========================================================
# RESPONSIVE_SPEC.md
# CHAPITRE 6
# CONTAINER SYSTEM
# ==========================================================

# Objectif

Le Container System définit la manière dont les contenus sont encadrés, centrés et organisés dans l'ensemble du site GH Épaviste.

Le conteneur est la base de chaque page.

Il garantit une lecture confortable, une cohérence visuelle et une excellente adaptabilité sur tous les appareils.

---

# Philosophie

Le conteneur ne sert pas uniquement à limiter la largeur.

Il structure l'espace.

Il crée un équilibre entre le contenu et le vide.

Un bon conteneur rend la lecture plus facile sans que l'utilisateur s'en rende compte.

---

# Principe fondamental

Le contenu ne touche jamais directement les bords de l'écran.

Le contenu respire.

Chaque écran possède des marges adaptées à sa taille.

---

# Types de conteneurs

GH ÉPAVISTE utilise uniquement trois familles de conteneurs.

---

## 1. Standard Container

Usage :

• contenu principal

• paragraphes

• listes

• formulaires

• FAQ

• sections de services

Largeur maximale recommandée :

1200 px

C'est le conteneur par défaut.

---

## 2. Wide Container

Usage :

• Hero

• cartes en grille

• statistiques

• comparatifs

• galeries

Largeur maximale :

1400 px

Il offre davantage d'espace tout en restant maîtrisé.

---

## 3. Full Width Container

Usage réservé à :

• arrière-plans

• séparateurs visuels

• certaines illustrations

• bandeaux

Le contenu reste centré dans un Standard ou un Wide Container.

Le texte ne s'étend jamais sur toute la largeur de l'écran.

---

# Largeurs officielles

XS

100 %

---

SM

100 %

---

MD

100 %

---

LG

1100 px maximum

---

XL

1200 px maximum

---

2XL

1280 px recommandé

1400 px maximum uniquement pour les sections autorisées.

---

# Padding horizontal

XS

16 px

---

SM

20 px

---

MD

24 px

---

LG

32 px

---

XL

40 px

---

2XL

48 px

Ces valeurs suivent les Design Tokens.

Aucune valeur arbitraire n'est autorisée.

---

# Padding vertical

Les sections utilisent une respiration verticale régulière.

XS

48 px

---

SM

56 px

---

MD

64 px

---

LG

80 px

---

XL

96 px

---

2XL

112 px

Le rythme vertical est aussi important que le rythme horizontal.

---

# Alignement

Tous les conteneurs sont centrés horizontalement.

Ils utilisent le même axe visuel.

Le changement de page ne doit jamais modifier l'alignement général.

---

# Lecture confortable

Les paragraphes restent dans une largeur optimale.

Objectif :

60 à 80 caractères par ligne.

Les lignes trop longues fatiguent la lecture.

---

# Sections pleine largeur

Une section peut occuper toute la largeur uniquement si :

l'arrière-plan en bénéficie,

une illustration l'exige,

ou l'impact visuel est clairement amélioré.

Le contenu textuel reste toujours contenu.

---

# Hero

Le Hero peut utiliser un Wide Container.

Cependant :

• le titre ;

• le texte ;

• les CTA ;

• les éléments de confiance

restent alignés dans une largeur confortable.

---

# Cartes

Les cartes utilisent le même conteneur que leur section.

Elles ne dépassent jamais artificiellement les limites du contenu.

---

# Formulaires

Les formulaires restent relativement étroits.

Ils ne doivent jamais devenir trop larges.

Une largeur excessive augmente la difficulté de lecture.

---

# Images

Les grandes images peuvent dépasser le conteneur.

Les légendes et le texte restent alignés avec celui-ci.

---

# Footer

Le Footer utilise la même largeur que le reste du site.

Il ne crée pas une nouvelle grille.

---

# Continuité

Changer de page ne doit jamais modifier brutalement :

• les marges ;

• les largeurs ;

• les alignements.

Le visiteur doit ressentir une continuité.

---

# Exceptions

Les exceptions sont rares.

Elles doivent être documentées.

Une exception ne devient jamais un nouveau standard.

---

# Cas spécifique GH ÉPAVISTE

Les pages :

Accueil

Services

Communes

Départements

Guides

Contact

utilisent toutes le même système de conteneurs.

Cette cohérence renforce la confiance et facilite la navigation.

---

# Best Practices

✔ Utiliser toujours le conteneur officiel.

✔ Garder une largeur de lecture confortable.

✔ Centrer les contenus.

✔ Respecter les marges latérales.

✔ Créer une respiration verticale généreuse.

✔ Utiliser les conteneurs Wide uniquement lorsqu'ils apportent une réelle valeur.

✔ Réserver le Full Width aux éléments visuels.

---

# Anti-Patterns

❌ Texte collé aux bords.

❌ Conteneur différent sur chaque page.

❌ Largeur infinie sur UltraWide.

❌ Padding aléatoire.

❌ Hero occupant toute la largeur avec du texte étiré.

❌ Footer utilisant une autre largeur que le site.

❌ Plusieurs types de conteneurs dans une même section sans justification.

❌ Sections visuellement désalignées.

---

# Container Quality Score

Largeur .................... /10

Alignement ................. /10

Padding horizontal ......... /10

Padding vertical ........... /10

Lisibilité ................. /10

Continuité ................. /10

Responsive ................. /10

Cohérence .................. /10

Respiration ................ /10

Évolutivité ................ /10

Score minimal :

96 /100

---

# Validation

Avant chaque Release :

✔ Tous les contenus utilisent un conteneur officiel.

✔ Aucun texte n'est trop large.

✔ Les marges sont homogènes.

✔ Les Hero utilisent le bon conteneur.

✔ Les sections Full Width sont justifiées.

✔ Les formulaires restent confortables.

✔ Les pages conservent le même alignement.

✔ Score ≥ 96/100.

---

# Principe final

Le conteneur est la structure silencieuse qui donne son équilibre au produit.

Il ne cherche pas à occuper tout l'espace disponible.

Il cherche à offrir le meilleur confort de lecture, la meilleure cohérence visuelle et la meilleure expérience utilisateur.

Un excellent Container System est celui que l'utilisateur ne remarque jamais, mais dont il ressent immédiatement les bénéfices.

# Fin du Chapitre 6

# ==========================================================
# RESPONSIVE_SPEC.md
# CHAPITRE 7
# SPACING SYSTEM
# ==========================================================

# Objectif

Le Spacing System définit les règles officielles de respiration du produit.

Chaque espace possède une fonction.

Chaque distance possède une logique.

Le spacing améliore :

• la compréhension ;

• la hiérarchie ;

• la lecture ;

• la confiance.

Le vide est un élément de design.

Il n'est jamais considéré comme un espace perdu.

---

# Philosophie

Un bon spacing ne cherche pas à remplir l'écran.

Il cherche à créer du confort.

Une interface respirante réduit la charge cognitive.

Une interface compacte fatigue l'utilisateur.

---

# Principe fondamental

Les assistants IA n'utilisent jamais des espacements "à l'œil".

Ils utilisent exclusivement les Design Tokens.

---

# Échelle officielle

Toutes les distances utilisent cette échelle.

4 px

↓

8 px

↓

12 px

↓

16 px

↓

24 px

↓

32 px

↓

40 px

↓

48 px

↓

64 px

↓

80 px

↓

96 px

↓

128 px

Aucune autre valeur n'est utilisée sans justification.

---

# Rythme vertical

Chaque page suit un rythme constant.

Les sections respirent.

Les blocs respirent.

Les composants respirent.

Le rythme reste prévisible.

---

# Espacement entre sections

Mobile

64 px

---

Tablette

80 px

---

Desktop

96 px

---

UltraWide

96 à 128 px

Uniquement lorsque cela améliore réellement la lecture.

---

# Espacement interne des sections

Padding vertical recommandé :

48 → 96 px

Padding horizontal :

suivre le Container System.

---

# Titres

H1

48 px minimum avant la section suivante.

24 px avant le paragraphe.

---

H2

32 px avant.

16 à 24 px après.

---

H3

24 px avant.

16 px après.

---

Le titre est toujours visuellement relié à son contenu.

---

# Paragraphes

Les paragraphes utilisent un espacement vertical constant.

Objectif :

16 à 24 px.

Les blocs de texte restent faciles à parcourir.

---

# CTA

Les boutons principaux bénéficient toujours d'un espace de respiration.

Jamais collés à un paragraphe.

Jamais collés au bord du conteneur.

Espacement recommandé :

24 à 32 px.

---

# Cartes

Padding interne :

24 à 32 px.

Espacement entre cartes :

16 à 24 px sur mobile.

24 à 32 px sur desktop.

Toutes les cartes d'une même section utilisent les mêmes espacements.

---

# Formulaires

Espacement entre champs :

16 px

---

Espacement entre groupes :

24 px

---

Espacement avant le bouton :

24 à 32 px

Le formulaire reste visuellement aéré.

---

# Icônes

Les icônes possèdent toujours un espace avec le texte.

Jamais collées.

Espacement recommandé :

8 à 12 px.

---

# Images

Les images respirent avec le contenu.

Jamais collées aux paragraphes.

Toujours séparées par un espace cohérent.

---

# Hero

Le Hero est la zone qui respire le plus.

Le titre, le texte et le CTA disposent d'espaces généreux.

Le Hero ne doit jamais sembler compact.

---

# Footer

Le Footer possède une respiration équivalente aux autres sections.

Il ne doit jamais donner une impression de fin "compressée".

---

# Densité visuelle

Mobile

Interface légèrement plus compacte.

Sans jamais devenir serrée.

---

Tablette

Respiration moyenne.

---

Desktop

Respiration généreuse.

---

UltraWide

Le vide supplémentaire est utilisé intelligemment.

Jamais pour éloigner excessivement les contenus.

---

# Continuité

Le spacing reste cohérent sur l'ensemble du site.

Changer de page ne doit jamais modifier brutalement la densité visuelle.

---

# Exceptions

Une réduction d'espacement est autorisée uniquement :

si elle améliore la compréhension,

ou si elle évite un scroll inutile.

Toute exception doit rester rare.

---

# Cas spécifique GH ÉPAVISTE

Les zones suivantes disposent toujours d'une respiration généreuse :

• Hero

• numéro de téléphone

• formulaire

• CTA

• preuves de confiance

Ces éléments ne doivent jamais être "compressés".

---

# Best Practices

✔ Respecter les Design Tokens.

✔ Conserver un rythme vertical régulier.

✔ Donner de l'espace aux CTA.

✔ Créer des groupes visuels clairs.

✔ Aligner les espacements entre les sections.

✔ Utiliser davantage d'espace lorsqu'il améliore la lecture.

---

# Anti-Patterns

❌ Éléments collés.

❌ Espaces aléatoires.

❌ Padding différent entre deux cartes identiques.

❌ Hero compact.

❌ Footer écrasé.

❌ CTA sans respiration.

❌ Paragraphes collés aux titres.

❌ Mélanger plusieurs rythmes verticaux.

❌ Ajouter du vide uniquement pour "remplir" une page.

---

# Spacing Quality Score

Rythme vertical ............ /10

Respiration ............... /10

CTA ....................... /10

Titres .................... /10

Paragraphes ............... /10

Cartes .................... /10

Formulaires ............... /10

Hero ...................... /10

Footer .................... /10

Cohérence ................. /10

Score minimal :

97 /100

---

# Validation

Avant chaque Release :

✔ Tous les espacements utilisent les Design Tokens.

✔ Les titres respirent.

✔ Les CTA possèdent une marge suffisante.

✔ Les cartes utilisent les mêmes espacements.

✔ Le Hero reste aéré.

✔ Le Footer conserve une respiration cohérente.

✔ Aucun composant n'est visuellement "compressé".

✔ Le rythme vertical est homogène sur toutes les pages.

✔ Score ≥ 97/100.

---

# Principe final

Le spacing est le rythme silencieux du produit.

Il organise la lecture sans attirer l'attention.

Lorsqu'il est maîtrisé, l'interface paraît immédiatement plus professionnelle, plus lisible et plus rassurante.

L'utilisateur ne remarque pas le spacing.

Il ressent simplement que tout est à sa place.

# Fin du Chapitre 7

# ==========================================================
# RESPONSIVE_SPEC.md
# CHAPITRE 8
# TYPOGRAPHY SCALING FRAMEWORK
# ==========================================================

# Objectif

Le Typography Scaling Framework définit les règles officielles de typographie responsive de GH Épaviste.

La typographie ne consiste pas uniquement à choisir une police.

Elle structure la lecture.

Elle crée la hiérarchie.

Elle influence directement la compréhension et la confiance.

Toutes les interfaces doivent conserver une excellente lisibilité sur Android, iPhone, tablette et desktop.

---

# Philosophie

La meilleure typographie est celle qui s'efface derrière le contenu.

Le visiteur ne doit jamais penser :

"Quelle belle police."

Il doit simplement lire sans effort.

Notre objectif est de réduire la fatigue visuelle et d'améliorer la compréhension.

---

# Principe fondamental

Le texte est un contenu.

Jamais un élément décoratif.

Chaque taille, chaque graisse et chaque espacement possèdent une fonction précise.

---

# Mobile First

La typographie est conçue d'abord pour smartphone.

Le Desktop bénéficie ensuite d'une montée progressive en taille.

Jamais l'inverse.

---

# Typographie fluide

Les assistants IA privilégient toujours une typographie fluide.

Les tailles doivent évoluer progressivement avec la largeur de l'écran.

Les fonctions CSS modernes comme :

clamp()

sont recommandées afin d'éviter les ruptures entre breakpoints.

Les tailles fixes sont réservées aux cas exceptionnels.

---

# Hiérarchie officielle

H1

Message principal.

Une seule fois par page.

Toujours immédiatement identifiable.

---

H2

Grandes sections.

Structure la page.

---

H3

Sous-sections.

---

H4

Titres de cartes.

Titres secondaires.

---

H5

Cas particuliers.

---

H6

Très rarement utilisé.

---

Body Large

Paragraphes principaux.

---

Body

Texte standard.

---

Small

Informations secondaires.

---

Caption

Mentions complémentaires.

---

# Échelle recommandée

Mobile

H1 :

32 à 40 px

---

H2 :

28 à 32 px

---

H3 :

24 à 28 px

---

H4 :

20 à 24 px

---

Body :

16 à 18 px

---

Small :

14 px

---

Caption :

12 à 13 px

---

Desktop

H1 :

48 à 64 px

---

H2 :

36 à 48 px

---

H3 :

30 à 36 px

---

H4 :

24 à 28 px

---

Body :

18 px

---

Small :

15 à 16 px

---

Caption :

13 à 14 px

---

# Longueur de ligne

Objectif :

60 à 80 caractères.

Une ligne trop longue fatigue la lecture.

Une ligne trop courte ralentit la compréhension.

---

# Line Height

Les hauteurs de ligne suivent les principes suivants :

Titres :

1.1 → 1.25

---

Paragraphes :

1.5 → 1.7

---

Listes :

1.5

---

Les textes respirent.

Ils ne paraissent jamais compacts.

---

# Font Weight

Les assistants IA utilisent uniquement les graisses nécessaires.

300

Rare.

---

400

Texte courant.

---

500

Navigation.

Labels.

---

600

Titres secondaires.

---

700

Titres principaux.

CTA.

---

Les graisses inutiles sont évitées.

---

# Alignement

Le texte est aligné à gauche.

Le texte justifié est interdit.

Le texte centré est réservé :

aux Hero,

aux bandeaux,

ou à certains CTA.

---

# Contraste

Le contraste respecte WCAG 2.2 AA.

Objectif :

AAA lorsque cela est possible.

Le texte ne doit jamais être difficile à lire.

---

# Espacement des paragraphes

Chaque paragraphe possède une respiration constante.

Jamais collé au suivant.

---

# Listes

Les listes sont aérées.

Les puces restent parfaitement alignées.

Les retraits sont constants.

---

# Liens

Les liens doivent être immédiatement identifiables.

Ils ne reposent jamais uniquement sur la couleur.

Le survol et le focus sont visibles.

---

# CTA

Les boutons utilisent une hiérarchie typographique cohérente.

Le texte du bouton reste lisible sans effort.

Les CTA ne sont jamais écrits entièrement en majuscules sauf justification explicite.

---

# Hero

Le Hero utilise la plus forte hiérarchie typographique.

Le visiteur comprend immédiatement :

qui nous sommes,

ce que nous faisons,

et ce qu'il doit faire.

---

# Responsive

Lorsque l'écran grandit :

la taille augmente progressivement,

les proportions restent identiques,

la hiérarchie reste stable.

Le changement ne doit jamais surprendre.

---

# Cas spécifique GH ÉPAVISTE

Les informations suivantes bénéficient toujours de la meilleure hiérarchie :

• H1

• téléphone

• CTA principal

• formulaire

• bénéfices client

Ces éléments doivent être identifiables en moins de trois secondes.

---

# Best Practices

✔ Utiliser une hiérarchie claire.

✔ Utiliser clamp() pour les titres principaux.

✔ Respecter les longueurs de ligne.

✔ Garder un contraste élevé.

✔ Limiter les variations de graisse.

✔ Conserver une excellente lisibilité sur smartphone.

✔ Préserver une respiration généreuse.

---

# Anti-Patterns

❌ H1 trop petit.

❌ H1 occupant cinq lignes sur smartphone.

❌ Paragraphes trop longs.

❌ Texte justifié.

❌ Contraste insuffisant.

❌ Plus de trois niveaux de graisse différents dans une même section.

❌ Mélanger plusieurs styles typographiques.

❌ Utiliser des tailles arbitraires.

❌ Réduire le Body sous 16 px sur mobile.

❌ Utiliser les majuscules pour améliorer artificiellement la visibilité.

---

# Typography Quality Score

Hiérarchie .............. /10

Lisibilité .............. /10

Responsive .............. /10

Contraste ............... /10

Longueur des lignes ..... /10

Line Height ............. /10

Graisses ................ /10

Cohérence ............... /10

CTA ..................... /10

Accessibilité ........... /10

Score minimal :

97 /100

---

# Validation

Avant chaque Release :

✔ Une seule balise H1.

✔ Hiérarchie Hn cohérente.

✔ Body ≥ 16 px sur mobile.

✔ Longueur des lignes maîtrisée.

✔ Contraste conforme WCAG.

✔ Clamp() utilisé pour les titres principaux lorsque pertinent.

✔ Aucun texte difficile à lire.

✔ Les CTA restent immédiatement identifiables.

✔ Score ≥ 97/100.

---

# Principe final

La typographie est la voix du produit.

Elle guide le regard, organise la pensée et inspire la confiance.

Une excellente typographie ne cherche pas à impressionner.

Elle permet à chaque utilisateur de comprendre rapidement, de lire confortablement et d'agir sans effort, quel que soit son appareil.

# Fin du Chapitre 8

# ==========================================================
# RESPONSIVE_SPEC.md
# CHAPITRE 9
# TOUCH EXPERIENCE ENGINEERING
# ==========================================================

# Objectif

Le Touch Experience Engineering définit les règles officielles de conception des interactions tactiles de GH Épaviste.

Chaque élément interactif doit pouvoir être utilisé rapidement, facilement et sans erreur.

L'expérience tactile constitue une priorité absolue sur smartphone.

---

# Philosophie

Nous ne concevons pas pour un curseur.

Nous concevons pour un doigt.

Le doigt est :

• moins précis ;

• plus lent ;

• plus large ;

• souvent utilisé avec une seule main.

L'interface doit donc réduire au maximum les risques d'erreur.

---

# Principe fondamental

Chaque interaction doit demander le moins d'effort possible.

L'utilisateur ne doit jamais avoir besoin de viser précisément un petit élément.

---

# Mobile First

Toutes les interactions sont d'abord pensées pour :

Android

↓

iPhone

↓

Tablette

↓

Desktop

Le Desktop hérite naturellement des choix effectués pour le mobile.

---

# Taille minimale des zones tactiles

Les assistants IA respectent les recommandations internationales.

Minimum :

48 × 48 dp (Google)

44 × 44 pt (Apple)

Dans GH Épaviste, la cible recommandée est :

48 × 48 px minimum.

Les éléments principaux peuvent atteindre :

56 px.

---

# Espacement entre les éléments

Deux éléments interactifs ne doivent jamais être collés.

Distance minimale recommandée :

8 à 12 px.

Cela limite les erreurs de sélection.

---

# Thumb Zones

Les assistants IA prennent en compte les zones naturelles du pouce.

Les actions les plus importantes doivent rester facilement accessibles.

Exemples :

• appeler ;

• envoyer le formulaire ;

• demander un devis ;

• contacter rapidement.

Les CTA principaux ne doivent jamais être placés dans une zone difficile d'accès.

---

# Utilisation à une main

Le produit doit rester utilisable avec une seule main.

Les composants critiques sont placés dans des zones confortables.

Les mouvements excessifs du pouce sont évités.

---

# Boutons

Chaque bouton doit :

✔ être immédiatement identifiable ;

✔ posséder une taille confortable ;

✔ offrir un retour visuel clair ;

✔ conserver un contraste élevé.

Les boutons principaux bénéficient d'une priorité visuelle.

---

# Champs de formulaire

Les champs doivent être suffisamment hauts.

Hauteur recommandée :

48 à 56 px.

Le focus est immédiatement visible.

Les erreurs sont compréhensibles.

---

# Liens

Les liens dans un paragraphe restent facilement sélectionnables.

Ils ne doivent jamais être trop proches les uns des autres.

---

# Icônes interactives

Une icône seule ne constitue pas toujours une cible suffisante.

Une zone invisible peut être ajoutée autour de l'icône afin d'améliorer la sélection.

---

# Gestes

Les gestes complexes sont évités.

Le produit privilégie :

• Tap

• Double Tap (si réellement utile)

Le Swipe n'est utilisé que lorsqu'il apporte une réelle valeur.

Les gestes cachés sont déconseillés.

---

# Retour visuel

Chaque interaction fournit une confirmation immédiate.

Exemples :

• changement d'état ;

• animation légère ;

• variation de couleur ;

• focus visible.

L'utilisateur doit comprendre que son action a été prise en compte.

---

# Temps de réponse

Le retour visuel apparaît immédiatement.

Les interactions semblent instantanées.

Les longues attentes sont évitées.

---

# États interactifs

Chaque composant possède des états clairement définis :

Default

↓

Hover (Desktop)

↓

Focus

↓

Pressed

↓

Disabled

↓

Loading

↓

Success

↓

Error

Chaque état reste cohérent sur tous les appareils.

---

# Safe Areas

Les composants interactifs ne sont jamais placés trop près :

• de la Dynamic Island ;

• des gestes système ;

• des bords inférieurs ;

• des encoches.

Les marges de sécurité sont toujours respectées.

---

# Utilisation en extérieur

Les assistants IA privilégient :

• de grands boutons ;

• un contraste élevé ;

• peu de texte dans les CTA ;

• une hiérarchie claire.

Le site doit rester utilisable en plein soleil.

---

# Cas spécifique GH ÉPAVISTE

Les actions prioritaires sont :

1.

Appeler immédiatement.

---

2.

Envoyer une demande.

---

3.

Obtenir un devis.

---

4.

Lire les informations essentielles.

Ces actions doivent rester accessibles en moins de trois secondes.

---

# Best Practices

✔ Grandes zones tactiles.

✔ Espacement suffisant.

✔ Utilisation possible à une main.

✔ Contraste élevé.

✔ Focus visible.

✔ Feedback immédiat.

✔ CTA faciles à atteindre.

✔ Gestes simples.

✔ Navigation intuitive.

---

# Anti-Patterns

❌ Boutons trop petits.

❌ Icônes impossibles à toucher.

❌ Deux boutons collés.

❌ CTA proche du bord de l'écran.

❌ Formulaire avec des champs trop compacts.

❌ Gestes cachés sans indication.

❌ Absence de retour visuel.

❌ Zones tactiles différentes selon les pages.

❌ Actions importantes difficiles à atteindre avec le pouce.

❌ Dépendance au survol (hover) pour des fonctions essentielles.

---

# Touch Quality Score

Zones tactiles ............. /10

Confort du pouce ........... /10

Feedback visuel ............ /10

Contraste ................. /10

Formulaires ............... /10

CTA ....................... /10

Navigation ................. /10

Accessibilité .............. /10

Safe Areas ................. /10

Expérience globale ......... /10

Score minimal :

98 /100

---

# Validation

Avant chaque Release :

✔ Tous les boutons ≥ 48 px.

✔ Champs de formulaire confortables.

✔ Espacement suffisant entre les éléments.

✔ CTA accessibles avec une seule main.

✔ Focus visible sur tous les composants.

✔ Aucun élément interactif collé aux bords.

✔ Retour visuel immédiat après chaque interaction.

✔ Aucune action essentielle dépendante du hover.

✔ Score ≥ 98/100.

---

# Principe final

Une excellente expérience tactile est invisible.

L'utilisateur ne doit jamais réfléchir à la manière d'interagir avec l'interface.

Chaque geste doit être naturel, rapide et fiable.

Pour GH Épaviste, où les visiteurs sont souvent en situation d'urgence ou en déplacement, chaque interaction doit permettre d'agir avec confiance, même d'une seule main et dans des conditions d'utilisation difficiles.

# Fin du Chapitre 9

# ==========================================================
# RESPONSIVE_SPEC.md
# CHAPITRE 10
# NAVIGATION RESPONSIVE INTELLIGENCE
# ==========================================================

# Objectif

La navigation constitue le système de déplacement officiel de GH Épaviste.

Son objectif n'est pas de montrer toutes les pages.

Son objectif est de permettre à l'utilisateur d'atteindre son objectif le plus rapidement possible.

Une bonne navigation réduit le nombre de décisions.

Elle ne les augmente jamais.

---

# Philosophie

Le meilleur menu est celui que l'utilisateur n'a presque jamais besoin d'ouvrir.

Les informations importantes doivent être visibles naturellement.

Le menu devient un complément.

Jamais le point d'entrée principal.

---

# Priorités de navigation

Les assistants IA respectent toujours l'ordre suivant :

1.

Comprendre immédiatement le service.

↓

2.

Voir comment contacter GH Épaviste.

↓

3.

Accéder au formulaire.

↓

4.

Trouver sa commune.

↓

5.

Consulter les informations complémentaires.

Cette hiérarchie ne change jamais.

---

# Navigation Mobile

Le smartphone constitue la référence.

Le Header reste léger.

Les éléments visibles sont limités.

Objectifs :

• lecture rapide ;

• faible charge cognitive ;

• accès immédiat au CTA.

---

# Header Mobile

Le Header contient uniquement les éléments essentiels.

Logo

+

Menu

+

CTA principal

Aucun élément décoratif inutile.

---

# Logo

Le logo reste toujours visible.

Il constitue le point de retour vers la page d'accueil.

Sa taille reste constante.

Il ne concurrence jamais les CTA.

---

# Menu Hamburger

Le menu hamburger est utilisé sur smartphone.

Il possède une taille tactile confortable.

Minimum :

48 × 48 px.

Son icône reste immédiatement identifiable.

---

# Ouverture du menu

L'ouverture est fluide.

Rapide.

Sans animation excessive.

Le visiteur comprend immédiatement que le menu est ouvert.

---

# Fermeture du menu

Le menu peut être fermé :

• avec la croix ;

• en cliquant à l'extérieur ;

• avec la touche Échap sur clavier.

L'utilisateur garde toujours le contrôle.

---

# Structure du menu

Les liens suivent toujours le même ordre :

Accueil

↓

Services

↓

Enlèvement par département

↓

Guide

↓

FAQ

↓

Contact

Les liens les plus utiles apparaissent en premier.

---

# CTA principal

Le CTA principal reste visible autant que possible.

Exemple :

Appeler maintenant

ou

Demander un enlèvement

Ce CTA possède une priorité visuelle supérieure aux autres liens.

---

# Sticky Header

Sur mobile, le Header peut rester visible lors du défilement.

Il devient légèrement plus compact.

Il ne masque jamais le contenu.

---

# Scroll

Le Header ne doit jamais provoquer de saut de mise en page.

Les transitions sont discrètes.

Le défilement reste fluide.

---

# Desktop

Sur Desktop :

Le menu devient horizontal.

Les liens restent peu nombreux.

Le CTA principal est placé à droite.

Il reste immédiatement visible.

---

# Nombre maximal de liens

Navigation principale :

6 à 7 liens maximum.

Au-delà, la compréhension diminue.

Les pages secondaires sont regroupées intelligemment.

---

# Sous-menus

Les sous-menus sont utilisés uniquement lorsqu'ils simplifient réellement la navigation.

Ils restent courts.

Ils ne deviennent jamais une seconde navigation principale.

---

# Breadcrumb

Les pages profondes utilisent un fil d'Ariane.

Il aide l'utilisateur à comprendre sa position.

Il améliore également le référencement.

---

# État actif

La page active est toujours identifiable.

L'utilisateur sait immédiatement où il se trouve.

---

# Focus clavier

Tous les éléments de navigation sont accessibles au clavier.

Le focus est visible.

L'ordre de navigation est logique.

---

# Lecteurs d'écran

Les éléments utilisent des labels explicites.

Les icônes seules ne suffisent pas.

Les assistants IA privilégient une navigation compréhensible même sans support visuel.

---

# Navigation tactile

Les liens disposent d'une zone tactile minimale de 48 px.

Les liens proches sont espacés.

Les erreurs de sélection sont limitées.

---

# Navigation contextuelle

Les CTA importants peuvent être répétés dans certaines sections.

Exemples :

Hero

↓

Section Contact

↓

Footer

L'utilisateur ne doit jamais avoir besoin de revenir en haut de la page.

---

# Footer

Le Footer constitue une navigation secondaire.

Il regroupe :

• Mentions légales

• Politique de confidentialité

• FAQ

• Contact

• Plan du site

Il ne remplace jamais la navigation principale.

---

# Cas spécifique GH ÉPAVISTE

Les visiteurs recherchent principalement :

• un numéro de téléphone ;

• un formulaire ;

• une intervention rapide ;

• leur commune.

Ces informations doivent être accessibles en moins de trois interactions.

---

# Best Practices

✔ Navigation courte.

✔ CTA immédiatement visible.

✔ Header léger.

✔ Menu simple.

✔ Structure cohérente.

✔ Logo toujours accessible.

✔ Focus visible.

✔ Sticky Header discret.

✔ Navigation identique sur toutes les pages.

---

# Anti-Patterns

❌ Plus de 7 liens principaux.

❌ Deux menus concurrents.

❌ Header occupant trop d'espace.

❌ CTA caché dans le menu.

❌ Menu difficile à fermer.

❌ Animations longues.

❌ Navigation différente selon les pages.

❌ Icônes sans libellé.

❌ Sticky Header qui masque le contenu.

❌ Menu nécessitant plusieurs niveaux de navigation.

---

# Navigation Quality Score

Simplicité ............... /10

Rapidité ................. /10

CTA ...................... /10

Lisibilité ............... /10

Responsive ............... /10

Accessibilité ............ /10

Structure ................ /10

Sticky Header ............ /10

Navigation tactile ....... /10

Cohérence ................ /10

Score minimal :

98 /100

---

# Validation

Avant chaque Release :

✔ Navigation identique sur toutes les pages.

✔ Menu ≤ 7 liens principaux.

✔ CTA immédiatement visible.

✔ Header responsive validé.

✔ Sticky Header testé.

✔ Focus clavier validé.

✔ Navigation lecteur d'écran validée.

✔ Aucune animation gênante.

✔ Score ≥ 98/100.

---

# Principe final

La navigation de GH Épaviste ne cherche pas à montrer toutes les possibilités du site.

Elle guide l'utilisateur vers son objectif avec le minimum d'effort.

Chaque clic, chaque geste et chaque interaction doivent rapprocher le visiteur de l'action qu'il souhaite réaliser : obtenir rapidement un enlèvement d'épave ou contacter GH Épaviste.

# Fin du Chapitre 10

# ==========================================================
# RESPONSIVE_SPEC.md
# CHAPITRE 11
# HERO RESPONSIVE ENGINEERING
# ==========================================================

# Objectif

Le Hero est la première interaction entre GH Épaviste et le visiteur.

Il détermine la première impression, la compréhension du service et l'intention de poursuivre la navigation.

Chaque Hero doit répondre à trois questions en moins de cinq secondes :

• Qui sommes-nous ?
• Que faisons-nous ?
• Que doit faire l'utilisateur maintenant ?

---

# Philosophie

Le Hero n'est pas une bannière.

Le Hero est un outil de conversion.

Chaque élément présent dans cette zone doit contribuer à rassurer, informer ou inciter à l'action.

Tout élément qui ne participe pas à ces objectifs doit être supprimé.

---

# Structure officielle

Le Hero suit toujours l'ordre suivant :

1. Badge ou preuve de confiance (optionnel)

↓

2. H1

↓

3. Description

↓

4. Éléments de réassurance

↓

5. CTA principal

↓

6. CTA secondaire (facultatif)

↓

7. Illustration ou visuel

Cette structure reste constante sur toutes les pages.

---

# Mobile First

Sur smartphone, les éléments sont empilés verticalement.

L'ordre ne change jamais.

Le CTA principal doit être visible sans effort.

---

# Desktop

Sur Desktop, le Hero peut utiliser deux colonnes :

• colonne gauche : contenu ;

• colonne droite : illustration ou visuel.

Le contenu textuel reste toujours prioritaire.

---

# H1

Le H1 doit être immédiatement lisible.

Une seule promesse principale.

Pas de formulations ambiguës.

Objectif :

être compris en moins de trois secondes.

---

# Description

La description complète le H1.

Elle explique :

• le service ;

• la zone d'intervention ;

• les bénéfices.

Elle reste concise.

---

# Éléments de confiance

Le Hero peut afficher :

• Intervention rapide

• Devis gratuit

• Enlèvement 7j/7

• Paiement selon le véhicule (si applicable)

• Satisfaction client

Ces éléments renforcent immédiatement la crédibilité.

---

# CTA principal

Le CTA principal constitue l'action la plus importante.

Exemples :

• Appeler maintenant

• Demander un enlèvement

Il doit être visible dès l'arrivée sur la page.

---

# CTA secondaire

Le CTA secondaire est facultatif.

Il permet d'accéder à des informations complémentaires sans détourner l'attention du CTA principal.

---

# Illustration

L'illustration soutient le message.

Elle ne doit jamais concurrencer le texte.

Elle reste optimisée pour le chargement.

---

# Hauteur du Hero

Le Hero doit être suffisamment grand pour créer un impact, sans repousser inutilement le contenu principal.

L'utilisateur doit comprendre rapidement le service et accéder au CTA sans devoir parcourir une longue bannière.

---

# Responsive

Le Hero s'adapte progressivement :

• smartphone : une colonne ;

• tablette : une ou deux colonnes selon l'espace disponible ;

• desktop : deux colonnes si cela améliore la lisibilité.

La logique reste identique.

---

# Cas spécifique GH ÉPAVISTE

Les Hero des pages :

• Accueil

• Services

• Départements

• Communes (phase future)

• Guides

partagent la même structure.

Seuls le H1, la description et certains éléments contextuels changent.

---

# Best Practices

✔ Une promesse claire.

✔ Un seul H1.

✔ CTA visible immédiatement.

✔ Illustration légère.

✔ Éléments de confiance visibles.

✔ Structure identique sur toutes les pages.

✔ Lecture fluide sur mobile.

---

# Anti-Patterns

❌ Hero trop haut.

❌ Plusieurs H1.

❌ Illustration plus importante que le message.

❌ CTA caché sous la ligne de flottaison.

❌ Texte trop long.

❌ Trop de boutons concurrents.

❌ Carrousel automatique.

❌ Vidéo en lecture automatique.

❌ Animations qui retardent la compréhension.

---

# Hero Quality Score

Compréhension ............. /10

Impact visuel ............. /10

Lisibilité ................ /10

CTA ....................... /10

Responsive ................ /10

Performance ............... /10

Confiance ................. /10

Hiérarchie ................. /10

Accessibilité ............. /10

Cohérence ................. /10

Score minimal :

98 /100

---

# Validation

Avant chaque Release :

✔ H1 unique.

✔ CTA visible immédiatement.

✔ Hero responsive validé.

✔ Illustration optimisée.

✔ Aucun élément décoratif inutile.

✔ Lecture parfaite sur Android et iPhone.

✔ Temps de compréhension inférieur à cinq secondes.

✔ Score ≥ 98/100.

---

# Principe final

Le Hero constitue la porte d'entrée de GH Épaviste.

Il ne cherche pas à impressionner.

Il cherche à rassurer, expliquer et guider immédiatement le visiteur vers l'action la plus importante.

Chaque Hero doit donner le sentiment que l'utilisateur est au bon endroit et qu'il trouvera rapidement la solution à son besoin.

# Fin du Chapitre 11

# ==========================================================
# RESPONSIVE_SPEC.md
# CHAPITRE 12
# HEADER RESPONSIVE ENGINEERING
# ==========================================================

# Objectif

Le Header constitue le point de repère principal de toutes les pages de GH Épaviste.

Il assure :

• l'identification immédiate de la marque ;

• l'accès rapide à la navigation ;

• l'accès direct aux actions principales.

Le Header doit rester simple, cohérent et performant sur tous les appareils.

---

# Philosophie

Le Header ne doit jamais devenir le centre de l'interface.

Le contenu reste prioritaire.

Le Header accompagne la navigation.

Il ne monopolise jamais l'attention.

---

# Mission du Header

Le Header doit permettre à un nouvel utilisateur de comprendre immédiatement :

• où il se trouve ;

• comment naviguer ;

• comment contacter GH Épaviste.

Cette compréhension doit être obtenue en quelques secondes.

---

# Architecture officielle

Le Header est composé de quatre zones :

1.

Logo

↓

2.

Navigation

↓

3.

CTA principal

↓

4.

Menu Mobile (si nécessaire)

Cette architecture reste identique sur toutes les pages.

---

# Mobile First

Le Header est conçu d'abord pour smartphone.

Les éléments affichés sont limités à l'essentiel.

Objectif :

réduire la charge cognitive.

---

# Logo

Le logo est toujours présent.

Il renvoie vers la page d'accueil.

Sa taille reste constante sur tout le site.

Le logo n'est jamais déformé.

Les marges autour du logo sont préservées afin de garantir une bonne lisibilité.

---

# Version du logo

Les assistants IA utilisent automatiquement :

• le logo noir et jaune sur les fonds clairs ;

• le logo avec texte blanc sur les fonds sombres.

Le contraste du logo doit toujours être optimal.

Le logo ne doit jamais perdre en lisibilité selon le fond utilisé.

---

# Dimensions

Mobile :

hauteur recommandée :

40 à 48 px.

---

Desktop :

48 à 64 px.

Les proportions du logo sont toujours conservées.

---

# Hauteur du Header

Mobile :

64 à 72 px.

---

Tablette :

72 à 80 px.

---

Desktop :

80 à 96 px.

Le Header reste suffisamment compact pour ne pas masquer le contenu principal.

---

# Navigation Desktop

Les liens principaux restent visibles.

Nombre recommandé :

6 liens maximum.

Les liens sont espacés régulièrement.

Ils utilisent la même hiérarchie typographique.

---

# Navigation Mobile

Le menu Hamburger est utilisé.

Les liens apparaissent dans une liste verticale.

La lecture reste immédiate.

Les catégories inutiles sont supprimées.

---

# CTA principal

Le CTA principal est toujours visible.

Exemples :

Appeler maintenant

ou

Demander un enlèvement

Le CTA bénéficie de la priorité visuelle.

---

# Sticky Header

Le Header devient Sticky après le début du défilement.

Objectifs :

• conserver l'accès au CTA ;

• conserver la navigation ;

• réduire les retours en haut de page.

---

# Compression au scroll

Lors du défilement :

le Header peut légèrement diminuer de hauteur.

La réduction reste discrète.

Elle ne doit jamais perturber l'utilisateur.

---

# Transparence

Le Header peut être transparent uniquement au-dessus du Hero.

Dès que le contenu apparaît :

le Header retrouve un fond opaque.

La lisibilité reste toujours parfaite.

---

# Ombres

Une légère ombre peut apparaître lorsque le Header devient Sticky.

Cette ombre améliore la séparation visuelle.

Elle reste discrète.

---

# Responsive

Le Header évolue progressivement.

Aucun changement brutal.

Les éléments disparaissent ou se réorganisent intelligemment.

La logique reste identique.

---

# Safe Areas

Sur iPhone :

les marges tiennent compte :

• des encoches ;

• de la Dynamic Island ;

• des gestes système.

Aucun élément important ne doit être masqué.

---

# Performance

Le Header doit apparaître immédiatement.

Les animations restent inférieures à 200 ms.

Les ressources graphiques sont optimisées.

---

# États

Chaque élément possède les états suivants :

Default

↓

Hover

↓

Focus

↓

Pressed

↓

Active

↓

Disabled

↓

Loading (si applicable)

Tous les états sont définis dans le Design System.

---

# Accessibilité

Tous les éléments du Header :

• sont accessibles au clavier ;

• disposent d'un focus visible ;

• possèdent un nom accessible ;

• respectent WCAG 2.2 AA.

---

# Cas spécifique GH ÉPAVISTE

Le numéro de téléphone constitue l'action prioritaire.

Selon le contexte :

le CTA "Appeler maintenant" peut être mis davantage en évidence.

Le formulaire reste accessible rapidement depuis le Header ou le Hero.

---

# Best Practices

✔ Header léger.

✔ Logo immédiatement identifiable.

✔ CTA toujours visible.

✔ Sticky Header discret.

✔ Navigation courte.

✔ Bonne gestion des Safe Areas.

✔ Excellente lisibilité.

✔ Animations rapides.

✔ Responsive cohérent.

---

# Anti-Patterns

❌ Header occupant 20 % de l'écran.

❌ Logo trop grand.

❌ Plus de 6 liens principaux.

❌ CTA caché dans le menu.

❌ Header transparent sur un fond peu lisible.

❌ Animations lentes.

❌ Sticky Header qui masque le contenu.

❌ Changement brutal de hauteur.

❌ Couleurs incohérentes entre les pages.

❌ Utilisation du mauvais logo selon le fond.

---

# Header Quality Score

Lisibilité ............... /10

Navigation ............... /10

Logo ..................... /10

CTA ...................... /10

Responsive ............... /10

Performance .............. /10

Sticky Header ............ /10

Accessibilité ............ /10

Safe Areas ............... /10

Cohérence ................ /10

Score minimal :

98 /100

---

# Validation

Avant chaque Release :

✔ Le bon logo est utilisé selon le fond.

✔ Le Header reste lisible sur Android et iPhone.

✔ Les Safe Areas sont respectées.

✔ Le CTA est immédiatement visible.

✔ Le Header ne masque aucun contenu.

✔ Les animations sont inférieures à 200 ms.

✔ Les états interactifs sont correctement définis.

✔ Score ≥ 98/100.

---

# Principe final

Le Header est la porte d'entrée permanente de GH Épaviste.

Il doit inspirer confiance dès le premier regard, rester discret pendant la navigation et permettre au visiteur d'accéder immédiatement aux actions essentielles.

Un excellent Header accompagne l'utilisateur sans jamais détourner son attention du contenu ou de son objectif.

# Fin du Chapitre 12

# ==========================================================
# RESPONSIVE_SPEC.md
# CHAPITRE 13
# CTA RESPONSIVE ENGINEERING
# ==========================================================

# Objectif

Le CTA (Call To Action) constitue l'élément de conversion le plus important de GH Épaviste.

Chaque CTA doit permettre au visiteur de passer à l'action immédiatement.

Un CTA ne sert pas uniquement à attirer le regard.

Il sert à réduire l'hésitation.

Il transforme une intention en action.

---

# Philosophie

Le meilleur CTA est celui qui répond exactement au besoin de l'utilisateur.

Il ne pousse pas.

Il guide.

Le visiteur doit ressentir :

"Oui.

C'est exactement ce que je voulais faire."

---

# Priorité absolue

Les assistants IA considèrent toujours les CTA comme des composants critiques.

Ils ne sont jamais traités comme de simples boutons.

Chaque CTA possède :

• un objectif ;

• un contexte ;

• une hiérarchie ;

• une priorité.

---

# Hiérarchie des CTA

GH ÉPAVISTE utilise uniquement trois niveaux.

---

CTA Primaire

Action principale.

Exemples :

Appeler maintenant

Demander un enlèvement

Obtenir un devis gratuit

Couleur :

Jaune officiel GH (#F7BB09)

Texte noir.

Toujours le plus visible.

---

CTA Secondaire

Action complémentaire.

Exemples :

Voir nos services

Découvrir nos zones d'intervention

Consulter le guide

Style :

Outline ou fond neutre.

Ne concurrence jamais le CTA principal.

---

CTA Tertiaire

Actions secondaires.

Exemples :

Mentions légales

Politique de confidentialité

FAQ

Ces liens restent discrets.

---

# Nombre maximal

Par écran :

1 CTA principal.

Maximum 1 CTA secondaire.

Jamais davantage.

Multiplier les CTA réduit la conversion.

---

# Position

Le CTA principal apparaît :

dans le Hero,

après les arguments de confiance,

dans certaines sections longues,

avant le Footer.

L'utilisateur ne doit jamais avoir besoin de revenir en haut.

---

# Mobile First

Le CTA est conçu en priorité pour smartphone.

Objectifs :

• facilement atteignable ;

• immédiatement identifiable ;

• suffisamment grand.

---

# Taille

Hauteur recommandée :

48 à 56 px.

Largeur :

selon le contenu.

Sur mobile :

le bouton peut occuper toute la largeur du conteneur lorsque cela améliore l'interaction.

---

# Zone tactile

Minimum :

48 × 48 px.

Le confort de sélection est prioritaire.

---

# Texte

Le texte est :

court,

direct,

orienté action.

Exemples :

✔ Appeler maintenant

✔ Demander un enlèvement

✔ Recevoir un devis

Éviter :

Cliquez ici

En savoir plus

Soumettre

Continuer

Ces formulations sont trop vagues.

---

# Icônes

Une icône peut renforcer la compréhension.

Exemples :

Téléphone

Camion

Message

Elle ne remplace jamais le texte.

---

# Couleurs

CTA Primaire

Fond :

Jaune officiel (#F7BB09)

Texte :

Noir

Contraste conforme WCAG.

---

CTA Secondaire

Fond transparent ou neutre.

Bordure visible.

Texte noir.

---

CTA Désactivé

Aspect visuellement distinct.

L'utilisateur comprend immédiatement qu'il n'est pas disponible.

---

# États interactifs

Chaque CTA possède :

Default

↓

Hover

↓

Focus

↓

Pressed

↓

Loading

↓

Success

↓

Error

Chaque état est clairement identifiable.

---

# Hover

Desktop uniquement.

L'effet reste subtil.

Aucun mouvement excessif.

---

# Focus

Le Focus est toujours visible.

Il respecte WCAG 2.2.

---

# Loading

Lorsque l'action prend du temps :

le CTA affiche un indicateur de progression.

L'utilisateur comprend que sa demande est en cours.

---

# Success

Une confirmation visuelle apparaît immédiatement.

Le visiteur ne doute jamais de la réussite de son action.

---

# Error

Les erreurs sont explicites.

Elles expliquent :

ce qui s'est passé,

comment corriger.

Jamais de message générique.

---

# Placement stratégique

Les CTA apparaissent après :

• un bénéfice ;

• une preuve de confiance ;

• une réponse à une question.

Jamais avant.

---

# Répétition

Sur les longues pages :

le CTA principal peut être répété.

Toujours avec la même apparence.

Toujours avec le même libellé.

---

# Sticky CTA (Mobile)

Les assistants IA peuvent utiliser un CTA fixe sur smartphone.

Exemple :

📞 Appeler maintenant

Ce composant reste discret.

Il ne masque jamais le contenu.

Il respecte les Safe Areas.

---

# Psychologie

Chaque CTA répond à une motivation.

Le visiteur doit comprendre immédiatement :

• ce qu'il va obtenir ;

• ce qui va se passer ;

• qu'il ne prend aucun risque.

---

# Cas spécifique GH ÉPAVISTE

Ordre officiel :

1.

Appeler maintenant

↓

2.

Demander un enlèvement

↓

3.

Recevoir un devis gratuit

↓

4.

Voir les services

Les CTA suivent toujours cette hiérarchie.

---

# Responsive

Mobile :

Boutons plus larges.

Texte centré.

Zone tactile maximale.

---

Desktop

Boutons légèrement plus compacts.

Même hiérarchie.

Même logique.

---

# Best Practices

✔ Un seul CTA principal.

✔ Texte orienté action.

✔ Couleur cohérente.

✔ Taille confortable.

✔ Contraste élevé.

✔ Position prévisible.

✔ Feedback immédiat.

✔ Icône utile mais facultative.

✔ Répétition intelligente.

---

# Anti-Patterns

❌ Trois CTA principaux côte à côte.

❌ Boutons minuscules.

❌ Texte générique.

❌ Couleurs différentes selon les pages.

❌ Plusieurs styles de boutons principaux.

❌ Boutons sans feedback.

❌ Hover spectaculaire.

❌ CTA caché sous plusieurs scrolls.

❌ Boutons proches des bords de l'écran.

❌ Boutons différents entre Android et iPhone.

---

# CTA Quality Score

Visibilité ............... /10

Compréhension ............ /10

Contraste ............... /10

Responsive .............. /10

Touch Experience ........ /10

Hiérarchie .............. /10

Feedback ................. /10

Accessibilité ............ /10

Conversion ............... /10

Cohérence ............... /10

Score minimal :

99 /100

---

# Validation

Avant chaque Release :

✔ Un seul CTA principal par écran.

✔ Couleur officielle GH Épaviste.

✔ Taille ≥ 48 px.

✔ Texte clair et orienté action.

✔ Contraste conforme WCAG.

✔ États interactifs validés.

✔ Sticky CTA testé sur mobile (si utilisé).

✔ Safe Areas respectées.

✔ Feedback visuel immédiat.

✔ Score ≥ 99/100.

---

# Principe final

Le CTA est la promesse d'une action simple.

Il doit inspirer confiance, réduire l'hésitation et permettre au visiteur d'agir immédiatement.

Pour GH Épaviste, chaque CTA rapproche l'utilisateur de la solution qu'il recherche : contacter rapidement un professionnel pour l'enlèvement de son véhicule.

# Fin du Chapitre 13

# ==========================================================
# RESPONSIVE_SPEC.md
# CHAPITRE 14
# CARD RESPONSIVE ENGINEERING
# ==========================================================

# Objectif

La Card est le composant de contenu principal de GH Épaviste.

Elle présente une information de manière claire, compacte et immédiatement compréhensible.

Chaque Card doit être responsive, accessible, cohérente et facilement réutilisable.

Elle constitue la brique fondamentale de nombreuses pages du site.

---

# Philosophie

Une Card ne cherche pas à attirer l'attention.

Elle cherche à organiser l'information.

Chaque élément présent dans une Card doit avoir une utilité.

Les décorations inutiles sont supprimées.

---

# Principe fondamental

Toutes les Cards suivent la même architecture.

Le visiteur ne doit jamais devoir réapprendre leur fonctionnement.

La cohérence améliore la vitesse de compréhension.

---

# Structure officielle

Une Card est composée des éléments suivants :

• Image ou icône (optionnelle)

↓

• Badge (optionnel)

↓

• Titre

↓

• Description

↓

• Informations complémentaires (optionnelles)

↓

• CTA

L'ordre reste identique.

---

# Types de Cards

GH ÉPAVISTE utilise les familles suivantes :

• Service Card

• Commune Card

• Département Card

• Guide Card

• FAQ Card

• Trust Card

• Testimonial Card

• Contact Card

Toutes partagent les mêmes règles de conception.

---

# Mobile First

Sur smartphone :

une Card occupe généralement toute la largeur du conteneur.

Le contenu est empilé verticalement.

Les interactions restent simples.

---

# Desktop

Sur Desktop :

les Cards peuvent être affichées en grille.

Les dimensions restent homogènes.

Les hauteurs sont harmonisées lorsque cela améliore la lecture.

---

# Padding interne

Padding recommandé :

24 à 32 px.

Le contenu ne touche jamais les bords.

La respiration interne est constante.

---

# Espacement entre Cards

Mobile :

16 px.

---

Tablette :

24 px.

---

Desktop :

24 à 32 px.

Toutes les grilles utilisent le même rythme.

---

# Titre

Chaque Card possède un titre unique.

Le titre est immédiatement identifiable.

Il reste court.

Il ne dépasse pas deux lignes lorsque cela est possible.

---

# Description

La description complète le titre.

Elle répond rapidement à la question :

"Pourquoi cette information est-elle utile ?"

Les textes trop longs sont évités.

---

# Icônes

Les icônes servent à renforcer la compréhension.

Elles restent simples.

Elles utilisent le Design System officiel.

---

# Images

Les images sont optimisées.

Leur ratio reste constant dans une même grille.

Elles ne déforment jamais la Card.

---

# CTA

Chaque Card possède au maximum :

• un CTA principal.

Les CTA multiples créent de la confusion.

---

# Hauteur

Les Cards d'une même section présentent une hauteur visuellement cohérente.

Une différence excessive perturbe la lecture.

---

# États interactifs

Chaque Card possède les états suivants :

Default

↓

Hover (Desktop)

↓

Focus

↓

Pressed

↓

Selected (si applicable)

↓

Disabled (si applicable)

Les transitions restent discrètes.

---

# Hover

Le Hover renforce légèrement la perception de profondeur.

Aucune animation excessive.

Le contenu reste parfaitement lisible.

---

# Focus

Le Focus clavier est clairement visible.

Il respecte les exigences WCAG 2.2.

---

# Responsive

La Card adapte :

• ses marges ;

• son padding ;

• ses images ;

• sa typographie ;

• son CTA.

La hiérarchie reste identique sur tous les appareils.

---

# Performance

Les Cards utilisent :

• images optimisées ;

• lazy loading lorsque pertinent ;

• animations légères ;

• structure HTML simple.

Le chargement reste rapide.

---

# Accessibilité

Chaque Card :

• est navigable au clavier ;

• possède un contraste suffisant ;

• fournit des textes alternatifs aux images ;

• respecte les rôles ARIA lorsque nécessaire.

---

# Cas spécifique GH ÉPAVISTE

Les Cards sont utilisées pour :

• les services ;

• les départements ;

• les communes ;

• les guides ;

• les FAQ ;

• les avantages ;

• les témoignages.

Toutes doivent conserver la même identité visuelle.

---

# Best Practices

✔ Une hiérarchie claire.

✔ Padding constant.

✔ CTA unique.

✔ Images optimisées.

✔ États interactifs cohérents.

✔ Responsive fluide.

✔ Grilles homogènes.

✔ Lecture rapide.

✔ Excellente accessibilité.

---

# Anti-Patterns

❌ Cards surchargées.

❌ Plusieurs CTA concurrents.

❌ Padding différent entre deux Cards similaires.

❌ Images déformées.

❌ Animations envahissantes.

❌ Titres trop longs.

❌ Cartes de hauteurs incohérentes sans justification.

❌ Contraste insuffisant.

❌ Hover utilisé comme seule indication d'interactivité.

❌ Contenu collé aux bordures.

---

# Card Quality Score

Lisibilité ............... /10

Hiérarchie ............... /10

Responsive ............... /10

Padding ................. /10

Performance .............. /10

CTA ...................... /10

Accessibilité ............ /10

Cohérence ............... /10

Réutilisabilité .......... /10

Expérience utilisateur ... /10

Score minimal :

98 /100

---

# Validation

Avant chaque Release :

✔ Toutes les Cards utilisent le même Design System.

✔ Le padding est conforme.

✔ Les CTA sont cohérents.

✔ Les images sont optimisées.

✔ Les états interactifs sont validés.

✔ Les grilles sont harmonisées.

✔ Les Cards sont entièrement responsives.

✔ Les tests d'accessibilité sont validés.

✔ Score ≥ 98/100.

---

# Principe final

Une Card est une unité d'information.

Elle doit permettre au visiteur de comprendre rapidement son contenu, d'identifier l'action disponible et de poursuivre naturellement sa navigation.

La qualité des Cards influence directement la qualité perçue de l'ensemble du site.

Chaque Card de GH Épaviste doit être suffisamment cohérente pour pouvoir être réutilisée sur des centaines de pages sans jamais perdre en lisibilité, en performance ou en efficacité.

# Fin du Chapitre 14

# ==========================================================
# RESPONSIVE_SPEC.md
# CHAPITRE 15
# FORM RESPONSIVE ENGINEERING
# ==========================================================

# Objectif

Le formulaire constitue l'un des principaux points de conversion de GH Épaviste.

Son objectif est de permettre à un visiteur de transmettre sa demande rapidement, avec un minimum d'effort et un maximum de confiance.

Chaque champ doit avoir une utilité claire.

Chaque interaction doit réduire la charge cognitive.

---

# Philosophie

Un excellent formulaire donne l'impression d'être plus court qu'il ne l'est réellement.

L'utilisateur ne doit jamais se demander :

"Pourquoi me demande-t-on cette information ?"

Chaque question possède une justification.

Tout champ inutile est supprimé.

---

# Mobile First

Le formulaire est conçu en priorité pour smartphone.

Tous les composants restent facilement utilisables au pouce.

Aucun zoom ne doit être nécessaire.

---

# Architecture officielle

Le formulaire suit toujours l'ordre suivant :

1.

Coordonnées

↓

2.

Informations sur le véhicule

↓

3.

Localisation

↓

4.

Message libre

↓

5.

Consentement

↓

6.

CTA principal

Cet ordre reste identique sur toutes les les pages.

---

# Nombre de champs

Le nombre de champs est limité au strict nécessaire.

Objectif :

réduire le temps de saisie.

Les informations complémentaires peuvent être obtenues ultérieurement.

---

# Groupes logiques

Les champs sont regroupés par thème.

Chaque groupe est clairement séparé.

L'utilisateur comprend naturellement la progression.

---

# Labels

Chaque champ possède un label permanent.

Les placeholders ne remplacent jamais les labels.

Le texte reste visible pendant toute la saisie.

---

# Placeholders

Les placeholders servent uniquement d'exemple.

Ils ne contiennent jamais une information indispensable.

---

# Taille des champs

Hauteur recommandée :

48 à 56 px.

Les champs restent faciles à sélectionner.

---

# Largeur

Sur smartphone :

les champs occupent toute la largeur disponible.

Sur Desktop :

la largeur est adaptée au contenu.

Les formulaires trop larges sont évités.

---

# Claviers adaptés

Chaque champ utilise le clavier approprié.

Téléphone :

clavier numérique.

Adresse e-mail :

clavier e-mail.

Code postal :

clavier numérique.

Cette adaptation réduit les erreurs.

---

# Validation en temps réel

Les erreurs sont détectées dès que possible.

Le formulaire évite de signaler toutes les erreurs uniquement après la soumission.

---

# Messages d'erreur

Les erreurs sont :

• précises ;

• bienveillantes ;

• actionnables.

Exemple :

✔ Veuillez saisir un numéro de téléphone valide.

Éviter :

❌ Erreur.

---

# États des champs

Chaque champ possède :

Default

↓

Focus

↓

Rempli

↓

Erreur

↓

Succès

↓

Désactivé

Les états restent cohérents avec le Design System.

---

# Focus

Le focus clavier est toujours visible.

L'utilisateur identifie immédiatement le champ actif.

---

# Champs obligatoires

Seuls les champs réellement indispensables sont obligatoires.

Les champs optionnels sont clairement indiqués.

---

# Progression

Le formulaire donne une impression d'avancement.

Les groupes restent courts.

Les longues listes sont évitées.

---

# CTA principal

Le bouton d'envoi est immédiatement identifiable.

Texte recommandé :

Demander un enlèvement

ou

Envoyer ma demande

Le texte décrit l'action.

Il ne reste jamais générique.

---

# Confirmation

Après l'envoi :

une confirmation immédiate apparaît.

Elle indique clairement :

• que la demande a bien été reçue ;

• les prochaines étapes ;

• un délai estimé de réponse si applicable.

---

# Prévention des erreurs

Les assistants IA privilégient :

• listes déroulantes lorsque pertinentes ;

• saisie assistée ;

• formats automatiques ;

• masques de saisie si nécessaires.

L'objectif est de réduire les erreurs avant qu'elles n'apparaissent.

---

# Accessibilité

Tous les champs :

• possèdent un label associé ;

• sont navigables au clavier ;

• annoncent les erreurs aux technologies d'assistance ;

• respectent WCAG 2.2 AA.

---

# Responsive

Les champs s'adaptent progressivement.

Les espacements restent constants.

La hiérarchie ne change jamais.

---

# Cas spécifique GH ÉPAVISTE

Le formulaire privilégie les informations indispensables à l'intervention.

Les demandes complexes peuvent être précisées dans le champ :

Message libre.

Le visiteur ne doit jamais être bloqué par un formulaire trop long.

---

# Best Practices

✔ Peu de champs.

✔ Labels permanents.

✔ Clavier adapté.

✔ Validation progressive.

✔ Messages d'erreur explicites.

✔ CTA visible.

✔ Confirmation immédiate.

✔ Excellente lisibilité.

✔ Navigation fluide au clavier.

---

# Anti-Patterns

❌ Plus de champs que nécessaire.

❌ Placeholders utilisés comme labels.

❌ Messages d'erreur incompréhensibles.

❌ Bouton "Envoyer" caché.

❌ Champs trop petits.

❌ Formulaire trop large sur Desktop.

❌ Validation uniquement après soumission.

❌ Champs obligatoires sans justification.

❌ Demander des informations non essentielles.

❌ Réinitialiser tout le formulaire après une erreur.

---

# Form Quality Score

Simplicité ................. /10

Lisibilité ................. /10

Responsive ................. /10

Accessibilité .............. /10

Validation ................. /10

Messages d'erreur .......... /10

Performance ................ /10

Conversion ................. /10

Confiance .................. /10

Expérience utilisateur ..... /10

Score minimal :

99 /100

---

# Validation

Avant chaque Release :

✔ Tous les champs sont justifiés.

✔ Les labels restent visibles.

✔ Les claviers adaptés sont utilisés.

✔ Les erreurs sont compréhensibles.

✔ Le CTA est immédiatement visible.

✔ Une confirmation est affichée après l'envoi.

✔ Les tests clavier sont validés.

✔ Les lecteurs d'écran annoncent correctement les champs.

✔ Score ≥ 99/100.

---

# Principe final

Le formulaire de GH Épaviste ne cherche pas à collecter un maximum d'informations.

Il cherche à permettre au visiteur de demander rapidement une intervention.

Chaque champ doit rapprocher l'utilisateur de son objectif, jamais l'en éloigner.

Un excellent formulaire est celui qui inspire suffisamment confiance pour être rempli sans hésitation.

# Fin du Chapitre 15

# ==========================================================
# RESPONSIVE_SPEC.md
# CHAPITRE 16
# IMAGE & MEDIA RESPONSIVE ENGINEERING
# ==========================================================

# Objectif

Le système Image & Media définit les règles officielles de gestion des images, illustrations, icônes et médias de GH Épaviste.

Chaque média doit améliorer l'expérience utilisateur sans compromettre :

• les performances ;

• l'accessibilité ;

• le référencement ;

• la cohérence visuelle.

Les médias servent le contenu.

Ils ne doivent jamais ralentir le site.

---

# Philosophie

Une excellente image est une image :

• utile ;

• optimisée ;

• responsive ;

• rapide.

Une image décorative qui ralentit la page est considérée comme un défaut de conception.

---

# Mobile First

Toutes les images sont pensées en priorité pour smartphone.

Les tailles augmentent progressivement selon les appareils.

Jamais l'inverse.

---

# Types de médias

Le Design System distingue :

• Hero Images

• Illustrations

• Photos

• Icônes

• Logos

• Cartes

• Images SEO

• Images Open Graph

Chaque catégorie possède ses propres règles.

---

# Formats officiels

Ordre de préférence :

1.

AVIF

↓

2.

WebP

↓

3.

PNG (si transparence)

↓

4.

JPEG (photographies)

Le format GIF est déconseillé.

Les animations utilisent de préférence CSS ou des vidéos courtes optimisées.

---

# Images Responsive

Toutes les images utilisent :

srcset

sizes

afin de charger automatiquement la version adaptée à la largeur de l'écran.

Le navigateur ne doit jamais télécharger une image inutilement grande.

---

# Dimensions réservées

Chaque image possède une largeur et une hauteur définies.

Objectifs :

• éviter le CLS ;

• stabiliser la mise en page ;

• améliorer le Core Web Vitals.

Aucun média ne doit provoquer un déplacement visible du contenu.

---

# Ratios officiels

Hero :

16:9

---

Cartes :

4:3

---

Galeries :

1:1 ou 4:3

---

Miniatures :

1:1

---

Open Graph :

1200 × 630 px

---

Logo :

conserver le ratio d'origine.

Les proportions ne sont jamais modifiées.

---

# Résolution

Les images sont fournies en haute qualité.

Cependant :

la résolution ne doit jamais être supérieure à ce qui est réellement affiché.

Le surdimensionnement est interdit.

---

# Compression

Toutes les images sont compressées avant leur mise en production.

Objectifs :

• poids réduit ;

• qualité visuelle conservée ;

• chargement rapide.

---

# Lazy Loading

Toutes les images situées sous la ligne de flottaison utilisent :

loading="lazy"

Les images critiques restent prioritaires.

---

# Hero Image

Le Hero utilise une image prioritaire.

Elle bénéficie :

• d'un chargement optimisé ;

• d'une compression maximale compatible avec la qualité ;

• d'une taille adaptée au premier écran.

Le Hero ne doit jamais retarder le Largest Contentful Paint (LCP).

---

# Icônes

Les icônes utilisent :

SVG

de préférence.

Les SVG restent :

• légers ;

• adaptables ;

• accessibles.

Les icônes bitmap sont évitées.

---

# Logos

Le logo est fourni en version vectorielle lorsque cela est possible.

Les variantes officielles sont :

• noir + jaune ;

• blanc + jaune.

Aucune recoloration automatique n'est autorisée.

---

# Images décoratives

Les images purement décoratives utilisent :

alt=""

afin de ne pas perturber les lecteurs d'écran.

---

# Images informatives

Chaque image informative possède un texte alternatif descriptif.

Le texte décrit la fonction de l'image.

Jamais son apparence.

---

# Vidéos

Les vidéos :

• sont optimisées ;

• ne démarrent jamais automatiquement avec le son ;

• disposent de contrôles accessibles.

Les vidéos lourdes sont hébergées sur une plateforme adaptée lorsque cela est pertinent.

---

# Illustrations

Les illustrations utilisent le langage graphique officiel de GH Épaviste.

Elles restent cohérentes avec :

• les couleurs ;

• les espacements ;

• les composants.

---

# Performance

Objectifs :

Image Hero :

prioritaire.

---

Images secondaires :

lazy loading.

---

Compression systématique.

---

Formats modernes.

---

Cache navigateur.

---

# Responsive

Les médias s'adaptent progressivement.

Ils ne sont jamais simplement redimensionnés.

Le recadrage est maîtrisé.

Le sujet principal reste toujours visible.

---

# Accessibilité

Tous les médias respectent WCAG 2.2.

Les textes alternatifs sont rédigés lorsque l'information est utile.

Les éléments décoratifs restent ignorés par les technologies d'assistance.

---

# Cas spécifique GH ÉPAVISTE

Les images doivent mettre en valeur :

• l'intervention ;

• le professionnalisme ;

• les véhicules ;

• les équipements ;

• les services.

Les photos génériques de faible qualité sont évitées.

Les images doivent renforcer la confiance du visiteur.

---

# Best Practices

✔ Utiliser AVIF ou WebP.

✔ Définir width et height.

✔ Utiliser srcset.

✔ Compresser toutes les images.

✔ Lazy Loading hors écran.

✔ SVG pour les icônes.

✔ Alt text pertinent.

✔ Ratio constant.

✔ Hero optimisé.

---

# Anti-Patterns

❌ Images de 5 Mo.

❌ JPEG pour les icônes.

❌ Images sans dimensions.

❌ Alt du type "image1".

❌ Logos étirés.

❌ GIF lourds.

❌ Hero chargé après le contenu.

❌ Images floues.

❌ Photos sans cohérence visuelle.

❌ Même image envoyée à tous les appareils.

---

# Image Quality Score

Performance ............... /10

Responsive ................. /10

Compression ............... /10

Formats ................... /10

SEO ........................ /10

Accessibilité .............. /10

CLS ........................ /10

LCP ........................ /10

Cohérence visuelle ......... /10

Qualité générale ........... /10

Score minimal :

99 /100

---

# Validation

Avant chaque Release :

✔ Toutes les images utilisent un format moderne lorsque possible.

✔ Width et Height sont définis.

✔ Les images critiques sont prioritaires.

✔ Les images secondaires utilisent Lazy Loading.

✔ Les SVG sont privilégiés pour les icônes.

✔ Les textes alternatifs sont validés.

✔ Les ratios sont respectés.

✔ Aucun CLS n'est provoqué.

✔ LCP conforme aux objectifs.

✔ Score ≥ 99/100.

---

# Principe final

Les images et les médias de GH Épaviste ne sont pas de simples éléments décoratifs.

Ils renforcent la compréhension, la confiance et la crédibilité tout en respectant des exigences élevées de performance, d'accessibilité et de référencement.

Chaque média doit apporter une valeur réelle au visiteur, sans jamais ralentir son parcours ni compromettre son expérience.

# Fin du Chapitre 16

# ==========================================================
# RESPONSIVE_SPEC.md
# CHAPITRE 17
# TABLE RESPONSIVE STRATEGY
# ==========================================================

# Objectif

Le Table Responsive Strategy définit les règles officielles de création, d'affichage et d'utilisation des tableaux dans GH Épaviste.

Les tableaux servent à présenter des informations structurées.

Ils doivent rester compréhensibles sur tous les appareils.

Aucun tableau ne doit rendre la lecture difficile sur smartphone.

---

# Philosophie

Un tableau est un outil de compréhension.

Il ne doit jamais devenir un obstacle.

Lorsque la structure tabulaire nuit à la lisibilité, une autre représentation doit être privilégiée.

---

# Mobile First

Chaque tableau est conçu en priorité pour smartphone.

La version Desktop est une extension de cette conception.

Jamais l'inverse.

---

# Quand utiliser un tableau

Un tableau est recommandé lorsque :

• plusieurs lignes partagent la même structure ;

• des valeurs doivent être comparées ;

• une lecture ligne/colonne apporte une réelle valeur.

Dans les autres cas, des cartes ou des listes sont préférables.

---

# Cas d'usage GH ÉPAVISTE

Les tableaux peuvent être utilisés pour :

• comparer les services ;

• présenter les zones d'intervention ;

• résumer les documents nécessaires ;

• comparer des catégories de véhicules ;

• afficher des informations réglementaires ;

• présenter des délais ou conditions.

---

# Nombre de colonnes

Mobile :

3 à 4 colonnes maximum.

---

Tablette :

6 colonnes maximum.

---

Desktop :

selon les besoins.

Toute colonne supplémentaire doit être justifiée.

---

# Largeur

Les tableaux occupent la largeur disponible du conteneur.

Ils ne dépassent jamais volontairement le viewport.

---

# Scroll horizontal

Le défilement horizontal constitue une solution de dernier recours.

Avant de l'utiliser, les assistants IA évaluent :

• une réorganisation des données ;

• une réduction du nombre de colonnes ;

• une présentation sous forme de cartes.

---

# Transformation en Cards

Sur smartphone, un tableau complexe peut être transformé en cartes.

Chaque ligne devient une Card.

Chaque valeur est précédée de son libellé.

Cette solution améliore souvent la lisibilité.

---

# Hiérarchie

Les en-têtes restent immédiatement identifiables.

Ils utilisent une typographie différente des cellules.

---

# Alignement

Texte :

aligné à gauche.

---

Valeurs numériques :

alignées à droite lorsque cela facilite la comparaison.

---

Titres :

cohérents avec le Design System.

---

# Espacement

Les cellules disposent d'un padding suffisant.

Objectif :

éviter une lecture compacte.

---

# Lignes

Les lignes bénéficient d'une séparation visuelle discrète.

Les bordures restent légères.

---

# Couleurs

Les couleurs servent uniquement :

• à améliorer la lecture ;

• à mettre en évidence une information.

Jamais à remplacer un libellé.

---

# Responsive

Le tableau adapte :

• la taille de la police ;

• le padding ;

• la largeur des colonnes ;

• la disposition.

Les informations importantes restent toujours visibles.

---

# Accessibilité

Les tableaux utilisent :

thead

tbody

th

caption

lorsque cela est pertinent.

Les technologies d'assistance doivent comprendre leur structure.

---

# Légende

Chaque tableau possède un titre ou une légende lorsqu'il apporte une information importante.

L'utilisateur comprend immédiatement son objectif.

---

# Tri

Lorsque le tri est disponible :

l'état actif est visible.

Le fonctionnement reste compréhensible au clavier.

---

# Comparaison

Les colonnes comparées sont visuellement alignées.

Les différences importantes sont faciles à identifier.

---

# Performance

Les tableaux volumineux utilisent :

• pagination ;

• chargement progressif ;

• virtualisation lorsque nécessaire.

Le navigateur ne doit jamais être ralenti inutilement.

---

# Cas spécifique GH ÉPAVISTE

Les tableaux restent rares.

Les assistants IA privilégient les cartes dès qu'elles offrent une meilleure expérience utilisateur.

Les tableaux sont réservés aux véritables comparaisons.

---

# Best Practices

✔ Mobile First.

✔ Peu de colonnes.

✔ Padding généreux.

✔ Bonne hiérarchie.

✔ Cartes sur smartphone lorsque pertinent.

✔ Accessibilité complète.

✔ Alignement cohérent.

✔ Responsive validé.

✔ Lecture immédiate.

---

# Anti-Patterns

❌ Tableau de 10 colonnes sur mobile.

❌ Scroll horizontal obligatoire.

❌ Texte centré partout.

❌ Colonnes sans titre.

❌ Bordures trop épaisses.

❌ Police trop petite.

❌ Cellules compactes.

❌ Utiliser un tableau pour de simples listes.

❌ Informations essentielles masquées.

❌ Contraste insuffisant.

---

# Table Quality Score

Lisibilité ................. /10

Responsive ................. /10

Hiérarchie ................. /10

Accessibilité .............. /10

Comparaison ................ /10

Padding .................... /10

Performance ................ /10

Navigation ................. /10

Cohérence .................. /10

Expérience utilisateur ..... /10

Score minimal :

98 /100

---

# Validation

Avant chaque Release :

✔ Les tableaux sont réellement nécessaires.

✔ La lecture mobile est validée.

✔ Les colonnes sont limitées.

✔ Les transformations en cartes sont évaluées.

✔ Les en-têtes sont correctement définis.

✔ Les lecteurs d'écran comprennent la structure.

✔ Aucun tableau ne nécessite un zoom.

✔ Score ≥ 98/100.

---

# Principe final

Les tableaux de GH Épaviste sont utilisés uniquement lorsqu'ils représentent la meilleure manière de comparer des informations.

Lorsqu'une présentation sous forme de cartes ou de listes améliore la compréhension, elle est privilégiée.

L'objectif reste toujours le même : permettre au visiteur d'obtenir une réponse rapidement, quel que soit l'appareil utilisé.

# Fin du Chapitre 17

# ==========================================================
# RESPONSIVE_SPEC.md
# CHAPITRE 18
# FOOTER RESPONSIVE ENGINEERING
# ==========================================================

# Objectif

Le Footer constitue la dernière zone stratégique de chaque page de GH Épaviste.

Il ne marque pas simplement la fin du contenu.

Il conclut le parcours utilisateur en renforçant la confiance, en facilitant la navigation et en offrant une dernière opportunité d'action.

Le Footer doit être cohérent, responsive, accessible et orienté conversion.

---

# Philosophie

Le Footer est un centre de confiance.

Il répond aux dernières questions du visiteur.

Il réduit les hésitations.

Il permet d'agir sans devoir revenir en haut de la page.

---

# Mobile First

Le Footer est conçu d'abord pour smartphone.

Les blocs sont empilés verticalement.

Chaque section reste facilement lisible.

Les liens sont suffisamment espacés pour une interaction tactile confortable.

---

# Architecture officielle

Le Footer suit toujours cette structure :

1.

Logo GH Épaviste

↓

2.

Présentation courte

↓

3.

Liens principaux

↓

4.

Services

↓

5.

Zones d'intervention

↓

6.

Coordonnées

↓

7.

Informations légales

↓

8.

Copyright

Cette architecture reste constante sur toutes les pages.

---

# Logo

Le Footer utilise :

• le logo noir + jaune sur fond clair ;

• le logo blanc + jaune sur fond sombre.

Le contraste doit toujours rester optimal.

Le logo n'est jamais redimensionné de manière excessive.

---

# Présentation

Le texte de présentation reste court.

Objectif :

rappeler la mission de GH Épaviste.

Maximum conseillé :

2 à 3 phrases.

---

# Navigation

Le Footer reprend uniquement les liens réellement utiles.

Exemple :

Accueil

Services

Guide

FAQ

Contact

Mentions légales

Politique de confidentialité

Plan du site

La navigation reste simple.

---

# Services

Les principaux services peuvent être rappelés.

Exemple :

• Enlèvement d'épave

• Véhicules accidentés

• Véhicules en panne

• Intervention rapide

Cette liste reste concise.

---

# Zones d'intervention

Les principaux départements peuvent être affichés.

Les futures pages de communes pourront également être regroupées intelligemment.

Le Footer ne devient jamais une liste interminable.

---

# Coordonnées

Les informations de contact sont immédiatement accessibles.

Exemples :

• Téléphone

• Adresse e-mail

• Horaires

Les coordonnées sont cliquables sur mobile.

---

# CTA de fin de parcours

Le Footer peut contenir un dernier CTA.

Exemple :

📞 Appeler maintenant

ou

Demander un enlèvement

Ce CTA reste visible sans concurrencer le contenu principal.

---

# Informations légales

Le Footer affiche :

• Mentions légales

• Politique de confidentialité

• Cookies (si applicable)

• Accessibilité (si applicable)

Les informations sont facilement trouvables.

---

# Réseaux sociaux

Les réseaux sociaux sont affichés uniquement s'ils apportent une réelle valeur.

Ils ne détournent jamais l'utilisateur de l'objectif principal.

---

# Typographie

Le Footer utilise une hiérarchie claire.

Les titres de colonnes restent identifiables.

Le texte secondaire conserve une excellente lisibilité.

---

# Espacement

Les blocs respirent.

Les liens restent suffisamment espacés.

Les marges suivent le Design System officiel.

---

# Responsive

Mobile :

une seule colonne.

---

Tablette :

deux colonnes.

---

Desktop :

jusqu'à quatre colonnes.

La lecture reste naturelle.

---

# Accessibilité

Tous les liens :

• sont accessibles au clavier ;

• disposent d'un focus visible ;

• respectent WCAG 2.2 AA.

Les icônes possèdent un nom accessible.

---

# Performance

Le Footer reste léger.

Aucune image inutile.

Aucune animation coûteuse.

Les icônes SVG sont privilégiées.

---

# SEO

Le Footer participe au maillage interne.

Les liens restent pertinents.

Le Footer n'est jamais utilisé pour créer artificiellement des centaines de liens.

---

# Cas spécifique GH ÉPAVISTE

Le Footer rappelle discrètement :

• la rapidité d'intervention ;

• la disponibilité ;

• les moyens de contact ;

• les principales zones couvertes.

Il renforce la crédibilité sans surcharger la page.

---

# Best Practices

✔ Structure constante.

✔ Liens essentiels uniquement.

✔ Coordonnées cliquables.

✔ CTA final pertinent.

✔ Excellente lisibilité.

✔ Bonne respiration.

✔ Responsive validé.

✔ Accessibilité complète.

✔ Maillage interne maîtrisé.

---

# Anti-Patterns

❌ Footer surchargé.

❌ 50 liens inutiles.

❌ Texte minuscule.

❌ Contraste insuffisant.

❌ Plusieurs CTA concurrents.

❌ Colonnes déséquilibrées.

❌ Footer différent selon les pages.

❌ Icônes sans libellé accessible.

❌ Réseaux sociaux mis en avant sans objectif.

❌ Animations inutiles.

---

# Footer Quality Score

Lisibilité ................. /10

Navigation ................. /10

Responsive ................. /10

Accessibilité .............. /10

SEO ......................... /10

Coordonnées ................ /10

CTA ......................... /10

Performance ................ /10

Confiance .................. /10

Cohérence .................. /10

Score minimal :

99 /100

---

# Validation

Avant chaque Release :

✔ Le Footer est identique sur toutes les pages.

✔ Les coordonnées sont accessibles.

✔ Les liens sont vérifiés.

✔ Les CTA fonctionnent.

✔ Les tests clavier sont validés.

✔ Les contrastes respectent WCAG.

✔ Les Safe Areas sont prises en compte sur mobile.

✔ Aucun lien inutile n'est présent.

✔ Score ≥ 99/100.

---

# Principe final

Le Footer est la dernière impression laissée au visiteur.

Il doit confirmer que GH Épaviste est une entreprise sérieuse, accessible et digne de confiance.

Même en fin de parcours, il doit permettre à l'utilisateur de trouver rapidement les informations essentielles ou de prendre contact sans effort.

# Fin du Chapitre 18

# ==========================================================
# RESPONSIVE_SPEC.md
# CHAPITRE 19
# SAFE AREAS ENGINEERING
# ==========================================================

# Objectif

Le Safe Areas Engineering définit les règles garantissant que tous les composants de GH Épaviste restent visibles, accessibles et confortables sur les appareils modernes.

Les interfaces doivent respecter les contraintes physiques des écrans :

• encoches ;

• Dynamic Island ;

• caméras poinçons ;

• barres système ;

• navigation gestuelle ;

• appareils pliables.

Aucun élément critique ne doit être masqué.

---

# Philosophie

L'écran réellement utilisable est plus petit que l'écran physique.

Les assistants IA doivent toujours concevoir les interfaces à partir de la zone réellement disponible.

Le contenu s'adapte à l'appareil.

Jamais l'inverse.

---

# Mobile First

Toutes les Safe Areas sont pensées en priorité pour smartphone.

Les autres appareils héritent naturellement de cette logique.

---

# Zones protégées

Les interfaces doivent respecter :

• haut de l'écran ;

• bas de l'écran ;

• côtés ;

• angles arrondis ;

• zones système.

Ces marges évoluent selon l'appareil.

---

# Encoches (Notch)

Le contenu important ne doit jamais être placé sous une encoche.

Le Header tient compte automatiquement de cette contrainte.

---

# Dynamic Island

Les composants supérieurs restent suffisamment éloignés.

Aucun texte important.

Aucun bouton.

Aucune icône essentielle.

ne doit entrer dans cette zone.

---

# Caméra poinçon

Les interfaces conservent toujours une marge de sécurité.

Les éléments interactifs restent éloignés des ouvertures de l'écran.

---

# Navigation gestuelle

Le bas de l'écran reste dégagé.

Les CTA fixes tiennent compte de la zone réservée aux gestes système.

L'utilisateur ne doit jamais déclencher involontairement une action système.

---

# Safe Area CSS

Lorsque disponible :

env(safe-area-inset-top)

env(safe-area-inset-bottom)

env(safe-area-inset-left)

env(safe-area-inset-right)

sont utilisés pour adapter automatiquement les marges.

Les assistants IA privilégient ces variables plutôt que des valeurs fixes.

---

# Sticky CTA

Les CTA fixes utilisent une marge supplémentaire.

Ils restent toujours au-dessus des barres système.

Le bouton reste entièrement accessible.

---

# Sticky Header

Le Header Sticky respecte également les Safe Areas.

Le logo reste entièrement visible.

La navigation n'entre jamais en conflit avec les éléments matériels de l'appareil.

---

# Footer

Le Footer ajoute automatiquement un espacement inférieur lorsque nécessaire.

Les liens restent accessibles.

Le dernier élément n'est jamais collé au bord inférieur.

---

# Scroll

Les zones tactiles proches des bords restent confortables.

Le contenu n'est jamais coupé lors du défilement.

---

# Orientation Portrait

Le mode portrait constitue la référence principale.

Toutes les interfaces sont validées dans cette configuration.

---

# Orientation Paysage

Les assistants IA vérifient également :

• Header

• Hero

• CTA

• Navigation

• Formulaire

Les éléments essentiels restent visibles malgré la réduction de hauteur.

---

# Appareils pliables

Les interfaces utilisent des mises en page flexibles.

Aucune largeur fixe.

Les composants s'adaptent aux changements de format.

La charnière ne doit jamais masquer une information importante.

---

# Tablettes

Les Safe Areas sont également prises en compte sur iPad et Android.

Les marges restent harmonieuses.

---

# PWA

En mode plein écran :

les composants tiennent compte des zones système spécifiques.

Le comportement reste identique à celui d'une application native.

---

# Responsive

Les Safe Areas sont calculées automatiquement.

Aucun composant ne nécessite de règles spécifiques par appareil.

Le système reste évolutif.

---

# Accessibilité

Les marges supplémentaires améliorent également :

• la précision tactile ;

• le confort moteur ;

• la navigation au clavier (lorsqu'elle est disponible).

---

# Cas spécifique GH ÉPAVISTE

Les éléments critiques sont :

• Header

• CTA "Appeler maintenant"

• CTA "Demander un enlèvement"

• Formulaire

• Footer

Ces composants doivent toujours rester entièrement accessibles.

---

# Best Practices

✔ Utiliser les variables CSS Safe Area.

✔ Prévoir les encoches.

✔ Respecter la Dynamic Island.

✔ Éloigner les CTA des bords.

✔ Tester en portrait et paysage.

✔ Prévoir les appareils pliables.

✔ Adapter les PWA.

✔ Conserver une excellente ergonomie.

✔ Garantir des zones tactiles confortables.

---

# Anti-Patterns

❌ Bouton collé au bord inférieur.

❌ Header sous l'encoche.

❌ Logo masqué.

❌ Footer tronqué.

❌ CTA inaccessible avec la navigation gestuelle.

❌ Valeurs fixes pour toutes les marges.

❌ Ignorer les appareils pliables.

❌ Aucun test en paysage.

❌ Composants coupés sur iPhone.

❌ Interface pensée uniquement pour Desktop.

---

# Safe Area Quality Score

Compatibilité ............. /10

Responsive ................ /10

Navigation ................ /10

CTA ........................ /10

Header ..................... /10

Footer ..................... /10

Accessibilité .............. /10

Ergonomie tactile .......... /10

Évolutivité ............... /10

Robustesse ................ /10

Score minimal :

99 /100

---

# Validation

Avant chaque Release :

✔ Tests sur iPhone avec Dynamic Island.

✔ Tests sur Android avec caméra poinçon.

✔ Tests avec navigation gestuelle.

✔ Tests en portrait.

✔ Tests en paysage.

✔ Tests des CTA fixes.

✔ Variables Safe Area utilisées lorsque disponibles.

✔ Aucun composant masqué.

✔ Score ≥ 99/100.

---

# Principe final

Les Safe Areas garantissent que chaque interface de GH Épaviste reste utilisable sur les appareils d'aujourd'hui et de demain.

Les contraintes matérielles des écrans ne doivent jamais empêcher un visiteur de lire une information, d'utiliser un formulaire ou de contacter rapidement GH Épaviste.

L'expérience utilisateur reste cohérente, quelle que soit la forme de l'écran.

# Fin du Chapitre 19

# ==========================================================
# RESPONSIVE_SPEC.md
# CHAPITRE 20
# ORIENTATION STRATEGY (PORTRAIT / LANDSCAPE)
# ==========================================================

# Objectif

Le système Orientation Strategy définit les règles officielles permettant à toutes les interfaces de GH Épaviste de fonctionner correctement en mode Portrait et en mode Landscape.

L'orientation de l'écran ne doit jamais dégrader :

• la lisibilité ;

• la navigation ;

• les performances ;

• l'accessibilité ;

• la conversion.

L'expérience utilisateur reste cohérente quel que soit le sens de l'écran.

---

# Philosophie

L'orientation est une adaptation.

Ce n'est jamais une seconde interface.

Les composants conservent leur identité.

Seule leur organisation évolue intelligemment.

---

# Portrait

Le mode Portrait constitue la référence principale.

Toutes les interfaces sont d'abord conçues dans ce format.

Tous les composants sont validés en priorité en Portrait.

---

# Landscape

Le mode Landscape adapte uniquement la disposition.

Les contenus restent identiques.

Les interactions restent identiques.

Les CTA conservent la même priorité.

---

# Mobile First

Les assistants IA conçoivent les interfaces pour le Portrait.

Le Landscape est ensuite optimisé sans modifier la logique de navigation.

---

# Header

En mode Landscape :

• le Header reste compact ;

• la navigation reste accessible ;

• le logo conserve une taille adaptée ;

• aucun élément ne masque le contenu.

Le Header ne doit jamais occuper une hauteur excessive.

---

# Hero

Le Hero adapte sa structure.

Portrait :

empilement vertical.

Landscape :

deux colonnes lorsque l'espace horizontal le permet.

Le CTA principal reste immédiatement visible.

---

# CTA

Les CTA restent faciles à atteindre.

Ils conservent :

• leur taille minimale ;

• leur contraste ;

• leur priorité visuelle.

Les CTA fixes tiennent toujours compte des Safe Areas.

---

# Navigation

Le menu mobile reste utilisable dans les deux orientations.

Les animations restent fluides.

Les éléments interactifs conservent des zones tactiles confortables.

---

# Grilles

Les grilles évoluent progressivement.

Portrait :

1 colonne ou 2 colonnes selon la largeur.

Landscape :

2 à 4 colonnes selon l'espace disponible.

Aucune rupture brutale.

---

# Cards

Les Cards conservent :

• le même Design System ;

• la même hiérarchie ;

• les mêmes interactions.

Seule leur disposition change.

---

# Formulaires

Les formulaires utilisent davantage l'espace horizontal.

Deux champs peuvent être placés sur une même ligne lorsque cela améliore la lisibilité.

Le parcours reste identique.

---

# Images

Les médias utilisent des ratios adaptés.

Le sujet principal reste toujours visible.

Aucun recadrage ne masque une information essentielle.

---

# Tableaux

Les tableaux disposent de davantage d'espace.

Les assistants IA privilégient néanmoins une lecture confortable plutôt qu'une multiplication des colonnes.

---

# Footer

Le Footer peut utiliser plusieurs colonnes.

La lecture reste naturelle.

Les liens restent facilement sélectionnables.

---

# Safe Areas

Les Safe Areas sont recalculées après chaque changement d'orientation.

Les CTA et le Header restent accessibles.

---

# Animations

Les transitions entre Portrait et Landscape restent fluides.

Aucune animation ne doit provoquer :

• de clignotement ;

• de repositionnement brutal ;

• de perte de contexte.

---

# Performance

Le changement d'orientation ne déclenche jamais :

• de rechargement complet ;

• d'images inutiles ;

• de recalculs coûteux.

L'interface reste réactive.

---

# Accessibilité

Le changement d'orientation ne doit jamais empêcher :

• la navigation clavier ;

• l'utilisation des lecteurs d'écran ;

• l'accès aux CTA ;

• la lecture des contenus.

---

# Cas spécifique GH ÉPAVISTE

Les éléments prioritaires sont :

• Hero

• Téléphone

• CTA

• Formulaire

• Coordonnées

Ils restent immédiatement accessibles en Portrait comme en Landscape.

---

# Compatibilité future

Le système est conçu pour rester compatible avec :

• smartphones pliables ;

• tablettes ;

• PWA ;

• écrans embarqués ;

• nouveaux formats d'affichage.

Aucune hypothèse ne repose sur une taille d'écran fixe.

---

# Best Practices

✔ Concevoir d'abord en Portrait.

✔ Adapter intelligemment le Landscape.

✔ Préserver la hiérarchie visuelle.

✔ Maintenir les CTA visibles.

✔ Optimiser les grilles.

✔ Tester les deux orientations.

✔ Respecter les Safe Areas.

✔ Éviter les repositionnements brutaux.

✔ Garantir une lecture fluide.

---

# Anti-Patterns

❌ Interface cassée en Landscape.

❌ Header occupant la moitié de l'écran.

❌ Hero tronqué.

❌ CTA masqués.

❌ Images recadrées au hasard.

❌ Formulaire illisible.

❌ Rechargement complet de la page.

❌ Scroll horizontal inutile.

❌ Perte du focus clavier.

❌ Composants qui changent totalement de comportement.

---

# Orientation Quality Score

Portrait .................. /10

Landscape ................. /10

Responsive ................ /10

Navigation ................ /10

Hero ...................... /10

CTA ....................... /10

Performance ............... /10

Accessibilité ............. /10

Safe Areas ............... /10

Cohérence ................. /10

Score minimal :

99 /100

---

# Validation

Avant chaque Release :

✔ Tous les écrans sont testés en Portrait.

✔ Tous les écrans sont testés en Landscape.

✔ Les CTA restent visibles.

✔ Les formulaires restent utilisables.

✔ Les Hero conservent leur lisibilité.

✔ Les Safe Areas sont respectées.

✔ Les performances restent stables.

✔ Aucun composant n'est tronqué.

✔ Score ≥ 99/100.

---

# Principe final

L'orientation de l'écran ne doit jamais modifier la qualité de l'expérience utilisateur.

Les interfaces de GH Épaviste s'adaptent naturellement à chaque format d'affichage tout en conservant la même hiérarchie, la même clarté et la même efficacité.

Chaque visiteur doit pouvoir accomplir son objectif avec la même simplicité, quel que soit le sens dans lequel il tient son appareil.

# Fin du Chapitre 20

# ==========================================================
# RESPONSIVE_SPEC.md
# CHAPITRE 21
# MOBILE PERFORMANCE ENGINEERING
# ==========================================================

# Objectif

Le Mobile Performance Engineering définit les standards officiels garantissant que GH Épaviste offre une expérience rapide, fluide et fiable sur tous les appareils mobiles.

La performance constitue une fonctionnalité essentielle du produit.

Elle influence directement :

• l'expérience utilisateur ;

• le référencement naturel (SEO) ;

• le taux de conversion ;

• la confiance des visiteurs.

Chaque nouvelle fonctionnalité doit préserver ces objectifs.

---

# Philosophie

La meilleure optimisation est celle qui évite le problème avant qu'il n'apparaisse.

Les assistants IA privilégient des solutions simples, légères et maintenables.

Chaque kilo-octet inutile est considéré comme une dette technique.

---

# Mobile First

Les performances sont mesurées en priorité sur smartphone.

Desktop ne constitue jamais la référence.

Le réseau mobile et les appareils de milieu de gamme sont utilisés comme scénario principal.

---

# Objectifs Core Web Vitals

Les objectifs minimums sont :

LCP (Largest Contentful Paint)

≤ 2,5 s

---

INP (Interaction to Next Paint)

≤ 200 ms

---

CLS (Cumulative Layout Shift)

≤ 0,10

Ces seuils doivent être respectés sur les pages principales.

---

# Budgets de performance

Les assistants IA respectent les budgets suivants :

JavaScript initial :
≤ 180 Ko (compressé)

CSS critique :
≤ 50 Ko

Police initiale :
≤ 100 Ko

Image Hero optimisée :
≤ 250 Ko

Icônes SVG :
prioritaires

Les dépassements doivent être justifiés.

---

# Chargement progressif

Le contenu essentiel est chargé en priorité.

Les éléments secondaires sont différés lorsque cela améliore l'expérience.

Le visiteur doit percevoir une interface utilisable le plus rapidement possible.

---

# Images

Toutes les images :

• sont optimisées ;

• utilisent des formats modernes (AVIF, WebP lorsque possible) ;

• disposent de dimensions réservées ;

• utilisent le chargement différé lorsqu'elles ne sont pas critiques.

---

# JavaScript

Le JavaScript est limité au strict nécessaire.

Les assistants IA privilégient :

• Server Components ;

• rendu côté serveur ;

• découpage du code (Code Splitting) ;

• chargement dynamique lorsque pertinent.

Chaque script doit apporter une valeur réelle.

---

# CSS

Le CSS est modulaire.

Les styles inutilisés sont supprimés.

Les animations coûteuses sont évitées.

La cascade reste simple et prévisible.

---

# Polices

Les polices sont optimisées.

Le nombre de variantes est limité.

Le texte reste immédiatement visible pendant le chargement.

Les polices système sont privilégiées lorsque cela est pertinent.

---

# Cache

Les ressources statiques utilisent une stratégie de cache adaptée.

Les contenus fréquemment consultés bénéficient d'une mise en cache efficace.

Les invalidations restent maîtrisées.

---

# Réseau

Les performances sont évaluées sur :

• 4G ;

• connexions instables ;

• appareils de milieu de gamme.

L'expérience doit rester satisfaisante dans ces conditions.

---

# Animations

Les animations restent légères.

Durée recommandée :

150 à 250 ms.

Les animations bloquant l'interaction sont interdites.

---

# Scroll

Le défilement reste fluide.

Les longues listes utilisent :

• virtualisation ;

• pagination ;

• chargement progressif,

lorsque cela est pertinent.

---

# Formulaires

Les validations ne doivent jamais bloquer inutilement l'utilisateur.

Les retours visuels sont immédiats.

Les interactions restent réactives.

---

# Médias

Les vidéos :

• sont compressées ;

• ne bloquent jamais le rendu ;

• utilisent le chargement différé lorsque cela est possible.

---

# Accessibilité

Les optimisations de performance ne doivent jamais dégrader :

• le contraste ;

• les libellés ;

• les technologies d'assistance ;

• la navigation clavier.

Performance et accessibilité avancent ensemble.

---

# Monitoring

Les performances sont mesurées régulièrement à l'aide d'outils adaptés.

Les régressions sont détectées avant chaque mise en production.

Les résultats sont suivis dans le temps.

---

# Cas spécifique GH ÉPAVISTE

Les pages prioritaires sont :

• Accueil

• Services

• Départements

• Futures pages Communes

• Contact

• Formulaire

Ces pages doivent toujours respecter les objectifs de performance.

---

# Best Practices

✔ Mobile First.

✔ Images optimisées.

✔ JavaScript minimal.

✔ CSS modulaire.

✔ Chargement progressif.

✔ Budgets respectés.

✔ Cache efficace.

✔ Core Web Vitals surveillés.

✔ Réseau mobile pris en compte.

---

# Anti-Patterns

❌ Bibliothèques JavaScript inutiles.

❌ Images de plusieurs Mo.

❌ Animations lourdes.

❌ Trop de polices.

❌ CSS inutilisé.

❌ Scripts bloquants.

❌ CLS provoqué par les médias.

❌ Hero chargé trop tard.

❌ Aucun suivi des performances.

❌ Optimisation uniquement pour Desktop.

---

# Mobile Performance Quality Score

LCP ....................... /10

INP ....................... /10

CLS ....................... /10

JavaScript ................. /10

CSS ........................ /10

Images ..................... /10

Cache ...................... /10

Responsive ................. /10

SEO ......................... /10

Expérience utilisateur ..... /10

Score minimal :

99 /100

---

# Validation

Avant chaque Release :

✔ Les Core Web Vitals sont conformes.

✔ Les budgets de performance sont respectés.

✔ Les images sont optimisées.

✔ Le JavaScript est analysé.

✔ Le CSS est nettoyé.

✔ Les polices sont optimisées.

✔ Les tests sont réalisés sur réseau mobile.

✔ Aucune régression de performance n'est détectée.

✔ Score ≥ 99/100.

---

# Principe final

La rapidité n'est pas un luxe.

Elle fait partie intégrante de l'expérience utilisateur.

Chaque optimisation réalisée sur GH Épaviste permet au visiteur d'accéder plus rapidement à l'information, de contacter plus facilement l'entreprise et d'obtenir une réponse sans attendre.

Les performances sont considérées comme un engagement permanent envers les utilisateurs.

# Fin du Chapitre 21

# ==========================================================
# RESPONSIVE_SPEC.md
# CHAPITRE 22
# ACCESSIBILITY RESPONSIVE ENGINEERING
# ==========================================================

# Objectif

Le système Accessibility Responsive Engineering définit les règles garantissant que GH Épaviste reste utilisable par le plus grand nombre de personnes, quels que soient leurs capacités, leurs appareils ou leurs technologies d'assistance.

L'accessibilité fait partie intégrante de la qualité du produit.

Elle est prise en compte dès la conception.

Jamais après.

---

# Philosophie

Une interface accessible est une interface plus simple.

Les assistants IA considèrent l'accessibilité comme une exigence de conception, au même titre que :

• les performances ;

• le responsive ;

• la sécurité ;

• la qualité du code.

---

# Référence officielle

Toutes les interfaces doivent respecter :

WCAG 2.2

Niveau AA minimum.

Lorsque cela est raisonnablement possible :

AAA est encouragé.

---

# Mobile First

Toutes les validations sont réalisées en priorité sur smartphone.

Les appareils Desktop héritent naturellement de cette qualité.

---

# Principes fondamentaux

Chaque composant doit être :

Perceptible

↓

Utilisable

↓

Compréhensible

↓

Robuste

Ces quatre principes guident toutes les décisions de conception.

---

# Navigation clavier

Toutes les fonctionnalités doivent rester utilisables sans souris.

Les utilisateurs peuvent :

• naviguer ;

• ouvrir les menus ;

• remplir les formulaires ;

• activer les boutons ;

uniquement avec le clavier.

---

# Focus visible

Le focus clavier est toujours clairement identifiable.

Aucun composant interactif ne peut masquer son état Focus.

Le Focus utilise une couleur cohérente avec le Design System.

---

# Ordre de navigation

L'ordre du focus suit l'ordre visuel.

Aucun saut incohérent.

Aucune perte de contexte.

---

# Contrastes

Les contrastes respectent WCAG 2.2 AA.

Les couleurs ne servent jamais comme seul moyen de transmettre une information.

Les messages importants utilisent également :

• des icônes ;

• du texte ;

• une structure adaptée.

---

# Taille du texte

Le texte reste lisible jusqu'à 200 % de zoom.

Aucun contenu n'est coupé.

Les composants continuent de fonctionner.

---

# Zones tactiles

Toutes les zones interactives respectent une taille minimale de :

48 × 48 px.

L'espacement évite les erreurs de sélection.

---

# Lecteurs d'écran

Tous les composants disposent :

• d'un nom accessible ;

• d'un rôle approprié ;

• d'un état lorsqu'il est nécessaire.

Les technologies d'assistance comprennent parfaitement l'interface.

---

# Images

Les images informatives possèdent un texte alternatif pertinent.

Les images décoratives utilisent :

alt=""

afin d'éviter toute distraction inutile.

---

# Icônes

Une icône seule ne suffit jamais.

Lorsqu'elle représente une action importante, elle est accompagnée d'un texte ou d'un nom accessible.

---

# Formulaires

Chaque champ possède :

• un label associé ;

• un message d'erreur explicite ;

• une indication des champs obligatoires.

Les erreurs sont annoncées aux lecteurs d'écran.

---

# Messages d'état

Les confirmations, erreurs et notifications importantes sont communiquées de manière accessible.

L'utilisateur comprend immédiatement le résultat de son action.

---

# Préférences utilisateur

Les assistants IA respectent les préférences système.

Exemples :

• mode sombre ;

• taille de texte ;

• contraste élevé ;

• réduction des animations.

L'utilisateur garde le contrôle de son expérience.

---

# Réduction des mouvements

Lorsque l'utilisateur active :

prefers-reduced-motion

les animations non essentielles sont :

• supprimées ;

• réduites ;

• remplacées par des transitions discrètes.

---

# Responsive

Les interfaces restent accessibles :

• en portrait ;

• en paysage ;

• sur tablette ;

• sur smartphone ;

• avec zoom.

Aucune fonctionnalité n'est perdue.

---

# Accessibilité cognitive

Les contenus utilisent :

• des phrases courtes ;

• une hiérarchie claire ;

• un vocabulaire simple ;

• des CTA explicites.

Les interfaces réduisent la charge cognitive.

---

# Cas spécifique GH ÉPAVISTE

Les composants prioritaires sont :

• Header

• Hero

• CTA

• Téléphone

• Formulaire

• Footer

Ils doivent rester accessibles dans toutes les situations.

---

# Tests

Les assistants IA recommandent de tester régulièrement :

• navigation clavier ;

• lecteurs d'écran ;

• contraste ;

• zoom ;

• mode sombre ;

• appareils mobiles.

L'accessibilité est vérifiée avant chaque mise en production.

---

# Best Practices

✔ Respect de WCAG 2.2 AA.

✔ Focus visible.

✔ Contrastes suffisants.

✔ Navigation clavier complète.

✔ Labels permanents.

✔ Messages d'erreur explicites.

✔ Zones tactiles confortables.

✔ Support des préférences utilisateur.

✔ Tests réguliers.

---

# Anti-Patterns

❌ Focus supprimé.

❌ Boutons trop petits.

❌ Contraste insuffisant.

❌ Icônes sans texte.

❌ Images sans texte alternatif.

❌ Placeholders utilisés comme labels.

❌ Navigation impossible au clavier.

❌ Animations imposées malgré les préférences utilisateur.

❌ Contenu illisible après zoom.

❌ Utiliser uniquement la couleur pour transmettre une information.

---

# Accessibility Quality Score

WCAG ....................... /10

Navigation clavier ......... /10

Focus ...................... /10

Contraste .................. /10

Responsive ................. /10

Lecteurs d'écran ........... /10

Formulaires ................ /10

Préférences utilisateur .... /10

Accessibilité cognitive .... /10

Qualité générale ........... /10

Score minimal :

100 /100

---

# Validation

Avant chaque Release :

✔ Validation WCAG 2.2 AA.

✔ Navigation clavier testée.

✔ Contrastes vérifiés.

✔ Zoom 200 % validé.

✔ Lecteurs d'écran testés.

✔ Zones tactiles conformes.

✔ Préférences système respectées.

✔ Aucune perte de fonctionnalité.

✔ Score = 100/100.

---

# Principe final

L'accessibilité n'est pas une option.

Elle constitue un engagement permanent envers tous les utilisateurs.

Chaque interface de GH Épaviste doit permettre à toute personne, quelles que soient ses capacités ou son appareil, de comprendre les informations, de naviguer facilement et de demander un enlèvement de véhicule sans obstacle.

Concevoir une interface accessible, c'est concevoir une interface meilleure pour tous.

# Fin du Chapitre 22

# ==========================================================
# RESPONSIVE_SPEC.md
# CHAPITRE 23
# TESTING MATRIX
# ==========================================================

# Objectif

Le Testing Matrix définit la procédure officielle de validation responsive de GH Épaviste.

Chaque nouvelle fonctionnalité, correction ou évolution doit être testée selon une matrice commune afin de garantir une expérience cohérente sur tous les appareils pris en charge.

Les tests sont reproductibles, documentés et comparables dans le temps.

---

# Philosophie

On ne valide jamais une interface parce qu'elle fonctionne sur son propre ordinateur.

Une fonctionnalité est considérée comme prête uniquement lorsqu'elle respecte les critères définis dans cette matrice.

---

# Référence de validation

Les tests couvrent au minimum :

• Smartphone Android

• iPhone

• Tablette

• Desktop

Les tests peuvent être réalisés sur appareils réels ou via des outils de simulation fiables.

---

# Navigateurs pris en charge

Les versions récentes des navigateurs suivants sont prises en charge :

• Chrome

• Edge

• Firefox

• Safari

Les comportements critiques doivent rester cohérents.

---

# Systèmes d'exploitation

Les validations sont effectuées sur :

• Android

• iOS

• Windows

• macOS

Le rendu peut varier légèrement, mais les fonctionnalités doivent rester identiques.

---

# Largeurs de référence

Les tests couvrent notamment :

• 320 px

• 375 px

• 390 px

• 414 px

• 768 px

• 1024 px

• 1280 px

• 1440 px

• 1920 px

Les points de rupture définis dans le Design System sont vérifiés.

---

# Orientations

Toutes les interfaces sont testées :

• en portrait ;

• en paysage.

Le changement d'orientation ne doit provoquer aucune anomalie.

---

# Navigation

Les éléments suivants sont systématiquement vérifiés :

• Header

• Navigation mobile

• Menu

• Breadcrumbs

• Footer

Tous les liens fonctionnent correctement.

---

# CTA

Chaque CTA est testé pour vérifier :

• sa visibilité ;

• son accessibilité ;

• sa taille tactile ;

• son bon fonctionnement.

---

# Formulaires

Les formulaires sont testés pour :

• la saisie ;

• la validation ;

• les messages d'erreur ;

• les confirmations ;

• la navigation clavier.

Aucune perte de données ne doit survenir.

---

# Images

Les médias sont vérifiés pour :

• leur qualité ;

• leur chargement ;

• leurs dimensions ;

• leur adaptation responsive ;

• l'absence de CLS.

---

# Performance

Les pages principales sont contrôlées pour :

• LCP

• INP

• CLS

• poids des ressources

• temps de chargement

Les régressions sont corrigées avant publication.

---

# Accessibilité

Les tests incluent :

• navigation clavier ;

• focus visible ;

• lecteurs d'écran ;

• contraste ;

• zoom à 200 % ;

• préférences utilisateur.

---

# Réseau

Les validations sont réalisées dans différentes conditions :

• Wi-Fi

• 4G

• connexion plus lente simulée

L'expérience doit rester acceptable.

---

# Scénarios critiques

Les parcours suivants sont validés :

1. Arriver sur la page d'accueil.

2. Comprendre le service.

3. Accéder à une page de service.

4. Contacter GH Épaviste.

5. Remplir le formulaire.

6. Envoyer une demande.

7. Revenir à la navigation.

Chaque scénario doit pouvoir être réalisé sans blocage.

---

# Régression

Toute modification importante entraîne une vérification des composants susceptibles d'être impactés.

Une correction locale ne doit pas dégrader une autre partie du site.

---

# Documentation

Chaque campagne de tests documente :

• la date ;

• la version ;

• les appareils testés ;

• les anomalies détectées ;

• les corrections appliquées ;

• la validation finale.

---

# Cas spécifique GH ÉPAVISTE

Les pages suivantes sont toujours testées :

• Accueil

• Services

• Guide

• FAQ

• Contact

• Formulaire

• Pages Départements

• Pages Communes

Elles constituent le parcours principal des visiteurs.

---

# Best Practices

✔ Tester sur plusieurs appareils.

✔ Vérifier les deux orientations.

✔ Contrôler les performances.

✔ Tester les formulaires.

✔ Tester les CTA.

✔ Vérifier les liens.

✔ Réaliser des tests clavier.

✔ Documenter les résultats.

✔ Corriger avant publication.

---

# Anti-Patterns

❌ Tester uniquement sur Desktop.

❌ Ignorer Safari.

❌ Vérifier uniquement l'apparence.

❌ Publier sans tests de performance.

❌ Oublier le zoom.

❌ Oublier les lecteurs d'écran.

❌ Ne pas documenter les anomalies.

❌ Corriger sans refaire les tests.

❌ Se fier uniquement aux simulateurs.

❌ Publier malgré une régression connue.

---

# Testing Quality Score

Couverture appareils ........ /10

Navigateurs ................. /10

Responsive .................. /10

Performance ................. /10

Accessibilité ............... /10

Scénarios utilisateurs ...... /10

Documentation ............... /10

Régressions ................. /10

Fiabilité ................... /10

Qualité globale ............. /10

Score minimal :

100 /100

---

# Validation

Avant chaque Release :

✔ Tous les appareils de référence sont validés.

✔ Les navigateurs sont vérifiés.

✔ Les scénarios critiques sont réussis.

✔ Les performances sont conformes.

✔ Les tests d'accessibilité sont validés.

✔ Les anomalies sont corrigées.

✔ La campagne de tests est documentée.

✔ Score = 100/100.

---

# Principe final

La qualité d'une interface ne dépend pas d'un seul appareil.

Elle dépend de sa capacité à offrir une expérience fiable, rapide et cohérente dans toutes les situations prévues.

La Testing Matrix constitue la référence officielle permettant de garantir que chaque évolution de GH Épaviste respecte ce niveau d'exigence.

# Fin du Chapitre 23

# ==========================================================
# RESPONSIVE_SPEC.md
# CHAPITRE 24
# RELEASE CHECKLIST
# ==========================================================

# Objectif

La Release Checklist constitue la procédure officielle de validation avant toute mise en production de GH Épaviste.

Elle garantit que chaque version respecte les exigences définies dans le Design System, les spécifications Responsive, les standards de qualité et les objectifs de performance.

Aucune Release n'est considérée comme prête tant que cette checklist n'est pas entièrement validée.

---

# Philosophie

Une Release réussie ne repose pas sur une impression.

Elle repose sur une vérification systématique.

Chaque point est validé avant publication.

---

# Validation Générale

□ Aucun bug bloquant connu.

□ Aucun composant inachevé.

□ Tous les objectifs de la version sont terminés.

□ Les dépendances sont à jour.

□ Le build est propre.

□ Aucun avertissement critique.

---

# Responsive

□ Smartphone validé.

□ Tablette validée.

□ Desktop validé.

□ Portrait validé.

□ Landscape validé.

□ Safe Areas vérifiées.

□ Aucun débordement horizontal.

□ Aucun composant cassé.

---

# Navigation

□ Header validé.

□ Navigation mobile fonctionnelle.

□ Menu correctement animé.

□ Breadcrumbs vérifiés.

□ Footer conforme.

□ Tous les liens internes fonctionnent.

□ Tous les liens externes sont vérifiés.

---

# Hero

□ Hero lisible.

□ CTA principal visible.

□ Image optimisée.

□ Aucun CLS.

□ Hiérarchie visuelle respectée.

---

# CTA

□ Tous les boutons sont cliquables.

□ Les tailles tactiles sont conformes.

□ Les CTA importants sont visibles.

□ Les liens téléphoniques fonctionnent.

□ Les formulaires sont accessibles.

---

# Formulaires

□ Tous les champs sont fonctionnels.

□ Les labels sont présents.

□ Les messages d'erreur sont explicites.

□ Les confirmations s'affichent correctement.

□ Aucun champ inutile.

□ Les validations sont cohérentes.

---

# Images

□ Formats optimisés.

□ Dimensions réservées.

□ Lazy Loading correctement appliqué.

□ Alt text renseignés lorsque nécessaires.

□ Logos conformes.

□ Aucun média flou.

---

# Performance

□ LCP conforme.

□ INP conforme.

□ CLS conforme.

□ Images optimisées.

□ JavaScript conforme au budget.

□ CSS optimisé.

□ Polices optimisées.

□ Cache vérifié.

---

# SEO

□ Balises Title.

□ Meta Description.

□ Canonical.

□ Open Graph.

□ Twitter Cards (si utilisées).

□ Schema.org valide.

□ Sitemap à jour.

□ Robots.txt vérifié.

□ Aucun lien cassé.

---

# Accessibilité

□ WCAG 2.2 AA respecté.

□ Navigation clavier validée.

□ Focus visible.

□ Contrastes vérifiés.

□ Zoom 200 % validé.

□ Lecteurs d'écran compatibles.

□ Préférences utilisateur respectées.

---

# Contenu

□ Aucun texte temporaire.

□ Aucun Lorem Ipsum.

□ Orthographe vérifiée.

□ Terminologie cohérente.

□ CTA cohérents.

□ Dates à jour.

---

# Sécurité

□ Aucune donnée sensible exposée.

□ Variables d'environnement vérifiées.

□ Formulaires protégés.

□ HTTPS actif.

□ En-têtes de sécurité conformes.

---

# Compatibilité

□ Chrome.

□ Edge.

□ Firefox.

□ Safari.

□ Android.

□ iPhone.

□ Windows.

□ macOS.

---

# Monitoring

□ Outils de suivi opérationnels.

□ Journalisation fonctionnelle.

□ Aucun incident critique connu.

□ Alertes configurées lorsque nécessaire.

---

# Cas spécifique GH ÉPAVISTE

Les pages suivantes sont obligatoirement contrôlées :

□ Accueil

□ Services

□ Guide

□ FAQ

□ Contact

□ Formulaire

□ Pages Départements

□ Pages Communes

Les fonctionnalités essentielles sont validées :

□ Appel téléphonique.

□ Envoi du formulaire.

□ Navigation.

□ Chargement rapide.

---

# Documentation

□ Changelog rédigé.

□ Documentation mise à jour.

□ Décisions importantes documentées.

□ Nouvelles règles ajoutées si nécessaire.

---

# Validation Finale

La Release peut être publiée uniquement si :

✔ Toutes les cases sont cochées.

✔ Aucun bug critique n'est ouvert.

✔ Les performances sont conformes.

✔ Les tests sont validés.

✔ Les exigences Responsive sont respectées.

✔ Les objectifs de qualité sont atteints.

---

# Release Quality Score

Responsive ................. /10

Performance ............... /10

SEO ....................... /10

Accessibilité ............. /10

Navigation ................ /10

Formulaires ............... /10

Contenu ................... /10

Sécurité .................. /10

Compatibilité ............. /10

Documentation ............. /10

Score minimal :

100 /100

---

# Principe final

Une Release n'est jamais validée parce qu'elle "semble fonctionner".

Elle est validée parce que chaque exigence définie dans le référentiel de GH Épaviste a été vérifiée, testée et documentée.

Cette checklist constitue le dernier contrôle qualité avant toute mise en production et garantit un niveau constant d'excellence à chaque nouvelle version.

# Fin du Chapitre 24

# ==========================================================
# RESPONSIVE_SPEC.md
# CHAPITRE 25
# RESPONSIVE CERTIFICATION FRAMEWORK
# ==========================================================

# Objectif

Le Responsive Certification Framework définit le système officiel d'évaluation de la qualité responsive de GH Épaviste.

Son objectif est de mesurer de manière objective le niveau de conformité d'une interface avant sa mise en production.

Cette certification s'applique à toutes les pages, tous les composants et toutes les futures évolutions du projet.

---

# Philosophie

Le Responsive n'est pas une simple adaptation de la largeur d'écran.

Une interface certifiée Responsive garantit :

• une excellente lisibilité ;

• une navigation fluide ;

• une accessibilité complète ;

• des performances élevées ;

• une cohérence visuelle sur tous les appareils.

La certification repose sur des critères mesurables.

---

# Domaines évalués

Chaque audit prend en compte les catégories suivantes :

• Responsive Layout

• Navigation

• Typography

• Images & Media

• Performance

• Accessibility

• Forms

• CTA

• Header

• Footer

• Safe Areas

• Orientation

• Compatibilité navigateurs

• Qualité des tests

• Documentation

Chaque domaine possède son propre score.

---

# Méthode de notation

Chaque domaine est évalué sur 10 points.

Score maximal :

150 points.

Les critères sont pondérés de manière équivalente afin de garantir un équilibre global.

---

# Niveau Bronze

Score :

110 à 124 points

Caractéristiques :

• Responsive fonctionnel.

• Quelques optimisations restent possibles.

• Utilisation acceptable sur la majorité des appareils.

Ce niveau n'est pas recommandé pour une mise en production définitive.

---

# Niveau Silver

Score :

125 à 134 points

Caractéristiques :

• Bonne adaptation.

• Peu d'anomalies.

• Navigation confortable.

• Performances satisfaisantes.

Quelques améliorations restent envisageables.

---

# Niveau Gold

Score :

135 à 142 points

Caractéristiques :

• Responsive robuste.

• Excellente cohérence.

• Accessibilité maîtrisée.

• Performances élevées.

Le site est adapté à un usage professionnel.

---

# Niveau Platinum

Score :

143 à 148 points

Caractéristiques :

• Très haut niveau de qualité.

• Optimisation avancée.

• Responsive exemplaire.

• Tests complets.

• Compatibilité excellente.

Très peu d'améliorations sont encore possibles.

---

# Niveau Elite

Score :

149 à 150 points

Caractéristiques :

• Excellence technique.

• Responsive irréprochable.

• Accessibilité exemplaire.

• Performances optimales.

• Documentation complète.

• Validation totale des critères.

Ce niveau constitue l'objectif officiel de GH Épaviste.

---

# Conditions de certification

Une certification n'est accordée que si :

• aucun bug critique n'est ouvert ;

• les Core Web Vitals respectent les objectifs ;

• les tests responsive sont validés ;

• les critères WCAG 2.2 AA sont respectés ;

• la Release Checklist est entièrement validée.

---

# Motifs de refus

Une certification est refusée si l'un des cas suivants est constaté :

• débordement horizontal ;

• CTA inaccessible ;

• formulaire inutilisable ;

• composant cassé ;

• régression responsive ;

• score inférieur au seuil requis.

---

# Renouvellement

La certification est réévaluée :

• avant chaque Release majeure ;

• après une refonte importante ;

• après l'ajout de nouveaux composants structurants.

La qualité est un processus continu.

---

# Audit

Chaque audit documente :

• la version ;

• la date ;

• le score obtenu ;

• les anomalies détectées ;

• les recommandations ;

• la certification délivrée.

Les rapports sont archivés afin de suivre l'évolution du projet.

---

# Cas spécifique GH ÉPAVISTE

Les pages suivantes doivent impérativement atteindre le niveau Platinum ou Elite :

• Accueil

• Services

• Contact

• Formulaire

• FAQ

• Guide

• Pages Départements

• Pages Communes

Ces pages représentent le cœur du parcours utilisateur.

---

# Best Practices

✔ Mesurer objectivement.

✔ Documenter chaque audit.

✔ Corriger avant certification.

✔ Réévaluer régulièrement.

✔ Conserver un historique.

✔ Impliquer les performances et l'accessibilité.

✔ Tester sur plusieurs appareils.

✔ Utiliser la même grille d'évaluation.

✔ Viser le niveau Elite.

---

# Anti-Patterns

❌ Déclarer une interface "responsive" sans audit.

❌ Ignorer les performances.

❌ Oublier les tests mobiles.

❌ Valider malgré des bugs connus.

❌ Changer les critères selon les projets.

❌ Négliger la documentation.

❌ Se limiter à un seul navigateur.

❌ Confondre adaptation visuelle et qualité responsive.

❌ Publier sans certification.

❌ Accepter une régression.

---

# Certification Scorecard

Responsive Layout .......... /10

Navigation ................. /10

Typography ................. /10

Images & Media ............. /10

Performance ................ /10

Accessibility .............. /10

Forms ...................... /10

CTA ........................ /10

Header ..................... /10

Footer ..................... /10

Safe Areas ................. /10

Orientation ................ /10

Compatibilité .............. /10

Tests ...................... /10

Documentation .............. /10

Score maximal :

150 /150

Certification officielle :

□ Bronze

□ Silver

□ Gold

□ Platinum

□ Elite

---

# Validation

Avant toute certification :

✔ Tous les chapitres du RESPONSIVE_SPEC.md sont respectés.

✔ La Release Checklist est validée.

✔ Les Core Web Vitals sont conformes.

✔ Les tests d'accessibilité sont réussis.

✔ Les scénarios critiques sont validés.

✔ Les performances sont stables.

✔ Les anomalies critiques sont corrigées.

✔ Le score obtenu correspond au niveau de certification annoncé.

---

# Principe final

La certification Responsive ne récompense pas uniquement une interface qui s'adapte à différentes tailles d'écran.

Elle reconnaît une interface capable d'offrir une expérience cohérente, rapide, accessible et fiable sur tous les appareils.

Pour GH Épaviste, l'objectif permanent est d'atteindre et de maintenir le niveau **Responsive Elite**, garantissant un niveau d'excellence technique durable pour les utilisateurs, les développeurs et les futures intelligences artificielles.

# Fin du Chapitre 25

# ==========================================================
# RESPONSIVE_SPEC.md
# CHAPITRE 26
# RESPONSIVE MANIFESTO
# ==========================================================

# Responsive Manifesto

## Préambule

Le Responsive Design ne consiste pas uniquement à adapter une interface à différentes tailles d'écran.

Il représente un engagement permanent envers les utilisateurs.

Chaque décision de conception doit permettre à toute personne, quel que soit son appareil ou son contexte d'utilisation, d'accéder rapidement aux informations essentielles et d'interagir sans difficulté.

Pour GH Épaviste, le Responsive Design fait partie intégrante de la qualité du produit.

---

# Notre vision

Nous concevons des interfaces qui s'adaptent naturellement.

Nous ne créons pas une version Desktop puis une version Mobile.

Nous concevons un système unique capable d'évoluer intelligemment.

Chaque composant doit fonctionner de manière cohérente sur tous les appareils.

---

# Notre responsabilité

Chaque modification de l'interface peut améliorer ou dégrader l'expérience utilisateur.

Nous considérons donc que chaque décision :

• de design ;

• de développement ;

• de contenu ;

• d'optimisation ;

a un impact direct sur la qualité du produit.

---

# Nos engagements

Nous nous engageons à :

• privilégier les besoins des utilisateurs ;

• maintenir une navigation fluide ;

• respecter les standards d'accessibilité ;

• préserver des performances élevées ;

• offrir une expérience cohérente sur tous les appareils ;

• documenter les décisions importantes ;

• améliorer continuellement le système.

---

# Les principes fondateurs

## 1. Mobile First

Nous concevons d'abord pour le plus petit écran.

Chaque amélioration s'étend ensuite naturellement aux écrans plus grands.

---

## 2. Simplicité

Chaque composant doit résoudre un problème réel.

Tout élément inutile est supprimé.

La simplicité est une forme de qualité.

---

## 3. Lisibilité

Le contenu reste la priorité.

La mise en page sert la compréhension.

Jamais l'inverse.

---

## 4. Accessibilité

Une interface réellement accessible bénéficie à tous les utilisateurs.

L'accessibilité n'est jamais considérée comme une fonctionnalité optionnelle.

---

## 5. Performance

Chaque milliseconde économisée améliore l'expérience utilisateur.

La rapidité constitue une fonctionnalité essentielle.

---

## 6. Cohérence

Un composant se comporte toujours de la même manière.

La cohérence réduit la charge cognitive.

Elle facilite l'apprentissage de l'interface.

---

## 7. Robustesse

Le système doit continuer à fonctionner malgré :

• les nouveaux appareils ;

• les nouvelles tailles d'écran ;

• les nouvelles technologies.

Nous construisons pour durer.

---

## 8. Évolutivité

Le Responsive Design est un système vivant.

Chaque nouveau composant doit respecter les fondations existantes.

Les évolutions renforcent le système.

Elles ne le fragmentent jamais.

---

# Les engagements des assistants IA

Toute intelligence artificielle intervenant sur GH Épaviste doit :

• respecter ce document dans son intégralité ;

• consulter le Design System avant toute modification visuelle ;

• privilégier les composants existants ;

• préserver la cohérence globale ;

• documenter les nouvelles décisions ;

• éviter les solutions temporaires lorsqu'une solution durable est possible.

---

# Gouvernance

Le RESPONSIVE_SPEC.md constitue la référence officielle concernant :

• le Responsive Design ;

• les points de rupture ;

• les composants adaptatifs ;

• les Safe Areas ;

• les performances mobiles ;

• les tests ;

• la certification Responsive.

Toute évolution doit rester compatible avec ce référentiel.

---

# Amélioration continue

Ce document est destiné à évoluer.

Toute nouvelle règle doit :

• résoudre un problème identifié ;

• être documentée ;

• être validée ;

• être compatible avec les chapitres existants.

L'objectif n'est pas de créer davantage de règles.

L'objectif est d'améliorer durablement la qualité.

---

# Ce que nous refusons

Nous refusons :

• les solutions rapides qui créent une dette technique ;

• les interfaces incohérentes ;

• les composants dupliqués ;

• les exceptions non documentées ;

• les optimisations qui dégradent l'accessibilité ;

• les fonctionnalités qui réduisent les performances ;

• les modifications qui cassent la cohérence du système.

---

# Notre objectif

Notre ambition est de construire une interface :

• rapide ;

• accessible ;

• élégante ;

• robuste ;

• maintenable ;

• évolutive.

Une interface qui inspire confiance dès les premières secondes.

---

# Vision à long terme

Le Responsive Design n'est pas une étape.

C'est un engagement permanent.

Chaque nouvelle version du site doit être au moins aussi qualitative que la précédente.

L'amélioration continue fait partie du produit.

---

# Déclaration finale

Le Responsive Design de GH Épaviste n'est pas seulement une manière d'organiser des composants.

C'est une manière de concevoir des expériences fiables, durables et respectueuses des utilisateurs.

Ce document constitue la référence officielle pour toute personne ou toute intelligence artificielle participant à la conception, au développement, à l'évolution ou à la maintenance du projet.

En respectant ces principes, nous garantissons que chaque évolution renforce la qualité du produit au lieu de la fragiliser.

---

# Statut du document

Nom :

RESPONSIVE_SPEC.md

Version :

1.0.0

Statut :

Référentiel officiel

Portée :

Toutes les interfaces GH Épaviste

Documents associés :

• DESIGN_SYSTEM.md

• UX_UI_MASTER_SPEC.md

• QUALITY_GATE.md

• COMPONENT_GUIDELINES.md

• CONVERSION_OPTIMIZATION.md

• DESIGN_AUDIT_TEMPLATE.md

• PROJECT_ROADMAP.md

---

# Fin du RESPONSIVE_SPEC.md

"Une excellente interface ne s'adapte pas seulement aux écrans.

Elle s'adapte aux personnes."

© GH Épaviste — Responsive Engineering Framework
