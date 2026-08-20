"use client";

import { PALETTE_SHADES } from "@/features/theme-editor/components/ColorField/ColorField";
import styles from "./PalettePreview.module.css";

type PalettePreviewProps = {
  name: string;
};

/**
 * PalettePreview
 * Affiche en grand la palette complète (11 paliers) de la couleur sélectionnée
 * dans le panneau central, en lisant les mêmes variables CSS `--palette-{name}-{shade}`
 * que les vignettes du ColorField.
 */
export function PalettePreview({ name }: PalettePreviewProps) {
  return (
    <div className={styles.root}>
      <h2 className={styles.title}>{name}</h2>

      {/* ── Rampe de paliers, du plus clair au plus foncé ── */}
      <div className={styles.ramp}>
        {PALETTE_SHADES.map((shade) => (
          <div
            className={styles.step}
            key={shade}
            style={{ backgroundColor: `var(--palette-${name}-${shade})` }}
          >
            <span className={styles.shadeLabel}>{shade}</span>
          </div>
        ))}
      </div>
    </div>
  );
}