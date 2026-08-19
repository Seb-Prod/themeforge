import type { ReactNode } from "react";
import styles from "./AppShell.module.css";

type AppShellProps = {
  topbar: ReactNode;
  sidebar: ReactNode;
  children: ReactNode;
  sidebarOpen: boolean;
  onSidebarClose: () => void;
};

export function AppShell({
  topbar,
  sidebar,
  children,
  sidebarOpen,
  onSidebarClose,
}: AppShellProps) {
  return (
    <div className={styles.root}>
      <header className={styles.topbar}>{topbar}</header>

      <div className={styles.body}>
        <button
          aria-label="Fermer le menu"
          className={styles.backdrop}
          data-open={sidebarOpen}
          onClick={onSidebarClose}
          type="button"
        />

        <aside className={styles.sidebar} data-open={sidebarOpen}>
          {sidebar}
        </aside>

        <main className={styles.content}>{children}</main>
      </div>
    </div>
  );
}
