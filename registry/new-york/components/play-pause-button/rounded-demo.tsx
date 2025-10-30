"use client";

import { PlayPauseButton } from "./play-pause-button";
import { OpenInV0Button } from "@/components/open-in-v0-button";

export function PlayPauseRoundedDemo() {
  return (
    <>
      <div className="absolute top-4 right-4 z-10">
        <OpenInV0Button name="play-pause-button-rounded" />
      </div>
    <div className="flex gap-4">
      <PlayPauseButton variant="outline" size="icon" className="rounded-full" />
      <PlayPauseButton variant="default" size="icon" className="rounded-full" />
      <PlayPauseButton
        variant="secondary"
        size="icon"
        className="rounded-full"
      />
    </div>
    </>
  );
}
