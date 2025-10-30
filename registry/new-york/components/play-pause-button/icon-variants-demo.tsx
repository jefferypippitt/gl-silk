"use client";

import { PlayPauseButton } from "./play-pause-button";
import { OpenInV0Button } from "@/components/open-in-v0-button";

export function PlayPauseIconVariantsDemo() {
  return (
    <>
      <div className="absolute top-4 right-4 z-10">
        <OpenInV0Button name="play-pause-button-icon-variants" />
      </div>
    <div className="flex flex-wrap gap-2">
      <PlayPauseButton variant="default" size="icon" />
      <PlayPauseButton variant="outline" size="icon" />
      <PlayPauseButton variant="secondary" size="icon" />
      <PlayPauseButton variant="ghost" size="icon" />
    </div>
    </>
  );
}
