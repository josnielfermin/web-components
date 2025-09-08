"use client";

import React from "react";

export interface ScreenProps {
  title?: string;
  controls?: React.ReactNode;
  children?: React.ReactNode;
  description?: React.ReactNode;
  className?: string;
}

export const Screen: React.FC<ScreenProps> = ({
  title,
  controls,
  children,
  description,
  className = "",
}) => {
  return (
    <section
      className={`flex flex-col items-center mx-auto gap-5 w-full max-w-[900px] ${className}`}
    >
      {title && <h2 className="w-full font-semibold text-2xl">{title}</h2>}

      <div className="flex flex-col items-center w-full gap-5">
        {controls && (
          <div className="flex flex-wrap gap-4 items-end mb-4 w-full">
            {controls}
          </div>
        )}

        <div className="flex items-center justify-center rounded-sm border border-foreground/10 p-8 bg-transparent w-full h-[400px]">
          {children}
        </div>
      </div>

      {description && (
        <div className="mt-6 pt-6 border-t border-foreground/10 text-sm w-full">
          {description}
        </div>
      )}
    </section>
  );
};

export default Screen;
