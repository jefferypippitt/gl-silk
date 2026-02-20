"use client";

import { SplitTextAnimation } from "./split-text-animation";

export function RotateFastDemo() {
  return (
    <div className="flex items-center justify-center min-h-[200px] p-8">
      <SplitTextAnimation
        text="Fast Rotate"
        animationType="rotate"
        duration={0.5}
        stagger={0.03}
        className="text-center"
      />
    </div>
  );
}
