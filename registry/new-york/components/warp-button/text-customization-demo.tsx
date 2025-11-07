"use client";

import { WarpButton } from "./warp-button";

export function WarpButtonTextCustomizationDemo() {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {/* Mix blend mode for color inversion effect */}
      <WarpButton textClassName="text-yellow-500">Inverted Text</WarpButton>
    </div>
  );
}
