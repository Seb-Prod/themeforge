import { Button } from "@/components/ui/Button";
import styles from "./page.module.css";
import { createTheme, exportThemeCss } from "@themeforge/color-engine";

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
    </main>
  );
}
