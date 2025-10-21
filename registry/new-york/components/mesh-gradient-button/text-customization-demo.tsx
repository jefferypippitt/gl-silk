"use client";

import { MeshGradientButton } from "./mesh-gradient-button";

export function TextCustomizationDemo() {
  return (
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
  );
}
