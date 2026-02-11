"use client";

import { PlayPauseButton } from "./play-pause-button";

export function PlayPauseVariantsDemo() {
  return (
    <div className="flex items-center justify-center min-h-[200px] p-8 flex-wrap gap-2">
      <PlayPauseButton variant="default" showText />
      <PlayPauseButton variant="outline" showText />
      <PlayPauseButton variant="secondary" showText />
      <PlayPauseButton variant="ghost" showText />
    </div>
  );
}
