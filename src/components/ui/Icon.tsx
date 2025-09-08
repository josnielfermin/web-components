"use client";
import React from "react";

export interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  name?: string;
  className?: string;
}

export const Icon: React.FC<IconProps> = ({
  name,
  className = "",
  children,
  ...props
}) => {
  return (
    <span
      className={`inline-flex items-center justify-center ${className}`}
      {...props}
    >
      {children ?? (
        <svg width="16" height="16">
          <circle cx="8" cy="8" r="7" stroke="currentColor" fill="none" />
        </svg>
      )}
    </span>
  );
};
