import {
  createTheme,
  exportThemeCss,
  generateScale,
  generateSemanticTokens,
  getContrastRatio,
  getReadableTextColor,
} from "@themeforge/color-engine";
import styles from "./page.module.css";
import { Button } from "@/components/ui/Button";

/**
 * Page d'accueil affichant un dégradé de test de l'échelle de couleurs
 * générée à partir d'une couleur de base.
 *
 * États visuels :
 * - Une grille de carrés (taille fixe), un carré par nuance (50 → 950)
 * - Le code hex et le label de nuance affichés en overlay sur chaque carré
 * - En dessous, des cercles affichant le token sémantique "solid.default"
 *   (background / text / border)
 * - Un bouton stylé avec les couleurs du token "solid.default"
 *
 * Comportement dynamique :
 * - Aucune interaction pour l'instant, affichage statique de la palette
 */
export default function Home() {
  /** Couleur de base utilisée pour générer l'échelle */
  const baseColor = "#fbf6ff";

  /** Échelle générée (objet { "50": "#...", "100": "#...", ... }) */

  const scale = generateScale(baseColor, "light");
  const scaleDark = generateScale(baseColor, "dark");

  const theme = createTheme({
    colors: { primary: "#a865cc", accent: "#ffb703" },
  });

  const solidDefault = theme.light.colors.primary.semantic.solid.default;

  console.log(exportThemeCss(theme));

  return (
    <div>
      <div className={styles["scale-grid"]}>
        {/* ── Carrés de couleur ── */}
        {Object.entries(scale).map(([step, hex]) => {
          const color = hex as string;
          /** Contraste texte clair/sombre selon la luminosité de la nuance */
          const textColor = getReadableTextColor(color as any);

          return (
            <div
              key={step}
              className={styles["scale-square"]}
              style={{
                backgroundColor: color,
                color: textColor,
              }}
            >
              <span className={styles["scale-step"]}>{step}</span>
              <span className={styles["scale-hex"]}>{color}</span>
            </div>
          );
        })}
      </div>

      <div className={styles["scale-grid"]}>
        {/* ── Carrés de couleur ── */}
        {Object.entries(scaleDark).map(([step, hex]) => {
          const color = hex as string;
          const textColor = getReadableTextColor(color as any);

          return (
            <div
              key={step}
              className={styles["scale-square"]}
              style={{
                backgroundColor: color,
                color: textColor,
              }}
            >
              <span className={styles["scale-step"]}>{step}</span>
              <span className={styles["scale-hex"]}>{color}</span>
            </div>
          );
        })}
      </div>

      {/* ── Cercles du token "solid.default" ── */}
      <div className={styles["token-row"]}>
        {Object.entries(solidDefault).map(([role, hex]) => (
          <div key={role} className={styles["token-circle-wrapper"]}>
            <div
              className={styles["token-circle"]}
              style={{ backgroundColor: hex as string }}
            />
            {/* ── Labels ── */}
            <span className={styles["token-role"]}>{role}</span>
            <span className={styles["token-hex"]}>{hex as string}</span>
          </div>
        ))}
      </div>

      {/* ── Bouton "solid.default" ── */}
      <button
        className={styles["token-button"]}
        style={{
          backgroundColor: solidDefault.background,
          color: solidDefault.text,
          borderColor: solidDefault.border,
        }}
      >
        Bouton solid.default
      </button>

      <Button>
        Primary button
      </Button>

      <Button color="accent">
        Accent button
      </Button>

      <Button variant="outline">
        Outline
      </Button>
    </div>
  );
}
