"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const liquidGlassButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive relative overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "bg-background/20 hover:bg-background/30 dark:bg-background/20 dark:hover:bg-background/30",
        ghost:
          "bg-transparent border border-transparent hover:bg-background/30 dark:hover:bg-background/30",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 px-6 has-[>svg]:px-4",
        icon: "size-9 rounded-md",
        "icon-sm": "size-8 rounded-md",
        "icon-lg": "size-10 rounded-md",
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
  blur?: number;
  brightness?: number;
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
      distortionStrength: distortionStrengthProp,
      borderRadius: borderRadiusProp,
      blur: blurProp,
      brightness: brightnessProp,
      textClassName,
      children,
      ...props
    },
    ref
  ) => {
    // Use useMemo to ensure stable references for dependency arrays
    // All variants use the same distortion and border radius defaults
    const distortionStrength = React.useMemo(
      () =>
        distortionStrengthProp !== undefined ? distortionStrengthProp : 1.0,
      [distortionStrengthProp]
    );
    const borderRadius = React.useMemo(
      () => (borderRadiusProp !== undefined ? borderRadiusProp : 0.6),
      [borderRadiusProp]
    );
    const blur =
      blurProp !== undefined ? blurProp : variant === "ghost" ? 1.0 : 0.25;
    const brightness =
      brightnessProp !== undefined
        ? brightnessProp
        : variant === "ghost"
        ? 1.0
        : 1.2;
    const containerRef = React.useRef<HTMLButtonElement>(null);
    const svgRef = React.useRef<SVGSVGElement>(null);
    const canvasRef = React.useRef<HTMLCanvasElement>(null);
    // Use React's useId() for stable, hydration-safe unique IDs
    const reactId = React.useId();
    const uniqueId = `liquid-glass-${reactId.replace(/:/g, "-")}`;

    const updateShader = React.useCallback(() => {
      const canvas = canvasRef.current;
      const svg = svgRef.current;
      const container = containerRef.current;

      if (!canvas || !svg || !container) return;

      const containerRect = container.getBoundingClientRect();
      const width = Math.floor(containerRect.width);
      const height = Math.floor(containerRect.height);

      if (width === 0 || height === 0) return;

      const canvasDPI = 1; // Match vanilla example
      const w = width * canvasDPI;
      const h = height * canvasDPI;

      canvas.width = w;
      canvas.height = h;
      const context = canvas.getContext("2d");
      if (!context) return;

      // Update SVG filter dimensions to match button size (userSpaceOnUse)
      const filterEl = svg.querySelector(`#${uniqueId}_filter`);
      if (filterEl instanceof SVGFilterElement) {
        filterEl.setAttribute("x", "0");
        filterEl.setAttribute("y", "0");
        filterEl.setAttribute("width", width.toString());
        filterEl.setAttribute("height", height.toString());
      }

      // Update feImage dimensions
      const feImage = svg.querySelector(`#${uniqueId}_map`);
      if (feImage instanceof SVGFEImageElement) {
        feImage.setAttribute("width", width.toString());
        feImage.setAttribute("height", height.toString());
      }

      const data = new Uint8ClampedArray(w * h * 4);
      let maxScale = 0;
      const rawValues: number[] = [];

      // Fragment shader matching vanilla example exactly
      for (let i = 0; i < data.length; i += 4) {
        const x = (i / 4) % w;
        const y = Math.floor(i / 4 / w);
        const uv = { x: x / w, y: y / h };

        // Convert to centered coordinates (exact match to vanilla)
        const ix = uv.x - 0.5;
        const iy = uv.y - 0.5;

        // Use fixed SDF dimensions like vanilla example (can be adjusted via borderRadius prop)
        const sdfWidth = 0.3;
        const sdfHeight = 0.2;
        const sdfRadius = borderRadius;

        const distanceToEdge = roundedRectSDF(
          ix,
          iy,
          sdfWidth,
          sdfHeight,
          sdfRadius
        );

        // Control displacement strength with distortionStrength prop (maps to vanilla's 0.15)
        // When distortionStrength is 0, no distortion should be applied
        let pos;
        if (distortionStrength === 0) {
          // No distortion: return original texture coordinates
          pos = texture(uv.x, uv.y);
        } else {
          const displacementAmount = distortionStrength * 0.15;
          const displacement = smoothStep(
            0.8,
            0,
            distanceToEdge - displacementAmount
          );
          const scaled = smoothStep(0, 1, displacement);
          // Return texture coordinates
          pos = texture(ix * scaled + 0.5, iy * scaled + 0.5);
        }

        // Calculate displacement from original position
        const dx = pos.x * w - x;
        const dy = pos.y * h - y;

        // Negate displacement to invert the effect (bulge outward instead of pinch inward)
        const invertedDx = -dx;
        const invertedDy = -dy;

        maxScale = Math.max(
          maxScale,
          Math.abs(invertedDx),
          Math.abs(invertedDy)
        );
        rawValues.push(invertedDx, invertedDy);
      }

      // Normalize displacement map
      maxScale *= 0.5;

      let index = 0;
      for (let i = 0; i < data.length; i += 4) {
        // Handle zero displacement case (when distortionStrength = 0)
        if (maxScale === 0) {
          data[i] = 128; // 0.5 * 255 = no displacement
          data[i + 1] = 128;
          data[i + 2] = 0;
          data[i + 3] = 255;
          index += 2; // Skip the raw values we're not using
        } else {
          const r = rawValues[index++] / maxScale + 0.5;
          const g = rawValues[index++] / maxScale + 0.5;
          data[i] = r * 255;
          data[i + 1] = g * 255;
          data[i + 2] = 0;
          data[i + 3] = 255;
        }
      }

      context.putImageData(new ImageData(data, w, h), 0, 0);

      const feDisplacementMap = svg.querySelector(
        `#${uniqueId}_filter feDisplacementMap`
      );

      if (feImage && feDisplacementMap) {
        // Create data URL from canvas (exact match to vanilla example)
        const dataUrl = canvas.toDataURL();

        // Update feImage (exact match to vanilla example - only namespaced version)
        feImage.setAttributeNS("http://www.w3.org/1999/xlink", "href", dataUrl);

        if (feDisplacementMap instanceof SVGFEDisplacementMapElement) {
          // Calculate displacement scale
          const displacementScale = (maxScale / canvasDPI).toString();
          feDisplacementMap.setAttribute("scale", displacementScale);
        }
      }
    }, [uniqueId, distortionStrength, borderRadius]);

    // Initial shader update and resize observer
    React.useEffect(() => {
      // Initial update
      updateShader();

      // Update on resize
      const resizeObserver = new ResizeObserver(() => {
        updateShader();
      });

      if (containerRef.current) {
        resizeObserver.observe(containerRef.current);
      }

      return () => {
        resizeObserver.disconnect();
      };
    }, [updateShader]);

    // Update shader when props change
    // Note: We only need updateShader here since it already depends on distortionStrength and borderRadius
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
              x="0"
              y="0"
              width="100"
              height="100"
            >
              <feImage id={`${uniqueId}_map`} width="100" height="100" />
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
            liquidGlassButtonVariants({ variant, size }),
            "relative",
            className
          )}
          style={{
            boxShadow:
              variant === "ghost"
                ? "none"
                : `
              0 4px 8px rgba(0, 0, 0, 0.25),
              0 -10px 25px inset rgba(0, 0, 0, 0.15),
              0 -1px 4px 1px inset rgba(255, 255, 255, 0.1)
            `,
            backdropFilter: `url(#${uniqueId}_filter) blur(${blur}px) brightness(${brightness})`,
            WebkitBackdropFilter: `url(#${uniqueId}_filter) blur(${blur}px) brightness(${brightness})`,
          }}
          {...props}
        >
          {/* Content (not distorted) - only render if children exist */}
          {children && (
            <span
              className={cn(
                "relative z-10 inline-flex items-center gap-2",
                textClassName || "text-foreground"
              )}
            >
              {children}
            </span>
          )}
        </Comp>
      </>
    );
  }
);

LiquidGlassButton.displayName = "LiquidGlassButton";

export { LiquidGlassButton, liquidGlassButtonVariants };
