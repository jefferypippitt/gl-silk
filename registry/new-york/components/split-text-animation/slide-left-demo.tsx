"use client";

import { SplitTextAnimation } from "./split-text-animation";

export function SlideLeftDemo() {
  return (
    <div className="flex items-center justify-center min-h-[200px] p-8">
      <SplitTextAnimation
        text="Slide Left"
        animationType="slide"
        direction="left"
        className="text-center"
      />
    </div>
  );
}
