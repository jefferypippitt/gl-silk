"use client";

import Image from "next/image";
import { LiquidGlassButton } from "./liquid-glass-button";
import { OpenInV0Button } from "@/components/open-in-v0-button";

export function LiquidGlassVariantsDemo() {
  return (
    <>
      <div className="absolute top-4 right-4 z-10">
        <OpenInV0Button name="liquid-glass-button-variants" />
      </div>
      <div className="relative w-full h-[600px] md:h-[700px] overflow-hidden rounded-lg border">
      {/* Background image */}
      <Image
        src="/images/wave-bg.jpg"
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
    </>
  );
}
