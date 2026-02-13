import "./hero-section-v3.css"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

/* ─── Main Component ─────────────────────────── */

export function HeroSectionV3({
  className,
  ...props
}: React.ComponentProps<"section">) {
  return (
    <section className={cn("hs3-section", className)} {...props}>
      <div className="hs3-root min-h-screen">
        {/* Content */}
        <div className="hs3-content">
          {/* Announcement Bar */}
          <Link href="#" className="hs3-announce">
            <span className="hs3-announce-badge">New</span>
            <span className="hs3-announce-text">
              Ipsum viverra at porttitor interdum
            </span>
            <ChevronRight className="hs3-announce-icon" />
          </Link>

          {/* Heading */}
          <h1 className="hs3-heading">
            Lorem ipsum dolor
            <br />
            sit amet consectetur
          </h1>

          {/* Description */}
          <p className="hs3-description">
            Vestibulum ante ipsum primis in faucibus orci luctus
            <br className="hs3-br-desktop" />
            et ultrices posuere cubilia curae sed aliquam.
          </p>

          {/* CTA */}
          <Button className="hs3-cta" size="lg">
            Get started
          </Button>
        </div>
      </div>
    </section>
  )
}
