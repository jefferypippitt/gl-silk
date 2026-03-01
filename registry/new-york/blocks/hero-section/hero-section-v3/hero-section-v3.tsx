import { Button } from "./button";
import HeroSectionV3Features from "./hero-section-v3-features";

export default function HeroSectionV3() {
  return (
    <section className="py-16 md:py-20 lg:py-24">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Lorem ipsum dolor sit amet
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="mt-8 flex justify-center">
          <Button>Explore Lorem Ipsum</Button>
        </div>

        <HeroSectionV3Features />
      </div>
    </section>
  );
}
