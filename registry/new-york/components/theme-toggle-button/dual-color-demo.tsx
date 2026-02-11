"use client";

import { ThemeToggleButton } from "./theme-toggle-button";
export function ThemeToggleDualColorDemo() {
  return (
    <div className="flex items-center justify-center min-h-[200px] p-8 gap-4">
      <ThemeToggleButton
        size="icon"
        variant="outline"
        className="[&_svg_circle]:fill-yellow-500 [&_svg_path]:stroke-yellow-500 [&[data-state=checked]_svg_circle]:fill-blue-500 [&[data-state=checked]_svg_path]:stroke-blue-500"
      />
      <ThemeToggleButton
        size="icon"
        variant="outline"
        className="[&_svg_circle]:fill-orange-500 [&_svg_path]:stroke-orange-500 [&[data-state=checked]_svg_circle]:fill-purple-500 [&[data-state=checked]_svg_path]:stroke-purple-500"
      />
      <ThemeToggleButton
        size="icon"
        variant="outline"
        className="[&_svg_circle]:fill-green-500 [&_svg_path]:stroke-green-500 [&[data-state=checked]_svg_circle]:fill-pink-500 [&[data-state=checked]_svg_path]:stroke-pink-500"
      />
    </div>
  );
}
