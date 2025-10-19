"use client";

import { SplitTextAnimation } from "./split-text-animation";

export function ScaleSlowDemo() {
  return (
    <div className="flex items-center justify-center min-h-[400px] p-8">
      <SplitTextAnimation
        text="Dramatic Scale"
        animationType="scale"
        duration={0.8}
        stagger={0.06}
        className="text-center"
        showRerunButton={true}
      />
    </div>
  );
}
