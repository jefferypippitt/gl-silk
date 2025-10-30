"use client";

import { LiquidGlassButton } from "./liquid-glass-button";
export function LiquidGlassColorsDemo() {
  return (
    <div className="flex flex-wrap gap-4 items-center justify-center min-h-[200px] p-8 relative overflow-hidden rounded-lg">
      <LiquidGlassButton textClassName="text-red-500">
        Red Text
      </LiquidGlassButton>
      <LiquidGlassButton textClassName="text-green-500">
        Green Text
      </LiquidGlassButton>
      <LiquidGlassButton textClassName="text-blue-500">
        Blue Text
      </LiquidGlassButton>
    </div>
  );
}
