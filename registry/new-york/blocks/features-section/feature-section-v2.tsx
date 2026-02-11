"use client"

import "./feature-section-v2.css"
import { cn } from "@/lib/utils"

export function FeatureSectionV2({
    className,
    ...props
}: React.ComponentProps<"div">) {
    const features = [
        {
            title: "Lorem Ipsum",
            description:
                "Dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            visual: "bolt",
            span: true,
        },
        {
            title: "Consectetur Elit",
            description:
                "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
            visual: "lock",
            span: false,
        },
        {
            title: "Sed Do Eiusmod",
            description:
                "Consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
            visual: "radial",
            span: false,
        },
        {
            title: "Tempor Incididunt",
            description:
                "Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim.",
            visual: "globe",
            span: false,
        },
        {
            title: "Ut Labore",
            description:
                "Et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris.",
            visual: "noconfig",
            span: false,
        },
    ]

    return (
        <div
            className={cn(
                "w-full fsv2-container relative overflow-hidden",
                className
            )}
            {...props}
        >
            <div className="relative z-10 flex w-full flex-col items-center px-6 py-20 sm:py-28">
                <div className="w-full max-w-5xl">
                    <header
                        className="fsv2-header fsv2-animate mb-14 sm:mb-16"
                        style={{ animationDelay: "0s" }}
                    >
                        <h2 className="fsv2-heading text-foreground">
                            Lorem ipsum dolor
                        </h2>
                        <p className="fsv2-description text-muted-foreground">
                            Sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. Ut enim ad minim veniam quis nostrud.
                        </p>
                    </header>

                    <div className="fsv2-bento">
                        {features.map((feature, index) => (
                            <article
                                key={feature.title}
                                className={cn(
                                    "fsv2-card fsv2-animate",
                                    feature.span && "fsv2-card-wide"
                                )}
                                style={{
                                    animationDelay: `${0.1 + index * 0.07}s`,
                                }}
                            >
                                <div
                                    className={cn(
                                        "fsv2-visual",
                                        `fsv2-visual-${feature.visual}`
                                    )}
                                    aria-hidden="true"
                                >
                                    {/* Blazing Fast — Lightning Bolt */}
                                    {feature.visual === "bolt" && (
                                        <>
                                            <span className="fsv2-bolt-glow" />
                                            <span className="fsv2-bolt" />
                                        </>
                                    )}
                                    {/* Vault Security — Lock Rings */}
                                    {feature.visual === "lock" && (
                                        <>
                                            <span className="fsv2-lock fsv2-lock-1" />
                                            <span className="fsv2-lock fsv2-lock-2" />
                                            <span className="fsv2-lock fsv2-lock-3" />
                                            <span className="fsv2-lock-center" />
                                        </>
                                    )}
                                    {/* Live Analytics — Radial Chart */}
                                    {feature.visual === "radial" && (
                                        <>
                                            <span className="fsv2-radial" />
                                            <span className="fsv2-radial-hole" />
                                            <span className="fsv2-radial-dot" />
                                        </>
                                    )}
                                    {/* Global Edge — Wireframe Globe */}
                                    {feature.visual === "globe" && (
                                        <>
                                            <span className="fsv2-globe fsv2-globe-outer" />
                                            <span className="fsv2-globe fsv2-globe-m1" />
                                            <span className="fsv2-globe fsv2-globe-m2" />
                                            <span className="fsv2-globe-eq" />
                                            <span className="fsv2-globe-dot" />
                                        </>
                                    )}
                                    {/* Zero Config — Circle with Slash */}
                                    {feature.visual === "noconfig" && (
                                        <>
                                            <span className="fsv2-noconfig-circle" />
                                            <span className="fsv2-noconfig-slash" />
                                        </>
                                    )}
                                </div>
                                <div className="fsv2-card-text">
                                    <h3 className="fsv2-card-title text-foreground">
                                        {feature.title}
                                    </h3>
                                    <p className="fsv2-card-desc text-muted-foreground">
                                        {feature.description}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
