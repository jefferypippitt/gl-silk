import { useEffect, useState } from "react"
import "./hero-section-v4.css"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import { Dithering } from "@paper-design/shaders-react"

/* ─── Read shader colours from CSS variables ─── */

function getShaderColors() {
  const s = getComputedStyle(document.documentElement)
  return {
    colorBack: s.getPropertyValue("--hs4-shader-back").trim(),
    colorFront: s.getPropertyValue("--hs4-shader-front").trim(),
  }
}

/* ─── Main Component ─────────────────────────── */

export function HeroSectionV4({
  className,
  ...props
}: React.ComponentProps<"section">) {
  const [mounted, setMounted] = useState(false)
  const [palette, setPalette] = useState({ colorBack: "#ffffff", colorFront: "#0284c7" })

  useEffect(() => {
    setMounted(true)
    setPalette(getShaderColors())

    /* Re-read CSS vars when theme class toggles */
    const observer = new MutationObserver(() => setPalette(getShaderColors()))
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    })
    return () => observer.disconnect()
  }, [])

  return (
    <section className={cn("hs4-section", className)} {...props}>
      <div className="hs4-root min-h-screen">
        {/* Content */}
        <div className="hs4-content">
          {/* Announcement */}
          <Badge variant="secondary">
            Announcing Our Latest Release
            <ArrowRight />
          </Badge>

          {/* Split Layout */}
          <div className="hs4-split">
            {/* Left: Text + CTA */}
            <div className="hs4-text-col">
              <h1 className="hs4-heading">
                Lorem ipsum dolor
                <br />
                sit amet{" "}
                <span className="hs4-heading-accent">consectetur</span>
              </h1>
              <p className="hs4-description">
                Sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
              </p>
              <div className="hs4-cta-group">
                <Button size="default" variant="default"
                >
                  Get started free
                </Button>
                <Button size="default" variant="outline"
                >
                  See it in action
                </Button>
              </div>
            </div>

            {/* Right: Dither Circle */}
            <div className="hs4-visual-col">
              <div className="hs4-dither-circle">
                {mounted && (
                  <Dithering
                    width={640}
                    height={640}
                    colorBack={palette.colorBack}
                    colorFront={palette.colorFront}
                    shape="sphere"
                    type="4x4"
                    size={2}
                    speed={1}
                    scale={0.6}
                    className="hs4-dither-shader"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
