"use client";

import { SplitTextAnimation } from "./split-text-animation";

export function ScaleFastDemo() {
  return (
    <div className="flex items-center justify-center min-h-[400px] p-8">
      <SplitTextAnimation
        text="Quick Scale"
        animationType="scale"
        duration={0.4}
        stagger={0.03}
        className="text-center"
        showRerunButton={true}
      />
    </div>
  );
}
