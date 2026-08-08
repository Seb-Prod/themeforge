"use client";

import { exportCss } from "@themeforge/exporter";
import { useEffect } from "react";
import { injectCss } from "@/lib/css";
import { useThemeforgeStore } from "@/store";

export function PreviewProvider({ children }: { children: React.ReactNode }) {
	const theme = useThemeforgeStore((state) => state.theme);
	const tokens = useThemeforgeStore((state) => state.tokens);
	const mode = useThemeforgeStore((state) => state.mode);

	useEffect(() => {
		const css = exportCss(theme, tokens);

		injectCss(css);
	}, [theme, tokens]);

	useEffect(() => {
		document.documentElement.dataset.theme = mode;
	}, [mode]);

	return children;
}
