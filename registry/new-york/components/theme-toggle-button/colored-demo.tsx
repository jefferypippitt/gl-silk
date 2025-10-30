"use client";

import { ThemeToggleButton } from "./theme-toggle-button";
import { OpenInV0Button } from "@/components/open-in-v0-button";

export function ThemeToggleColoredDemo() {
  return (
    <>
      <div className="absolute top-4 right-4 z-10">
        <OpenInV0Button name="theme-toggle-button-colored" />
      </div>
      <div className="flex flex-wrap gap-4">
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
    </>
  );
}
