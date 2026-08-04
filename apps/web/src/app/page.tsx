import { Button } from "@/components/ui/Button";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.page}>

      <h1>
        Themeforge
      </h1>

      <div className={styles.buttons}>

        <Button>
          Primary
        </Button>

        <Button color="accent">
          Accent
        </Button>

        <Button variant="outline">
          Outline
        </Button>

        <Button variant="soft">
          Soft
        </Button>

        <Button variant="ghost">
          Ghost
        </Button>

      </div>

    </main>
  );
}