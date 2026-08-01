#!/bin/bash

# Aller à la racine du projet
cd "$(dirname "$0")/.." || exit 1

echo "🎯  Démarrage de ThemeForge..."
echo ""

# Vérifier que pnpm est disponible
if ! command -v pnpm &> /dev/null; then
  echo "❌ pnpm introuvable."
  echo "Installe pnpm avec : npm install -g pnpm"
  read -p "Appuie sur Entrée pour fermer..."
  exit 1
fi

# Lancer le script principal
pnpm exec tsx scripts/start.ts

# Garde le terminal ouvert en cas d'erreur
if [ $? -ne 0 ]; then
  echo ""
  echo "❌ Une erreur est survenue."
  read -p "Appuie sur Entrée pour fermer..."
fi