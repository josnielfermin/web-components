"use client";
import React from "react";
import Screen from "@/components/Screen";
import { Select } from "@/components/ui/Select";

export const SelectDemo = () => {
  const controls = <div>Sin controles</div>;
  const description = (
    <>
      <h3 className="font-semibold mb-3">
        Props del componente <code>Select</code>
      </h3>
    </>
  );
  return (
    <Screen title="Select Demo" controls={controls} description={description}>
      <Select
        options={[
          { value: "1", label: "One" },
          { value: "2", label: "Two" },
        ]}
      />
    </Screen>
  );
};
