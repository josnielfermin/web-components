import React, { useMemo } from "react";

export type SliderSize = "sm" | "md" | "lg";
export type SliderRadius = "none" | "sm" | "md" | "lg" | "full";
export type SliderOrientation = "horizontal" | "vertical";
export type SliderDataList = {
  value: number;
  label: string;
};

export interface SliderProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "type"> {
  value: number;
  min?: number;
  max?: number;
  step?: number;
  size?: SliderSize;
  radius?: SliderRadius;
  label?: string | React.ReactNode;
  className?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  valuesDataList?: SliderDataList[];
  orientation?: SliderOrientation;
}

export const Slider: React.FC<SliderProps> = ({
  value,
  min = 0,
  max = 100,
  step = 1,
  size = "md",
  radius = "md",
  label,
  className = "",
  disabled = false,
  fullWidth = false,
  onChange,
  valuesDataList,
  orientation,
  ...props
}) => {
  const sizes: Record<SliderSize, string> = {
    sm: "h-1.5",
    md: "h-2",
    lg: "h-3",
  };
  const thumbSizes: Record<SliderSize, string> = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  };
  const radiusStyles: Record<SliderRadius, string> = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    full: "rounded-full",
  };

  const trackClass = [
    "w-full bg-gray-3 ",
    sizes[size],
    radiusStyles[radius],
    disabled ? "opacity-60" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const thumbClass = [
    " bg-primary-1 border border-primary-1 focus:outline-none focus:ring-2 focus:ring-primary-1 transition-all",
    thumbSizes[size],
    radiusStyles[radius],
    disabled ? "opacity-60 cursor-default" : "cursor-pointer",
  ]
    .filter(Boolean)
    .join(" ");

  const wrapperClass = [
    "flex flex-col gap-1 relative",
    fullWidth ? "w-full" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const valuePercent = useMemo(() => {
    if (max === min) return "0%";
    return `${((value - min) * 100) / (max - min) + 0.1}%`;
  }, [value, min, max]);

  return (
    <label className={wrapperClass}>
      {label && (
        <span
          className="text-xs mb-1 truncate max-w-full"
          style={{ minWidth: 0 }}
        >
          {label}
        </span>
      )}
      <div className="relative w-full overflow-hidden">
        {/* Barra de progreso primaria */}
        {/* <div
          className={`absolute bottom-[7px] bg-primary-1 left-0 ${
            sizes[size]
          } ${radiusStyles[radius]} z-10 pointer-events-none ${
            disabled ? "opacity-0" : "opacity-100"
          }`}
          style={{
            width: valuePercent,
            borderRadius: radiusStyles[radius],
            zIndex: 10,
          }}
        /> */}
        {/* Input slider */}
        <input
          type="range"
          value={value}
          min={min}
          max={max}
          step={step}
          disabled={disabled}
          className={trackClass + " relative z-0"}
          style={{ accentColor: "var(--color-primary-1)" }}
          onChange={onChange}
          list="slider-values"
          writing-mode={
            orientation === "vertical" ? "vertical-lr" : "horizontal-tb"
          }
          {...props}
        />
      </div>
      <datalist id="slider-values" className="border w-full h-full">
        {valuesDataList?.map((item) => (
          <option
            key={item.value}
            value={item.value}
            label={item.label}
            className=""
          />
        ))}
      </datalist>
      {/* Thumb styling for Webkit browsers */}
      <style jsx>{`
        input[type="range"]::-webkit-slider-thumb {
          position: relative;
          z-index: 20;
          ${thumbClass
            .split(" ")
            .map((cls) => `@apply ${cls};`)
            .join(" ")}
        }
        input[type="range"]:focus::-webkit-slider-thumb {
          outline: none;
        }
        input[type="range"]::-moz-range-thumb {
          position: relative;
          z-index: 20;
          ${thumbClass
            .split(" ")
            .map((cls) => `@apply ${cls};`)
            .join(" ")}
        }
        input[type="range"]::-ms-thumb {
          position: relative;
          z-index: 20;
          ${thumbClass
            .split(" ")
            .map((cls) => `@apply ${cls};`)
            .join(" ")}
        }
      `}</style>
    </label>
  );
};
