"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const neubrutalismButtonVariants = cva(
  "group/button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive p-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "bg-muted border shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9",
        sm: "h-8 rounded-md gap-1.5",
        lg: "h-10 rounded-md",
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

const neubrutalismButtonSpanVariants = cva(
  "flex items-center justify-center -translate-x-1 -translate-y-1 rounded-md border-2 text-sm font-medium tracking-tight transition-all group-hover/button:-translate-y-2 group-active/button:translate-x-0 group-active/button:translate-y-0 w-full h-full",
  {
    variants: {
      variant: {
        default: "border-primary bg-background text-primary",
        destructive: "border-destructive bg-background text-destructive",
        outline: "border-border bg-background text-foreground",
        secondary:
          "border-secondary-foreground bg-background text-secondary-foreground",
        ghost: "border-transparent bg-transparent text-foreground",
        link: "border-transparent bg-transparent text-primary",
      },
      size: {
        default: "px-4 py-2 has-[>svg]:px-3",
        sm: "px-3 has-[>svg]:px-2.5",
        lg: "px-6 has-[>svg]:px-4",
        icon: "p-0",
        "icon-sm": "p-0",
        "icon-lg": "p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface NeubrutalismButtonProps
  extends React.ComponentProps<"button">,
    VariantProps<typeof neubrutalismButtonVariants> {
  asChild?: boolean;
}

const NeubrutalismButton = React.forwardRef<
  HTMLButtonElement,
  NeubrutalismButtonProps
>(({ className, variant, size, asChild = false, children, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(neubrutalismButtonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    >
      <span className={cn(neubrutalismButtonSpanVariants({ variant, size }))}>
        {children}
      </span>
    </Comp>
  );
});

NeubrutalismButton.displayName = "NeubrutalismButton";

export { NeubrutalismButton, neubrutalismButtonVariants };
