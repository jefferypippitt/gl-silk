import "./cta-section-v1.css"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

/* ─── Main Component ─────────────────────────── */

export function CtaSectionV1({
    className,
    ...props
}: React.ComponentProps<"section">) {
    return (
        <section
            className={cn("cta1-section", className)}
            {...props}
        >
            {/* Noise grain overlay */}
            <div className="cta1-grain" aria-hidden="true" />

            <div className="cta1-inner">
                {/* Radial glow — centered on content */}
                <div className="cta1-glow" aria-hidden="true" />
                {/* Headline */}
                <h2 className="cta1-headline">
                    Lorem ipsum dolor sit amet,
                    <br />
                    <em>consectetur adipiscing</em>
                </h2>

                {/* Description */}
                <p className="cta1-description">
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat.
                </p>

                {/* CTA Buttons */}
                <div className="cta1-actions">
                    <Button
                        variant="default"
                        className="cta1-btn-primary"
                    >
                        Get Started
                    </Button>
                    <Button
                        variant="outline"
                        className="cta1-btn-secondary"
                    >
                        Learn More
                    </Button>
                </div>
            </div>
        </section>
    )
}
