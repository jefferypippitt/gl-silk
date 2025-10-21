"use client";

import { PlayPauseButton } from "./play-pause-button";

export function PlayPauseRoundedDemo() {
  return (
    <div className="flex items-center gap-4">
      <PlayPauseButton variant="outline" size="icon" className="rounded-full" />
      <PlayPauseButton variant="default" size="icon" className="rounded-full" />
      <PlayPauseButton
        variant="destructive"
        size="icon"
        className="rounded-full"
      />
    </div>
  );
}
