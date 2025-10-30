"use client";

import { ThemeToggleButton } from "./theme-toggle-button";
import { OpenInV0Button } from "@/components/open-in-v0-button";

export function ThemeToggleRoundedDemo() {
  return (
    <>
      <div className="absolute top-4 right-4 z-10">
        <OpenInV0Button name="theme-toggle-button-rounded" />
      </div>
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
    </>
  );
}
