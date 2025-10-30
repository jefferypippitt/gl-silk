"use client";

import { ThemeToggleButton } from "./theme-toggle-button";

export function ThemeToggleSizesDemo() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        <ThemeToggleButton size="sm" variant="outline">
          Small
        </ThemeToggleButton>
        <ThemeToggleButton size="icon-sm" variant="outline" />
      </div>

      <div className="flex gap-2">
        <ThemeToggleButton variant="outline">Default</ThemeToggleButton>
        <ThemeToggleButton size="icon" variant="outline" />
      </div>

      <div className="flex gap-2">
        <ThemeToggleButton size="lg" variant="outline">
          Large
        </ThemeToggleButton>
        <ThemeToggleButton size="icon-lg" variant="outline" />
      </div>
    </div>
  );
}
