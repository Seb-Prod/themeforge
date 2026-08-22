"use client";

import { AppShell, Content, Sidebar, Topbar } from "@/components/layout";
import { PalettePreview } from "@/features/theme-editor/components/PalettePreview";
import { ThemeEditorSidebar } from "@/features/theme-editor/ThemeEditorSidebar";
import { useThemeforgeStore } from "@/store";
import { exportCss } from "@themeforge/exporter";
import { useState } from "react";

export default function Home() {
  const theme = useThemeforgeStore((state) => state.theme);
  const tokens = useThemeforgeStore((state) => state.tokens);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const previewedColor = useThemeforgeStore((state) => state.previewedColor);
  const previewedSurface = useThemeforgeStore((state) => state.previewedSurface);

  const css = exportCss(theme, tokens);

  return (
    <AppShell
      sidebarOpen={isSidebarOpen}
      onSidebarClose={() => setIsSidebarOpen(false)}
      topbar={<Topbar onMenuClick={() => setIsSidebarOpen((open) => !open)} />}
      sidebar={
        <Sidebar>
          <ThemeEditorSidebar />
        </Sidebar>
      }
    >
      <Content>
        <>
         
            <PalettePreview colorName={previewedColor} surfaceName={previewedSurface} />
          
          <section aria-labelledby="css-title">
            <div>
              <p>Generated CSS</p>
              <h2 id="css-title">CSS généré</h2>
            </div>

            <pre>{css}</pre>
          </section>
        </>
      </Content>
    </AppShell>
  );
}