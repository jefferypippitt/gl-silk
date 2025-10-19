"use client";

import { SplitTextAnimation } from "./split-text-animation";

export function SlideDemo() {
  return (
    <div className="flex items-center justify-center min-h-[400px] p-8">
      <SplitTextAnimation
        text="Smooth Slide Up Animation"
        animationType="slide"
        direction="up"
        duration={0.8}
        stagger={0.03}
        className="text-center"
        showRerunButton={true}
      />
    </div>
  );
}
