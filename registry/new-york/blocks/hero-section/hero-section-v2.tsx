"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import "./hero-section-v2.css"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    motion,
    useReducedMotion,
    useMotionValue,
    useTransform,
    animate,
} from "motion/react"

const tabs = [
    "Lorem Ipsum",
    "Dolor Sit",
    "Amet Consec",
    "Adipiscing",
    "Elit Sed",
]

const PLACEHOLDER_IMAGE =
    "https://cdn.cosmos.so/9756655e-96d3-4aea-9844-521793e68b66?format=jpeg"

function PanelImage({
    src = PLACEHOLDER_IMAGE,
    alt,
    className,
}: {
    src?: string
    alt?: string
    className?: string
}) {
    return (
        <div className={cn("hs2-img-wrap", className)}>
            <img
                src={src}
                alt={alt ?? "Placeholder"}
                className="hs2-img"
            />
        </div>
    )
}

/* Tab 0 — Text left, image right */
function PanelHero() {
    return (
        <div className="hs2-panel hs2-panel-split">
            <div className="hs2-panel-col" style={{ gap: "0.625rem", justifyContent: "center" }}>
                <span className="hs2-panel-badge">Lorem</span>
                <h3 className="hs2-panel-heading">Lorem ipsum dolor sit amet</h3>
                <p className="hs2-panel-text">
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation.
                </p>
            </div>
            <PanelImage className="hs2-panel-image" alt="Lorem ipsum" />
        </div>
    )
}

/* Tab 1 — Content left, image right */
function PanelDashboard() {
    return (
        <div className="hs2-panel hs2-panel-split">
            <div className="hs2-panel-col" style={{ gap: "0.625rem", justifyContent: "center" }}>
                <span className="hs2-panel-badge">Dolor</span>
                <h3 className="hs2-panel-heading">Dolor sit amet consectetur</h3>
                <p className="hs2-panel-text">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
            <PanelImage className="hs2-panel-image" alt="Dolor sit" />
        </div>
    )
}

/* Tab 2 — Text with bullet list left, image right */
function PanelMedia() {
    return (
        <div className="hs2-panel hs2-panel-split">
            <div className="hs2-panel-col" style={{ gap: "0.625rem", justifyContent: "center" }}>
                <span className="hs2-panel-badge">Amet</span>
                <h3 className="hs2-panel-heading">Amet consectetur adipiscing</h3>
                <ul className="hs2-panel-list">
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Consectetur adipiscing elit sed</li>
                    <li>Eiusmod tempor incididunt labore</li>
                </ul>
            </div>
            <PanelImage className="hs2-panel-image" alt="Amet consec" />
        </div>
    )
}

/* Tab 3 — Content left (large heading), image right */
function PanelContent() {
    return (
        <div className="hs2-panel hs2-panel-split">
            <div className="hs2-panel-col" style={{ gap: "0.5rem", justifyContent: "center" }}>
                <span className="hs2-panel-badge">Adipiscing</span>
                <h3 className="hs2-panel-heading hs2-panel-heading-lg">Consectetur adipiscing elit</h3>
                <p className="hs2-panel-text">
                    Quis nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat duis aute irure dolor.
                </p>
            </div>
            <PanelImage className="hs2-panel-image" alt="Adipiscing" />
        </div>
    )
}

/* Tab 4 — Content left, image right */
function PanelGallery() {
    return (
        <div className="hs2-panel hs2-panel-split">
            <div className="hs2-panel-col" style={{ gap: "0.625rem", justifyContent: "center" }}>
                <span className="hs2-panel-badge">Elit</span>
                <h3 className="hs2-panel-heading">Elit sed do eiusmod tempor</h3>
                <p className="hs2-panel-text">
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa
                    qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
            <PanelImage className="hs2-panel-image" alt="Elit sed" />
        </div>
    )
}

const panels = [PanelHero, PanelDashboard, PanelMedia, PanelContent, PanelGallery]

