"use client"

import type { ReactNode } from "react"
import { useEffect, useState } from "react"
import {
  Dither,
  FilmGrain,
  GridDistortion,
  Shader,
  Sharpness,
  Swirl,
} from "shaders/react"
import { cn } from "./utils"

type CtaSectionV2ShaderProps = {
  children?: ReactNode
  className?: string
  contentClassName?: string
}

export default function CtaSectionV2Shader({
  children,
  className,
  contentClassName,
}: CtaSectionV2ShaderProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl bg-[#1c034f]",
        className
      )}
    >
      {mounted ? (
        <div className="pointer-events-none absolute inset-0 rounded-[inherit]">
          <div className="h-full w-full">
            <Shader>
              <Swirl
                blend={30}
                colorA="#1c034f"
                colorB="#2b4cf0"
                colorSpace="oklch"
                detail={1.2}
                speed={0.6}
              />
              <Dither blendMode="overlay" pixelSize={5} threshold={0.45} />
              <GridDistortion edges="mirror" gridSize={75} intensity={5} radius={2} />
              <Sharpness sharpness={1} />
              <FilmGrain strength={0.05} />
            </Shader>
          </div>
        </div>
      ) : null}
      <div className={cn("relative z-10", contentClassName)}>{children}</div>
    </div>
  )
}
