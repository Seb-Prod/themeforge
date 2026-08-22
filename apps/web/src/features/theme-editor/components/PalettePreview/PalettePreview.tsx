"use client";

import { PALETTE_SHADES } from "@/features/theme-editor/components/ColorField/ColorField";
import styles from "./PalettePreview.module.css";
import { Button } from "@/components/ui/Button";
import clsx from "clsx";

type PalettePreviewProps = {
  colorName?: string | null;
  surfaceName?: string | null;
};

/**
 * PalettePreview
 * Affiche l'aperçu de la couleur/surface sélectionnée dans le panneau central.
 *
 * - Pour une couleur sémantique (`colorName`) : rampe complète des 11 paliers,
 *   lus depuis les variables CSS `--palette-{name}-{shade}` (mêmes vignettes
 *   que dans ColorField).
 * - Pour une surface (`surfaceName`) : pas de rampe (aucun palier généré côté
 *   moteur), on affiche à la place un bloc plein dont le fond lit directement
 *   la variable CSS `--surface-{name}` injectée par le moteur.
 */
export function PalettePreview({
  colorName,
  surfaceName,
}: PalettePreviewProps) {
  return (
    <div className={styles.root}>
      <p>{surfaceName}</p>
      <div className={styles[surfaceName ? surfaceName : "canvas"]}>
        <Button color={colorName? colorName : "primary"}></Button>
      </div>

      
      
    </div>
  );
}
