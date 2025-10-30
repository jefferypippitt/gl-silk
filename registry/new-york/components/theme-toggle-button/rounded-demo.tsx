"use client";

import { ThemeToggleButton } from "./theme-toggle-button";
export function ThemeToggleRoundedDemo() {
  return (
    <div className="flex gap-4">
      <ThemeToggleButton
        variant="outline"
        size="icon"
        className="rounded-full"
      />
      <ThemeToggleButton
        variant="default"
        size="icon"
        className="rounded-full"
      />
      <ThemeToggleButton
        variant="outline"
        size="icon"
        className="rounded-full [&_svg_circle]:fill-yellow-500 [&_svg_path]:stroke-yellow-500 [&[data-state=checked]_svg_circle]:fill-blue-500 [&[data-state=checked]_svg_path]:stroke-blue-500"
      />
    </div>
  );
}
