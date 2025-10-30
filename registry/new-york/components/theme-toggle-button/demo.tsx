"use client";

import { ThemeToggleButton } from "./theme-toggle-button";
import { OpenInV0Button } from "@/components/open-in-v0-button";

export function ThemeToggleDemo() {
  return (
    <>
      <div className="absolute top-4 right-4 z-10">
        <OpenInV0Button name="theme-toggle-button" />
      </div>
      <div className="flex items-center justify-center min-h-[200px] p-8">
        <ThemeToggleButton size="icon" variant="ghost" />
      </div>
    </>
  );
}
