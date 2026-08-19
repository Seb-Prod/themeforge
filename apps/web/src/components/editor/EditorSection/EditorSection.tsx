import type { ReactNode } from "react";
import styles from "./EditorSection.module.css";

type EditorSectionProps = {
  title: string;
  action?: ReactNode;
  children: ReactNode;
};

export function EditorSection({ title, action, children }: EditorSectionProps) {
  return (
    <section className={styles.root}>
      <div className={styles.header}>
        <h2>{title}</h2>
        {action}
      </div>

      <div className={styles.content}>{children}</div>
    </section>
  );
}
