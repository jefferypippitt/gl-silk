"use client";

import { SplitTextAnimation } from "./split-text-animation";

export function RotateSlowDemo() {
  return (
    <div className="flex items-center justify-center min-h-[200px] p-8">
      <SplitTextAnimation
        text="Slow Rotate"
        animationType="rotate"
        duration={1.0}
        stagger={0.06}
        className="text-center"
      />
    </div>
  );
}
