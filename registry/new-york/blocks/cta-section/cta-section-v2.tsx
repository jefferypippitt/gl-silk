"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import "./cta-section-v2.css"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { NeuroNoise } from "@paper-design/shaders-react"

/* ─── Theme-aware shader colors ─────────────── */

const shaderPalette = {
    light: {
        colorFront: "#d4c8b8",
        colorMid: "#a89888",
        colorBack: "#f0ebe5",
    },
    dark: {
        colorFront: "#4a4035",
        colorMid: "#2e2822",
        colorBack: "#1a1816",
    },
}

export function CtaSectionV2({
    className,
    ...props
}: React.ComponentProps<"section">) {
    const { resolvedTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const isDark = mounted && resolvedTheme === "dark"
    const palette = isDark ? shaderPalette.dark : shaderPalette.light

    return (
        <section
            className={cn("cta2-section", className)}
            {...props}
        >
            <div className="cta2-container">
                <div className="cta2-card">
                    {/* Shader Background */}
                    <div className="cta2-shader-container">
                        {mounted && (
                            <NeuroNoise
                                colorFront={palette.colorFront}
                                colorMid={palette.colorMid}
                                colorBack={palette.colorBack}
                                speed={0.18}
                                brightness={0.15}
                                contrast={0.35}
                                scale={1.2}
                                className="cta2-shader"
                            />
                        )}
                    </div>

                    {/* Content */}
                    <div className="cta2-content">
                        <p className="cta2-eyebrow">Praesent Commodo</p>
                        <div className="cta2-text-group">
                            <h2 className="cta2-headline">
                                Vestibulum ante <span>ipsum primis</span>
                            </h2>
                            <p className="cta2-description">
                                Nullam quis risus eget urna mollis ornare vel eu leo.
                                Cras justo odio, dapibus ut facilisis.
                            </p>
                        </div>

                        <div className="cta2-actions">
                            <Button
                                variant="default"
                                size="sm"
                                className="cta2-btn-primary"
                            >
                                Try It Now
                            </Button>
                            <Button
                                variant="ghost"
                                size="sm"
                                className="cta2-btn-secondary"
                            >
                                Learn More
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
