"use client";

import { MeshGradientButton } from "./mesh-gradient-button";
import { OpenInV0Button } from "@/components/open-in-v0-button";

export function MeshGradientDemo() {
  return (
    <>
      <div className="absolute top-4 right-4 z-10">
        <OpenInV0Button name="mesh-gradient-button" />
      </div>
      <div className="flex flex-wrap gap-4 justify-center">
        <MeshGradientButton>Mesh Gradient</MeshGradientButton>
      </div>
    </>
  );
}
