"use client";

import { SplitTextAnimation } from "./split-text-animation";

export function RotateDemo() {
  return (
    <div className="flex items-center justify-center min-h-[200px] p-8">
      <SplitTextAnimation
        text="Rotating Text Effect"
        animationType="rotate"
        duration={0.7}
        stagger={0.04}
        className="text-center"
      />
    </div>
  );
}
