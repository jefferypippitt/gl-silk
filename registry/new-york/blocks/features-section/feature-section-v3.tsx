import "./feature-section-v3.css"
import { cn } from "@/lib/utils"
import { Circle } from "lucide-react"

/* ─── Feature Data ───────────────────────────── */

const features = [
    {
        icon: Circle,
        title: "Lorem ipsum dolor",
        lead: "Sed do eiusmod tempor incididunt.",
        body: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
    },
    {
        icon: Circle,
        title: "Consectetur adipiscing",
        lead: "Duis aute irure dolor in reprehenderit.",
        body: "Voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.",
    },
    {
        icon: Circle,
        title: "Excepteur sint occaecat",
        lead: "Sunt in culpa qui officia deserunt.",
        body: "Mollit anim id est laborum sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
    },
]

/* ─── Feature Card ───────────────────────────── */

function FeatureCard({
    icon: Icon,
    title,
    lead,
    body,
}: {
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
    title: string
    lead: string
    body: string
}) {
    return (
        <article className="fsv3-card">
            <div className="fsv3-icon-wrapper">
                <Icon className="fsv3-icon" aria-hidden="true" />
            </div>
            <h3 className="fsv3-card-title">{title}</h3>
            <p className="fsv3-card-desc">
                <strong className="fsv3-card-lead">{lead}</strong>{" "}
                <span className="fsv3-card-body">{body}</span>
            </p>
        </article>
    )
}

/* ─── Main Component ─────────────────────────── */

export function FeatureSectionV3({
    className,
    ...props
}: React.ComponentProps<"section">) {
    return (
        <section
            className={cn("fsv3-section", className)}
            {...props}
        >
            <div className="fsv3-inner">
                {/* Header */}
                <div className="fsv3-header">
                    <h2 className="fsv3-heading">
                        Lorem ipsum dolor sit amet
                    </h2>
                    <p className="fsv3-subtitle">
                        Consectetur adipiscing elit. Sed do eiusmod tempor
                        incididunt ut labore.
                    </p>
                </div>

                {/* Feature Cards */}
                <div className="fsv3-grid">
                    {features.map((feature) => (
                        <FeatureCard
                            key={feature.title}
                            icon={feature.icon}
                            title={feature.title}
                            lead={feature.lead}
                            body={feature.body}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
