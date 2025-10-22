"use client";

import { useTheme } from "next-themes";
import { ThemeToggleButton } from "./theme-toggle-button";

export function ThemeToggleWithTextDemo() {
  const { theme } = useTheme();

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <ThemeToggleButton variant="outline" size="sm">
          {theme === "dark" ? "Light" : "Dark"}
        </ThemeToggleButton>
      </div>
      <div className="flex items-center gap-2">
        <ThemeToggleButton variant="outline">
          Switch to {theme === "dark" ? "Light" : "Dark"}
        </ThemeToggleButton>
      </div>
      <div className="flex items-center gap-2">
        <ThemeToggleButton variant="default">
          {theme === "dark" ? "Light Mode" : "Dark Mode"}
        </ThemeToggleButton>
      </div>
    </div>
  );
}
