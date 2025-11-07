"use client";

import { WarpButton } from "./warp-button";

export function WarpButtonCustomShapeDemo() {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
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