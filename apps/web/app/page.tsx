
import type { ThemeDefinition, RadiusTokens } from "@themeforge/shared";

const theme: ThemeDefinition = {
  name: "Test",
  colors: {
    background: "#fffff",
    primary: "#a854cc",
    secondary: "#f5b842",
  },
};

export default function Home() {
  return <main>{theme.name}</main>;
}
