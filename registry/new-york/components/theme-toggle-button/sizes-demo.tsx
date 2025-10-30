"use client";

import { ThemeToggleButton } from "./theme-toggle-button";
import { OpenInV0Button } from "@/components/open-in-v0-button";

export function ThemeToggleSizesDemo() {
  return (
    <>
      <div className="absolute top-4 right-4 z-10">
        <OpenInV0Button name="theme-toggle-button-sizes" />
      </div>
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
    </>
  );
}
