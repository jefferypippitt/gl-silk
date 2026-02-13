import "./feature-section-v3.css"
import { cn } from "@/lib/utils"

/* ─── Feature Data ───────────────────────────── */

const features = [
    {
        index: "01",
        title: "Lorem ipsum dolor sit amet",
        body: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        index: "02",
        title: "Ut enim ad minim veniam",
        body: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure.",
    },
    {
        index: "03",
        title: "Excepteur sint occaecat cupidatat",
        body: "Non proident sunt in culpa qui officia deserunt mollit anim id est laborum sed ut perspiciatis.",
    },
    {
        index: "04",
        title: "Nemo enim ipsam voluptatem",
        body: "Quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores eos qui ratione.",
    },
]

/* ─── Feature Row ───────────────────────────── */

function FeatureRow({
    index,
    title,
    body,
}: {
    index: string
    title: string
    body: string
}) {
    return (
        <li className="fsv3-row">
            <span className="fsv3-row-index" aria-hidden="true">
                {index}
            </span>
            <div className="fsv3-row-content">
                <h3 className="fsv3-row-title">{title}</h3>
                <p className="fsv3-row-body">{body}</p>
            </div>
        </li>
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
                <header className="fsv3-header">
                    <p className="fsv3-kicker">Consectetur adipiscing</p>
                    <h2 className="fsv3-heading">Lorem ipsum dolor sit amet</h2>
                    <p className="fsv3-subtitle">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium.
                    </p>
                </header>

                <ol className="fsv3-list">
                    {features.map((feature) => (
                        <FeatureRow
                            key={feature.title}
                            index={feature.index}
                            title={feature.title}
                            body={feature.body}
                        />
                    ))}
                </ol>
            </div>
        </section>
    )
}
