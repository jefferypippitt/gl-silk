"use client";

import { Text3DComponent } from "./text-3d";

export function Text3DDemo() {
  return (
    <div className="flex flex-col gap-8 items-center justify-center w-full p-8">
      <div className="w-full max-w-2xl">
        <Text3DComponent
          text={`3D\nText`}
          size={0.8}
          height={0.3}
          bevelEnabled={true}
          bevelSize={0.02}
          bevelThickness={0.05}
          letterSpacing={0.0}
          lineHeight={1.0}
          rotation={[-0.5, -0.25, 0]}
          heightContainer={300}
          color="#f5f5f5"
          materialType="standard"
        />
      </div>
    </div>
  );
}
