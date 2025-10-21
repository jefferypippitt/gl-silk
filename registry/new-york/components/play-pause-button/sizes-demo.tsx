"use client";

import { PlayPauseButton } from "./play-pause-button";

export function PlayPauseSizesDemo() {
  return (
    <div className="flex flex-col items-start gap-8 sm:flex-row">
      <div className="flex items-start gap-2">
        <PlayPauseButton size="sm" variant="outline" showText>
          Small
        </PlayPauseButton>
        <PlayPauseButton size="icon-sm" variant="outline" />
      </div>
      <div className="flex items-start gap-2">
        <PlayPauseButton variant="outline" showText>
          Default
        </PlayPauseButton>
        <PlayPauseButton size="icon" variant="outline" />
      </div>
      <div className="flex items-start gap-2">
        <PlayPauseButton size="lg" variant="outline" showText>
          Large
        </PlayPauseButton>
        <PlayPauseButton size="icon-lg" variant="outline" />
      </div>
    </div>
  );
}
