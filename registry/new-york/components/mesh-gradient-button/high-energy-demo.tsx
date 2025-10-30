"use client";

import { MeshGradientButton } from "./mesh-gradient-button";
import { OpenInV0Button } from "@/components/open-in-v0-button";

export function HighEnergyDemo() {
  return (
    <>
      <div className="absolute top-4 right-4 z-10">
        <OpenInV0Button name="mesh-gradient-button-high-energy" />
      </div>
      <div className="flex items-center justify-center min-h-[200px] p-8">
        <MeshGradientButton
          colors={["#ff0080", "#ff4000", "#ff8000", "#ffb000"]}
          distortion={1.0}
          swirl={0.3}
          speed={2}
          grainMixer={0.2}
          textClassName="text-white mix-blend-difference"
        >
          High Energy
        </MeshGradientButton>
      </div>
    </>
  );
}
