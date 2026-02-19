import "./hero-section-v1.css"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

/* ─── Main Component ─────────────────────────── */

export function HeroSectionV1({
  className,
  ...props
}: React.ComponentProps<"section">) {
  return (
    <section className={cn("hs1-section", className)} {...props}>
      <div className="hs1-root">
        {/* Heading */}
        <h1 className="hs1-heading">
          Lorem ipsum dolor sit
          <br />
          amet consectetur
        </h1>

        {/* Description */}
        <p className="hs1-description">
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
        </p>

        {/* CTA */}
        <div className="hs1-cta-group">
          <Button size="lg" className="rounded-full">
            Get started
          </Button>
          <Button variant="outline" size="lg" className="rounded-full">
            Learn more
          </Button>
        </div>

        {/* Metric Strip */}
        <div className="hs1-metrics">
          <div className="hs1-metric">
            <span className="hs1-metric-value">99.9%</span>
            <span className="hs1-metric-label">Lorem uptime</span>
          </div>
          <div className="hs1-metric">
            <span className="hs1-metric-value">2.4M</span>
            <span className="hs1-metric-label">Ipsum dolor</span>
          </div>
          <div className="hs1-metric">
            <span className="hs1-metric-value">50ms</span>
            <span className="hs1-metric-label">Amet consec</span>
          </div>
          <div className="hs1-metric">
            <span className="hs1-metric-value">140+</span>
            <span className="hs1-metric-label">Sit adipiscing</span>
          </div>
        </div>
      </div>
    </section>
  )
}
