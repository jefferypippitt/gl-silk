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
  height?: number | string;
}

export const ComponentPreview: React.FC<ComponentPreviewProps> = ({
  name,
  viewMode = "desktop",
  height,
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

  const resolvedHeight = height != null
    ? typeof height === "number" ? `${height}px` : height
    : undefined;

  return (
    <div
      className={cn("not-prose w-full", !resolvedHeight && "h-full")}
      style={resolvedHeight ? { height: resolvedHeight } : undefined}
    >
      <div 
        className={cn(
          "relative w-full flex justify-center",
          !resolvedHeight && "h-full",
          viewMode !== "desktop" && "bg-muted"
        )}
        style={resolvedHeight ? { height: resolvedHeight } : undefined}
      >
        <div
          className={cn(
            "overflow-hidden bg-background transition-[max-width,width] duration-300 ease-in-out",
            !resolvedHeight && "h-full",
            viewMode !== "desktop" && "border-x border-border/40"
          )}
          style={{
            maxWidth: VIEW_WIDTHS[viewMode],
            width: "100%",
            ...(resolvedHeight ? { height: resolvedHeight } : {}),
          }}
        >
          <iframe
            key={rerunKey}
            src={iframeUrl}
            className="w-full border-0"
            style={resolvedHeight ? { height: resolvedHeight } : { height: "100%" }}
            sandbox="allow-same-origin allow-scripts"
            title={`Preview of ${name}`}
          />
        </div>
      </div>
    </div>
  );
};
