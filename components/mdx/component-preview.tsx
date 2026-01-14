"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { componentRegistry } from "./component-registry";
import { cn } from "@/lib/utils";

export type ViewMode = "desktop" | "tablet" | "mobile";

interface ComponentPreviewProps {
  name: string;
  viewMode?: ViewMode;
}

export const ComponentPreview: React.FC<ComponentPreviewProps> = ({
  name,
  viewMode = "desktop",
}) => {
  const [rerunKey, setRerunKey] = useState(0);
  const Component = componentRegistry[name];

  useEffect(() => {
    const handleRerun = (event: Event) => {
      const customEvent = event as CustomEvent;
      if (
        !customEvent.detail?.previewId ||
        customEvent.detail.previewId === name
      ) {
        setRerunKey((prev) => prev + 1);
      }
    };

    window.addEventListener("rerun-animation", handleRerun);
    return () => window.removeEventListener("rerun-animation", handleRerun);
  }, [name]);

  if (!Component) {
    return (
      <div className="flex items-center justify-center min-h-[200px] border rounded-lg">
        <div className="text-sm text-destructive">
          Component &quot;{name}&quot; not found
        </div>
      </div>
    );
  }

  // Desktop: Full width, centered (allows for backgrounds and full layouts)
  // Tablet: Constrained to tablet width, centered
  // Mobile: Constrained to mobile width, centered
  const viewModeStyles = {
    desktop: "w-full", // Full width - no max-width constraint for backgrounds
    tablet: "w-full max-w-[768px] mx-auto",
    mobile: "w-full max-w-[375px] mx-auto",
  };

  return (
    <div className="not-prose w-full h-full">
      <div
        className={cn(
          "flex items-center justify-center w-full h-full transition-all duration-200",
          viewMode === "desktop" ? "" : "p-6"
        )}
      >
        <div className={cn("w-full transition-all duration-200", viewModeStyles[viewMode])}>
          <Component key={rerunKey} />
        </div>
      </div>
    </div>
  );
};
