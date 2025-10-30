"use client";

import { SplitTextAnimation } from "./split-text-animation";
import { OpenInV0Button } from "@/components/open-in-v0-button";

export function SplitTextDemo() {
  return (
    <>
      <div className="absolute top-4 right-4 z-10">
        <OpenInV0Button name="split-text-animation" />
      </div>
      <div className="flex flex-col gap-16 items-center justify-center min-h-[600px] p-8">
      <div className="flex flex-col gap-8 w-full max-w-4xl">
        {/* Fade Animation */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-medium text-muted-foreground">Fade In</h3>
          <SplitTextAnimation
            text="Build Beautiful Interfaces"
            animationType="fade"
            duration={0.8}
            stagger={0.03}
          />
        </div>

        {/* Slide Up Animation */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-medium text-muted-foreground">
            Slide Up
          </h3>
          <SplitTextAnimation
            text="With Glsilk Components"
            animationType="slide"
            direction="up"
            duration={0.8}
            stagger={0.03}
          />
        </div>

        {/* Scale Animation */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-medium text-muted-foreground">
            Scale In
          </h3>
          <SplitTextAnimation
            text="Create Amazing Experiences"
            animationType="scale"
            duration={0.6}
            stagger={0.04}
          />
        </div>

        {/* Rotate Animation */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-medium text-muted-foreground">
            Rotate In
          </h3>
          <SplitTextAnimation
            text="Transform Your Ideas"
            animationType="rotate"
            duration={0.7}
            stagger={0.04}
          />
        </div>

        {/* Slide Left Animation */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-medium text-muted-foreground">
            Slide Left
          </h3>
          <SplitTextAnimation
            text="Into Reality"
            animationType="slide"
            direction="left"
            duration={0.8}
            stagger={0.03}
          />
        </div>
      </div>
    </div>
    </>
  );
}
