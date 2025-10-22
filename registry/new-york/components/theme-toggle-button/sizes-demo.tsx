"use client";

import { useTheme } from "next-themes";
import { ThemeToggleButton } from "./theme-toggle-button";

export function ThemeToggleSizesDemo() {
  const { theme } = useTheme();

  return (
    <div className="flex flex-col items-start gap-8 sm:flex-row">
      <div className="flex items-start gap-2">
        <ThemeToggleButton size="sm" variant="outline">
          {theme === "dark" ? "Light" : "Dark"}
        </ThemeToggleButton>
        <ThemeToggleButton size="icon-sm" variant="outline" />
      </div>
      <div className="flex items-start gap-2">
        <ThemeToggleButton variant="outline">
          {theme === "dark" ? "Light" : "Dark"}
        </ThemeToggleButton>
        <ThemeToggleButton size="icon" variant="outline" />
      </div>
      <div className="flex items-start gap-2">
        <ThemeToggleButton size="lg" variant="outline">
          {theme === "dark" ? "Light" : "Dark"}
        </ThemeToggleButton>
        <ThemeToggleButton size="icon-lg" variant="outline" />
      </div>
    </div>
  );
}
