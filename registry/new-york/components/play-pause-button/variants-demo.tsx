"use client";

import { PlayPauseButton } from "./play-pause-button";
import { OpenInV0Button } from "@/components/open-in-v0-button";

export function PlayPauseVariantsDemo() {
  return (
    <>
      <div className="absolute top-4 right-4 z-10">
        <OpenInV0Button name="play-pause-button-variants" />
      </div>
    <div className="flex flex-wrap gap-2">
      <PlayPauseButton variant="default" showText />
      <PlayPauseButton variant="outline" showText />
      <PlayPauseButton variant="secondary" showText />
      <PlayPauseButton variant="ghost" showText />
    </div>
    </>
  );
}
