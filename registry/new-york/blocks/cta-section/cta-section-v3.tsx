import "./cta-section-v3.css"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

/* ─── Main Component ─────────────────────────── */

export function CtaSectionV3({
    className,
    ...props
}: React.ComponentProps<"section">) {
    return (
        <section
            className={cn("cta3-section", className)}
            {...props}
        >
            <div className="cta3-inner">
                {/* Headline */}
                <h2 className="cta3-headline">
                    Try Lorem now.
                </h2>

                {/* CTA Button */}
                <Button
                    variant="secondary"
                    className="cta3-btn"
                >
                    Download
                    <Download className="cta3-btn-icon" />
                </Button>
            </div>
        </section>
    )
}
