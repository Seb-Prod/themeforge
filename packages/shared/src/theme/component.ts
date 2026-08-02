/**
 * Variantes visuelles communes
 * utilisées par les composants.
 */
export type ComponentVariant = "solid" | "soft" | "outline" | "ghost" | "link";

/**
 * États visuels d'un composant.
 */
export type ComponentState = "default" | "hover" | "active" | "disabled";

/**
 * Référence vers un token sémantique.
 *
 * Exemple :
 *
 * {
 *   color: "primary",
 *   variant: "solid",
 *   state: "hover"
 * }
 */
export interface ComponentTokenReference {
  color: string;

  variant: ComponentVariant;

  state: ComponentState;
}
