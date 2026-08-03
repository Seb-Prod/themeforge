import { exportThemeCss } from "@themeforge/color-engine";
import { appTheme } from "./theme.config";

export function injectTheme() {
  const css = exportThemeCss(appTheme);

  const style = document.createElement("style");

  style.id = "themeforge-theme";

  style.textContent = css;

  document.head.appendChild(style);
}