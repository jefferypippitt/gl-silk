import "./feature-section-v1.css"
import { cn } from "@/lib/utils"

const PLACEHOLDER_IMAGE =
    "https://glsilk.vercel.app/images/shadcn1.webp"

/* ─── Card Graphic ──────────────────────────── */

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
}: {
    index: string
    graphic: React.ReactNode
    title: string
    description: string
}) {
    return (
        <article className="fsv1-card">
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
    return (
        <section
            className={cn("fsv1-section", className)}
            {...props}
        >
            <div className="fsv1-inner">
                {/* Intro paragraph */}
                <p className="fsv1-intro">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                {/* 2×2 Feature cards */}
                <div className="fsv1-cards">
                    <FeatureCard
                        index="01"
                        graphic={<CardGraphic src={PLACEHOLDER_IMAGE} alt="Lorem ipsum" />}
                        title="Lorem ipsum dolor."
                        description="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
                    />
                    <FeatureCard
                        index="02"
                        graphic={<CardGraphic src={PLACEHOLDER_IMAGE} alt="Lorem ipsum" />}
                        title="Consectetur elit."
                        description="Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute."
                    />
                    <FeatureCard
                        index="03"
                        graphic={<CardGraphic src={PLACEHOLDER_IMAGE} alt="Lorem ipsum" />}
                        title="Sed do eiusmod."
                        description="Irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                    />
                    <FeatureCard
                        index="04"
                        graphic={<CardGraphic src={PLACEHOLDER_IMAGE} alt="Lorem ipsum" />}
                        title="Tempor incididunt."
                        description="Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit."
                    />
                </div>
            </div>
        </section>
    )
}
