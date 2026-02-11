"use client"

import { useState } from "react"
import "./hero-section-v2.css"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const tabs = [
    "Lorem Ipsum",
    "Dolor Sit",
    "Amet Consec",
    "Adipiscing",
    "Elit Sed",
]

const PLACEHOLDER_IMAGE =
    "https://images.unsplash.com/photo-1604076850742-4c7221f3101b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

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
            <div className="hs2-img-overlay" aria-hidden="true" />
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

/* Tab 1 — Image left, text right (reversed) */
function PanelDashboard() {
    return (
        <div className="hs2-panel hs2-panel-split hs2-panel-reverse">
            <PanelImage className="hs2-panel-image" alt="Dolor sit" />
            <div className="hs2-panel-col" style={{ gap: "0.625rem", justifyContent: "center" }}>
                <span className="hs2-panel-badge">Dolor</span>
                <h3 className="hs2-panel-heading">Dolor sit amet consectetur</h3>
                <p className="hs2-panel-text">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
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

/* Tab 3 — Image left, large heading + text right */
function PanelContent() {
    return (
        <div className="hs2-panel hs2-panel-split hs2-panel-reverse">
            <PanelImage className="hs2-panel-image" alt="Adipiscing" />
            <div className="hs2-panel-col" style={{ gap: "0.5rem", justifyContent: "center" }}>
                <span className="hs2-panel-badge">Adipiscing</span>
                <h3 className="hs2-panel-heading hs2-panel-heading-lg">Consectetur adipiscing elit</h3>
                <p className="hs2-panel-text">
                    Quis nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat duis aute irure dolor.
                </p>
            </div>
        </div>
    )
}

/* Tab 4 — Two stacked images left, text right */
function PanelGallery() {
    return (
        <div className="hs2-panel hs2-panel-split">
            <div className="hs2-panel-duo">
                <PanelImage className="hs2-panel-duo-img" alt="Elit sed 1" />
                <PanelImage className="hs2-panel-duo-img" alt="Elit sed 2" />
            </div>
            <div className="hs2-panel-col" style={{ gap: "0.625rem", justifyContent: "center" }}>
                <span className="hs2-panel-badge">Elit</span>
                <h3 className="hs2-panel-heading">Elit sed do eiusmod tempor</h3>
                <p className="hs2-panel-text">
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa
                    qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        </div>
    )
}

const panels = [PanelHero, PanelDashboard, PanelMedia, PanelContent, PanelGallery]

export function HeroSectionV2({
    className,
    ...props
}: React.ComponentProps<"div">) {
    const [activeTab, setActiveTab] = useState(0)

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
                    <div className="hs2-tabs">
                        {tabs.map((tab, i) => (
                            <button
                                key={tab}
                                className={cn(
                                    "hs2-tab",
                                    activeTab === i && "hs2-tab-active"
                                )}
                                onClick={() => setActiveTab(i)}
                            >
                                {tab}
                            </button>
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
