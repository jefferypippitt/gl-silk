"use client";

import * as React from "react";
import { useState, useEffect } from "react";
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

  // Build the iframe URL - load the preview page
  const iframeUrl = `/preview/${name}?view=${viewMode}&t=${rerunKey}`;

  return (
    <div className="not-prose w-full h-full">
      {/* Fixed outer shell — never changes size */}
      <div 
        className={cn(
          "relative w-full h-full flex justify-center",
          viewMode !== "desktop" && "bg-muted"
        )}
      >
        {/* Resizable inner frame */}
        <div
          className={cn(
            "h-full overflow-hidden bg-background transition-[max-width,width] duration-300 ease-in-out",
            viewMode !== "desktop" && "border-x border-border/40"
          )}
          style={{ maxWidth: VIEW_WIDTHS[viewMode], width: "100%" }}
        >
          <iframe
            key={rerunKey}
            src={iframeUrl}
            className="w-full h-full border-0"
            sandbox="allow-same-origin allow-scripts"
            title={`Preview of ${name}`}
          />
        </div>
      </div>
    </div>
  );
};
