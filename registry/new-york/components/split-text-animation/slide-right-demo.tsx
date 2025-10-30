"use client";

import { SplitTextAnimation } from "./split-text-animation";

export function SlideRightDemo() {
  return (
    <div className="flex items-center justify-center min-h-[400px] p-8">
      <SplitTextAnimation
        text="Slide Right"
        animationType="slide"
        direction="right"
        className="text-center"
      />
    </div>
  );
}
