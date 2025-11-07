"use client";

import { WarpButton } from "./warp-button";

export function WarpButtonInkDemo() {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      <WarpButton
        colors={["#101213", "#9fadaa", "#f3fee7", "#f3fee7"]}
        proportion={0.05}
        softness={0}
        distortion={0.25}
        swirl={0.8}
        swirlIterations={10}
        shape="checks"
        shapeScale={0.28}
        speed={2.5}
        scale={1.2}
        rotation={44}
        textClassName="text-white"
      >
        Ink Warp
      </WarpButton>
    </div>
  );
}