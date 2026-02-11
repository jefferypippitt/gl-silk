"use client";

import { PlayPauseButton } from "./play-pause-button";

export function PlayPauseIconVariantsDemo() {
  return (
    <div className="flex items-center justify-center min-h-[200px] p-8 flex-wrap gap-2">
      <PlayPauseButton variant="default" size="icon" />
      <PlayPauseButton variant="outline" size="icon" />
      <PlayPauseButton variant="secondary" size="icon" />
      <PlayPauseButton variant="ghost" size="icon" />
    </div>
  );
}
