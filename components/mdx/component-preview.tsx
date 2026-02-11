"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { componentRegistry } from "./component-registry";
import { cn } from "@/lib/utils";

export type ViewMode = "desktop" | "tablet" | "mobile";

const VIEW_WIDTHS: Record<ViewMode, string> = {
  desktop: "100%",
  tablet: "768px",
  mobile: "375px",
};

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

  return (
    <div className="not-prose w-full h-full">
      {/* Fixed outer shell — never changes size */}
      <div className="relative w-full h-full flex justify-center">
        {/* Resizable inner frame */}
        <div
          className={cn(
            "h-full overflow-y-auto overflow-x-hidden bg-background transition-[max-width] duration-300 ease-in-out custom-scrollbar",
            viewMode !== "desktop" && "border-x border-border/40"
          )}
          style={{ maxWidth: VIEW_WIDTHS[viewMode], width: "100%" }}
        >
          <div className="flex min-h-full items-center justify-center">
            <div className="w-full">
              <Component key={rerunKey} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
