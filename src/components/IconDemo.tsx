"use client";
import React from "react";
import Screen from "@/components/Screen";
import { Icon } from "@/components/ui/Icon";

export const IconDemo = () => {
  const controls = <div>Sin controles</div>;
  const description = (
    <>
      <h3 className="font-semibold mb-3">
        Props del componente <code>Icon</code>
      </h3>
      <dl className="grid grid-cols-1 gap-4">
        <div>
          <dt className="font-medium">name?: string</dt>
          <dd className="text-xs text-foreground/80">
            Nombre del icono a renderizar (opcional)
          </dd>
        </div>
      </dl>
    </>
  );
  return (
    <Screen title="Icon Demo" controls={controls} description={description}>
      <Icon>⭐</Icon>
    </Screen>
  );
};
