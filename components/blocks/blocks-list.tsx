"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Tabs, Tab } from "fumadocs-ui/components/tabs";
import { ComponentPreview, ViewMode } from "@/components/mdx/component-preview";
import { ComponentSource } from "@/components/mdx/component-source";
import { RerunButton } from "@/components/mdx/rerun-button";
import { ViewTabs } from "@/components/mdx/view-tabs";
import { OpenInV0Button } from "@/components/open-in-v0-button";
import type { RegistryItem } from "@/lib/registry";
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/ui/resizable";
import { PackageIcon } from "lucide-react";
import { usePathname } from "next/navigation";

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
    <div className="space-y-12">
      {blocks.map((block) => (
        <BlockItem key={block.name} block={block} />
      ))}
    </div>
  );
}

function BlockItem({ block }: { block: RegistryItem }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  // Initialize view mode from URL params if available, otherwise default to desktop
  const initialViewMode = (searchParams.get("view") as ViewMode) || "desktop";
  const [viewMode, setViewMode] = useState<ViewMode>(
    ["desktop", "tablet", "mobile"].includes(initialViewMode)
      ? initialViewMode
      : "desktop"
  );

  // Update view mode if URL param changes
  useEffect(() => {
    const viewParam = searchParams.get("view") as ViewMode;
    if (viewParam && ["desktop", "tablet", "mobile"].includes(viewParam)) {
      setViewMode(viewParam);
    }
  }, [searchParams]);

  const handleOpenInNewTab = () => {
    // Create a standalone preview URL (outside blocks to avoid navbar/footer)
    const previewUrl = `/preview/${block.name}?view=${viewMode}`;
    window.open(previewUrl, "_blank");
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <h2 className="text-2xl font-semibold tracking-tight">
            {block.title || block.name}
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <RerunButton previewId={block.name} />
          <ViewTabs
            viewMode={viewMode}
            onViewModeChange={setViewMode}
            onOpenInNewTab={handleOpenInNewTab}
            previewId={block.name}
          />
          <OpenInV0Button name={block.name} />
        </div>
      </div>
      <Tabs items={["Preview", "Code"]}>
        <Tab value="Preview">
          <div className="min-h-[400px] rounded-lg border overflow-hidden">
            <ResizablePanelGroup
              direction="horizontal"
              className="min-h-[400px]"
            >
              <ResizablePanel defaultSize={100} minSize={30} collapsible={true}>
                <div className="flex h-full items-center justify-center overflow-auto bg-muted/30 transition-all duration-200">
                  <ComponentPreview name={block.name} viewMode={viewMode} />
                </div>
              </ResizablePanel>
              <ResizableHandle withHandle />
              <ResizablePanel defaultSize={0} minSize={0} collapsible={true}>

              </ResizablePanel>
            </ResizablePanelGroup>
          </div>
        </Tab>
        <Tab value="Code">
          <ComponentSource name={block.name} />
        </Tab>
      </Tabs>
    </div>
  );
}
