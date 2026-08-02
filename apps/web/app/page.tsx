import {generateScale, generateSemantic} from "@themeforge/color-engine";
import styles from "./page.module.css";


/**
 * Page d'accueil affichant un dégradé de test de l'échelle de couleurs
 * générée à partir d'une couleur de base.
 *
 * États visuels :
 * - Une grille de carrés (taille fixe), un carré par nuance (50 → 950)
 * - Le code hex et le label de nuance affichés en overlay sur chaque carré
 * - En dessous, des cercles affichant le token sémantique "solid.default"
 *   (background / text / border)
 *
 * Comportement dynamique :
 * - Aucune interaction pour l'instant, affichage statique de la palette
 */
export default function Home() {
  /** Couleur de base utilisée pour générer l'échelle */
  const baseColor = "#af65ba";

  /** Échelle générée (objet { "50": "#...", "100": "#...", ... }) */
  const scale = generateScale(baseColor);

  /** Tokens sémantiques dérivés de l'échelle */
  const tokens = generateSemantic(scale);

  /** Token "solid" par défaut (background / text / border) */
  const solidDefault = tokens.solid.default;

  return (
    <div>
      <div className={styles["scale-grid"]}>
        {/* ── Carrés de couleur ── */}
        {Object.entries(scale).map(([step, hex]) => {
          const color = hex as string;
          /** Contraste texte clair/sombre selon la luminosité de la nuance */
          const textClass = Number(step) >= 400 ? styles["text-light"] : styles["text-dark"];

          return (
            <div
              key={step}
              className={[styles["scale-square"], textClass].join(" ")}
              style={{ backgroundColor: color }}
            >
              {/* ── Labels ── */}
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
    </div>
  );
}