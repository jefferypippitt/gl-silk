import "./hero-section-v5.css"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const DASHBOARD_LIGHT =
  "https://glsilk.vercel.app/images/dashboard-light.png"
const DASHBOARD_DARK =
  "https://glsilk.vercel.app/images/dashboard-dark.png"

export function HeroSectionV5({
  className,
  ...props
}: React.ComponentProps<"section">) {
  return (
    <section className={cn("hs5-section", className)} {...props}>
      <div className="hs5-root">
        <div className="hs5-box">
          <div className="hs5-content">
            {/* Heading */}
            <h1 className="hs5-heading">
              Lorem ipsum dolor
              <br />
              sit amet Consectetur
            </h1>

            {/* Description */}
            <p className="hs5-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing
              elit vitae cursus morbi, dictum cursus aliquam.
            </p>

            {/* CTA Button */}
            <div className="hs5-cta-group">
              <Button size="lg" className="rounded-full">
                Start for free
              </Button>
            </div>

            {/* Product Showcase Image — CSS toggles light/dark visibility */}
            <div className="hs5-image-wrapper">
              <div className="hs5-image-glow" aria-hidden="true" />
              <img
                src={DASHBOARD_LIGHT}
                alt="Product dashboard preview"
                className="hs5-image hs5-image-light"
              />
              <img
                src={DASHBOARD_DARK}
                alt="Product dashboard preview"
                className="hs5-image hs5-image-dark"
              />
              <div className="hs5-image-fade" aria-hidden="true" />
            </div>

            {/* Feature Cards */}
            <div className="hs5-features">
              <div className="hs5-feature-card">
                <h3 className="hs5-feature-title">Lorem ipsum dolor</h3>
                <p className="hs5-feature-desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non velit vitae orci aliquet.
                </p>
              </div>
              <div className="hs5-feature-card">
                <h3 className="hs5-feature-title">Lorem & Ipsum</h3>
                <p className="hs5-feature-desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non velit vitae orci aliquet.
                </p>
              </div>
              <div className="hs5-feature-card">
                <h3 className="hs5-feature-title">Lorem ipsum dolor sit</h3>
                <p className="hs5-feature-desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non velit vitae orci aliquet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
