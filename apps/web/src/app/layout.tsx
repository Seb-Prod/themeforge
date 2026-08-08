import type { Metadata } from "next";
import "./globals.css";
import { PreviewProvider } from "@/providers/PreviewProvider";

export const metadata: Metadata = {
	title: "ThemeForge",
	description: "Éditeur de thème et de design tokens.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="fr">
			<body>
				<PreviewProvider>{children}</PreviewProvider>
			</body>
		</html>
	);
}
