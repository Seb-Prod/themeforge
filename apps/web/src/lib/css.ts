export function injectCss(css: string, id = "themeforge-preview") {
  let style = document.getElementById(id) as HTMLStyleElement | null;

  if (!style) {
    style = document.createElement("style");
    style.id = id;
    document.head.appendChild(style);
  }

  style.textContent = css;
}