"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { Dithering } from "@paper-design/shaders-react"

function getShaderColors() {
  const s = getComputedStyle(document.documentElement)
  return {
    colorBack: s.getPropertyValue("--hs4-shader-back").trim() || "#FCFCFC",
    colorFront: s.getPropertyValue("--hs4-shader-front").trim() || "#000000",
  }
}

export default function HeroSectionV4Dither({ className }: { className?: string }) {
  const [mounted, setMounted] = useState(false)
  const [palette, setPalette] = useState({
    colorBack: "#FCFCFC",
    colorFront: "#000000",
  })

  useEffect(() => {
    setMounted(true)
    setPalette(getShaderColors())

    const observer = new MutationObserver(() => setPalette(getShaderColors()))
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    })
    return () => observer.disconnect()
  }, [])

  if (!mounted) return <div className={cn("hs4-dither-placeholder", className)} />

  return (
    <Dithering
      width={640}
      height={640}
      colorBack={palette.colorBack}
      colorFront={palette.colorFront}
      shape="sphere"
      type="random"
      size={1}
      speed={1}
      scale={0.6}
      className={cn("hs4-dither-shader", className)}
    />
  )
}
