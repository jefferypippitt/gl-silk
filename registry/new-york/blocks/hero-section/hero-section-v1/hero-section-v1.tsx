import { Button } from "./button";
import "./hero-section-v1.css";

export default function HeroSectionV1() {
  return (
    <section className="py-16 md:py-20 lg:py-24">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Lorem ipsum dolor sit amet consectetur
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row justify-center">
          <Button variant="default" className="rounded-full">
            Get started
          </Button>
          <Button variant="outline" className="rounded-full">
            Learn more
          </Button>
        </div>
        <div className="mt-12 rounded-xl border border-border bg-card overflow-hidden shadow-lg">
          <div className="hs1-image-light w-full aspect-[16/9] bg-cover" role="img" aria-label="Product dashboard preview" />
          <div className="hs1-image-dark w-full aspect-[16/9] bg-cover" role="img" aria-label="Product dashboard preview" />
        </div>
      </div>
    </section>
  );
}
