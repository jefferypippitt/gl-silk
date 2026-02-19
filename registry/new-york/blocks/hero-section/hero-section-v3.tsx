import "./hero-section-v3.css"
import { cn } from "@/lib/utils"
import {
  Circle,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const features = [
  {
    icon: Circle,
    title: "Lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: Circle,
    title: "Ut enim ad minim",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    icon: Circle,
    title: "Duis aute irure",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    icon: Circle,
    title: "Excepteur sint occaecat",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    icon: Circle,
    title: "Sed ut perspiciatis",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
  },
  {
    icon: Circle,
    title: "Nemo enim ipsam",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.",
  },
]

export function HeroSectionV3({
  className,
  ...props
}: React.ComponentProps<"section">) {
  return (
    <section className={cn("hs3-section", className)} {...props}>
      <div className="hs3-root">
        <div className="hs3-header">
          <h1 className="hs3-heading">
            Lorem ipsum dolor sit amet
          </h1>
          <p className="hs3-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Button className="rounded-full" size="lg">
            Explore Lorem Ipsum
          </Button>
        </div>

        <div className="hs3-grid">
          {features.map((feature) => (
            <div key={feature.title} className="hs3-card">
              <div className="hs3-card-icon-wrap">
                <feature.icon className="hs3-card-icon" strokeWidth={1.5} />
              </div>
              <h3 className="hs3-card-title">{feature.title}</h3>
              <p className="hs3-card-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
