"use client";

import { WarpButton } from "./warp-button";

export function WarpButtonTextCustomizationDemo() {
  return (
    <div className="flex items-center justify-center min-h-[200px] p-8">
      {/* Mix blend mode for color inversion effect */}
      <WarpButton textClassName="text-yellow-500">Inverted Text</WarpButton>
    </div>
  );
}
