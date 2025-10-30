"use client";

import { MeshGradientButton } from "./mesh-gradient-button";
import { OpenInV0Button } from "@/components/open-in-v0-button";

export function TextCustomizationDemo() {
  return (
    <>
      <div className="absolute top-4 right-4 z-10">
        <OpenInV0Button name="mesh-gradient-button-text-customization" />
      </div>
      <div className="flex items-center justify-center min-h-[200px] p-8">
      <MeshGradientButton
        colors={["#ffffff", "#000000"]}
        distortion={1}
        swirl={0.2}
        textClassName="text-green-500"
      >
        Custom Text Color
      </MeshGradientButton>
    </div>
    </>
  );
}
