"use client";

import { ThemeToggleButton } from "./theme-toggle-button";

export function ThemeToggleIconVariantsDemo() {
  return (
    <div className="flex flex-wrap gap-2">
      <ThemeToggleButton size="icon" variant="ghost" />
      <ThemeToggleButton size="icon" variant="outline" />
      <ThemeToggleButton size="icon" variant="default" />
      <ThemeToggleButton size="icon" variant="secondary" />
    </div>
  );
}
