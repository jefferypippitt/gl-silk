"use client";

import { useState } from "react";
import { SplitTextAnimation } from "./split-text-animation";
import { OpenInV0Button } from "@/components/open-in-v0-button";
import { Button } from "@/components/ui/button";
import { RotateCw } from "lucide-react";

export function SlideLeftDemo() {
  const [rerunKey, setRerunKey] = useState(0);

  return (
    <>
      <div className="absolute top-4 right-4 z-10 flex gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setRerunKey((prev) => prev + 1)}
          className="gap-2"
        >
          <RotateCw className="h-4 w-4" />
          Rerun
        </Button>
        <OpenInV0Button name="split-text-slide-left" />
      </div>
      <div className="flex items-center justify-center min-h-[400px] p-8">
        <SplitTextAnimation
          key={rerunKey}
          text="Slide Left"
          animationType="slide"
          direction="left"
          className="text-center"
          showRerunButton={false}
        />
      </div>
    </>
  );
}
