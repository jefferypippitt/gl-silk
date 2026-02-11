"use client"

import { useState, useEffect, useRef } from "react"
import "./feature-section-v1.css"
import { cn } from "@/lib/utils"

/* ─── Scroll-triggered visibility ────────────── */

function useInView(threshold = 0.1) {
    const ref = useRef<HTMLDivElement>(null)
    const [inView, setInView] = useState(false)

    useEffect(() => {
        const el = ref.current
        if (!el) return
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true)
                    observer.disconnect()
                }
            },
            { threshold }
        )
        observer.observe(el)
        return () => observer.disconnect()
    }, [threshold])

    return { ref, inView }
}

/* ─── Card Graphic (Unsplash images) ─────────── */

function CardGraphic({ src, alt }: { src: string; alt?: string }) {
    return (
        <div className="fsv1-graphic-wrapper">
            <div className="fsv1-graphic-overlay" aria-hidden="true" />
            <img
                src={src}
                alt={alt ?? ""}
                className="fsv1-graphic"
                aria-hidden="true"
            />
        </div>
    )
}

/* ─── Feature Card ───────────────────────────── */

function FeatureCard({
    index,
    graphic,
    title,
    description,
    delay,
    visible,
}: {
    index: string
    graphic: React.ReactNode
    title: string
    description: string
    delay: number
    visible: boolean
}) {
    return (
        <article
            className={cn("fsv1-card", visible && "fsv1-visible")}
            style={{ "--delay": `${delay}s` } as React.CSSProperties}
        >
            {/* Graphic with L-bracket corners */}
            <div className="fsv1-card-graphic">
                {graphic}
                <span className="fsv1-bracket fsv1-bracket--tl" aria-hidden="true" />
                <span className="fsv1-bracket fsv1-bracket--tr" aria-hidden="true" />
                <span className="fsv1-bracket fsv1-bracket--bl" aria-hidden="true" />
                <span className="fsv1-bracket fsv1-bracket--br" aria-hidden="true" />
            </div>

            {/* Footer content: badge left, title+desc right */}
            <div className="fsv1-card-content">
                <span className="fsv1-card-index">{index}</span>
                <div className="fsv1-card-text">
                    <h3 className="fsv1-card-title">{title}</h3>
                    <p className="fsv1-card-desc">{description}</p>
                </div>
            </div>
        </article>
    )
}

/* ─── Main Component ─────────────────────────── */

export function FeatureSectionV1({
    className,
    ...props
}: React.ComponentProps<"section">) {
    const { ref, inView } = useInView(0.05)

    return (
        <section
            ref={ref}
            className={cn("fsv1-section", className)}
            {...props}
        >
            <div className="fsv1-inner">
                {/* Intro paragraph */}
                <p className={cn("fsv1-intro", inView && "fsv1-visible")}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                {/* 2×2 Feature cards */}
                <div className="fsv1-cards">
                    <FeatureCard
                        index="01"
                        graphic={<CardGraphic src="https://images.unsplash.com/photo-1604076850742-4c7221f3101b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Lorem ipsum" />}
                        title="Lorem ipsum dolor."
                        description="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
                        delay={0.08}
                        visible={inView}
                    />
                    <FeatureCard
                        index="02"
                        graphic={<CardGraphic src="https://images.unsplash.com/photo-1604076850742-4c7221f3101b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Lorem ipsum" />}
                        title="Consectetur elit."
                        description="Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute."
                        delay={0.16}
                        visible={inView}
                    />
                    <FeatureCard
                        index="03"
                        graphic={<CardGraphic src="https://images.unsplash.com/photo-1604076850742-4c7221f3101b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Lorem ipsum" />}
                        title="Sed do eiusmod."
                        description="Irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                        delay={0.24}
                        visible={inView}
                    />
                    <FeatureCard
                        index="04"
                        graphic={<CardGraphic src="https://images.unsplash.com/photo-1604076850742-4c7221f3101b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Lorem ipsum" />}
                        title="Tempor incididunt."
                        description="Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit."
                        delay={0.32}
                        visible={inView}
                    />
                </div>
            </div>
        </section>
    )
}
