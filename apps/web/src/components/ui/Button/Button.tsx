"use client";

import type { ReactNode } from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  children: ReactNode;
  color?: "primary" | "accent";
  variant?: "solid" | "soft" | "outline" | "ghost" | "link";
};

export function Button({
  children,
  color = "primary",
  variant = "solid",
}: ButtonProps) {
  return (
    <button className={styles.root} data-color={color} data-variant={variant}>
      {children}
    </button>
  );
}
