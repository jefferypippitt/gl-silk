"use client";

import { PlayPauseButton } from "./play-pause-button";

export function PlayPauseIconVariantsDemo() {
  return (
    <div className="flex flex-wrap gap-2">
      <PlayPauseButton variant="default" size="icon" />
      <PlayPauseButton variant="outline" size="icon" />
      <PlayPauseButton variant="secondary" size="icon" />
      <PlayPauseButton variant="ghost" size="icon" />
    </div>
  );
}
