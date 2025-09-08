"use client";
import React, { useState } from "react";
import Screen from "@/components/Screen";
import { TextField } from "@/components/ui/TextField";

export const TextFieldDemo = () => {
  const [value, setValue] = useState("");
  const controls = (
    <div>
      <label className="block text-xs mb-1">Placeholder</label>
      <input className="border rounded px-2 py-1" placeholder="escribe..." />
    </div>
  );
  const description = (
    <>
      <h3 className="font-semibold mb-3">
        Props del componente <code>TextField</code>
      </h3>
    </>
  );
  return (
    <Screen
      title="TextField Demo"
      controls={controls}
      description={description}
    >
      <TextField
        value={value}
        onChange={(e) => setValue(e.target.value)}
        label="Input"
      />
    </Screen>
  );
};
