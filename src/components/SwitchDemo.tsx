"use client";
import React, { useState } from "react";
import { Switch } from "@/components/ui/Switch";

export const SwitchDemo = () => {
  const [checked, setChecked] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [fullWidth, setFullWidth] = useState(false);
  const [size, setSize] = useState<"sm" | "md" | "lg">("md");
  const [radius, setRadius] = useState<"none" | "sm" | "md" | "lg" | "full">(
    "full"
  );
  const [label, setLabel] = useState("Demo Switch");

  return (
    <section>
      <h2>Switch Demo Interactiva</h2>
      <div className="flex flex-wrap gap-4 items-end mb-4">
        <div>
          <label className="block text-xs mb-1">Tamaño</label>
          <select
            value={size}
            onChange={(e) => setSize(e.target.value as "sm" | "md" | "lg")}
            className="border rounded px-2 py-1"
          >
            <option value="sm">Small</option>
            <option value="md">Medium</option>
            <option value="lg">Large</option>
          </select>
        </div>
        <div>
          <label className="block text-xs mb-1">Radio</label>
          <select
            value={radius}
            onChange={(e) =>
              setRadius(e.target.value as "none" | "sm" | "md" | "lg" | "full")
            }
            className="border rounded px-2 py-1"
          >
            <option value="none">None</option>
            <option value="sm">Small</option>
            <option value="md">Medium</option>
            <option value="lg">Large</option>
            <option value="full">Full</option>
          </select>
        </div>
        <div>
          <label className="block text-xs mb-1">Label</label>
          <input
            value={label}
            onChange={(e) => setLabel(e.target.value)}
            className="border rounded px-2 py-1"
          />
        </div>
        <div>
          <label className="block text-xs mb-1">Checked</label>
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />
        </div>
        <div>
          <label className="block text-xs mb-1">Disabled</label>
          <input
            type="checkbox"
            checked={disabled}
            onChange={(e) => setDisabled(e.target.checked)}
          />
        </div>
        <div>
          <label className="block text-xs mb-1">Full Width</label>
          <input
            type="checkbox"
            checked={fullWidth}
            onChange={(e) => setFullWidth(e.target.checked)}
          />
        </div>
      </div>
      <div className="max-w-[400px]">
        <Switch
          checked={checked}
          disabled={disabled}
          size={size}
          radius={radius}
          label={label}
          fullWidth={fullWidth}
          onChange={(e) => setChecked(e.target.checked)}
        />
      </div>
    </section>
  );
};
