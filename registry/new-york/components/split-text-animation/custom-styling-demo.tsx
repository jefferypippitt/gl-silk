"use client";

import { SplitTextAnimation } from "./split-text-animation";

export function CustomStylingDemo() {
  return (
    <div className="flex items-center justify-center min-h-[400px] p-8">
      <SplitTextAnimation
        text="Custom Styled Text"
        animationType="fade"
        className="text-2xl text-green-500"
      />
    </div>
  );
}
