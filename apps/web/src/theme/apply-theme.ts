export type ThemeMode = "light" | "dark" | "system";

export function applyTheme(mode: ThemeMode) {
  const root = document.documentElement;

  if (mode === "system") {
    const dark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    root.dataset.theme = dark ? "dark" : "light";

    return;
  }

  root.dataset.theme = mode;
}