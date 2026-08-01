

const theme: ThemeDefinition = {
  name: "Test",
  colors: {
    background: "#ffffff",
    primary: "#a865cc",
    secondary: "#f5b942",
  },
};

export default function Home() {
  return (
    <main>
      {theme.name}
    </main>
  );
}