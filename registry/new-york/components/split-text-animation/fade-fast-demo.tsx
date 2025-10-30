"use client";

import { SplitTextAnimation } from "./split-text-animation";

export function FadeFastDemo() {
  return (
    <div className="flex items-center justify-center min-h-[400px] p-8">
      <SplitTextAnimation
        text="Quick Fade"
        animationType="fade"
        duration={0.5}
        stagger={0.02}
        className="text-center"
      />
    </div>
  );
}
