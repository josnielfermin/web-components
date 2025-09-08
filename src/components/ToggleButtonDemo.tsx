"use client";
import React, { useState } from "react";
import Screen from "@/components/Screen";
import { ToggleButton } from "@/components/ui/ToggleButton";

export const ToggleButtonDemo = () => {
  const [pressed, setPressed] = useState(false);
  const controls = (
    <div>
      <label className="text-xs">
        <input
          type="checkbox"
          checked={pressed}
          onChange={(e) => setPressed(e.target.checked)}
        />{" "}
        Pressed
      </label>
    </div>
  );
  const description = (
    <>
      <h3 className="font-semibold mb-3">
        Props del componente <code>ToggleButton</code>
      </h3>
      <dl>
        <div>
          <dt className="font-medium">pressed?: boolean</dt>
          <dd className="text-xs text-foreground/80">
            Estado toggled del botón
          </dd>
        </div>
      </dl>
    </>
  );
  return (
    <Screen
      title="ToggleButton Demo"
      controls={controls}
      description={description}
    >
      <ToggleButton pressed={pressed}>Toggle</ToggleButton>
    </Screen>
  );
};
