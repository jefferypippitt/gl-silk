"use client";

import { PlayPauseButton } from "./play-pause-button";

export function PlayPauseVariantsDemo() {
  return (
    <div className="flex flex-wrap gap-2">
      <PlayPauseButton variant="default" showText />
      <PlayPauseButton variant="outline" showText />
      <PlayPauseButton variant="secondary" showText />
      <PlayPauseButton variant="ghost" showText />
    </div>
  );
}
