"use client";
import React, { useState, useEffect } from "react";
import { Slider } from "@/components/ui/Slider";
import { SliderDataList } from "@/components/ui/Slider";

const initialValuesDataList: SliderDataList[] = [
  { value: 0, label: "0" },
  { value: 25, label: "25" },
  { value: 50, label: "50" },
  { value: 75, label: "75" },
  { value: 100, label: "100" },
];

export const SlidersDemo = () => {
  const [valuesDataList, setValuesDataList] = useState<SliderDataList[]>(
    initialValuesDataList
  );
  const [value, setValue] = useState(50);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(100);
  const [step, setStep] = useState(1);
  const [size, setSize] = useState<"sm" | "md" | "lg">("md");
  const [radius, setRadius] = useState<"none" | "sm" | "md" | "lg" | "full">(
    "md"
  );
  const [orientation, setOrientation] = useState<"horizontal" | "vertical">(
    "horizontal"
  );
  const [showTicks, setShowTicks] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [fullWidth, setFullWidth] = useState(false);
  const [label, setLabel] = useState("Demo Slider");

  // Mantener value dentro de min/max
  useEffect(() => {
    if (value < min) setValue(min);
    if (value > max) setValue(max);
  }, [min, max]);

  return (
    <section>
      <h2>Slider Demo Interactiva</h2>
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
          <label className="block text-xs mb-1">Min</label>
          <input
            type="number"
            value={min}
            onChange={(e) => setMin(Number(e.target.value))}
            className="border rounded px-2 py-1 w-20"
          />
        </div>
        <div>
          <label className="block text-xs mb-1">Max</label>
          <input
            type="number"
            value={max}
            onChange={(e) => setMax(Number(e.target.value))}
            className="border rounded px-2 py-1 w-20"
          />
        </div>
        <div>
          <label className="block text-xs mb-1">Step</label>
          <input
            type="number"
            value={step}
            onChange={(e) => setStep(Number(e.target.value))}
            className="border rounded px-2 py-1 w-20"
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
        <div>
          <label className="block text-xs mb-1">Orientation</label>
          <select
            value={orientation}
            onChange={(e) =>
              setOrientation(e.target.value as "horizontal" | "vertical")
            }
            className="border rounded px-2 py-1"
          >
            <option value="horizontal">Horizontal</option>
            <option value="vertical">Vertical</option>
          </select>
        </div>
        <div>
          <label className="block text-xs mb-1">Show Ticks</label>
          <input
            type="checkbox"
            checked={showTicks}
            onChange={(e) => setShowTicks(e.target.checked)}
          />
        </div>
      </div>
      <div className="max-w-[400px]">
        <Slider
          value={value}
          min={min}
          max={max}
          step={step}
          size={size}
          radius={radius}
          label={label}
          disabled={disabled}
          fullWidth={fullWidth}
          orientation={orientation}
          valuesDataList={showTicks ? valuesDataList : []}
          onChange={(e) => setValue(Number(e.target.value))}
        />
        <div className="mt-2 text-xs text-gray-4">
          Valor actual: <span className="font-bold">{value}</span>
        </div>
      </div>
    </section>
  );
};
