import React, { useState, useRef, useEffect } from "react";

export interface DropdownProps {
  trigger?: "click" | "hover";
  position?: "bottom-left" | "bottom-right" | "top-left" | "top-right";
  label: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  menuClassName?: string;
}

export const Dropdown: React.FC<DropdownProps> = ({
  trigger = "click",
  position = "bottom-left",
  label,
  children,
  className = "",
  menuClassName = "",
}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  const triggerProps =
    trigger === "hover"
      ? {
          onMouseEnter: () => setOpen(true),
          onMouseLeave: () => setOpen(false),
        }
      : {
          onClick: () => setOpen((v) => !v),
        };

  return (
    <div className={`dropdown ${className}`} ref={ref} {...triggerProps}>
      <div className="dropdown-label">{label}</div>
      {open && (
        <div className={`dropdown-menu dropdown-menu-${position} ${menuClassName}`} role="menu">
          {children}
        </div>
      )}
    </div>
  );
};
