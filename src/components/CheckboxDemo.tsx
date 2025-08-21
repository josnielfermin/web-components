import { Checkbox } from "@/components/ui/Checkbox";
import React from "react";
import { useState, useEffect } from "react";

export const CheckboxDemo = () => {
  const [checked, setChecked] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [size, setSize] = useState<"sm" | "md" | "lg">("md");
  const [radius, setRadius] = useState<"none" | "sm" | "md" | "lg" | "full">(
    "md"
  );
  const [label, setLabel] = useState("Demo Checkbox");
  const [showCheckIcon, setShowCheckIcon] = useState(true);

  // Sincronizar indeterminate visual
  useEffect(() => {
    if (indeterminate && checked) setChecked(false);
  }, [indeterminate]);

  return (
    <section>
      <h2>Checkbox Demo Interactiva</h2>
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
            disabled={indeterminate}
          />
        </div>
        <div>
          <label className="block text-xs mb-1">Indeterminate</label>
          <input
            type="checkbox"
            checked={indeterminate}
            onChange={(e) => setIndeterminate(e.target.checked)}
            disabled={checked}
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
          <label className="block text-xs mb-1">Show Check Icon</label>
          <input
            type="checkbox"
            checked={showCheckIcon}
            onChange={(e) => setShowCheckIcon(e.target.checked)}
          />
        </div>
      </div>
      <div className="max-w-[400px]">
        <Checkbox
          checked={checked}
          indeterminate={indeterminate}
          disabled={disabled}
          size={size}
          radius={radius}
          label={label}
          showCheckIcon={showCheckIcon}
          onChange={(e) => setChecked(e.target.checked)}
        />
      </div>
    </section>
  );
};
