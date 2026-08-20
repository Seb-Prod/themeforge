"use client";

import type { HexColor } from "@themeforge/shared";
import { useEffect, useId, useState } from "react";

import { useThemeforgeStore } from "@/store";
import styles from "./ColorField.module.css";
import { FaCheck, FaRegCopy } from "react-icons/fa";
import { LiaEyeSolid } from "react-icons/lia";

type ColorFieldProps = {
  name: string;
  label: string;
};

/** Paliers de la palette générée par le moteur, du plus clair au plus foncé. */
export const PALETTE_SHADES = [
  50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950,
] as const;

/** Valide qu'une chaîne est un code hexadécimal à 6 chiffres (#RRGGBB). */
function isHexColor(value: string): value is HexColor {
  return /^#[0-9a-f]{6}$/i.test(value);
}

/**
 * ColorField
 * Champ d'édition d'une couleur du thème (picker natif + saisie hex).
 *
 * États visuels :
 * - `invalid` : bordure d'erreur quand la saisie hex ne correspond pas au format attendu
 * - `copied` : icône temporairement remplacée par un check après copie du hex
 *
 * Comportement :
 * - Le picker et le champ hex sont synchronisés sur `color` (store) et un `draft` local
 * - `draft` ne pousse la valeur au store que si elle est un hex valide, ce qui permet
 *   la saisie intermédiaire (ex: "#12") sans la rejeter immédiatement
 * - Le bouton "œil" bascule `previewedColor` dans le store ; un second clic referme l'aperçu
 * - Le bandeau du bas affiche la palette réellement générée pour `name` sous forme de
 *   carrés, en lisant les variables CSS `--palette-{name}-{50..950}` injectées par le
 *   moteur de génération (suppose qu'elles sont déjà définies sur un ancêtre au rendu)
 */
export function ColorField({ name, label }: ColorFieldProps) {
  const color = useThemeforgeStore((state) => state.themeInput.colors[name]);
  const updateColor = useThemeforgeStore((state) => state.updateColor);
  const previewedColor = useThemeforgeStore((state) => state.previewedColor);
  const setPreviewedColor = useThemeforgeStore(
    (state) => state.setPreviewedColor,
  );

  const [draft, setDraft] = useState<string>(color);
  const [copied, setCopied] = useState(false);
  const inputId = useId();

  const invalid = draft.length > 0 && !isHexColor(draft);
  const previewing = previewedColor === name;

  useEffect(() => {
    setDraft(color);
  }, [color]);

  /** Met à jour le brouillon local et propage au store si le format hex est valide. */
  function update(value: string) {
    setDraft(value);

    if (isHexColor(value)) {
      updateColor(name, value);
    }
  }

  /** Copie le hex courant dans le presse-papiers et affiche un accusé visuel temporaire. */
  async function copyHex() {
    await navigator.clipboard.writeText(color);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  /** Bascule l'aperçu de cette couleur dans le panneau central (toggle marche/arrêt). */
  function togglePreview() {
    setPreviewedColor(previewing ? null : name);
  }

  // Classes conditionnelles du champ hex (bordure d'erreur)
  const hexInputClasses = [
    styles.hexInput,
    invalid ? styles.hexInputInvalid : "",
  ].join(" ");

  return (
    <div className={styles.root}>
      {/* ── En-tête : label + picker + hex + copie ── */}
      <div className={styles.header}>
        <label className={styles.label} htmlFor={inputId}>
          {label}
        </label>

        <div className={styles.inputGroup}>
          <input
            aria-label={`Choisir la couleur ${label}`}
            className={styles.colorPicker}
            onChange={(event) => update(event.target.value)}
            type="color"
            value={color}
          />

          <input
            aria-invalid={invalid}
            className={hexInputClasses}
            id={inputId}
            inputMode="text"
            maxLength={7}
            onChange={(event) => update(event.target.value)}
            pattern="#[0-9A-Fa-f]{6}"
            spellCheck={false}
            value={draft}
          />

          <button
            aria-label="Copier le code hexadécimal"
            className={styles.copyButton}
            onClick={copyHex}
            title="Copier le hex"
            type="button"
          >
            {copied ? <FaCheck size={14} /> : <FaRegCopy size={14} />}
          </button>

          <button
            aria-label={previewing ? "Masquer l'aperçu" : "Voir l'aperçu"}
            aria-pressed={previewing}
            className={styles.showButton}
            onClick={togglePreview}
            title={previewing ? "Masquer l'aperçu" : "Voir l'aperçu"}
            type="button"
          >
            {previewing ? <FaCheck size={14} /> : <LiaEyeSolid size={14} />}
          </button>
        </div>
      </div>

      {/* ── Aperçu de la palette générée (10 paliers réels, un carré chacun) ── */}
      <div className={styles.paletteRow}>
        {PALETTE_SHADES.map((shade) => (
          <div
            className={styles.paletteSwatch}
            key={shade}
            style={{ backgroundColor: `var(--palette-${name}-${shade})` }}
            title={`${name}-${shade}`}
          />
        ))}
      </div>
    </div>
  );
}
