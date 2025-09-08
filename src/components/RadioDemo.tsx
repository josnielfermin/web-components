"use client";
import React, { useState } from "react";
import Screen from "@/components/Screen";
import { Radio } from "@/components/ui/Radio";

export const RadioDemo = () => {
  const [value, setValue] = useState("a");
  const controls = (
    <div>
      <label className="text-xs">
        Valor:{" "}
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="border rounded px-2 py-1"
        />
      </label>
    </div>
  );
  const description = (
    <>
      <h3 className="font-semibold mb-3">
        Props del componente <code>Radio</code>
      </h3>
    </>
  );
  return (
    <Screen title="Radio Demo" controls={controls} description={description}>
      <div className="flex gap-3">
        <Radio
          name="r"
          value="a"
          checked={value === "a"}
          onChange={() => setValue("a")}
          label="Option A"
        />
        <Radio
          name="r"
          value="b"
          checked={value === "b"}
          onChange={() => setValue("b")}
          label="Option B"
        />
      </div>
    </Screen>
  );
};
