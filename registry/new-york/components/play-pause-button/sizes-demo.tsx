"use client";

import { PlayPauseButton } from "./play-pause-button";
import { OpenInV0Button } from "@/components/open-in-v0-button";

export function PlayPauseSizesDemo() {
  return (
    <>
      <div className="absolute top-4 right-4 z-10">
        <OpenInV0Button name="play-pause-button-sizes" />
      </div>
    <div className="flex flex-col items-start gap-8 sm:flex-row">
      <div className="flex items-start gap-2">
        <PlayPauseButton size="sm" variant="outline" showText />
        <PlayPauseButton size="icon-sm" variant="outline" />
      </div>
      <div className="flex items-start gap-2">
        <PlayPauseButton variant="outline" showText />
        <PlayPauseButton size="icon" variant="outline" />
      </div>
      <div className="flex items-start gap-2">
        <PlayPauseButton size="lg" variant="outline" showText />
        <PlayPauseButton size="icon-lg" variant="outline" />
      </div>
    </div>
    </>
  );
}
