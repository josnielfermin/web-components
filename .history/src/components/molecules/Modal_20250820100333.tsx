import React, { useEffect, useRef } from "react";

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
  overlayClassName?: string;
  closeButtonLabel?: string;
}

export const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  children,
  className = "",
  overlayClassName = "",
  closeButtonLabel = "Cerrar",
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div className={`modal-overlay ${overlayClassName}`} role="dialog" aria-modal="true">
      <div className={`modal-content ${className}`} ref={ref}>
        <button className="modal-close" onClick={onClose} aria-label={closeButtonLabel}>
          ×
        </button>
        {children}
      </div>
    </div>
  );
};
