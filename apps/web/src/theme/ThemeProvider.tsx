"use client";

import { useEffect } from "react";
import { injectTheme } from "./inject-theme";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    injectTheme();
  }, []);

  return children;
}
