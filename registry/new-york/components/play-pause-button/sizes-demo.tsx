"use client";

import { PlayPauseButton } from "./play-pause-button";

export function PlayPauseSizesDemo() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[200px] p-8 gap-8 sm:flex-row">
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
  );
}
