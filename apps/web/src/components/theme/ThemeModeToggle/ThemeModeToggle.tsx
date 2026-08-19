"use client";

import { useThemeforgeStore } from "@/store";
import styles from "./ThemeModeToggle.module.css";

export function ThemeModeToggle() {
	const mode = useThemeforgeStore((state) => state.mode);
	const setMode = useThemeforgeStore((state) => state.setMode);

	return (
		<div className={styles.root}>
			<div
				aria-label="Choisir le thème"
				className={styles.controls}
				role="group"
			>
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
			</div>
		</div>
	);
}