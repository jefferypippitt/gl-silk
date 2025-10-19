"use client";

import { SplitTextAnimation } from "./split-text-animation";

export function FadeSlowDemo() {
  return (
    <div className="flex items-center justify-center min-h-[400px] p-8">
      <SplitTextAnimation
        text="Slow Fade"
        animationType="fade"
        duration={1.2}
        stagger={0.08}
        className="text-center"
        showRerunButton={true}
      />
    </div>
  );
}
