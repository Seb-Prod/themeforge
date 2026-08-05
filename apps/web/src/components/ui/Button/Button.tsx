"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./Button.module.css";
import { Color, Size, Variant } from "@/components/types";
import clsx from "clsx";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: ReactNode;
  color?: Color;
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;

  loading?: boolean;
  loadingText?: string;

  disabled?: boolean;
  type?: "button" | "submit" | "reset";

  leftIcon?: ReactNode;
  rightIcon?: ReactNode;

  className?: string;
};

export function Button({
  color = "primary",
  variant = "solid",
  size = "md",
  fullWidth,
  leftIcon,
  rightIcon,
  className,
  type = "button",
  children,
  loading,
  loadingText,
  ...props
}: ButtonProps) {
  const iconOnly = !children && (leftIcon || rightIcon);
  return (
    <button
      type={type}
      className={clsx(styles.root, className)}
      data-color={color}
      data-variant={variant}
      data-size={size}
      data-icon-only={iconOnly || undefined}
      data-full-width={fullWidth || undefined}
      {...props}
    >
      {leftIcon && <span className={styles.icon}>{leftIcon}</span>}

      {children && <span className={styles.label}>{children}</span>}

      {rightIcon && <span className={styles.icon}>{rightIcon}</span>}
    </button>
  );
}
