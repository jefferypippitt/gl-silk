"use client";

import { SplitTextAnimation } from "./split-text-animation";

export function SlideDownDemo() {
  return (
    <div className="flex items-center justify-center min-h-[400px] p-8">
      <SplitTextAnimation
        text="Slide Down"
        animationType="slide"
        direction="down"
        className="text-center"
      />
    </div>
  );
}
