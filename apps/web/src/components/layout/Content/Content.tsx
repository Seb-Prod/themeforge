import type { ReactNode } from "react";
import styles from "./Content.module.css";

type ContentProps = {
  children: ReactNode;
};

export function Content({ children }: ContentProps) {
  return <div className={styles.root}>{children}</div>;
}
