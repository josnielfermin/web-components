"use client";
import React from "react";
import { ButtonsDemo } from "@/components/ButtonsDemo";
import { CheckboxDemo } from "@/components/CheckboxDemo";
import { SlidersDemo } from "@/components/SlidersDemo";
import { SwitchDemo } from "@/components/SwitchDemo";

export default function ComponentsDemoPage() {
  return (
    <main className="p-8 flex flex-col gap-8">
      <ButtonsDemo />
      <CheckboxDemo />
      <SlidersDemo />
      <SwitchDemo />
    </main>
  );
}
