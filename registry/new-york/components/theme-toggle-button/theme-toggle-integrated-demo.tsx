"use client";

import { ThemeToggleButton } from "./theme-toggle-button";

export function ThemeToggleIntegratedDemo() {
  return (
    <div className="flex items-center gap-4">
      <ThemeToggleButton size="icon" variant="outline" />
      <ThemeToggleButton
        size="icon"
        variant="ghost"
        className="[&_svg_circle]:fill-yellow-500 [&_svg_path]:stroke-yellow-500 [&[data-state=checked]_svg_circle]:fill-blue-500 [&[data-state=checked]_svg_path]:stroke-blue-500"
      />
      <ThemeToggleButton
        size="icon"
        variant="outline"
        className="[&_svg_circle]:fill-yellow-500 [&_svg_path]:stroke-yellow-500 [&[data-state=checked]_svg_circle]:fill-blue-500 [&[data-state=checked]_svg_path]:stroke-blue-500"
      />
    </div>
  );
}
