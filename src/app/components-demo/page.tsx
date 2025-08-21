"use client";
import React from "react";
import { ButtonsDemo } from "@/components/ButtonsDemo";
import { CheckboxDemo } from "@/components/CheckboxDemo";

export default function ComponentsDemoPage() {
  return (
    <main className="p-8 flex flex-col gap-8">
      <ButtonsDemo />
      <CheckboxDemo />
    </main>
  );
}
