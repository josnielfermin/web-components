import { Button } from "@/components/ui/Button";
import React from "react";
import { ButtonRadius } from "@/components/ui/Button";
export const ButtonsDemo = () => {
  // Estado para demo interactiva de Button
  // Los valores por defecto deben coincidir con los tipos ButtonVariant y ButtonSize
  const [buttonVariant, setButtonVariant] = React.useState<
    "filled" | "outlined" | "basic" | "link"
  >("filled");
  const [buttonSize, setButtonSize] = React.useState<"sm" | "md" | "lg">("md");
  const [buttonLabel, setButtonLabel] = React.useState("Demo Button");
  const [buttonLoadingLabel, setButtonLoadingLabel] =
    React.useState("Loading...");
  const [buttonLeftIcon, setButtonLeftIcon] = React.useState(false);
  const [buttonRightIcon, setButtonRightIcon] = React.useState(false);
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [buttonRadius, setButtonRadius] = React.useState<
    "none" | "sm" | "md" | "lg" | "full"
  >("md");
  const [buttonLoading, setButtonLoading] = React.useState(false);
  const [buttonFullWidth, setButtonFullWidth] = React.useState(false);

  // Iconos de ejemplo
  const icon = (
    <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-2h2v2zm0-4H9V7h2v2z" />
    </svg>
  );
  return (
    <section>
      <h2>Button Demo Interactiva</h2>
      <div className="flex flex-wrap gap-4 items-end mb-4">
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
            onChange={(e) =>
              setButtonSize(e.target.value as "sm" | "md" | "lg")
            }
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
      </div>
      <div className="max-w-[400px]">
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
      </div>
    </section>
  );
};
