import React from "react";

export type CardVariant = "outlined" | "shadow";

export interface CardProps {
  header?: React.ReactNode;
  footer?: React.ReactNode;
  variant?: CardVariant;
  className?: string;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  header,
  footer,
  variant = "outlined",
  className = "",
  children,
}) => (
  <div className={`card card-${variant} ${className}`} data-variant={variant}>
    {header && <div className="card-header">{header}</div>}
    <div className="card-body">{children}</div>
    {footer && <div className="card-footer">{footer}</div>}
  </div>
);
