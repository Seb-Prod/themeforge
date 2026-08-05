import { Button } from "@/components/ui/Button";
import styles from "./page.module.css";
import { createTheme, exportThemeCss } from "@themeforge/color-engine";
import { FiArrowRight, FiPlus, FiSearch } from "react-icons/fi";

export default function Home() {
  const theme = createTheme({
    colors: { primary: "#a865cc" },
  });

  console.log(exportThemeCss(theme));
  return (
    <main className={styles.page}>
      <h1>Themeforge</h1>

      <div className={styles.buttons}>
        <Button>Primary solid</Button>

        <Button variant="soft">Primary soft</Button>

        <Button variant="outline">Primary outline</Button>

        <Button variant="ghost">Primary ghost</Button>

        <Button variant="link">Primary link</Button>

        <Button color="accent">Accent</Button>
      </div>
      <div className={styles.buttons}>
        <Button size="sm">Small</Button>

        <Button>Medium</Button>

        <Button size="lg">Large</Button>

        <Button disabled>Disabled</Button>

        <Button type="submit">Submit</Button>
      </div>
      <div className={styles.buttons}>
        <Button>Save</Button>

        <Button variant="outline" leftIcon={<FiPlus />}>
          Ajouter
        </Button>

        <Button rightIcon={<FiArrowRight />}>Continuer</Button>

        <Button leftIcon={<FiSearch />} aria-label="Rechercher" />

        <Button fullWidth>Se connecter</Button>

        <Button loading>Enregistrer</Button>

        <Button loading loadingText="Enregistrement...">
          Enregistrer
        </Button>
      </div>
    </main>
  );
}
