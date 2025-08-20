import React from "react";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "link";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  leftIcon,
  rightIcon,
  className = "",
  children,
  ...props
}) => (
  <button
    type="button"
    data-variant={variant}
    data-size={size}
    className={className}
    {...props}
  >
    {leftIcon && <span className="btn-icon-left">{leftIcon}</span>}
    <span>{children}</span>
    {rightIcon && <span className="btn-icon-right">{rightIcon}</span>}
  </button>
);
