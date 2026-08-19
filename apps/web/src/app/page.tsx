"use client";

import { AppShell, Content, Sidebar, Topbar } from "@/components/layout";
import { ThemeEditorSidebar } from "@/features/theme-editor/ThemeEditorSidebar";
import { useState } from "react";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
      <Content>Aperçu à venir</Content>
    </AppShell>
  );
}
