import React from "react";

export type BadgeVariant = "default" | "success" | "error";
export type BadgeShape = "rounded" | "square";

export interface BadgeProps {
  variant?: BadgeVariant;
  shape?: BadgeShape;
  className?: string;
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = "default",
  shape = "rounded",
  className = "",
  children,
}) => (
  <span
    className={`badge badge-${variant} badge-${shape} ${className}`}
    data-variant={variant}
    data-shape={shape}
  >
    {children}
  </span>
);
