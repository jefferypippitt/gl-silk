"use client";

import { WarpButton } from "./warp-button";

export function WarpButtonHighDistortionDemo() {
  return (
    <div className="flex items-center justify-center min-h-[200px] p-8">
      <WarpButton
        colors={["#ff0080", "#ff4000", "#ff8000", "#ffb000"]}
        distortion={0.8}
        swirl={1.5}
        speed={2}
        textClassName="text-white"
      >
        High Distortion
      </WarpButton>
    </div>
  );
}