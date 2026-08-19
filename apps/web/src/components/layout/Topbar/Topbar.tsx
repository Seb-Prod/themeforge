import styles from "./Topbar.module.css";
import { Brand } from "../Brand";
import { ThemeModeToggle } from "@/components/theme";

export function Topbar() {
  return (
    <div className={styles.root}>
      <Brand />
      <ThemeModeToggle />
    </div>
  );
}
