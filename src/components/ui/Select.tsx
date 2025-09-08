"use client";
import React from "react";

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options?: { value: string; label: string }[];
}

export const Select: React.FC<SelectProps> = ({
  options = [],
  className = "",
  children,
  ...props
}) => {
  return (
    <select className={`border rounded px-2 py-1 ${className}`} {...props}>
      {options.length
        ? options.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))
        : children}
    </select>
  );
};
