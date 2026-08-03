"use client";

import type { ReactNode } from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  children: ReactNode;

  color?: "primary" | "accent";

  variant?: 
    | "solid"
    | "soft"
    | "outline"
    | "ghost"
    | "link";

  state?:
    | "default"
    | "hover"
    | "active"
    | "focus"
    | "disabled";
};

export function Button({
  children,
  color = "primary",
  variant = "solid",
  state = "default",
}: ButtonProps) {
  return (
    <button
      className={styles.root}
      data-color={color}
      data-variant={variant}
      data-state={state}
    >
      {children}
    </button>
  );
}