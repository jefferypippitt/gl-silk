"use client";

import { DitherWave } from "./dither-wave";

export function DitherWaveDemo() {
  return (
    <div className="flex min-h-[560px] items-center justify-center px-6 py-8">
      <div className="h-[460px] w-full overflow-hidden rounded-xl border">
        <DitherWave className="h-full w-full" />
      </div>
    </div>
  );
}
