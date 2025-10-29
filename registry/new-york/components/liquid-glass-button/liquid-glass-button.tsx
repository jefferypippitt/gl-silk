"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const liquidGlassButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive relative overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "bg-primary/20 backdrop-blur-sm text-primary-foreground hover:bg-primary/30 border border-primary/30",
        destructive:
          "bg-destructive/20 backdrop-blur-sm border border-destructive/40 text-white hover:bg-destructive/30 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40",
        "destructive-red":
          "bg-red-500 text-white hover:bg-red-600 focus-visible:ring-red-500/20 dark:focus-visible:ring-red-500/40 dark:bg-red-600",
        outline:
          "border-2 border-white/40 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/60 dark:border-white/30 dark:hover:border-white/50",
        secondary:
          "bg-secondary/30 backdrop-blur-sm text-secondary-foreground hover:bg-secondary/40 border border-secondary/40",
        ghost:
          "bg-white/5 backdrop-blur-sm hover:bg-white/15 hover:text-accent-foreground dark:bg-black/10 dark:hover:bg-black/20",
        link: "text-primary underline-offset-4 hover:underline bg-transparent",
      },
      size: {
        default: "h-9 px-4 py-2 rounded-full has-[>svg]:px-3",
        sm: "h-8 rounded-full gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-full px-6 has-[>svg]:px-4",
        icon: "size-9 rounded-full",
        "icon-sm": "size-8 rounded-full",
        "icon-lg": "size-10 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface LiquidGlassButtonProps
  extends React.ComponentProps<"button">,
    VariantProps<typeof liquidGlassButtonVariants> {
  asChild?: boolean;
  distortionStrength?: number;
  borderRadius?: number;
  animationSpeed?: number;
  scale?: number;
  offsetX?: number;
  offsetY?: number;
  rotation?: number;
  worldWidth?: number;
  worldHeight?: number;
  textClassName?: string;
}

// Utility functions for shader math
function smoothStep(a: number, b: number, t: number): number {
  t = Math.max(0, Math.min(1, (t - a) / (b - a)));
  return t * t * (3 - 2 * t);
}

function length(x: number, y: number): number {
  return Math.sqrt(x * x + y * y);
}

function roundedRectSDF(
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number
): number {
  const qx = Math.abs(x) - width + radius;
  const qy = Math.abs(y) - height + radius;
  return (
    Math.min(Math.max(qx, qy), 0) +
    length(Math.max(qx, 0), Math.max(qy, 0)) -
    radius
  );
}

function texture(x: number, y: number): { type: string; x: number; y: number } {
  return { type: "t", x, y };
}

const LiquidGlassButton = React.forwardRef<
  HTMLButtonElement,
  LiquidGlassButtonProps
>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      distortionStrength = 0.15,
      borderRadius = 0.0,
      animationSpeed = 1,
      scale = 1,
      offsetX,
      offsetY,
      rotation,
      worldWidth,
      worldHeight,
      textClassName,
      children,
      ...props
    },
    ref
  ) => {
    const containerRef = React.useRef<HTMLButtonElement>(null);
    const svgRef = React.useRef<SVGSVGElement>(null);
    const canvasRef = React.useRef<HTMLCanvasElement>(null);
    const animationFrameRef = React.useRef<number | undefined>(undefined);
    const timeRef = React.useRef(0);
    const uniqueIdRef = React.useRef(
      "liquid-glass-" + Math.random().toString(36).substr(2, 9)
    );
    const uniqueId = uniqueIdRef.current;

    const updateShader = React.useCallback(() => {
      const canvas = canvasRef.current;
      const svg = svgRef.current;
      const container = containerRef.current;

      if (!canvas || !svg || !container) return;

      const containerRect = container.getBoundingClientRect();
      const width = Math.floor(containerRect.width);
      const height = Math.floor(containerRect.height);

      if (width === 0 || height === 0) return;

      const canvasDPI = 2;
      const w = width * canvasDPI;
      const h = height * canvasDPI;

      canvas.width = w;
      canvas.height = h;
      const context = canvas.getContext("2d");
      if (!context) return;

      const data = new Uint8ClampedArray(w * h * 4);
      let maxScale = 0;
      const rawValues: number[] = [];

      for (let i = 0; i < data.length; i += 4) {
        const x = (i / 4) % w;
        const y = Math.floor(i / 4 / w);
        const uv = { x: x / w, y: y / h };

        // Calculate time-based animation
        const frame = timeRef.current * animationSpeed;
        const ix = uv.x - 0.5;
        const iy = uv.y - 0.5;

        // Apply rotation if specified
        let rotatedX = ix;
        let rotatedY = iy;
        if (rotation) {
          const rad = (rotation * Math.PI) / 180;
          const cos = Math.cos(rad);
          const sin = Math.sin(rad);
          rotatedX = ix * cos - iy * sin;
          rotatedY = ix * sin + iy * cos;
        }

        // Apply offset if specified
        const finalX =
          (offsetX !== undefined ? rotatedX + offsetX : rotatedX) * scale;
        const finalY =
          (offsetY !== undefined ? rotatedY + offsetY : rotatedY) * scale;

        // Calculate world dimensions
        const ww = worldWidth || 0.5;
        const wh = worldHeight || 0.5;

        const distanceToEdge = roundedRectSDF(
          finalX / ww,
          finalY / wh,
          0.3,
          0.2,
          borderRadius
        );

        const displacement = smoothStep(
          0.8,
          0,
          distanceToEdge - distortionStrength
        );
        const scaled = smoothStep(0, 1, displacement);

        const pos = texture(finalX * scaled + 0.5, finalY * scaled + 0.5);
        const dx = pos.x * w - x;
        const dy = pos.y * h - y;
        maxScale = Math.max(maxScale, Math.abs(dx), Math.abs(dy));
        rawValues.push(dx, dy);
      }

      maxScale *= 0.5;

      let index = 0;
      for (let i = 0; i < data.length; i += 4) {
        const r = rawValues[index++] / maxScale + 0.5;
        const g = rawValues[index++] / maxScale + 0.5;
        data[i] = r * 255;
        data[i + 1] = g * 255;
        data[i + 2] = 0;
        data[i + 3] = 255;
      }

      context.putImageData(new ImageData(data, w, h), 0, 0);

      const feImage = svg.querySelector(`#${uniqueId}_map`);
      const feDisplacementMap = svg.querySelector(
        `#${uniqueId}_filter feDisplacementMap`
      );

      if (feImage && feDisplacementMap instanceof SVGFEImageElement) {
        feImage.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "href",
          canvas.toDataURL()
        );
        if (feDisplacementMap instanceof SVGFEDisplacementMapElement) {
          feDisplacementMap.setAttribute(
            "scale",
            (maxScale / canvasDPI).toString()
          );
        }
      }
    }, [
      uniqueId,
      distortionStrength,
      borderRadius,
      animationSpeed,
      scale,
      offsetX,
      offsetY,
      rotation,
      worldWidth,
      worldHeight,
    ]);

    const animate = React.useCallback(() => {
      timeRef.current += 0.016; // ~60fps
      updateShader();
      animationFrameRef.current = requestAnimationFrame(animate);
    }, [updateShader]);

    React.useEffect(() => {
      animationFrameRef.current = requestAnimationFrame(animate);
      return () => {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
      };
    }, [animate]);

    React.useEffect(() => {
      updateShader();
    }, [updateShader]);

    const Comp = asChild ? Slot : "button";

    // Combine refs for containerRef and external ref
    const handleRef = React.useCallback(
      (node: HTMLButtonElement | null) => {
        containerRef.current = node;
        if (typeof ref === "function") {
          ref(node);
        } else if (ref) {
          ref.current = node;
        }
      },
      [ref]
    );

    return (
      <>
        {/* Hidden SVG with filter definition */}
        <svg
          ref={svgRef}
          width="0"
          height="0"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            pointerEvents: "none",
            zIndex: -1,
          }}
        >
          <defs>
            <filter
              id={`${uniqueId}_filter`}
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feImage id={`${uniqueId}_map`} width="100%" height="100%" />
              <feDisplacementMap
                in="SourceGraphic"
                in2={`${uniqueId}_map`}
                xChannelSelector="R"
                yChannelSelector="G"
                scale="0"
              />
            </filter>
          </defs>
        </svg>

        {/* Hidden canvas for displacement map */}
        <canvas ref={canvasRef} style={{ display: "none" }} />

        {/* Button with liquid glass effect */}
        <Comp
          ref={asChild ? undefined : handleRef}
          className={cn(
            liquidGlassButtonVariants({ variant, size, className })
          )}
          style={{
            backdropFilter: `url(#${uniqueId}_filter) blur(0.25px) contrast(1.2) brightness(1.05) saturate(1.1)`,
            boxShadow: `
              0 4px 8px rgba(0, 0, 0, 0.25),
              0 -10px 25px inset rgba(0, 0, 0, 0.15),
              0 -1px 4px 1px inset rgba(255, 255, 255, 0.74)
            `,
          }}
          {...props}
        >
          {/* Content */}
          <span
            className={cn("relative z-10", textClassName || "text-foreground")}
          >
            {children}
          </span>
        </Comp>
      </>
    );
  }
);

LiquidGlassButton.displayName = "LiquidGlassButton";

export { LiquidGlassButton, liquidGlassButtonVariants };
