import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import styles from "./Brand.module.css";

type BrandProps = {
	compact?: boolean;
};

export function Brand({ compact = false }: BrandProps) {
	return (
		<Link
			aria-label="ThemeForge — Accueil"
			className={styles.root}
			href="/"
		>
			<Logo decorative size="sm" variant="app" />

			{!compact && (
				<span className={styles.name}>
					<span>Theme</span>
					<span className={styles.accent}>Forge</span>
				</span>
			)}
		</Link>
	);
}