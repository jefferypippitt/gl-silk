"use client";

import { SplitTextAnimation } from "./split-text-animation";

export function SlideUpDemo() {
  return (
    <div className="flex items-center justify-center min-h-[400px] p-8">
      <SplitTextAnimation
        text="Slide Up"
        animationType="slide"
        direction="up"
        className="text-center"
      />
    </div>
  );
}
