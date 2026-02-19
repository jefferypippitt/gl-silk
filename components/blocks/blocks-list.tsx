"use client";

import { useState, useEffect, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import { ComponentPreview, ViewMode } from "@/components/mdx/component-preview";
import { ComponentSource } from "@/components/mdx/component-source";
import { OpenInV0Button } from "@/components/open-in-v0-button";
import { CopyInstallCommand } from "@/components/copy-install-command";
import type { RegistryItem } from "@/lib/registry";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
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
  AppWindowIcon,
  CodeIcon,
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
          <EmptyTitle>Other</EmptyTitle>
          <EmptyDescription>
            No blocks available yet for this category.
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
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");

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
      <h3 className="text-sm font-medium text-foreground font-mono">
        {block.name}
      </h3>

      {/* Toolbar + Preview wrapper — no gap between them */}
      <div>
        {/* Toolbar */}
        <div className="flex items-center justify-between border rounded-t-lg bg-background px-4 py-2">
          {/* Left: Tabs + View modes + Actions */}
          <div className="flex items-center gap-2">
            <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as "preview" | "code")}>
              <TabsList>
                <TabsTrigger value="preview">
                  <AppWindowIcon />
                  Preview
                </TabsTrigger>
                <TabsTrigger value="code">
                  <CodeIcon />
                  Code
                </TabsTrigger>
              </TabsList>
            </Tabs>
            <div className="w-px h-4 bg-border" />
            <ToggleGroup
              variant="outline"
              type="single"
              value={viewMode}
              onValueChange={(v) => v && setViewMode(v as ViewMode)}
            >
              <ToggleGroupItem value="desktop" aria-label="Desktop view">
                <Monitor />
              </ToggleGroupItem>
              <ToggleGroupItem value="tablet" aria-label="Tablet view">
                <Tablet />
              </ToggleGroupItem>
              <ToggleGroupItem value="mobile" aria-label="Mobile view">
                <Smartphone />
              </ToggleGroupItem>
            </ToggleGroup>
            <div className="w-px h-4 bg-border" />
            <ToggleGroup variant="outline" type="multiple">
              <ToggleGroupItem value="rerun" aria-label="Rerun animation" onClick={handleRerun}>
                <RotateCw />
              </ToggleGroupItem>
              <ToggleGroupItem value="new-tab" aria-label="Open in new tab" onClick={handleOpenInNewTab}>
                <ExternalLink />
              </ToggleGroupItem>
            </ToggleGroup>
          </div>

          {/* Right: Install & Open in v0 */}
          <div className="flex items-center gap-2">
            <CopyInstallCommand name={block.name} className="h-7 text-xs px-2.5" />
            <OpenInV0Button name={block.name} className="h-7 text-xs px-2.5" />
          </div>
        </div>

        {/* Content area — Preview or Code */}
        <div className="border border-t-0 rounded-b-lg overflow-hidden h-[min(75vh,1000px)] w-full bg-background preview-frame">
          {activeTab === "code" ? (
            <div className="h-full w-full">
              <ComponentSource name={block.name} />
            </div>
          ) : (
            <ComponentPreview name={block.name} viewMode={viewMode} />
          )}
        </div>
      </div>
    </div>
  );
}
