"use client";
import React, { useState } from "react";
import { Switch } from "@/components/ui/Switch";
import Screen from "@/components/Screen";

export const SwitchDemo = () => {
  const [checked, setChecked] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [fullWidth, setFullWidth] = useState(false);
  const [size, setSize] = useState<"sm" | "md" | "lg">("md");
  const [radius, setRadius] = useState<"none" | "sm" | "md" | "lg" | "full">(
    "full"
  );
  const [label, setLabel] = useState("Demo Switch");

  const controls = (
    <>
      <div>
        <label className="block text-xs mb-1">Tamaño</label>
        <select
          value={size}
          onChange={(e) => setSize(e.target.value as any)}
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
          onChange={(e) => setRadius(e.target.value as any)}
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
    </>
  );

  const description = (
    <>
      <h3 className="font-semibold mb-3">
        Props del componente <code>Switch</code>
      </h3>
      <dl className="grid grid-cols-1 gap-4">
        <div>
          <dt className="font-medium">checked?: boolean</dt>
          <dd className="text-xs text-foreground/80">Estado del switch.</dd>
        </div>
        <div>
          <dt className="font-medium">size?: "sm" | "md" | "lg"</dt>
          <dd className="text-xs text-foreground/80">
            Tamaño visual del switch.
          </dd>
        </div>
        <div>
          <dt className="font-medium">
            radius?: "none" | "sm" | "md" | "lg" | "full"
          </dt>
          <dd className="text-xs text-foreground/80">Radio del borde.</dd>
        </div>
        <div>
          <dt className="font-medium">disabled?: boolean</dt>
          <dd className="text-xs text-foreground/80">
            Deshabilita el componente.
          </dd>
        </div>
      </dl>
    </>
  );

  return (
    <Screen
      title="Switch Demo Interactiva"
      controls={controls}
      description={description}
    >
      <Switch
        checked={checked}
        disabled={disabled}
        size={size}
        radius={radius}
        label={label}
        fullWidth={fullWidth}
        onChange={(e) => setChecked(e.target.checked)}
      />
    </Screen>
  );
};
