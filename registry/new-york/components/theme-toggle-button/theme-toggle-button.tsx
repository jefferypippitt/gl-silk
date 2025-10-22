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

import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

const themeToggleButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
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

interface ThemeToggleButtonProps
  extends React.ComponentProps<"button">,
    VariantProps<typeof themeToggleButtonVariants> {
  asChild?: boolean;
  duration?: number;
  ease?: string;
  onStateChange?: (isDark: boolean) => void;
}

const ThemeToggleButton = React.forwardRef<
  HTMLButtonElement,
  ThemeToggleButtonProps
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
      ...props
    },
    ref
  ) => {
    const { theme, setTheme } = useTheme();
    const [isDark, setIsDark] = React.useState(false);
    const [mounted, setMounted] = React.useState(false);
    const circleRef = React.useRef<SVGCircleElement>(null);
    const raysRef = React.useRef<SVGPathElement>(null);

    // SVG path data - Sun rays (Lucide Sun icon paths)
    const sunRays =
      "M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41";

    // Moon crescent shape (Lucide Moon icon path)
    const moonCrescent =
      "M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446A9 9 0 1 1 12 2.992z";

    // Sync local state with theme changes
    React.useEffect(() => {
      setMounted(true);
      // Determine if current theme is dark (system theme resolves automatically)
      const currentIsDark = theme === "dark";
      setIsDark(currentIsDark);
    }, [theme]);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!circleRef.current || !raysRef.current) return;

      const newIsDark = !isDark;

      // Actually set the theme using next-themes
      setTheme(newIsDark ? "dark" : "light");

      if (newIsDark) {
        // Morph sun rays to moon crescent
        gsap.to(raysRef.current, {
          duration,
          ease: "back.inOut(1.5)",
          morphSVG: moonCrescent,
          scale: 1.1,
          transformOrigin: "center center",
        });
        gsap.to(circleRef.current, {
          duration: duration * 0.8,
          ease: "power2.in",
          opacity: 0,
          scale: 0.8,
          transformOrigin: "center center",
        });
      } else {
        // Morph moon crescent to sun rays
        gsap.to(raysRef.current, {
          duration,
          ease: "back.out(1.7)",
          morphSVG: sunRays,
          scale: 1.1,
          transformOrigin: "center center",
        });
        gsap.to(circleRef.current, {
          duration: duration * 0.9,
          ease: "back.out(1.7)",
          opacity: 1,
          scale: 1,
          transformOrigin: "center center",
        });
      }

      // Note: isDark state will be updated via useEffect when theme changes
      onStateChange?.(newIsDark);

      // Call the original onClick handler if provided
      onClick?.(e);
    };

    const Comp = asChild ? Slot : ("button" as const);

    // Prevent hydration mismatch by not rendering until mounted
    if (!mounted) {
      return (
        <Comp
          className={cn(
            themeToggleButtonVariants({ variant, size, className })
          )}
          ref={ref}
          aria-label="Loading theme toggle"
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
            <circle
              cx="12"
              cy="12"
              r="4"
              stroke="none"
              fill="currentColor"
              className="transition-colors duration-500"
            />
            <path
              d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"
              stroke="currentColor"
              className="transition-colors duration-500"
            />
          </svg>
        </Comp>
      );
    }

    return (
      <Comp
        className={cn(themeToggleButtonVariants({ variant, size, className }))}
        ref={ref}
        onClick={handleClick}
        aria-label={
          props["aria-label"] ||
          (isDark ? "Switch to light mode" : "Switch to dark mode")
        }
        data-state={isDark ? "checked" : "unchecked"}
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
          <circle
            ref={circleRef}
            cx="12"
            cy="12"
            r="4"
            stroke="none"
            fill="currentColor"
            className="transition-colors duration-500"
          />
          <path
            ref={raysRef}
            d={sunRays}
            stroke="currentColor"
            className="transition-colors duration-500"
          />
        </svg>
        {props.children}
      </Comp>
    );
  }
);

ThemeToggleButton.displayName = "ThemeToggleButton";

export { ThemeToggleButton, themeToggleButtonVariants };
