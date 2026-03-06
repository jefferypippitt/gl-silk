"use client";

import * as React from "react";
import { Dithering } from "@paper-design/shaders-react";

import { cn } from "@/lib/utils";

type DitheringProps = React.ComponentProps<typeof Dithering>;

interface DitherWaveProps extends Omit<DitheringProps, "shape"> {
  className?: string;
}

export function DitherWave({
  className,
  colorBack = "#1aff00",
  colorFront = "#0000ff",
  width = "100%",
  height = "100%",
  speed = 1.1,
  scale = 1,
  size = 5,
  type = "8x8",
  rotation = 309,
  ...props
}: DitherWaveProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <Dithering
        colorBack={colorBack}
        colorFront={colorFront}
        shape="wave"
        width={width}
        height={height}
        speed={speed}
        scale={scale}
        size={size}
        type={type}
        rotation={rotation}
        {...props}
      />
    </div>
  );
}
