"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { MeshGradient } from "@paper-design/shaders-react";

import { cn } from "@/lib/utils";

const meshGradientButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive relative overflow-hidden",
  {
    variants: {
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

interface MeshGradientButtonProps
  extends React.ComponentProps<"button">,
    VariantProps<typeof meshGradientButtonVariants> {
  asChild?: boolean;
  colors?: string[];
  distortion?: number;
  swirl?: number;
  grainMixer?: number;
  grainOverlay?: number;
  speed?: number;
  scale?: number;
  frame?: number;
  rotation?: number;
  offsetX?: number;
  offsetY?: number;
  width?: number | string;
  height?: number | string;
  fit?: "contain" | "cover";
  worldWidth?: number;
  worldHeight?: number;
  originX?: number;
  originY?: number;
  minPixelRatio?: number;
  maxPixelCount?: number;
  className?: string;
  textClassName?: string;
}

const MeshGradientButton = React.forwardRef<
  HTMLButtonElement,
  MeshGradientButtonProps
>(
  (
    {
      className,
      size,
      asChild = false,
      colors = ["#cc3333", "#cc9933", "#99cc33", "#33cc33"],
      distortion = 0.8,
      swirl = 0.1,
      grainMixer = 0,
      grainOverlay = 0,
      speed = 1,
      scale = 1,
      frame,
      rotation,
      offsetX,
      offsetY,
      width,
      height,
      fit,
      worldWidth,
      worldHeight,
      originX,
      originY,
      minPixelRatio,
      maxPixelCount,
      textClassName,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(meshGradientButtonVariants({ size, className }))}
        ref={ref}
        {...props}
      >
        {/* Mesh Gradient Background */}
        <div className="absolute inset-0 -z-10">
          <MeshGradient
            width="100%"
            height="100%"
            colors={colors}
            distortion={distortion}
            swirl={swirl}
            grainMixer={grainMixer}
            grainOverlay={grainOverlay}
            speed={speed}
            scale={scale}
            frame={frame}
            rotation={rotation}
            offsetX={offsetX}
            offsetY={offsetY}
            worldWidth={worldWidth}
            worldHeight={worldHeight}
            originX={originX}
            originY={originY}
            minPixelRatio={minPixelRatio}
            maxPixelCount={maxPixelCount}
            fit="cover"
          />
        </div>

        {/* Content */}
        <span className={cn("relative z-10", textClassName || "text-primary")}>
          {children}
        </span>
      </Comp>
    );
  }
);

MeshGradientButton.displayName = "MeshGradientButton";

export { MeshGradientButton, meshGradientButtonVariants };
