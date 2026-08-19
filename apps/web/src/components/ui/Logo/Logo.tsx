import Image from "next/image";
import styles from "./Logo.module.css";

/** Tailles disponibles pour le logo. */
type LogoSize = "sm" | "md" | "lg";

/** Variante affichée. */
type LogoVariant = "app" | "dev";

const SIZE_MAP: Record<LogoSize, number> = {
  sm: 48,
  md: 56,
  lg: 64,
};

const SRC_MAP: Record<LogoVariant, { src: string; alt: string }> = {
  app: {
    src: "/images/logos/app.png",
    alt: "Logo ThemeForge",
  },
  dev: {
    src: "/images/logos/sebprod.png",
    alt: "Logo SebProd",
  },
};

type LogoProps = {
  size?: LogoSize;
  variant?: LogoVariant;
  decorative?: boolean;
};

/** Affiche le logo de l’application ou du développeur. */
export function Logo({
  size = "md",
  variant = "app",
  decorative = false,
}: LogoProps) {
  const px = SIZE_MAP[size];
  const { src, alt } = SRC_MAP[variant];

  return (
    <div className={styles.root}>
      <div className={styles.circle} style={{ width: px, height: px }}>
        <Image
          alt={decorative ? "" : alt}
          fill
          sizes={`${px}px`}
          src={src}
          style={{ objectFit: "contain" }}
        />
      </div>
    </div>
  );
}
