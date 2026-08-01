# ThemeForge

> Générateur de design system qui crée des tokens UI accessibles à partir de quelques couleurs de base.

## Vision

ThemeForge est un outil qui transforme une simple définition de couleurs en un système de design complet.

À partir de :

- Couleur de fond
- Couleur primaire
- Couleur secondaire
- Couleur d'accent

ThemeForge génère :

- Des tokens de couleur sémantiques
- Une hiérarchie de surfaces
- Des variantes de composants
- Des valeurs de contraste accessibles
- Des variables CSS exportables

## Fonctionnalités

### Génération de thème

Génère automatiquement :

- Les fonds (backgrounds)
- Les surfaces
- Les couleurs de texte
- Les variantes primaires
- Les variantes secondaires
- Les couleurs de statut

### Accessibilité

Vérification de contraste WCAG intégrée :

- AA
- AAA
- Conformité texte large

### Export

Exports prévus :

- Variables CSS
- Tokens JSON
- Configuration Tailwind
- Tokens Figma
- Style Dictionary

## Architecture

ThemeForge est structuré en monorepo :

```txt
├── apps/
│   ├── web        # Application Next.js
│   └── api        # API Express
│
├── packages/
│   ├── engine     # Moteur de génération de thème
│   ├── color      # Calculs de couleurs
│   ├── exporter   # Exporteurs de tokens
│   ├── ui         # Composants UI
│   └── shared     # Types partagés
│
└── docker/
    └── MySQL
```

## Stack technique

### Frontend

- Next.js
- React
- TypeScript
- CSS Modules
- Biome

### Backend

- Node.js
- Express
- Prisma
- MySQL

### Infrastructure

- Docker
- pnpm workspaces

## Statut

🚧 En développement précoce

## Licence

MIT