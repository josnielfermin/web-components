import React from "react";

export type SwitchSize = "sm" | "md" | "lg";
export type SwitchRadius = "none" | "sm" | "md" | "lg" | "full";

export interface SwitchProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "type"> {
  checked?: boolean;
  size?: SwitchSize;
  radius?: SwitchRadius;
  label?: string | React.ReactNode;
  className?: string;
  disabled?: boolean;
  fullWidth?: boolean;
}

export const Switch: React.FC<SwitchProps> = ({
  checked = false,
  size = "md",
  radius = "full",
  label,
  className = "",
  disabled = false,
  fullWidth = false,
  onChange,
  ...props
}) => {
  const sizes: Record<
    SwitchSize,
    { track: string; thumb: string; translateClass: string }
  > = {
    // include both the default translate-x-0 and the peer-checked variant explicitly so Tailwind generates the CSS
    sm: {
      track: "w-8 h-4",
      thumb: "w-3.5 h-3.5",
      translateClass: "translate-x-0 peer-checked:translate-x-4",
    },
    md: {
      track: "w-12 h-6",
      thumb: "w-5 h-5",
      translateClass: "translate-x-0 peer-checked:translate-x-6",
    },
    lg: {
      track: "w-16 h-8",
      thumb: "w-7 h-7",
      translateClass: "translate-x-0 peer-checked:translate-x-8",
    },
  };
  const radiusStyles: Record<SwitchRadius, string> = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    full: "rounded-full",
  };

  const wrapperClass = [
    "inline-flex items-center gap-2",
    fullWidth ? "w-full" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <label className={wrapperClass}>
      <span className="relative flex items-center">
        <input
          type="checkbox"
          checked={checked}
          disabled={disabled}
          onChange={onChange}
          className="sr-only peer"
          {...props}
        />
        <span
          className={`transition-colors duration-200 bg-gray-3 peer-checked:bg-primary-1 peer-disabled:opacity-60 ${sizes[size].track} ${radiusStyles[radius]} block`}
        />
        <span
          className={`absolute left-0.5 top-1/2 -translate-y-1/2 bg-white border border-gray-4 transition-all duration-200 ${sizes[size].thumb} ${radiusStyles[radius]} shadow ${sizes[size].translateClass} peer-checked:border-primary-1 peer-disabled:opacity-60`}
          style={{ zIndex: 2 }}
        />
      </span>
      {label && (
        <span
          className="truncate max-w-full overflow-hidden text-ellipsis block"
          style={{ minWidth: 0 }}
          title={typeof label === "string" && label ? label : undefined}
        >
          {label}
        </span>
      )}
    </label>
  );
};
