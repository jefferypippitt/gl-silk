"use client";

import { ThemeToggleButton } from "./theme-toggle-button";

export function ThemeToggleDemo() {
  return (
    <div className="flex items-center justify-center min-h-[200px] p-8">
      <ThemeToggleButton size="icon" variant="ghost" />
    </div>
  );
}
