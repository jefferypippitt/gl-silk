import { Button } from "./button";
import "./hero-section-v2.css";

export default function HeroSectionV2() {
  return (
    <section className="py-16 md:py-20 lg:py-24">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-8">
          <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
            <h1 className="text-3xl tracking-tight sm:text-4xl lg:text-5xl">
              Lorem ipsum dolor sit amet
            </h1>
            <p className="mt-4 text-muted-foreground sm:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row justify-center lg:justify-start">
              <Button variant="default" size="sm">
                Start Now
              </Button>
              <Button variant="ghost" size="sm">
                Learn More
              </Button>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="rounded-xl border border-border bg-card overflow-hidden shadow-lg">
              <div className="hs2-image-light w-full aspect-[4/3] bg-cover" role="img" aria-label="Product preview" />
              <div className="hs2-image-dark w-full aspect-[4/3] bg-cover" role="img" aria-label="Product preview" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
