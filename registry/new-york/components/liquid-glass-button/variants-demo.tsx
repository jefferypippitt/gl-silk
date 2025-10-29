"use client";

import Image from "next/image";
import { LiquidGlassButton } from "./liquid-glass-button";

export function LiquidGlassVariantsDemo() {
  return (
    <div className="relative h-[500px] overflow-hidden rounded-lg border">
      {/* Background image */}
      <Image
        src="/images/demo-bg-for-liquid-button.jpg"
        alt="Background"
        fill
        className="object-cover"
        priority
      />

      {/* Centered buttons */}
      <div className="relative flex flex-wrap gap-4 items-center justify-center h-full p-8 z-10">
        <LiquidGlassButton variant="default" textClassName="text-white">
          Default
        </LiquidGlassButton>
        <LiquidGlassButton variant="outline" textClassName="text-white">
          Outline
        </LiquidGlassButton>
        <LiquidGlassButton variant="secondary" textClassName="text-white">
          Secondary
        </LiquidGlassButton>
        <LiquidGlassButton variant="ghost" textClassName="text-white">
          Ghost
        </LiquidGlassButton>
        <LiquidGlassButton variant="destructive" textClassName="text-white">
          Destructive
        </LiquidGlassButton>
      </div>
    </div>
  );
}
