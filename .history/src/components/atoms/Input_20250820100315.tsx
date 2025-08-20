import React from "react";

export type InputType = "text" | "password" | "email" | "number";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: InputType;
  error?: string;
  helperText?: string;
  className?: string;
}

export const Input: React.FC<InputProps> = ({
  type = "text",
  error,
  helperText,
  className = "",
  ...props
}) => (
  <div className={className}>
    <input type={type} aria-invalid={!!error} {...props} />
    {helperText && <div className="input-helper">{helperText}</div>}
    {error && <div className="input-error" role="alert">{error}</div>}
  </div>
);
