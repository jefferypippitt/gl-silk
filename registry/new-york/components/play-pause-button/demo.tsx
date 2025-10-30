"use client";

import { PlayPauseButton } from "./play-pause-button";
import { OpenInV0Button } from "@/components/open-in-v0-button";

export function PlayPauseDemo() {
  return (
    <>
      <div className="absolute top-4 right-4 z-10">
        <OpenInV0Button name="play-pause-button" />
      </div>
      <div className="flex items-center justify-center min-h-[200px] p-8">
        <PlayPauseButton size="icon" variant="ghost" />
      </div>
    </>
  );
}
