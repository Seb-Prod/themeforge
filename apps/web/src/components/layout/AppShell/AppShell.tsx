import type { ReactNode } from "react";
import styles from "./AppShell.module.css";

type AppShellProps = {
  topbar: ReactNode;
  sidebar: ReactNode;
  children: ReactNode;
};

export function AppShell({ topbar, sidebar, children }: AppShellProps) {
  return (
    <div className={styles.root}>
      <header className={styles.topbar}>{topbar}</header>

      <div className={styles.body}>
        <aside className={styles.sidebar}>{sidebar}</aside>

        <main className={styles.content}>{children}</main>
      </div>
    </div>
  );
}