export function HeroSectionV2({
    className,
    ...props
}: React.ComponentProps<"div">) {
    const [activeTab, setActiveTab] = useState(0)
    const reduceMotion = useReducedMotion()

    /* ── Gooey pill refs & state ─────────────────────────── */
    const prevTabRef = useRef(0)
    const tabRefs = useRef<(HTMLButtonElement | null)[]>([])
    const containerRef = useRef<HTMLDivElement>(null)
    const [measured, setMeasured] = useState(false)
    const leftAnim = useRef<ReturnType<typeof animate> | null>(null)
    const rightAnim = useRef<ReturnType<typeof animate> | null>(null)

    /* Motion values for left / right edges of the pill */
    const pillLeft = useMotionValue(0)
    const pillRight = useMotionValue(0)
    const pillWidth = useTransform(() => pillRight.get() - pillLeft.get())

    /* Measure tab positions (offsetLeft is relative to positioned parent) */
    const measure = useCallback(
        () =>
            tabRefs.current.map((el) =>
                el
                    ? { left: el.offsetLeft, width: el.offsetWidth }
                    : { left: 0, width: 0 }
            ),
        []
    )

    /* Initial position — jump with no animation */
    useEffect(() => {
        const dims = measure()
        const t = dims[activeTab]
        if (!t) return
        pillLeft.jump(t.left)
        pillRight.jump(t.left + t.width)
        setMeasured(true)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    /* Animate pill when active tab changes */
    useEffect(() => {
        if (!measured) return
        const dims = measure()
        const t = dims[activeTab]
        if (!t) return

        const tl = t.left
        const tr = t.left + t.width
        const dir = activeTab >= prevTabRef.current ? 1 : -1

        /* Cancel any in-flight animations */
        leftAnim.current?.stop()
        rightAnim.current?.stop()

        if (reduceMotion) {
            pillLeft.jump(tl)
            pillRight.jump(tr)
        } else {
            /*
             * Gooey / elastic stretch:
             *  - The LEADING edge (direction of travel) uses a fast spring
             *    → it arrives at the destination first.
             *  - The TRAILING edge uses a slow, heavier spring
             *    → it drags behind, stretching the pill across every
             *      intermediate tab before snapping shut.
             */
            const lead = {
                type: "spring" as const,
                stiffness: 450,
                damping: 34,
                mass: 0.8,
            }
            const trail = {
                type: "spring" as const,
                stiffness: 240,
                damping: 28,
                mass: 1.1,
            }

            leftAnim.current = animate(
                pillLeft,
                tl,
                dir > 0 ? trail : lead
            )
            rightAnim.current = animate(
                pillRight,
                tr,
                dir > 0 ? lead : trail
            )
        }

        prevTabRef.current = activeTab
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeTab])

    /* Re-measure on window resize — jump to avoid stale position */
    useEffect(() => {
        const sync = () => {
            const dims = measure()
            const t = dims[activeTab]
            if (!t) return
            pillLeft.jump(t.left)
            pillRight.jump(t.left + t.width)
        }
        window.addEventListener("resize", sync)
        return () => window.removeEventListener("resize", sync)
    }, [activeTab, measure, pillLeft, pillRight])

    const ActivePanel = panels[activeTab]

    return (
        <div className={cn("hs2-root", className)} {...props}>
            <div className="hs2-inner">
                {/* Hero Top — text row (title + description), then buttons */}
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
                        <Button
                            variant="default"
                            className="rounded-full hs2-btn-primary"
                        >
                            Sign up
                        </Button>
                        <Button
                            variant="outline"
                            className="rounded-full hs2-btn-secondary"
                        >
                            Contact sales
                        </Button>
                    </div>
                </div>

                {/* Interactive Card */}
                <div className="hs2-card">
                    {/* Tab Navigation */}
                    <div className="hs2-tabs" ref={containerRef}>
                        {/* Gooey sliding pill — single element, position driven by springs */}
                        {measured && (
                            <motion.span
                                className="hs2-tab-pill"
                                style={{ left: pillLeft, width: pillWidth }}
                                aria-hidden="true"
                            />
                        )}

                        {tabs.map((tab, i) => (
                            <motion.button
                                key={tab}
                                type="button"
                                ref={(el) => {
                                    tabRefs.current[i] = el
                                }}
                                className={cn(
                                    "hs2-tab",
                                    activeTab === i && "hs2-tab-active"
                                )}
                                onClick={() => setActiveTab(i)}
                                whileTap={reduceMotion ? undefined : { scale: 0.97 }}
                                transition={{ type: "spring", stiffness: 520, damping: 34, mass: 0.7 }}
                                aria-pressed={activeTab === i}
                            >
                                <span className="hs2-tab-label">{tab}</span>
                                {!reduceMotion && activeTab === i && (
                                    <motion.span
                                        className="hs2-tab-pulse"
                                        initial={{ scale: 0.55, opacity: 0.42 }}
                                        animate={{ scale: 1.25, opacity: 0 }}
                                        transition={{ duration: 0.42, ease: [0.2, 0, 0, 1] }}
                                    />
                                )}
                            </motion.button>
                        ))}
                    </div>

                    {/* Card Content — image panels per tab */}
                    <div className="hs2-card-content">
                        <ActivePanel />
                    </div>
                </div>
            </div>
        </div>
    )
}
