import "./hero-section-v2.css"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { FeaturePanel } from "./hero-section-v2/feature-panel"

export function HeroSectionV2({
    className,
    ...props
}: React.ComponentProps<"div">) {
    return (
        <div className={cn("hs2-root", className)} {...props}>
            <div className="hs2-inner">
                <div className="hs2-hero-top">
                    <div className="hs2-hero-text">
                        <h1 className="hs2-headline">
                            Lorem ipsum dolor sit amet
                        </h1>
                        <p className="hs2-description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                        </p>
                    </div>
                    <div className="hs2-actions">
                        <Button size="lg" className="rounded-full">
                            Sign up
                        </Button>
                        <Button variant="outline" size="lg" className="rounded-full">
                            Contact sales
                        </Button>
                    </div>
                </div>

                <FeaturePanel />
            </div>
        </div>
    )
}
