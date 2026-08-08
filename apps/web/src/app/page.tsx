"use client";

import { Button } from "@/components/ui/Button";
import { ColorEditor } from "@/features/colors/ColorEditor";
import { useThemeforgeStore } from "@/store";
import styles from "./page.module.css";

export default function Home() {
	const theme = useThemeforgeStore((state) => state.theme);
	const mode = useThemeforgeStore((state) => state.mode);
	const setMode = useThemeforgeStore((state) => state.setMode);

	return (
		<main className={styles.page}>
			<header className={styles.header}>
				<div className={styles.headerTopline}>
					<p className={styles.kicker}>ThemeForge</p>
					<fieldset className={styles.modeToggle}>
						<legend className={styles.visuallyHidden}>Mode d’affichage</legend>
						<button
							aria-pressed={mode === "light"}
							className={
								mode === "light" ? styles.modeButtonActive : styles.modeButton
							}
							onClick={() => setMode("light")}
							type="button"
						>
							Clair
						</button>
						<button
							aria-pressed={mode === "dark"}
							className={
								mode === "dark" ? styles.modeButtonActive : styles.modeButton
							}
							onClick={() => setMode("dark")}
							type="button"
						>
							Sombre
						</button>
					</fieldset>
				</div>
				<h1>Créez votre thème.</h1>
				<p>
					Les contrôles de couleurs alimentent le même thème que la preview et
					l’export CSS.
				</p>
			</header>

			<ColorEditor />

			<section aria-labelledby="preview-title" className={styles.preview}>
				<div>
					<p className={styles.kicker}>Live preview</p>
					<h2 id="preview-title">Composants</h2>
				</div>
				<div className={styles.buttons}>
					<Button>Primary solid</Button>
					<Button variant="soft">Primary soft</Button>
					<Button variant="outline">Primary outline</Button>
					<Button color="accent">Accent</Button>
				</div>
				<p className={styles.value}>
					Primary 500 : {theme[mode].colors.primary.scale[500]}
				</p>
			</section>
		</main>
	);
}
