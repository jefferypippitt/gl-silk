"use client";

import { Button } from "@/components/ui/button";
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Monitor, Tablet, Smartphone, ExternalLink } from "lucide-react";
import { ViewMode } from "./component-preview";

interface ViewTabsProps {
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
  onOpenInNewTab: () => void;
  previewId?: string;
}

export function ViewTabs({
  viewMode,
  onViewModeChange,
  onOpenInNewTab,
  previewId,
}: ViewTabsProps) {
  return (
    <div className="flex items-center gap-2">
      <Tabs
        value={viewMode}
        onValueChange={(value) => onViewModeChange(value as ViewMode)}
      >
        <TabsList>
          <TabsTrigger value="desktop" className="gap-1.5">
            <Monitor className="h-3.5 w-3.5" />
            Desktop
          </TabsTrigger>
          <TabsTrigger value="tablet" className="gap-1.5">
            <Tablet className="h-3.5 w-3.5" />
            Tablet
          </TabsTrigger>
          <TabsTrigger value="mobile" className="gap-1.5">
            <Smartphone className="h-3.5 w-3.5" />
            Mobile
          </TabsTrigger>
        </TabsList>
      </Tabs>
      <Button
        variant="outline"
        size="sm"
        onClick={onOpenInNewTab}
        className="gap-2"
        aria-label="Open in new tab"
      >
        <ExternalLink className="h-4 w-4" />
        Open in new tab
      </Button>
    </div>
  );
}
