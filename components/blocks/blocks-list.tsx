"use client";

import { useState, useEffect, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import { ComponentPreview, ViewMode } from "@/components/mdx/component-preview";
import { OpenInV0Button } from "@/components/open-in-v0-button";
import { CopyInstallCommand } from "@/components/copy-install-command";
import type { RegistryItem } from "@/lib/registry";
import { cn } from "@/lib/utils";
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import {
  PackageIcon,
  Monitor,
  Tablet,
  Smartphone,
  RotateCw,
  ExternalLink,
} from "lucide-react";

interface BlocksListProps {
  blocks: RegistryItem[];
}

export default function BlocksList({ blocks }: BlocksListProps) {
  if (blocks.length === 0) {
    return (
      <Empty className="border border-dashed">
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <PackageIcon />
          </EmptyMedia>
          <EmptyTitle>Coming Soon</EmptyTitle>
          <EmptyDescription>
            No blocks available yet. Check back soon!
          </EmptyDescription>
        </EmptyHeader>
      </Empty>
    );
  }

  return (
    <div className="space-y-6">
      {blocks.map((block) => (
        <BlockItem key={block.name} block={block} />
      ))}
    </div>
  );
}

function BlockItem({ block }: { block: RegistryItem }) {
  const searchParams = useSearchParams();

  const initialViewMode = (searchParams.get("view") as ViewMode) || "desktop";
  const [viewMode, setViewMode] = useState<ViewMode>(
    ["desktop", "tablet", "mobile"].includes(initialViewMode)
      ? initialViewMode
      : "desktop"
  );

  useEffect(() => {
    const viewParam = searchParams.get("view") as ViewMode;
    if (viewParam && ["desktop", "tablet", "mobile"].includes(viewParam)) {
      setViewMode(viewParam);
    }
  }, [searchParams]);

  const handleRerun = useCallback(() => {
    const event = new CustomEvent("rerun-animation", {
      detail: { previewId: block.name },
    });
    window.dispatchEvent(event);
  }, [block.name]);

  const handleOpenInNewTab = () => {
    const previewUrl = `/preview/${block.name}?view=${viewMode}`;
    window.open(previewUrl, "_blank");
  };

  return (
    <div className="w-full space-y-2">
      {/* Block ID — filename above the preview */}
      <h3 className="text-sm font-medium text-muted-foreground font-mono">
        {block.name}
      </h3>

      {/* Toolbar + Preview wrapper — no gap between them */}
      <div>
        {/* Toolbar */}
        <div className="flex items-center justify-between border rounded-t-lg bg-background px-4 py-2">
          {/* Left: Preview label + separator + view toggles + actions */}
          <div className="flex items-center gap-1">
            <span className="text-sm font-medium text-foreground mr-2">Preview</span>

            <div className="h-4 w-px bg-border mx-1" />

            <button
              onClick={() => setViewMode("desktop")}
              className={cn(
                "inline-flex items-center justify-center h-7 w-7 rounded-md transition-colors",
                viewMode === "desktop"
                  ? "text-foreground bg-muted"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              )}
              aria-label="Desktop view"
            >
              <Monitor className="h-3.5 w-3.5" />
            </button>
            <button
              onClick={() => setViewMode("tablet")}
              className={cn(
                "inline-flex items-center justify-center h-7 w-7 rounded-md transition-colors",
                viewMode === "tablet"
                  ? "text-foreground bg-muted"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              )}
              aria-label="Tablet view"
            >
              <Tablet className="h-3.5 w-3.5" />
            </button>
            <button
              onClick={() => setViewMode("mobile")}
              className={cn(
                "inline-flex items-center justify-center h-7 w-7 rounded-md transition-colors",
                viewMode === "mobile"
                  ? "text-foreground bg-muted"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              )}
              aria-label="Mobile view"
            >
              <Smartphone className="h-3.5 w-3.5" />
            </button>

            <div className="h-4 w-px bg-border mx-1" />

            <button
              onClick={handleRerun}
              className="inline-flex items-center justify-center h-7 w-7 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
              aria-label="Rerun animation"
            >
              <RotateCw className="h-3.5 w-3.5" />
            </button>
            <button
              onClick={handleOpenInNewTab}
              className="inline-flex items-center justify-center h-7 w-7 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
              aria-label="Open in new tab"
            >
              <ExternalLink className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* Right: Install command + Open in v0 */}
          <div className="flex items-center gap-2">
            <CopyInstallCommand name={block.name} className="h-7 text-xs px-2.5" />
            <OpenInV0Button name={block.name} className="h-7 text-xs px-2.5" />
          </div>
        </div>

        {/* Preview area — fixed dimensions, never shifts */}
        <div className="border border-t-0 rounded-b-lg overflow-hidden h-[min(75vh,1000px)] w-full bg-muted/30">
          <ComponentPreview name={block.name} viewMode={viewMode} />
        </div>
      </div>
    </div>
  );
}
