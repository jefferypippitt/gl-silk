"use client";

import { ThemeToggleButton } from "./theme-toggle-button";
import { OpenInV0Button } from "@/components/open-in-v0-button";

export function ThemeToggleDualColorDemo() {
  return (
    <>
      <div className="absolute top-4 right-4 z-10">
        <OpenInV0Button name="theme-toggle-button-dual-color" />
      </div>
      <div className="flex gap-4">
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
    </>
  );
}
