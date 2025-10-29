"use client";

import { useState } from "react";
import { LiquidGlassButton } from "./liquid-glass-button";
import { Slider } from "@/components/ui/slider";

export function LiquidGlassAdvancedDemo() {
  const [distortionStrength, setDistortionStrength] = useState(0.15);
  const [borderRadius, setBorderRadius] = useState(0.6);
  const [animationSpeed, setAnimationSpeed] = useState(1);
  const [scale, setScale] = useState(1);

  return (
    <div className="flex flex-col items-center justify-center gap-8 min-h-[400px] p-8 relative overflow-hidden rounded-lg bg-gradient-to-br from-violet-400 via-fuchsia-500 to-rose-500">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />

      {/* Demo Button */}
      <LiquidGlassButton
        distortionStrength={distortionStrength}
        borderRadius={borderRadius}
        animationSpeed={animationSpeed}
        scale={scale}
        textClassName="text-white"
      >
        Advanced Control
      </LiquidGlassButton>

      {/* Controls */}
      <div className="w-full max-w-2xl space-y-6 relative z-10 bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
        <div className="space-y-2">
          <label
            htmlFor="distortion"
            className="text-sm font-medium text-white"
          >
            Distortion Strength: {distortionStrength.toFixed(2)}
          </label>
          <Slider
            id="distortion"
            min={0.05}
            max={0.3}
            step={0.01}
            value={[distortionStrength]}
            onValueChange={(value) => setDistortionStrength(value[0])}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="border" className="text-sm font-medium text-white">
            Border Radius: {borderRadius.toFixed(2)}
          </label>
          <Slider
            id="border"
            min={0.3}
            max={1.5}
            step={0.01}
            value={[borderRadius]}
            onValueChange={(value) => setBorderRadius(value[0])}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="speed" className="text-sm font-medium text-white">
            Animation Speed: {animationSpeed.toFixed(2)}
          </label>
          <Slider
            id="speed"
            min={0.1}
            max={3}
            step={0.1}
            value={[animationSpeed]}
            onValueChange={(value) => setAnimationSpeed(value[0])}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="scale" className="text-sm font-medium text-white">
            Scale: {scale.toFixed(2)}
          </label>
          <Slider
            id="scale"
            min={0.5}
            max={2}
            step={0.1}
            value={[scale]}
            onValueChange={(value) => setScale(value[0])}
          />
        </div>
      </div>
    </div>
  );
}
