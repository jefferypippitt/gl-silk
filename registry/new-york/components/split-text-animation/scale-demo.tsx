"use client";

import { SplitTextAnimation } from "./split-text-animation";

export function ScaleDemo() {
  return (
    <div className="flex items-center justify-center min-h-[400px] p-8">
      <SplitTextAnimation
        text="Dynamic Scale Animation"
        animationType="scale"
        duration={0.6}
        stagger={0.04}
        className="text-center"
      />
    </div>
  );
}
