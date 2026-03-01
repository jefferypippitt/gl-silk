import "./feature-section-v2.css";
import FeatureCard from "./feature-section-v2-card";

const features = [
    {
        title: "Lorem Ipsum",
        description:
            "Dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        visual: "bolt",
    },
    {
        title: "Consectetur Elit",
        description:
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
        visual: "lock",
    },
    {
        title: "Sed Do Eiusmod",
        description:
            "Consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
        visual: "radial",
    },
    {
        title: "Tempor Incididunt",
        description:
            "Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim.",
        visual: "globe",
    },
    {
        title: "Ut Labore",
        description:
            "Et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris.",
        visual: "server",
    },
];

export default function FeatureSectionV2() {
  return (
    <section className="py-16 md:py-20 lg:py-24">
      <div className="container mx-auto max-w-6xl px-4">
        <header className="mb-14 mx-auto max-w-3xl text-center sm:mb-16">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Lorem ipsum dolor
          </h2>
          <p className="mt-4 text-muted-foreground">
            Sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam quis nostrud.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              visual={feature.visual}
              wide={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
