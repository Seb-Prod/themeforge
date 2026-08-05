"use client";

import type { ReactNode } from "react";
import styles from "./Button.module.css";
import { FontSize } from "../../../../../../packages/shared/src/typography/typography-token";

type ButtonSize = "sm" | "md" | "lg";
type ButtonVariant = "solid" | "soft" | "outline" | "ghost" | "link";
type ButtonColor = "primary" | "accent";
type ButtonType = "button" | "submit" | "reset";

type ButtonProps = {
  children: ReactNode;
  color?: ButtonColor;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  type?: ButtonType;
};

export function Button({
  children,
  color = "primary",
  variant = "solid",
  type = "button",
  disabled,
  size = "md",
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={styles.root}
      data-color={color}
      data-variant={variant}
      data-size={size}
    >
      {children}
    </button>
  );
}
