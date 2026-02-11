"use client";

import { PlayPauseButton } from "./play-pause-button";

export function PlayPauseRoundedDemo() {
  return (
    <div className="flex items-center justify-center min-h-[200px] p-8 gap-4">
      <PlayPauseButton variant="outline" size="icon" className="rounded-full" />
      <PlayPauseButton variant="default" size="icon" className="rounded-full" />
      <PlayPauseButton
        variant="secondary"
        size="icon"
        className="rounded-full"
      />
    </div>
  );
}
