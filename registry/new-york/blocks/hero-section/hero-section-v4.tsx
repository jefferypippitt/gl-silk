import "./hero-section-v4.css"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import { HeroSectionV4Dither } from "./hero-section-v4/hero-section-v4-dither"

export function HeroSectionV4({
  className,
  ...props
}: React.ComponentProps<"section">) {
  return (
    <section className={cn("hs4-section", className)} {...props}>
      <div className="hs4-root">
        <div className="hs4-content">
          <Badge variant="secondary" className="self-center">
            Announcing Our Latest Release
            <ArrowRight />
          </Badge>

          <div className="hs4-split">
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
                <Button size="sm" variant="default">
                  Get started
                </Button>
                <Button size="sm" variant="outline">
                  See it in action
                </Button>
              </div>
            </div>

            <div className="hs4-visual-col">
              <div className="hs4-dither-circle">
                <HeroSectionV4Dither />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
