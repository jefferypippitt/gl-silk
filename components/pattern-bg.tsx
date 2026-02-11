"use client";

import { MeshGradient } from "@paper-design/shaders-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function PatternBackground() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  // Colors aligned with theme; light mode has more contrast so the gradient is visible
  const colors = isDark
    ? ["#000000", "#0a0a0a", "#141414", "#0c0c0c"]
    : ["#fafafa", "#e8e8e8", "#d8d8d8", "#ececec"];

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <MeshGradient
        width="100%"
        height="100%"
        colors={colors}
        distortion={0.65}
        swirl={0.18}
        speed={0.45}
      />
    </div>
  );
}
