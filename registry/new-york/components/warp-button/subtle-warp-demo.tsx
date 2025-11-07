"use client";

import { WarpButton } from "./warp-button";

export function WarpButtonSubtleWarpDemo() {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      <WarpButton
        colors={["#2196f3", "#00bcd4", "#009688", "#4caf50"]}
        distortion={0.1}
        swirl={0.3}
        speed={0.5}
        textClassName="text-white"
      >
        Subtle Warp
      </WarpButton>
    </div>
  );
}