import React, { useState, KeyboardEvent } from "react";

export interface Tab {
  label: string;
  content: React.ReactNode;
  id: string;
}

export interface TabsProps {
  tabs: Tab[];
  className?: string;
}

export const Tabs: React.FC<TabsProps> = ({ tabs, className = "" }) => {
  const [active, setActive] = useState(0);

  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>, idx: number) => {
    if (e.key === "ArrowRight") setActive((idx + 1) % tabs.length);
    if (e.key === "ArrowLeft") setActive((idx - 1 + tabs.length) % tabs.length);
  };

  return (
    <div className={`tabs ${className}`}>
      <div role="tablist" aria-label="Tabs">
        {tabs.map((tab, idx) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={active === idx}
            tabIndex={active === idx ? 0 : -1}
            onClick={() => setActive(idx)}
            onKeyDown={(e) => handleKeyDown(e, idx)}
            className={active === idx ? "tab-active" : ""}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div role="tabpanel">{tabs[active]?.content}</div>
    </div>
  );
};
