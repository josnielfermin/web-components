import React from "react";
import Link from "next/link";

export default function UIIndexPage() {
  const items = [
    { id: "button", label: "Button", href: "/ui/button" },
    { id: "checkbox", label: "Checkbox", href: "/ui/checkbox" },
    { id: "slider", label: "Slider", href: "/ui/slider" },
    { id: "switch", label: "Switch", href: "/ui/switch" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">UI Components</h1>
      <ul className="flex flex-col gap-2">
        {items.map((it) => (
          <li key={it.id}>
            <Link href={it.href} className="text-primary-1 hover:underline">
              {it.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
