import styles from "./Topbar.module.css";
import { Brand } from "../Brand";
import { ThemeModeToggle } from "@/components/theme";
import { Button } from "@/components/ui/Button";
import { FaBars } from "react-icons/fa";

type TopbarProps = {
  onMenuClick: () => void;
};

export function Topbar({ onMenuClick }: TopbarProps) {
  return (
    <div className={styles.root}>
      <div className={styles.left}>
        <Button
          aria-label="Ouvrir le menu"
          className={styles.menuButton}
          leftIcon={<FaBars />}
          onClick={onMenuClick}
          variant="ghost"
        />
        <Brand />
      </div>
      <ThemeModeToggle />
    </div>
  );
}
