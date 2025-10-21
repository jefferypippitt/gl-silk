"use client";

import { PlayPauseButton } from "./play-pause-button";

export function PlayPauseDemo() {
  return (
    <div className="flex items-center justify-center min-h-[200px] p-8">
      <PlayPauseButton showText />
    </div>
  );
}
