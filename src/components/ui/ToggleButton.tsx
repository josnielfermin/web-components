"use client";
import React from "react";

export interface ToggleButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  pressed?: boolean;
}

export const ToggleButton: React.FC<ToggleButtonProps> = ({
  pressed = false,
  children,
  className = "",
  ...props
}) => {
  return (
    <button
      aria-pressed={pressed}
      className={`px-3 py-1 border rounded ${
        pressed ? "bg-primary-1 text-white" : ""
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
