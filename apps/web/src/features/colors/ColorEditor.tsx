"use client";

import type { HexColor } from "@themeforge/shared";
import { useEffect, useId, useState } from "react";

import { useThemeforgeStore } from "@/store";

import styles from "./ColorEditor.module.css";

const COLOR_NAMES = ["primary", "accent"] as const;

type ColorName = (typeof COLOR_NAMES)[number];

function isHexColor(value: string): value is HexColor {
	return /^#[0-9a-f]{6}$/i.test(value);
}

function ColorField({ name, label }: { name: ColorName; label: string }) {
	const color = useThemeforgeStore((state) => state.themeInput.colors[name]);
	const scaleColor = useThemeforgeStore(
		(state) => state.theme.light.colors[name].scale[500],
	);
	const updateColor = useThemeforgeStore((state) => state.updateColor);
	const [draft, setDraft] = useState<string>(color);
	const inputId = useId();

	useEffect(() => {
		setDraft(color);
	}, [color]);

	function update(value: string) {
		setDraft(value);

		if (isHexColor(value)) {
			updateColor(name, value);
		}
	}

	return (
		<div className={styles.field}>
			<label className={styles.label} htmlFor={inputId}>
				{label}
			</label>
			<div className={styles.controls}>
				<input
					aria-label={`Choisir la couleur ${label}`}
					className={styles.colorPicker}
					onChange={(event) => update(event.target.value)}
					type="color"
					value={color}
				/>
				<input
					className={styles.hexInput}
					id={inputId}
					inputMode="text"
					maxLength={7}
					onChange={(event) => update(event.target.value)}
					pattern="#[0-9A-Fa-f]{6}"
					spellCheck={false}
					value={draft}
				/>
			</div>
			<p className={styles.hint}>
				Nuance 500 : <span style={{ color: scaleColor }}>{scaleColor}</span>
			</p>
		</div>
	);
}

export function ColorEditor() {
	return (
		<section aria-labelledby="colors-title" className={styles.editor}>
			<div>
				<p className={styles.eyebrow}>Theme editor</p>
				<h2 id="colors-title">Couleurs</h2>
				<p className={styles.description}>
					Modifiez une couleur source pour régénérer immédiatement ses palettes
					et ses tokens sémantiques.
				</p>
			</div>
			<div className={styles.fields}>
				<ColorField label="Primary" name="primary" />
				<ColorField label="Accent" name="accent" />
			</div>
		</section>
	);
}
