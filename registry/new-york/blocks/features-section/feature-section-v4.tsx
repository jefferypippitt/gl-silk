import "./feature-section-v4.css"
import { cn } from "@/lib/utils"
import { Circle } from "lucide-react"

/* ─── Feature Data ───────────────────────────── */

const features = [
    {
        icon: Circle,
        title: "Lorem ipsum dolor sit",
        body: "Consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.",
    },
    {
        icon: Circle,
        title: "Ut enim ad minim",
        body: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
    },
    {
        icon: Circle,
        title: "Excepteur sint occaecat",
        body: "Non proident sunt in culpa qui officia deserunt mollit anim id est.",
    },
    {
        icon: Circle,
        title: "Nemo enim ipsam",
        body: "Quia voluptas sit aspernatur aut odit aut fugit sed consequuntur magni.",
    },
    {
        icon: Circle,
        title: "Duis aute irure dolor",
        body: "Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
        icon: Circle,
        title: "Sed quia consequuntur",
        body: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet consectetur.",
    },
]

/* ─── Feature Card ──────────────────────────── */

function FeatureCard({
    icon: Icon,
    title,
    body,
}: {
    icon: React.ComponentType<{ className?: string }>
    title: string
    body: string
}) {
    return (
        <div className="fsv4-card">
            <span className="fsv4-corners" aria-hidden="true" />
            <div className="fsv4-icon-wrap">
                <Icon className="fsv4-icon" />
            </div>
            <h3 className="fsv4-card-title">{title}</h3>
            <p className="fsv4-card-body">{body}</p>
        </div>
    )
}

/* ─── Main Component ─────────────────────────── */

export function FeatureSectionV4({
    className,
    ...props
}: React.ComponentProps<"section">) {
    return (
        <section
            className={cn("fsv4-section", className)}
            {...props}
        >
            <div className="fsv4-inner">
                <header className="fsv4-header">
                    <h2 className="fsv4-heading">Lorem ipsum dolor sit amet</h2>
                    <p className="fsv4-subtitle">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium.
                    </p>
                </header>

                <div className="fsv4-grid">
                    {features.map((feature) => (
                        <FeatureCard
                            key={feature.title}
                            icon={feature.icon}
                            title={feature.title}
                            body={feature.body}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
