import "./hero-section-v1.css"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Layers } from "lucide-react"

export function HeroSectionV1({
    className,
    ...props
}: React.ComponentProps<"div">) {
    return (
        <div className={cn("min-h-screen w-full relative", className)} {...props}>
            {/* Radial Gradient Background from Top */}
            {/* 
                Blue version: var(--chart-2) 
                Use chart values from @app/globals.css to customize the gradient color
            */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    background: "radial-gradient(125% 125% at 50% 10%, var(--background) 40%, var(--hero-gradient-color) 100%)",
                }}
            />
            {/* Content */}
            <div className="relative z-10 flex min-h-screen w-full flex-col items-center justify-center p-6 md:p-10">
                <div className="flex w-full max-w-4xl flex-col items-center justify-center space-y-8 text-center">
                    {/* Badge */}
                    <Badge
                        variant="secondary"
                        className="rounded-full"
                    >
                        <Layers className="size-4" />
                        <span>Lorem ipsum dolor sit</span>
                    </Badge>

                    {/* Main Heading */}
                    <div className="space-y-4">
                        <h1 className="text-5xl scroll-m-20 text-center font-semibold tracking-tight text-foreground">
                            Lorem ipsum dolor sit amet
                        </h1>
                        <h2 className="text-5xl scroll-m-20 text-center font-semibold tracking-tight text-foreground">
                            Consectetur adipiscing elit
                        </h2>
                    </div>

                    {/* Description */}
                    <p className="max-w-2xl text-muted-foreground text-lg">
                        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col gap-4 sm:flex-row">
                        <Button
                            variant="default"
                            className="rounded-full"
                            size="lg"
                        >
                            Get Started
                        </Button>
                        <Button
                            variant="outline"
                            className="rounded-full"
                            size="lg"
                        >
                            Sign In
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}