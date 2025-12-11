"use client";

import { SmokeRing } from "@paper-design/shaders-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function SmokeRingBackground() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Theme-aware colors - matching your global CSS
  // Use resolvedTheme to get the actual theme (dark/light) even when theme is "system"
  // Fallback to light theme if resolvedTheme is not yet available
  const isDark = resolvedTheme === "dark";
  const smokeColors = isDark ? ["#ffffff"] : ["#000000"];
  const backgroundColor = isDark ? "#000000" : "#ffffff";

  if (!mounted) {
    return null; // Don't render until mounted to prevent hydration issues
  }

  return (
    <div className="absolute inset-0 -z-10">
      <SmokeRing
        width="100%"
        height="100%"
        colors={smokeColors}
        colorBack={backgroundColor}
        noiseScale={5.5}
        noiseIterations={6}
        radius={1}
        thickness={0.1}
        innerShape={0.75}
        speed={0.25}
        scale={0.65}
        rotation={40}
      />
    </div>
  );
}
