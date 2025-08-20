import React from "react";

export type AlertVariant = "success" | "error" | "warning" | "info";

export interface AlertProps {
  variant?: AlertVariant;
  className?: string;
  children: React.ReactNode;
}

export const Alert: React.FC<AlertProps> = ({
  variant = "info",
  className = "",
  children,
}) => (
  <div
    className={`alert alert-${variant} ${className}`}
    role="alert"
    data-variant={variant}
  >
    {children}
  </div>
);
