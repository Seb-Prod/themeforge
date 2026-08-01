import {generateScale} from "@themeforge/color-engine";


/**
 * Page d'accueil affichant un dégradé de test de l'échelle de couleurs
 * générée à partir d'une couleur de base.
 *
 * États visuels :
 * - Une bande verticale par nuance (50 → 950), largeur égale
 * - Le code hex et le label de nuance affichés en overlay sur chaque bande
 *
 * Comportement dynamique :
 * - Aucune interaction pour l'instant, affichage statique de la palette
 */
export default function Home() {
  /** Couleur de base utilisée pour générer l'échelle */
  const baseColor = "#a865cc";

  /** Échelle générée (objet { "50": "#...", "100": "#...", ... }) */
  const scale = generateScale(baseColor);

  return (
    <div style={{ display: "flex", width: "100%", height: "100vh" }}>
      {/* ── Bandes de couleur ── */}
      {Object.entries(scale).map(([step, hex]) => {
        const color = hex as string;
        /** Contraste texte clair/sombre selon la luminosité de la nuance */
        const textClass = Number(step) >= 400 ? "text-light" : "text-dark";

        return (
          <div
            key={step}
            className={["scale-band", textClass].join(" ")}
            style={{ backgroundColor: color }}
          >
            {/* ── Labels ── */}
            <span className="scale-step">{step}</span>
            <span className="scale-hex">{color}</span>
          </div>
        );
      })}
    </div>
  );
}