import { ComponentSizeScale } from "../component";

/**
 * Tokens de design indépendants du thème.
 *
 * Ils représentent les valeurs utilisées
 * directement par les composants.
 */
export interface DesignTokens {
  radius: Record<string, string>;

  spacing: Record<string, string>;

  shadows: Record<string, string>;

  components: Record<
    string,
    {
      sizes: ComponentSizeScale;
    }
  >;
}
