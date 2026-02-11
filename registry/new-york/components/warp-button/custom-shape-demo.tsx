"use client";

import { WarpButton } from "./warp-button";

export function WarpButtonCustomShapeDemo() {
  return (
    <div className="flex items-center justify-center min-h-[200px] p-8">
      <WarpButton
        colors={["#ffffff", "#000000"]}
        shape="stripes"
        shapeScale={0.2}
        distortion={0.4}
        swirl={0.8}
        textClassName="text-black"
      >
        Stripes Pattern
      </WarpButton>
    </div>
  );
}