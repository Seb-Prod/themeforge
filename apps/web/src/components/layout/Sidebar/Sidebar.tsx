import type { ReactNode } from "react";
import styles from "./Sidebar.module.css";

type SidebarProps = {
  children: ReactNode;
};

export function Sidebar({ children }: SidebarProps) {
  return (
    <nav aria-label="Éditeur de thème" className={styles.root}>
      {children}
    </nav>
  );
}
