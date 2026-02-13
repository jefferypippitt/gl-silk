import "./feature-section-v5.css"
import { cn } from "@/lib/utils"
import { Circle } from "lucide-react"

const features = [
  {
    title: "Lorem ipsum dolor",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non velit vitae orci aliquet.",
  },
  {
    title: "Sit amet congue",
    body: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam.",
  },
  {
    title: "Adipiscing elit nunc",
    body: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "Vitae orci posuere",
    body: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore fugiat nulla.",
  },
  {
    title: "Nibh facilisis metus",
    body: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.",
  },
  {
    title: "Ultricies sem donec",
    body: "Curabitur gravida arcu ac tortor dignissim convallis aenean et tortor at risus viverra.",
  },
]

function FeatureCard({
  title,
  body,
}: {
  title: string
  body: string
}) {
  return (
    <article className="fsv5-card">
      <Circle className="fsv5-icon size-4" aria-hidden="true" />
      <h3 className="fsv5-card-title">{title}</h3>
      <p className="fsv5-card-body">{body}</p>
    </article>
  )
}

export function FeatureSectionV5({
  className,
  ...props
}: React.ComponentProps<"section">) {
  return (
    <section className={cn("fsv5-section", className)} {...props}>
      <div className="fsv5-inner">
        <header className="fsv5-header">
          <h2 className="fsv5-heading">Why teams choose Lorem ipsum?</h2>
          <p className="fsv5-subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </header>

        <div className="fsv5-grid">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              body={feature.body}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
