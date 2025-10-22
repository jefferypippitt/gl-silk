"use client";

import { useTheme } from "next-themes";
import { ThemeToggleButton } from "./theme-toggle-button";
import { SplitTextAnimation } from "@/components/ui/split-text-animation";

export function ThemeToggleAdvancedDemo() {
  const { theme } = useTheme();

  return (
    <div className="flex flex-col items-center gap-4">
      <ThemeToggleButton
        variant="ghost"
        size="sm"
        className="[&_svg_circle]:fill-yellow-500 [&_svg_path]:stroke-yellow-500 [&[data-state=checked]_svg_circle]:fill-blue-500 [&[data-state=checked]_svg_path]:stroke-blue-500 shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <SplitTextAnimation
          text={theme === "dark" ? "Light" : "Dark"}
          animationType="fade"
          duration={0.6}
          delay={0.1}
        />
      </ThemeToggleButton>
    </div>
  );
}
