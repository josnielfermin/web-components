import React from "react";
import { useRef, useEffect } from "react";
import { IconCheck, IconDash } from "@/icons";

export type CheckboxSize = "sm" | "md" | "lg";
export type CheckboxRadius = "none" | "sm" | "md" | "lg" | "full";

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  checked?: boolean;
  indeterminate?: boolean;
  size?: CheckboxSize;
  radius?: CheckboxRadius;
  label?: string | React.ReactNode;
  className?: string;
  disabled?: boolean;
  showCheckIcon?: boolean;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  checked = false,
  indeterminate = false,
  size = "md",
  radius = "md",
  label,
  className = "",
  disabled = false,
  showCheckIcon = true,
  ...props
}) => {
  const sizes: Record<CheckboxSize, string> = {
    sm: "w-4 h-4 text-sm",
    md: "w-5 h-5 text-base",
    lg: "w-6 h-6 text-lg",
  };
  const radiusStyles: Record<CheckboxRadius, string> = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    full: "rounded-full",
  };

  // Wrapper para control de ancho
  const wrapperClass = ["inline-flex items-center gap-2", className]
    .filter(Boolean)
    .join(" ");

  // Checkbox visual
  const checkboxClass = [
    "appearance-none border border-gray-4 bg-gray-1 checked:bg-primary-1 checked:border-primary-1 focus:ring-2 focus:ring-primary-2 transition-all relative",
    indeterminate ? "bg-primary-1 border-primary-1" : "",
    sizes[size],
    radiusStyles[radius],
    disabled ? "opacity-60 cursor-default" : "cursor-pointer",
  ]
    .filter(Boolean)
    .join(" ");

  // Label truncado
  const labelClass = "truncate max-w-full overflow-hidden text-ellipsis block";

  // Ref para indeterminate
  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (ref.current) {
      ref.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  return (
    <label className={wrapperClass}>
      <span className="relative flex items-center">
        <input
          ref={ref}
          type="checkbox"
          checked={checked}
          disabled={disabled}
          className={checkboxClass}
          style={{ position: "relative", zIndex: 1 }}
          {...props}
        />
        {showCheckIcon && (checked || indeterminate) && (
          <span
            className={`absolute left-1/2 -translate-x-1/2 ${
              !indeterminate ? "-top-[3px]" : ""
            } pointer-events-none select-none text-white disabled:opacity-60`}
            style={{ zIndex: 2 }}
          >
            {indeterminate ? (
              <IconDash size={size === "sm" ? 12 : size === "lg" ? 20 : 16} />
            ) : (
              <IconCheck size={size === "sm" ? 22 : size === "lg" ? 30 : 26} />
            )}
          </span>
        )}
      </span>
      {label && (
        <span
          className={labelClass}
          style={{ minWidth: 0 }}
          title={typeof label === "string" && label ? label : undefined}
        >
          {label}
        </span>
      )}
    </label>
  );
};
