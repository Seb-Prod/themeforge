# Architecture des Variables CSS (Tokens de Design)

Ce document répertorie l'ensemble des sections, des variables générées automatiquement et leurs cas d'usage pour l'intégration de composants et d'interfaces.

---

## 📦 1. Brand Colors (Couleurs de Marque)
*Ces variables définissent l'identité visuelle principale de l'application.*

| Nom de la variable | Utilisation / Cas d'usage |
| :--- | :--- |
| `--brand-primary` | Couleur majeure de l'identité (Boutons principaux, liens clés, éléments actifs). |
| `--brand-primary-fg` | Couleur du texte ou de l'icône posé **sur** la couleur primaire (calculée pour le contraste). |
| `--brand-accent` | Couleur secondaire pour attirer l'attention (Badges, état sélectionné, surbrillance). |
| `--brand-accent-fg` | Couleur du texte ou de l'icône posé **sur** la couleur accent. |

---

## 🛑 2. Status Colors (Couleurs de Statut)
*Ces variables ont une signification sémantique universelle pour donner un retour d'information (feedback).*

| Nom de la variable | Utilisation / Cas d'usage |
| :--- | :--- |
| `--color-success` | Validation et succès (Alertes positives, badges de confirmation, toasts de succès). |
| `--color-success-fg` | Couleur du texte posé **sur** un fond de succès. |
| `--color-warning` | Attention ou action réversible (Messages de prévention, alertes de sécurité, modération). |
| `--color-warning-fg` | Couleur du texte posé **sur** un fond d'avertissement. |
| `--color-danger` | Erreur, danger ou action destructive (Boutons de suppression, alertes critiques). |
| `--color-danger-fg` | Couleur du texte posé **sur** un fond de danger. |
| `--color-info` | Information neutre ou aide (Notification générale, bulles d'aide, guides). |
| `--color-info-fg` | Couleur du texte posé **sur** un fond d'information. |

---

## 🧱 3. Surfaces & Layout (Mise en page et Profondeur)
*Ces variables gèrent les arrière-plans de l'application et l'élévation visuelle (les couches d'interface).*

| Nom de la variable | Utilisation / Cas d'usage |
| :--- | :--- |
| `--bg-app` | Le fond de page général du site (Blanc/gris très clair en mode clair, noir/bleu nuit en mode sombre). |
| `--bg-card` | Le fond des conteneurs principaux (Cartes de contenu, sections de tableau, blocs de flux). |
| `--bg-surface-muted` | Fond pour les éléments secondaires ou en retrait (Sidebars, pieds de page, barres d'outils). |
| `--bg-surface-hover` | Teinte de fond subtile lorsqu'on survole un élément de liste ou une ligne cliquable. |
| `--bg-modal` | Fond des fenêtres volantes positionnées au premier plan de l'interface. |
| `--bg-popover` | Fond des menus déroulants, infobulles (tooltips) et menus contextuels. |
| `--bg-overlay` | Fond semi-transparent (ex: noir à 40%) appliqué derrière une modal pour masquer le reste du site. |

---

## ✒️ 4. Typography (Typographie)
*Ces variables assurent la hiérarchie de lecture et le respect des contrastes d'accessibilité.*

| Nom de la variable | Utilisation / Cas d'usage |
| :--- | :--- |
| `--text-primary` | Pour les titres principaux (H1, H2) et le corps de texte standard (contraste maximal). |
| `--text-secondary` | Pour les descriptions, les sous-titres et les paragraphes secondaires. |
| `--text-muted` | Pour les textes d'aide, les placeholders dans les formulaires ou les éléments désactivés. |
| `--text-link` | Couleur des liens hypertextes insérés au cœur du texte. |

---

## ✏️ 5. Borders & Separators (Bordures et Séparateurs)
*Ces variables structurent l'interface graphique en délimitant les zones sans alourdir le design.*

| Nom de la variable | Utilisation / Cas d'usage |
| :--- | :--- |
| `--border-default` | Bordure standard pour délimiter les éléments (Contours d'inputs, contours de cartes). |
| `--border-muted` | Ligne de séparation très discrète pour couper le contenu à l'intérieur d'un bloc (ex: balise `<hr>`). |
| `--border-focus` | Anneau visuel (Outline) qui entoure un bouton ou un input sélectionné pour la navigation au clavier. |

---

## 🎨 6. Component Variants (Variantes Automatiques)
*Ces jetons techniques sont calculés automatiquement par le moteur pour créer les états des composants.*

| Nom de la variable | Utilisation / Cas d'usage |
| :--- | :--- |
| `--[color]-hover` | Version assombrie (ou éclaircie en mode sombre) d'une couleur pour l'effet de survol (Hover). |
| `--[color]-alpha10` | Version de la couleur avec 10% d'opacité (Utilisée pour les fonds des variantes `ghost` et `outline` au survol). |
| `--radius-btn` | Valeur générale de l'arrondi des boutons et petits composants (ex: `6px`). |
| `--radius-card` | Valeur générale de l'arrondi des cartes et des structures plus grandes (ex: `12px`). |
