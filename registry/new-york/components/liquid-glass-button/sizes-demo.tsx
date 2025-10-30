"use client";

import { LiquidGlassButton } from "./liquid-glass-button";
import { LogOut, Search, Heart } from "lucide-react";
import { OpenInV0Button } from "@/components/open-in-v0-button";

export function LiquidGlassSizesDemo() {
  return (
    <>
      <div className="absolute top-4 right-4 z-10">
        <OpenInV0Button name="liquid-glass-button-sizes" />
      </div>
      <div className="flex flex-wrap gap-4 items-center justify-center min-h-[200px] p-8 relative overflow-hidden rounded-lg">
      <LiquidGlassButton size="sm">Small</LiquidGlassButton>
      <LiquidGlassButton size="default">Default</LiquidGlassButton>
      <LiquidGlassButton size="lg">Large</LiquidGlassButton>
      <LiquidGlassButton className="rounded-full">
        <LogOut className="size-4 text-primary" />
        Logout
      </LiquidGlassButton>
      <LiquidGlassButton size="icon">
        <Search className="size-4" />
      </LiquidGlassButton>
    </div>
    </>
  );
}
