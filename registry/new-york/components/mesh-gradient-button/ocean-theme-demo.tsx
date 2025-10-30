"use client";

import { MeshGradientButton } from "./mesh-gradient-button";
import { OpenInV0Button } from "@/components/open-in-v0-button";

export function OceanThemeDemo() {
  return (
    <>
      <div className="absolute top-4 right-4 z-10">
        <OpenInV0Button name="mesh-gradient-button-ocean-theme" />
      </div>
      <div className="flex items-center justify-center min-h-[200px] p-8">
      <MeshGradientButton
        colors={["#2196f3", "#00bcd4", "#009688", "#4caf50"]}
        distortion={0.3}
        swirl={0.05}
        speed={0.5}
        textClassName="text-white mix-blend-difference"
      >
        Ocean Breeze
      </MeshGradientButton>
    </div>
    </>
  );
}
