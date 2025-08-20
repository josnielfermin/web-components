import React, { useEffect } from "react";

export type ToastPosition = "top-right" | "bottom-left";

export interface ToastProps {
  open: boolean;
  onClose: () => void;
  position?: ToastPosition;
  autoDismiss?: boolean;
  autoDismissTimeout?: number;
  className?: string;
  children: React.ReactNode;
}

export const Toast: React.FC<ToastProps> = ({
  open,
  onClose,
  position = "top-right",
  autoDismiss = true,
  autoDismissTimeout = 3000,
  className = "",
  children,
}) => {
  useEffect(() => {
    if (open && autoDismiss) {
      const timer = setTimeout(onClose, autoDismissTimeout);
      return () => clearTimeout(timer);
    }
  }, [open, autoDismiss, autoDismissTimeout, onClose]);

  if (!open) return null;
  return (
    <div
      className={`toast toast-${position} ${className}`}
      role="status"
      data-position={position}
    >
      {children}
      <button className="toast-close" onClick={onClose} aria-label="Cerrar">
        ×
      </button>
    </div>
  );
};
