"use client";

import Image from "next/image";
import { LiquidGlassButton } from "./liquid-glass-button";

const BG_IMAGE = "https://glsilk.vercel.app/images/glwp.jpg"

export function LiquidGlassVariantsDemo() {
  return (
    <div className="relative w-full h-[600px] md:h-[700px] overflow-hidden rounded-lg border">
      <Image
        src={BG_IMAGE}
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
        <LiquidGlassButton variant="ghost" textClassName="text-white">
          Ghost
        </LiquidGlassButton>
      </div>
    </div>
  );
}
