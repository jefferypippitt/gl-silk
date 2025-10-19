"use client";

import { SplitTextAnimation } from "./split-text-animation";

export function FadeDemo() {
  return (
    <div className="flex items-center justify-center min-h-[400px] p-8">
      <SplitTextAnimation
        text="Beautiful Fade In Animation"
        animationType="fade"
        duration={0.8}
        stagger={0.03}
        className="text-center"
        showRerunButton={true}
      />
    </div>
  );
}
