"use client";

import { Text3DComponent } from "./text-3d";

export function Text3DGradientDemo() {
  return (
    <div className="flex flex-col gap-8 items-center justify-center w-full p-8">
      <div className="w-full max-w-2xl">
        <Text3DComponent
          text={`3D\nText`}
          size={1.0}
          height={0.0}
          bevelEnabled={true}
          bevelSize={0.05}
          bevelThickness={0.25}
          rotation={[0.0, 0.0, 0.0]}
          heightContainer={300}
          letterSpacing={0.0}
          lineHeight={1.0}
          gradientColors={["#22577a", "#38a3a5", "#57cc99", "#80ed99"]}
          materialType="gradient"
        />
      </div>
    </div>
  );
}
