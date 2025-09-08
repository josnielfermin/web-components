"use client";
import React from "react";

export interface RadioProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string | React.ReactNode;
}

export const Radio: React.FC<RadioProps> = ({
  label,
  className = "",
  ...props
}) => {
  return (
    <label className={`inline-flex items-center gap-2 ${className}`}>
      <input type="radio" {...props} />
      {label && <span>{label}</span>}
    </label>
  );
};
