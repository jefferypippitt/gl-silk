import { ArrowRightIcon } from "lucide-react";
import { Button } from "./button";
import HeroSectionV5Features from "./hero-section-v5-features";
import "./hero-section-v5.css";

export default function HeroSectionV5() {
  return (
    <section className="py-16 md:py-20 lg:py-24">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mx-auto rounded-none border border-border bg-card overflow-hidden">
          <div className="p-6 md:p-8 lg:p-12">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-3xl font-serif font-normal tracking-tight sm:text-4xl lg:text-5xl">
                Lorem ipsum dolor sit amet
              </h1>
              <p className="mt-4 text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit vitae cursus morbi, dictum cursus aliquam.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row justify-center">
              <Button variant="default" size="sm" >
                Get Started <ArrowRightIcon className="w-4 h-4" />
              </Button>
            </div>
            <div className="mt-12 rounded-md border border-border bg-background overflow-hidden shadow-lg">
              <div className="hs5-image-light w-full aspect-[16/9] bg-cover" role="img" aria-label="Product dashboard preview" />
              <div className="hs5-image-dark w-full aspect-[16/9] bg-cover" role="img" aria-label="Product dashboard preview" />
            </div>
            <HeroSectionV5Features />
          </div>
        </div>
      </div>
    </section>
  );
}
