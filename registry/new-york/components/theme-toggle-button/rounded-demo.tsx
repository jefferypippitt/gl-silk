"use client";

import { ThemeToggleButton } from "./theme-toggle-button";

export function ThemeToggleRoundedDemo() {
  return (
    <div className="flex flex-col items-center gap-8">
      <div className="flex items-center gap-4">
        <ThemeToggleButton
          variant="ghost"
          size="icon"
          className="rounded-full"
        />
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
      </div>

      <div className="flex items-center gap-4">
        <ThemeToggleButton
          variant="ghost"
          size="icon"
          className="rounded-full [&_svg_circle]:fill-yellow-500 [&_svg_path]:stroke-yellow-500 [&[data-state=checked]_svg_circle]:fill-blue-500 [&[data-state=checked]_svg_path]:stroke-blue-500"
        />
        <ThemeToggleButton
          variant="ghost"
          size="icon"
          className="rounded-full [&_svg_circle]:fill-orange-500 [&_svg_path]:stroke-orange-500 [&[data-state=checked]_svg_circle]:fill-purple-500 [&[data-state=checked]_svg_path]:stroke-purple-500"
        />
        <ThemeToggleButton
          variant="ghost"
          size="icon"
          className="rounded-full [&_svg_circle]:fill-green-500 [&_svg_path]:stroke-green-500 [&[data-state=checked]_svg_circle]:fill-pink-500 [&[data-state=checked]_svg_path]:stroke-pink-500"
        />
      </div>
    </div>
  );
}
