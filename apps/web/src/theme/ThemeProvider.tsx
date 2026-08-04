"use client";

import { useEffect } from "react";
import { createTheme, exportThemeCss } from "@themeforge/color-engine";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const theme = createTheme({
      colors: {
        primary: "#a865cc",
        accent: "#ffb703",
      },
    });

    

    const style = document.createElement("style");

    style.id = "themeforge";

    style.textContent = exportThemeCss(theme);

    document.head.appendChild(style);
    console.log(style)
    return () => {
      style.remove();
    };
  }, []);

  useEffect(() => {
    const root = document.documentElement;

    const dark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    root.dataset.theme = dark ? "dark" : "light";
  }, []);

  return children;
}
