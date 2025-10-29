"use client";

import { LiquidGlassButton } from "./liquid-glass-button";
import { LogOut, Search, Heart } from "lucide-react";

export function LiquidGlassSizesDemo() {
  return (
    <div className="flex flex-wrap gap-4 items-center justify-center min-h-[200px] p-8 relative overflow-hidden rounded-lg bg-gradient-to-br from-green-400 via-cyan-500 to-blue-500">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />

      <LiquidGlassButton size="sm" textClassName="text-white">
        Small
      </LiquidGlassButton>
      <LiquidGlassButton size="default" textClassName="text-white">
        Default
      </LiquidGlassButton>
      <LiquidGlassButton size="lg" textClassName="text-white">
        Large
      </LiquidGlassButton>
      <LiquidGlassButton textClassName="text-white">
        <LogOut className="size-4" />
        Logout
      </LiquidGlassButton>
      <LiquidGlassButton size="icon" textClassName="text-white">
        <Search className="size-4" />
      </LiquidGlassButton>
      <LiquidGlassButton size="lg" textClassName="text-white">
        <Heart className="size-4" />
        Like
      </LiquidGlassButton>
    </div>
  );
}
