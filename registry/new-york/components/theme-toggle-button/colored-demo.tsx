"use client";

import { ThemeToggleButton } from "./theme-toggle-button";

export function ThemeToggleColoredDemo() {
  return (
    <div className="flex items-center justify-center min-h-[200px] p-8 flex-wrap gap-4">
      <ThemeToggleButton
        size="icon"
        variant="outline"
        className="[&_svg_circle]:fill-yellow-500 [&_svg_path]:stroke-yellow-500"
      />
      <ThemeToggleButton
        size="icon"
        variant="outline"
        className="[&_svg_circle]:fill-blue-500 [&_svg_path]:stroke-blue-500"
      />
      <ThemeToggleButton
        size="icon"
        variant="outline"
        className="[&_svg_circle]:fill-orange-500 [&_svg_path]:stroke-orange-500"
      />
    </div>
  );
}
