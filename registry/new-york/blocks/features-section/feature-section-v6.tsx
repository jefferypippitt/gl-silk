import "./feature-section-v6.css"
import { cn } from "@/lib/utils"

const features = [
  {
    glyph: "01",
    font: "square" as const,
    title: "Lorem ipsum dolor",
    body: "Consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    glyph: "02",
    font: "grid" as const,
    title: "Sit amet congue",
    body: "Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
  },
  {
    glyph: "03",
    font: "circle" as const,
    title: "Adipiscing elit nunc",
    body: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    glyph: "04",
    font: "triangle" as const,
    title: "Vitae orci posuere",
    body: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore fugiat nulla.",
  },
  {
    glyph: "05",
    font: "line" as const,
    title: "Nibh facilisis metus",
    body: "Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit.",
  },
]

export function FeatureSectionV6({
  className,
  ...props
}: React.ComponentProps<"section">) {
  return (
    <section className={cn("fsv6-section", className)} {...props}>
      <div className="fsv6-inner">
        <div className="fsv6-header">
          <span className="fsv6-kicker">Features</span>
          <h2 className="fsv6-heading">Lorem ipsum dolor sit amet</h2>
          <p className="fsv6-subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore.
          </p>
        </div>

        <div className="fsv6-grid">
          {features.map((feature, i) => (
            <div key={feature.title} className={`fsv6-card fsv6-card-${i + 1}`}>
              <span
                className={`fsv6-card-glyph fsv6-font-${feature.font}`}
                aria-hidden="true"
              >
                {feature.glyph}
              </span>
              <div className="fsv6-card-text">
                <h3 className="fsv6-card-title">{feature.title}</h3>
                <p className="fsv6-card-body">{feature.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
