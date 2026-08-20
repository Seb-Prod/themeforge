"use client";

import { AppShell, Content, Sidebar, Topbar } from "@/components/layout";
import { PalettePreview } from "@/features/theme-editor/components/PalettePreview";
import { ThemeEditorSidebar } from "@/features/theme-editor/ThemeEditorSidebar";
import { useThemeforgeStore } from "@/store";
import { useState } from "react";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const previewedColor = useThemeforgeStore((state) => state.previewedColor);

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
        {previewedColor ? (
          <PalettePreview name={previewedColor} />
        ) : (
          "Aperçu à venir"
        )}
      </Content>
    </AppShell>
  );
}
