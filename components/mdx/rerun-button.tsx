"use client";

import { Button } from "@/components/ui/button";
import { RotateCw } from "lucide-react";
import { useCallback } from "react";

interface RerunButtonProps {
  previewId?: string;
}

export function RerunButton({ previewId }: RerunButtonProps) {
  const handleRerun = useCallback(() => {
    // Dispatch a custom event that the preview components can listen to
    const event = new CustomEvent("rerun-animation", {
      detail: { previewId },
    });
    window.dispatchEvent(event);
  }, [previewId]);

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={handleRerun}
      className="gap-2"
      aria-label="Rerun animation"
    >
      <RotateCw className="h-4 w-4" />
      Rerun
    </Button>
  );
}

