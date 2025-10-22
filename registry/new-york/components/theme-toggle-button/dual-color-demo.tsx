"use client";

import { ThemeToggleButton } from "./theme-toggle-button";

export function ThemeToggleDualColorDemo() {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      <ThemeToggleButton
        size="icon"
        variant="ghost"
        className="[&_svg_circle]:fill-yellow-500 [&_svg_path]:stroke-yellow-500 [&[data-state=checked]_svg_circle]:fill-blue-500 [&[data-state=checked]_svg_path]:stroke-blue-500"
      />
      <ThemeToggleButton
        size="icon"
        variant="ghost"
        className="[&_svg_circle]:fill-orange-500 [&_svg_path]:stroke-orange-500 [&[data-state=checked]_svg_circle]:fill-purple-500 [&[data-state=checked]_svg_path]:stroke-purple-500"
      />
      <ThemeToggleButton
        size="icon"
        variant="ghost"
        className="[&_svg_circle]:fill-green-500 [&_svg_path]:stroke-green-500 [&[data-state=checked]_svg_circle]:fill-pink-500 [&[data-state=checked]_svg_path]:stroke-pink-500"
      />
      <ThemeToggleButton
        size="icon"
        variant="ghost"
        className="[&_svg_circle]:fill-amber-500 [&_svg_path]:stroke-amber-500 [&[data-state=checked]_svg_circle]:fill-indigo-500 [&[data-state=checked]_svg_path]:stroke-indigo-500"
      />
    </div>
  );
}
