"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const items = [
  { id: "button", label: "Button", href: "/ui/button" },
  { id: "checkbox", label: "Checkbox", href: "/ui/checkbox" },
  { id: "slider", label: "Slider", href: "/ui/slider" },
  { id: "switch", label: "Switch", href: "/ui/switch" },
];

export const Sidebar: React.FC = () => {
  const pathname = usePathname() || "";

  return (
    <aside className="w-64 h-[calc(100vh-120px)] border-r border-foreground/10 p-4">
      <div className="mb-4 font-semibold text-sm">Components</div>
      <nav>
        <ul className="flex flex-col gap-2">
          {items.map((it) => {
            const active = pathname.startsWith(it.href);
            return (
              <li key={it.id}>
                <Link
                  href={it.href}
                  className={`block px-3 py-2 rounded ${
                    active
                      ? "bg-primary-1/10 text-primary-1 font-semibold"
                      : "hover:bg-gray-2"
                  }`}
                >
                  {it.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};
