"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { gsap } from "gsap";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

// Register the MorphSVGPlugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(MorphSVGPlugin);
}

import { cn } from "@/lib/utils";

const playPauseButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
      },
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
      variant: "default",
      size: "default",
    },
  }
);

interface PlayPauseButtonProps
  extends React.ComponentProps<"button">,
    VariantProps<typeof playPauseButtonVariants> {
  asChild?: boolean;
  duration?: number;
  ease?: string;
  onStateChange?: (isPlaying: boolean) => void;
  showText?: boolean;
  playText?: string;
  pauseText?: string;
}

const PlayPauseButton = React.forwardRef<
  HTMLButtonElement,
  PlayPauseButtonProps
>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      duration = 0.5,
      ease = "power2.inOut",
      onClick,
      onStateChange,
      showText = false,
      playText = "Play",
      pauseText = "Pause",
      children,
      ...props
    },
    ref
  ) => {
    const [isPlaying, setIsPlaying] = React.useState(false);
    const pathRef = React.useRef<SVGPathElement>(null);

    // SVG path data for Play and Pause icons from lucide-react (filled versions)
    const playPathData =
      "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A 2 2 0 0 1 5 19z";
    const pausePathData = "M6 3h4v18H6V3zm8 0h4v18h-4V3z";

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!pathRef.current) return;

      const newIsPlaying = !isPlaying;
      const targetPath = newIsPlaying ? pausePathData : playPathData;

      // Morph the path using MorphSVGPlugin
      gsap.to(pathRef.current, {
        duration,
        ease,
        morphSVG: targetPath,
      });

      setIsPlaying(newIsPlaying);
      onStateChange?.(newIsPlaying);

      // Call the original onClick handler if provided
      onClick?.(e);
    };

    const Comp = asChild ? Slot : "button";

    // Determine if this is an icon-only button
    const isIconOnly =
      size === "icon" || size === "icon-sm" || size === "icon-lg";

    return (
      <Comp
        className={cn(playPauseButtonVariants({ variant, size, className }))}
        ref={ref}
        onClick={handleClick}
        aria-label={props["aria-label"] || (isPlaying ? pauseText : playText)}
        {...props}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-4"
        >
          <path ref={pathRef} d={playPathData} fill="currentColor" />
        </svg>
        {(showText || children) && !isIconOnly && (
          <span>{children || (isPlaying ? pauseText : playText)}</span>
        )}
      </Comp>
    );
  }
);

PlayPauseButton.displayName = "PlayPauseButton";

export { PlayPauseButton, playPauseButtonVariants };
