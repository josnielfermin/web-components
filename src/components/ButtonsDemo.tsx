"use client";
import Screen from "@/components/Screen";
import { Button } from "@/components/ui/Button";
import React from "react";
import { useState } from "react";
import { ButtonRadius } from "@/components/ui/Button";

export const ButtonsDemo = () => {
  const [buttonVariant, setButtonVariant] = useState<
    "filled" | "outlined" | "basic" | "link"
  >("filled");
  const [buttonSize, setButtonSize] = useState<"sm" | "md" | "lg">("md");
  const [buttonLabel, setButtonLabel] = useState("Demo Button");
  const [buttonLoadingLabel, setButtonLoadingLabel] = useState("Loading...");
  const [buttonLeftIcon, setButtonLeftIcon] = useState(false);
  const [buttonRightIcon, setButtonRightIcon] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [buttonRadius, setButtonRadius] = useState<
    "none" | "sm" | "md" | "lg" | "full"
  >("md");
  const [buttonLoading, setButtonLoading] = useState(false);
  const [buttonFullWidth, setButtonFullWidth] = useState(false);

  const icon = (
    <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-2h2v2zm0-4H9V7h2v2z" />
    </svg>
  );

  const controls = (
    <>
      <div>
        <label className="block text-xs mb-1">Variante</label>
        <select
          value={buttonVariant}
          onChange={(e) =>
            setButtonVariant(
              e.target.value as "filled" | "outlined" | "basic" | "link"
            )
          }
          className="border rounded px-2 py-1"
        >
          <option value="filled">Filled</option>
          <option value="outlined">Outlined</option>
          <option value="basic">Basic</option>
          <option value="link">Link</option>
        </select>
      </div>
      <div>
        <label className="block text-xs mb-1">Tamaño</label>
        <select
          value={buttonSize}
          onChange={(e) => setButtonSize(e.target.value as "sm" | "md" | "lg")}
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
          value={buttonRadius}
          onChange={(e) => setButtonRadius(e.target.value as ButtonRadius)}
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
          value={buttonLabel}
          onChange={(e) => setButtonLabel(e.target.value)}
          className="border rounded px-2 py-1"
        />
      </div>
      <div>
        <label className="block text-xs mb-1">Loading Label</label>
        <input
          value={buttonLoadingLabel}
          onChange={(e) => setButtonLoadingLabel(e.target.value)}
          className="border rounded px-2 py-1"
        />
      </div>
      <div>
        <label className="block text-xs mb-1">Left Icon</label>
        <input
          type="checkbox"
          checked={buttonLeftIcon}
          onChange={(e) => setButtonLeftIcon(e.target.checked)}
        />
      </div>
      <div>
        <label className="block text-xs mb-1">Right Icon</label>
        <input
          type="checkbox"
          checked={buttonRightIcon}
          onChange={(e) => setButtonRightIcon(e.target.checked)}
        />
      </div>
      <div>
        <label className="block text-xs mb-1">Disabled</label>
        <input
          type="checkbox"
          checked={buttonDisabled}
          onChange={(e) => setButtonDisabled(e.target.checked)}
        />
      </div>
      <div>
        <label className="block text-xs mb-1">Loading</label>
        <input
          type="checkbox"
          checked={buttonLoading}
          onChange={(e) => setButtonLoading(e.target.checked)}
        />
      </div>
      <div>
        <label className="block text-xs mb-1">Full Width</label>
        <input
          type="checkbox"
          checked={buttonFullWidth}
          onChange={(e) => setButtonFullWidth(e.target.checked)}
        />
      </div>
    </>
  );

  const description = (
    <>
      <h3 className="font-semibold mb-3">
        Props del componente <code>Button</code>
      </h3>
      <dl className="grid grid-cols-1 gap-4">
        <div>
          <dt className="font-medium">
            variant?: "filled" | "outlined" | "basic" | "link"
          </dt>
          <dd className="text-xs text-foreground/80">
            Variante visual del botón. "filled" tiene fondo; "outlined" muestra
            borde; "basic" es transparente; "link" parece un enlace.
          </dd>
        </div>
        <div>
          <dt className="font-medium">size?: "sm" | "md" | "lg"</dt>
          <dd className="text-xs text-foreground/80">
            Controla padding, altura y tamaño de iconos del botón.
          </dd>
        </div>
        <div>
          <dt className="font-medium">leftIcon?: React.ReactNode</dt>
          <dd className="text-xs text-foreground/80">
            Nodo React mostrado a la izquierda del label (ej. SVG).
          </dd>
        </div>
        <div>
          <dt className="font-medium">rightIcon?: React.ReactNode</dt>
          <dd className="text-xs text-foreground/80">
            Nodo React mostrado a la derecha del label.
          </dd>
        </div>
        <div>
          <dt className="font-medium">label?: string | React.ReactNode</dt>
          <dd className="text-xs text-foreground/80">
            Texto o contenido principal del botón.
          </dd>
        </div>
        <div>
          <dt className="font-medium">loading?: boolean</dt>
          <dd className="text-xs text-foreground/80">
            Si es true muestra un indicador de carga (spinner) y puede
            reemplazar el label por <code>loadingLabel</code>.
          </dd>
        </div>
        <div>
          <dt className="font-medium">loadingLabel?: string</dt>
          <dd className="text-xs text-foreground/80">
            Texto que se muestra cuando <code>loading</code> es true.
          </dd>
        </div>
        <div>
          <dt className="font-medium">disabled?: boolean</dt>
          <dd className="text-xs text-foreground/80">
            Desactiva el botón y aplica estilos de disabled.
          </dd>
        </div>
        <div>
          <dt className="font-medium">
            radius?: "none" | "sm" | "md" | "lg" | "full"
          </dt>
          <dd className="text-xs text-foreground/80">
            Controla el border-radius del botón.
          </dd>
        </div>
        <div>
          <dt className="font-medium">fullWidth?: boolean</dt>
          <dd className="text-xs text-foreground/80">
            Si es true el botón ocupa el 100% del contenedor padre.
          </dd>
        </div>
        <div>
          <dt className="font-medium">href?: string</dt>
          <dd className="text-xs text-foreground/80">
            URL para comportamiento tipo enlace (si se decide renderizar como
            &lt;a&gt; en el futuro).
          </dd>
        </div>
        <div>
          <dt className="font-medium">onClick?: (e) =&gt; void</dt>
          <dd className="text-xs text-foreground/80">
            Manejador del evento click. Además soporta todas las props nativas
            de &lt;button&gt;.
          </dd>
        </div>
      </dl>
    </>
  );

  return (
    <Screen
      title="Button Demo Interactiva"
      controls={controls}
      description={description}
    >
      <Button
        variant={buttonVariant}
        size={buttonSize}
        disabled={buttonDisabled}
        leftIcon={buttonLeftIcon ? icon : undefined}
        rightIcon={buttonRightIcon ? icon : undefined}
        label={buttonLabel}
        loadingLabel={buttonLoadingLabel}
        radius={buttonRadius}
        loading={buttonLoading}
        fullWidth={buttonFullWidth}
      />
    </Screen>
  );
};
