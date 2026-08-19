"use client";

import { AppShell, Content, Sidebar, Topbar } from "@/components/layout";
import { ThemeEditorSidebar } from "@/features/theme-editor/ThemeEditorSidebar";

export default function Home() {
  return (
    <AppShell
      topbar={<Topbar />}
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
