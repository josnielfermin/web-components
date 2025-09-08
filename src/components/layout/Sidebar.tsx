"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const Sidebar: React.FC = () => {
  const pathname = usePathname() || "";

  const items = [
    { id: "button", label: "Button", href: "/ui/button" },
    { id: "checkbox", label: "Checkbox", href: "/ui/checkbox" },
    { id: "slider", label: "Slider", href: "/ui/slider" },
    { id: "switch", label: "Switch", href: "/ui/switch" },
    { id: "icon", label: "Icon", href: "/ui/icon" },
    { id: "toggle-button", label: "ToggleButton", href: "/ui/toggle-button" },
    { id: "radio", label: "Radio", href: "/ui/radio" },
    { id: "text-field", label: "TextField", href: "/ui/text-field" },
    { id: "select", label: "Select", href: "/ui/select" },
    { id: "autocomplete", label: "Autocomplete", href: "/ui/autocomplete" },
    { id: "rating", label: "Rating", href: "/ui/rating" },
    { id: "transfer-list", label: "Transfer List", href: "/ui/transfer-list" },
    { id: "appbar", label: "AppBar", href: "/ui/appbar" },
    { id: "toolbar", label: "Toolbar", href: "/ui/toolbar" },
    { id: "drawer", label: "Drawer", href: "/ui/drawer" },
    { id: "tabs", label: "Tabs", href: "/ui/tabs" },
    {
      id: "bottom-navigation",
      label: "BottomNavigation",
      href: "/ui/bottom-navigation",
    },
    { id: "breadcrumbs", label: "Breadcrumbs", href: "/ui/breadcrumbs" },
    { id: "pagination", label: "Pagination", href: "/ui/pagination" },
    { id: "menu", label: "Menu", href: "/ui/menu" },
    { id: "stepper", label: "Stepper", href: "/ui/stepper" },
    { id: "container", label: "Container", href: "/ui/container" },
    { id: "box", label: "Box", href: "/ui/box" },
    { id: "grid", label: "Grid", href: "/ui/grid" },
    { id: "stack", label: "Stack", href: "/ui/stack" },
    { id: "paper", label: "Paper", href: "/ui/paper" },
    { id: "card", label: "Card", href: "/ui/card" },
    { id: "accordion", label: "Accordion", href: "/ui/accordion" },
    { id: "dialog", label: "Dialog", href: "/ui/dialog" },
    { id: "snackbar", label: "Snackbar", href: "/ui/snackbar" },
    { id: "alert", label: "Alert", href: "/ui/alert" },
    { id: "backdrop", label: "Backdrop", href: "/ui/backdrop" },
    { id: "skeleton", label: "Skeleton", href: "/ui/skeleton" },
    {
      id: "circular-progress",
      label: "CircularProgress",
      href: "/ui/circular-progress",
    },
    {
      id: "linear-progress",
      label: "LinearProgress",
      href: "/ui/linear-progress",
    },
    { id: "table", label: "Table", href: "/ui/table" },
    { id: "datagrid", label: "DataGrid", href: "/ui/datagrid" },
    { id: "list", label: "List", href: "/ui/list" },
    { id: "chip", label: "Chip", href: "/ui/chip" },
    { id: "avatar", label: "Avatar", href: "/ui/avatar" },
    { id: "badge", label: "Badge", href: "/ui/badge" },
    { id: "tooltip", label: "Tooltip", href: "/ui/tooltip" },
    { id: "divider", label: "Divider", href: "/ui/divider" },
  ];

  return (
    <aside className="w-64 h-full border-r border-foreground/10 p-4 max-h-[calc(100vh-122px)] overflow-y-auto overflow-x-hidden custom-scrollbar">
      <div className="mb-4 font-semibold text-sm">Components</div>
      <nav>
        <ul className="flex flex-col gap-2">
          {items.map((it) => {
            const active = pathname.startsWith(it.href);
            return (
              <li key={it.id}>
                <Link
                  href={it.href}
                  className={`block px-3 py-2 rounded whitespace-nowrap truncate ${
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
