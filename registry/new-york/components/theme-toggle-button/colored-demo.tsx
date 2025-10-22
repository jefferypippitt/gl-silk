"use client";

import { ThemeToggleButton } from "./theme-toggle-button";

export function ThemeToggleColoredDemo() {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      <ThemeToggleButton
        size="icon"
        variant="ghost"
        className="[&_svg_circle]:fill-yellow-500 [&_svg_path]:stroke-yellow-500"
      />
      <ThemeToggleButton
        size="icon"
        variant="ghost"
        className="[&_svg_circle]:fill-blue-500 [&_svg_path]:stroke-blue-500"
      />
      <ThemeToggleButton
        size="icon"
        variant="ghost"
        className="[&_svg_circle]:fill-orange-500 [&_svg_path]:stroke-orange-500"
      />
      <ThemeToggleButton
        size="icon"
        variant="ghost"
        className="[&_svg_circle]:fill-purple-500 [&_svg_path]:stroke-purple-500"
      />
      <ThemeToggleButton
        size="icon"
        variant="ghost"
        className="[&_svg_circle]:fill-green-500 [&_svg_path]:stroke-green-500"
      />
      <ThemeToggleButton
        size="icon"
        variant="ghost"
        className="[&_svg_circle]:fill-pink-500 [&_svg_path]:stroke-pink-500"
      />
    </div>
  );
}
