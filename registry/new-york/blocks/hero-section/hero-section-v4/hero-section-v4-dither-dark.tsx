"use client"

import { Dithering } from "@paper-design/shaders-react"

export default function HeroSectionV4DitherDark() {
  return (
    <Dithering
      width={500}
      height={500}
      colorBack="#000000"
      colorFront="#ffffff"
      shape="sphere"
      type="random"
      size={1}
      speed={1.2}
      scale={0.96}
    />
  )
}
