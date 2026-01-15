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
                        <span>New intelligent workflows</span>
                    </Badge>

                    {/* Main Heading */}
                    <div className="space-y-4">
                        <h1 className="text-5xl scroll-m-20 text-center font-semibold tracking-tight text-foreground">
                            Your intelligent companion awaits
                        </h1>
                        <h2 className="text-5xl scroll-m-20 text-center font-semibold tracking-tight text-foreground">
                            Transform how you work
                        </h2>
                    </div>

                    {/* Description */}
                    <p className="max-w-2xl text-muted-foreground text-lg">
                        An intelligent companion that automates routine processes and simplifies complex tasks, empowering you to dedicate time to your most important work
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