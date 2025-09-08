"use client";
import React from "react";

export interface TextFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const TextField: React.FC<TextFieldProps> = ({
  label,
  className = "",
  ...props
}) => {
  return (
    <label className={`flex flex-col gap-1 ${className}`}>
      {label && <span className="text-xs">{label}</span>}
      <input className="border rounded px-2 py-1" {...props} />
    </label>
  );
};
