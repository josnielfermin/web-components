import React from "react";

export type AvatarSize = "sm" | "md" | "lg";

export interface AvatarProps {
  src?: string;
  alt?: string;
  initials?: string;
  size?: AvatarSize;
  status?: "online" | "offline" | "busy";
  className?: string;
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = "Avatar",
  initials,
  size = "md",
  status,
  className = "",
}) => (
  <div className={`avatar avatar-${size} ${className}`} data-status={status}>
    {src ? (
      <img src={src} alt={alt} className="avatar-img" />
    ) : (
      <span className="avatar-initials">{initials}</span>
    )}
    {status && <span className={`avatar-status avatar-status-${status}`} />}
  </div>
);
