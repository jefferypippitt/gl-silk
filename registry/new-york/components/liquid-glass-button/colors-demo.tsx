"use client";

import { LiquidGlassButton } from "./liquid-glass-button";

export function LiquidGlassColorsDemo() {
  return (
    <div className="flex flex-wrap gap-4 items-center justify-center min-h-[200px] p-8 relative overflow-hidden rounded-lg bg-gradient-to-br from-orange-400 via-red-500 to-pink-500">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />

      <LiquidGlassButton textClassName="text-blue-600">
        Blue Text
      </LiquidGlassButton>
      <LiquidGlassButton textClassName="text-green-600">
        Green Text
      </LiquidGlassButton>
      <LiquidGlassButton textClassName="text-purple-600">
        Purple Text
      </LiquidGlassButton>
      <LiquidGlassButton textClassName="text-white font-bold">
        White Bold
      </LiquidGlassButton>
      <LiquidGlassButton textClassName="text-black font-bold">
        Black Bold
      </LiquidGlassButton>
    </div>
  );
}
